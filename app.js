// ==========================================================================
// BỘ ĐIỀU KHIỂN ỨNG DỤNG ÔN TẬP VI SINH Y HỌC SĐH 2026 - ĐHYD TP.HCM (YDS)
// Quản lý 7 Bài học (2 Chuyên đề Đề cương KHYS), Minh họa, Mô phỏng & 168 Câu KSA
// ==========================================================================

window.App = {
  lessons: [],
  currentLessonId: null,
  lessonQuizFilter: "ALL",
  progress: {}, // Lưu cục bộ trên trình duyệt từng thiết bị (localStorage, không đồng bộ)
  mockState: null,
  examTimerInterval: null,
  storageAvailable: true,

  init() {
    const rawLessons = [
      ...(window.LESSONS_PART1 || []),
      ...(window.LESSONS_PART2 || [])
    ];

    const extraMap = window.EXTRA_QUESTIONS || {};

    // Merge KSA metadata + 12 extra questions into each lesson -> 24 questions/lesson (168 total)
    this.lessons = rawLessons.map((l) => {
      const ex = extraMap[l.id];
      let mergedQuestions = l.questions;
      if (ex) {
        const taggedBase = l.questions.map((qObj, idx) => ({
          ...qObj,
          ...(ex.baseTags[idx] || { level: 2, ksa: "K", ksaLabel: "K2: Hiểu" })
        }));
        mergedQuestions = [...taggedBase, ...(ex.extra || [])];
      }

      // Deterministically permute options across A, B, C, D so correct answers are evenly distributed
      mergedQuestions.forEach((qObj, qIdx) => {
        if (qObj._permuted) return;
        const optsCopy = [...qObj.options];
        const targetPos = (l.id * 5 + qIdx * 3 + 1) % optsCopy.length;
        let ans = qObj.answer;
        if (targetPos !== ans) {
          const temp = optsCopy[targetPos];
          optsCopy[targetPos] = optsCopy[ans];
          optsCopy[ans] = temp;
          ans = targetPos;
        }
        qObj.options = optsCopy;
        qObj.answer = ans;
        qObj._permuted = true;
      });

      return { ...l, questions: mergedQuestions };
    });

    this.loadProgress();
    this.initTheme();
    this.renderSidebar();
    this.bindEvents();
    this.showOverview();
  },

  loadProgress() {
    try {
      const testKey = "__yds_micro_test__";
      localStorage.setItem(testKey, "1");
      localStorage.removeItem(testKey);
      this.storageAvailable = true;
      const saved = localStorage.getItem("yds_micro_2026_progress");
      if (saved) this.progress = JSON.parse(saved);
    } catch (e) {
      this.storageAvailable = false;
      this.progress = {};
      const note = document.getElementById("storageStatusNote");
      if (note) {
        note.textContent = "⚠️ Trình duyệt đang chặn lưu trữ tạm (Ẩn danh): tiến độ chỉ giữ trong phiên hiện tại";
      }
    }
  },

  saveProgress() {
    if (this.storageAvailable) {
      try {
        localStorage.setItem("yds_micro_2026_progress", JSON.stringify(this.progress));
      } catch (e) {}
    }
    this.updateOverallProgressUI();
    this.renderSidebar(document.getElementById("lessonSearchInput")?.value || "");
  },

  resetAllProgress() {
    if (!confirm("Bạn có chắc muốn xóa toàn bộ lịch sử làm bài trắc nghiệm của 7 bài để ôn tập lại từ đầu?")) return;
    this.progress = {};
    this.saveProgress();
    if (this.currentLessonId) {
      this.showLesson(this.currentLessonId);
    } else {
      this.showOverview();
    }
  },

  initTheme() {
    let savedTheme = "light";
    if (this.storageAvailable) {
      try {
        savedTheme = localStorage.getItem("yds_micro_theme") || "light";
      } catch (e) {}
    }
    document.documentElement.setAttribute("data-theme", savedTheme);
    this.updateThemeBtn(savedTheme);
  },

  toggleTheme() {
    const cur = document.documentElement.getAttribute("data-theme") || "light";
    const next = cur === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    if (this.storageAvailable) {
      try {
        localStorage.setItem("yds_micro_theme", next);
      } catch (e) {}
    }
    this.updateThemeBtn(next);
  },

  updateThemeBtn(theme) {
    const btn = document.getElementById("btnThemeToggle");
    if (btn) {
      btn.innerHTML = theme === "dark"
        ? `☀️ <span class="hide-sm">Giao diện sáng</span>`
        : `🌙 <span class="hide-sm">Giao diện tối</span>`;
    }
  },

  openDrawer() {
    document.getElementById("sidebar")?.classList.add("open");
    document.getElementById("sidebarBackdrop")?.classList.add("visible");
    document.body.classList.add("drawer-open");
  },

  closeDrawer() {
    document.getElementById("sidebar")?.classList.remove("open");
    document.getElementById("sidebarBackdrop")?.classList.remove("visible");
    document.body.classList.remove("drawer-open");
  },

  setBottomNavActive(tab) {
    document.getElementById("mbbOverview")?.classList.toggle("active", tab === "overview");
    document.getElementById("mbbMock")?.classList.toggle("active", tab === "mock");
  },

  stopExamTimer() {
    if (this.examTimerInterval) {
      clearInterval(this.examTimerInterval);
      this.examTimerInterval = null;
    }
  },

  stopAllTimers() {
    this.stopExamTimer();
    if (window.ProcessAnimations) {
      window.ProcessAnimations.stopTimer();
    }
  },

  bindEvents() {
    const searchInput = document.getElementById("lessonSearchInput");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.renderSidebar(e.target.value);
      });
    }

    const menuBtn = document.getElementById("menuToggleBtn");
    const closeBtn = document.getElementById("sidebarCloseBtn");
    const backdrop = document.getElementById("sidebarBackdrop");
    if (menuBtn) {
      menuBtn.addEventListener("click", () => {
        const isOpen = document.getElementById("sidebar")?.classList.contains("open");
        if (isOpen) this.closeDrawer();
        else this.openDrawer();
      });
    }
    if (closeBtn) closeBtn.addEventListener("click", () => this.closeDrawer());
    if (backdrop) backdrop.addEventListener("click", () => this.closeDrawer());

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.closeDrawer();
    });
  },

  updateOverallProgressUI() {
    let completedLessons = 0;
    this.lessons.forEach((l) => {
      const p = this.progress[l.id];
      if (p && p.answered && Object.keys(p.answered).length >= Math.ceil(l.questions.length * 0.5)) {
        completedLessons++;
      }
    });
    const pct = this.lessons.length ? Math.round((completedLessons / this.lessons.length) * 100) : 0;
    const txtEl = document.getElementById("overallProgressText");
    const fillEl = document.getElementById("overallProgressFill");
    if (txtEl) txtEl.textContent = `${completedLessons} / ${this.lessons.length} bài (${pct}%)`;
    if (fillEl) fillEl.style.width = `${pct}%`;
  },

  renderSidebar(filterText = "") {
    const nav = document.getElementById("sidebarNav");
    if (!nav) return;
    const q = filterText.trim().toLowerCase();

    const groups = {};
    this.lessons.forEach((l) => {
      if (q) {
        const matchTitle = l.title.toLowerCase().includes(q);
        const matchSum = l.summary.toLowerCase().includes(q);
        const matchGroup = l.group.toLowerCase().includes(q);
        if (!matchTitle && !matchSum && !matchGroup) return;
      }
      if (!groups[l.group]) groups[l.group] = [];
      groups[l.group].push(l);
    });

    let html = "";
    Object.keys(groups).forEach((gName) => {
      html += `<div class="nav-group-title">${gName}</div>`;
      groups[gName].forEach((l) => {
        const p = this.progress[l.id];
        const answeredCount = p && p.answered ? Object.keys(p.answered).length : 0;
        const isCompleted = answeredCount === l.questions.length && l.questions.length > 0;
        const isActive = this.currentLessonId === l.id;

        let badgeHtml = "";
        if (answeredCount > 0) {
          badgeHtml = `<span class="nav-score-badge">${p.score || 0}/${l.questions.length}</span>`;
        }

        html += `
          <div class="nav-item ${isActive ? "active" : ""} ${isCompleted ? "completed" : ""}" onclick="App.showLesson(${l.id})">
            <div class="nav-num">${isCompleted ? "✓" : l.id}</div>
            <div class="nav-text">${l.shortTitle || l.title}</div>
            ${badgeHtml}
          </div>
        `;
      });
    });

    if (!html) {
      html = `<div style="padding:16px;color:#94a3b8;font-size:13px;">Không tìm thấy bài học phù hợp với "${filterText}".</div>`;
    }

    nav.innerHTML = html;
    this.updateOverallProgressUI();
  },

  formatLevelBadge(level) {
    if (level === 1) return `<span class="lvl-badge lvl-1">Mức 1: Thuộc / Nhớ lại</span>`;
    if (level === 3) return `<span class="lvl-badge lvl-3">Mức 3: Vận dụng</span>`;
    return `<span class="lvl-badge lvl-2">Mức 2: Hiểu</span>`;
  },

  formatKsaBadge(ksa, ksaLabel) {
    const cls = ksa === "S" ? "ksa-badge ksa-S" : ksa === "A" ? "ksa-badge ksa-A" : "ksa-badge";
    return `<span class="${cls}">${ksaLabel || (ksa === "S" ? "Kỹ năng (S)" : ksa === "A" ? "Thái độ (A)" : "Kiến thức (K)")}</span>`;
  },

  // ========================================================================
  // VIEW 1: TỔNG QUAN ĐỀ CƯƠNG 7 BÀI (2 CHỦ ĐỀ VI SINH KHYS)
  // ========================================================================
  showOverview() {
    this.stopAllTimers();
    this.currentLessonId = null;
    this.renderSidebar(document.getElementById("lessonSearchInput")?.value || "");
    document.getElementById("breadcrumb").textContent = "Tổng quan Đề cương Ôn tập Vi sinh học SĐH 2026 (7 Bài / 2 Chuyên đề)";
    this.closeDrawer();
    this.setBottomNavActive("overview");

    let totalQ = 0;
    let totalAnswered = 0;
    let totalCorrect = 0;

    this.lessons.forEach((l) => {
      totalQ += l.questions.length;
      const p = this.progress[l.id];
      if (p && p.answered) {
        totalAnswered += Object.keys(p.answered).length;
        totalCorrect += p.score || 0;
      }
    });

    let cardsHtml = "";
    this.lessons.forEach((l) => {
      const p = this.progress[l.id];
      const ansCount = p && p.answered ? Object.keys(p.answered).length : 0;
      const score = p ? p.score || 0 : 0;

      cardsHtml += `
        <div class="topic-card" onclick="App.showLesson(${l.id})">
          <div>
            <div class="topic-card-top">
              <span class="q-num">${l.group}</span>
              <span style="font-size:12px;font-weight:700;color:${ansCount > 0 ? "var(--success)" : "var(--text-light)"}">
                ${ansCount > 0 ? `✅ Đã làm: ${score}/${l.questions.length} câu` : `📝 ${l.questions.length} câu KSA`}
              </span>
            </div>
            <h3>${l.title}</h3>
            <p>${l.summary}</p>
          </div>
          <div style="display:flex;gap:8px;margin-top:8px;padding-top:10px;border-top:1px solid var(--border);">
            <button class="btn btn-primary" style="flex:1;padding:7px 10px;font-size:12.5px;" onclick="event.stopPropagation();App.showLesson(${l.id})">
              🔬 Học &amp; Minh họa
            </button>
            <button class="btn btn-outline" style="padding:7px 10px;font-size:12.5px;" onclick="event.stopPropagation();App.showLesson(${l.id}, 'quiz')">
              📝 ${l.questions.length} câu
            </button>
          </div>
        </div>
      `;
    });

    const main = document.getElementById("mainContent");
    main.innerHTML = `
      <div class="lesson-hero">
        <div class="lesson-hero-meta">
          <span class="tag-pill">ĐẠI HỌC Y DƯỢC TP.HCM (YDS)</span>
          <span class="tag-pill">ĐỀ CƯƠNG CAO HỌC KHOA HỌC Y SINH 2026</span>
          <span class="tag-pill">GIÁO TRÌNH VI KHUẨN Y HỌC 2016</span>
        </div>
        <h1>Cổng Ôn Tập Tương Tác Môn Chuyên Ngành: Vi Sinh Y Học</h1>
        <p>Hệ thống hóa trọn vẹn 2 chuyên đề trọng tâm theo Đề cương Cao học KHYS 2026 (<strong>1. Nhiễm khuẩn và miễn dịch</strong> • <strong>2. Thuốc kháng sinh</strong>) thành <strong>7 bài học chuyên sâu</strong> kèm <strong>7 Hoạt cảnh Minh họa Quá trình</strong>, <strong>7 Phòng Mô phỏng Tương tác</strong> và <strong>${totalQ} câu trắc nghiệm</strong> phân tầng KSA &amp; Mức 1–2–3.</p>
      </div>

      <div class="metric-cards" style="margin-bottom:24px;">
        <div class="metric-card">
          <div class="metric-label">Số Bài học &amp; Phòng Lab</div>
          <div class="metric-val">7 Bài (14 Lab)</div>
          <div class="metric-sub">7 Minh họa quá trình + 7 Mô phỏng</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">Ngân hàng Câu hỏi KSA</div>
          <div class="metric-val" style="color:var(--accent)">${totalQ} Câu (24/bài)</div>
          <div class="metric-sub">25% Thuộc • 37,5% Hiểu • 37,5% Vận dụng</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">Tiến độ trên thiết bị này</div>
          <div class="metric-val">${totalAnswered} / ${totalQ} câu</div>
          <div class="metric-sub">Trả lời đúng: <strong>${totalCorrect}</strong> câu</div>
        </div>
        <div class="metric-card" style="display:flex;flex-direction:column;justify-content:center;gap:6px;">
          <button class="btn btn-accent" onclick="App.showMockExam()">⏱️ Thi Thử Có Đồng Hồ</button>
          <button class="btn btn-outline" style="font-size:12px;padding:4px 8px;" onclick="App.resetAllProgress()">🔄 Xóa lịch sử làm bài</button>
        </div>
      </div>

      <div class="overview-grid">
        ${cardsHtml}
      </div>
    `;
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  // ========================================================================
  // VIEW 2: CHI TIẾT BÀI HỌC (LÝ THUYẾT CHỮ + MINH HỌA + MÔ PHỎNG + 24 CÂU KSA)
  // ========================================================================
  showLesson(lessonId, jumpTo = null) {
    this.stopAllTimers();
    const lesson = this.lessons.find((l) => l.id === lessonId);
    if (!lesson) return;

    this.currentLessonId = lessonId;
    this.lessonQuizFilter = "ALL";
    this.renderSidebar(document.getElementById("lessonSearchInput")?.value || "");
    document.getElementById("breadcrumb").textContent = `${lesson.group}  ›  ${lesson.title}`;
    this.closeDrawer();
    this.setBottomNavActive("lesson");

    const prevLesson = this.lessons.find((l) => l.id === lessonId - 1);
    const nextLesson = this.lessons.find((l) => l.id === lessonId + 1);

    const main = document.getElementById("mainContent");
    main.innerHTML = `
      <div class="lesson-hero">
        <div class="lesson-hero-meta">
          <span class="tag-pill">${lesson.group}</span>
          <span class="tag-pill">📚 ${lesson.textbookRef}</span>
          <span class="tag-pill">📝 ${lesson.questions.length} câu KSA (Mức 1-2-3)</span>
        </div>
        <h1>${lesson.title}</h1>
        <p>${lesson.summary}</p>
      </div>

      <!-- THANH ĐIỀU HƯỚNG NHANH TRONG BÀI HỌC -->
      <div class="lesson-tabs">
        <button class="tab-btn active" id="tabBtn_all" onclick="App.switchLessonTab('all')">
          📋 Xem Toàn Bộ
        </button>
        <button class="tab-btn" id="tabBtn_theory" onclick="App.switchLessonTab('theory')">
          📖 1. Lý thuyết chữ
        </button>
        <button class="tab-btn" id="tabBtn_anim" onclick="App.switchLessonTab('anim')">
          🎬 2. Minh họa Quá trình
        </button>
        <button class="tab-btn" id="tabBtn_sim" onclick="App.switchLessonTab('sim')">
          🔬 3. Mô phỏng Tương tác
        </button>
        <button class="tab-btn" id="tabBtn_quiz" onclick="App.switchLessonTab('quiz')">
          📝 4. Trắc nghiệm (${lesson.questions.length} câu)
        </button>
      </div>

      <!-- PHẦN 1: LÝ THUYẾT CHỮ TRỌNG TÂM -->
      <section id="sec_theory" class="tab-pane active">
        ${lesson.theoryHtml}
      </section>

      <!-- PHẦN 2: MINH HỌA QUÁ TRÌNH TRỰC QUAN -->
      <section id="sec_anim" class="tab-pane active" style="margin-top:24px;">
        <div id="procAnimContainer"></div>
      </section>

      <!-- PHẦN 3: MÔ PHỎNG TƯƠNG TÁC TRỰC QUAN -->
      <section id="sec_sim" class="tab-pane active" style="margin-top:24px;">
        <div class="sim-box">
          <div class="sim-header">
            <div>
              <span class="sim-badge">🔬 Phòng thí nghiệm Mô phỏng Trực quan</span>
              <h2 style="font-size:19px;font-weight:800;margin-top:6px;color:var(--text-main);">${lesson.simTitle}</h2>
              <p style="font-size:13px;color:var(--text-muted);">Hãy thay đổi các thông số hoặc chọn tình huống vi sinh lâm sàng bên dưới để quan sát phân tích tức thời:</p>
            </div>
          </div>
          <div id="simContainer"></div>
        </div>
      </section>

      <!-- PHẦN 4: TRẮC NGHIỆM CUỐI BÀI PHÂN TẦNG KSA & MỨC 1-2-3 -->
      <section id="sec_quiz" class="tab-pane active" style="margin-top:28px;">
        <div class="quiz-header-bar">
          <div>
            <span class="brand-badge" style="background:var(--primary-light);color:var(--primary);">TRẮC NGHIỆM CUỐI BÀI • KSA &amp; MỨC NHẬN THỨC</span>
            <h2 style="font-size:20px;font-weight:800;color:var(--text-main);">Kiểm tra Hiểu bài: ${lesson.title}</h2>
            <p style="font-size:13px;color:var(--text-muted);">Cấu trúc 24 câu chuẩn tỷ trọng: <strong>Mức 1 Thuộc (25%)</strong> • <strong>Mức 2 Hiểu (37,5%)</strong> • <strong>Mức 3 Vận dụng (37,5%)</strong>, phủ đủ Kiến thức (K) – Kỹ năng (S) – Thái độ (A).</p>
          </div>
          <div class="quiz-score-board">
            <div class="score-circle" id="lessonScoreCircle">0/${lesson.questions.length}</div>
            <div style="display:flex;flex-direction:column;gap:6px;">
              <button class="btn btn-outline" style="padding:6px 12px;font-size:12.5px;" onclick="App.revealAllLessonExplanations(${lesson.id})">💡 Xem tất cả giải thích</button>
              <button class="btn btn-outline" style="padding:6px 12px;font-size:12.5px;" onclick="App.resetLessonQuiz(${lesson.id})">🔄 Làm lại bài này</button>
            </div>
          </div>
        </div>

        <div class="quiz-filter-bar" id="lessonQuizFilterBar"></div>
        <div id="lessonQuizList"></div>
      </section>

      <!-- ĐIỀU HƯỚNG BÀI TRƯỚC / BÀI TIẾP THEO -->
      <div class="card lesson-nav-footer">
        <div>
          ${prevLesson ? `<button class="btn btn-outline" onclick="App.showLesson(${prevLesson.id})">⬅️ ${prevLesson.title}</button>` : `<button class="btn btn-outline" onclick="App.showOverview()">📋 Về Tổng quan Đề cương</button>`}
        </div>
        <div>
          ${nextLesson ? `<button class="btn btn-primary" onclick="App.showLesson(${nextLesson.id})">Bài tiếp theo: ${nextLesson.title} ➡️</button>` : `<button class="btn btn-accent" onclick="App.showMockExam()">⏱️ Hoàn thành 7 bài! Vào Thi thử Có Đồng Hồ ➡️</button>`}
        </div>
      </div>
    `;

    if (window.ProcessAnimations) {
      window.ProcessAnimations.render(lesson.id, document.getElementById("procAnimContainer"));
    }

    Simulators.render(lesson.simId, document.getElementById("simContainer"));
    this.renderLessonQuiz(lesson);

    if (jumpTo === "quiz") {
      setTimeout(() => {
        document.getElementById("sec_quiz")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  },

  switchLessonTab(mode) {
    ["all", "theory", "anim", "sim", "quiz"].forEach((t) => {
      document.getElementById("tabBtn_" + t)?.classList.toggle("active", t === mode);
    });
    document.getElementById("sec_theory")?.classList.toggle("active", mode === "all" || mode === "theory");
    document.getElementById("sec_anim")?.classList.toggle("active", mode === "all" || mode === "anim");
    document.getElementById("sec_sim")?.classList.toggle("active", mode === "all" || mode === "sim");
    document.getElementById("sec_quiz")?.classList.toggle("active", mode === "all" || mode === "quiz");
  },

  setLessonQuizFilter(filterKey) {
    this.lessonQuizFilter = filterKey;
    const lesson = this.lessons.find((l) => l.id === this.currentLessonId);
    if (lesson) this.renderLessonQuiz(lesson);
  },

  renderLessonQuiz(lesson) {
    const listEl = document.getElementById("lessonQuizList");
    const filterEl = document.getElementById("lessonQuizFilterBar");
    if (!listEl) return;

    if (!this.progress[lesson.id]) {
      this.progress[lesson.id] = { answered: {}, score: 0, total: lesson.questions.length };
    }
    const p = this.progress[lesson.id];

    const c1 = lesson.questions.filter((q) => q.level === 1).length;
    const c2 = lesson.questions.filter((q) => q.level === 2).length;
    const c3 = lesson.questions.filter((q) => q.level === 3).length;
    const ck = lesson.questions.filter((q) => q.ksa === "K").length;
    const cs = lesson.questions.filter((q) => q.ksa === "S").length;
    const ca = lesson.questions.filter((q) => q.ksa === "A").length;

    if (filterEl) {
      const f = this.lessonQuizFilter;
      const mkBtn = (key, label) => `<button type="button" class="pill-btn ${f === key ? "active" : ""}" onclick="App.setLessonQuizFilter('${key}')">${label}</button>`;
      filterEl.innerHTML =
        mkBtn("ALL", `Tất cả (${lesson.questions.length})`) +
        mkBtn("L1", `Mức 1: Thuộc (${c1})`) +
        mkBtn("L2", `Mức 2: Hiểu (${c2})`) +
        mkBtn("L3", `Mức 3: Vận dụng (${c3})`) +
        mkBtn("K", `Kiến thức K (${ck})`) +
        mkBtn("S", `Kỹ năng S (${cs})`) +
        mkBtn("A", `Thái độ A (${ca})`);
    }

    const letters = ["A", "B", "C", "D"];
    let html = "";

    lesson.questions.forEach((qObj, qIdx) => {
      if (this.lessonQuizFilter === "L1" && qObj.level !== 1) return;
      if (this.lessonQuizFilter === "L2" && qObj.level !== 2) return;
      if (this.lessonQuizFilter === "L3" && qObj.level !== 3) return;
      if (this.lessonQuizFilter === "K" && qObj.ksa !== "K") return;
      if (this.lessonQuizFilter === "S" && qObj.ksa !== "S") return;
      if (this.lessonQuizFilter === "A" && qObj.ksa !== "A") return;

      const chosen = p.answered[qIdx];
      const isAnswered = chosen !== undefined;

      let optsHtml = "";
      qObj.options.forEach((optText, oIdx) => {
        let cls = "q-opt";
        if (isAnswered) {
          cls += " disabled";
          if (oIdx === qObj.answer) cls += " correct";
          else if (oIdx === chosen && chosen !== qObj.answer) cls += " wrong";
        }
        optsHtml += `
          <button class="${cls}" onclick="App.answerLessonQuestion(${lesson.id}, ${qIdx}, ${oIdx})">
            <span class="q-opt-letter">${letters[oIdx]}</span>
            <span style="flex:1;">${optText}</span>
          </button>
        `;
      });

      html += `
        <div class="q-card" id="qcard_${lesson.id}_${qIdx}">
          <div class="q-meta">
            <div class="badge-row">
              <span class="q-num">Câu ${qIdx + 1} / ${lesson.questions.length}</span>
              ${this.formatLevelBadge(qObj.level)}
              ${this.formatKsaBadge(qObj.ksa, qObj.ksaLabel)}
            </div>
            <span class="q-source">📌 ${qObj.source}</span>
          </div>
          <div class="q-text">${qObj.q}</div>
          <div class="q-options">
            ${optsHtml}
          </div>
          <div class="q-explain ${isAnswered ? "visible" : ""}" id="qexp_${lesson.id}_${qIdx}">
            <div style="font-weight:700;margin-bottom:4px;color:var(--accent);">
              ${isAnswered ? (chosen === qObj.answer ? "✅ CHÍNH XÁC!" : `❌ CHƯA ĐÚNG (Đáp án đúng là ${letters[qObj.answer]})`) : `💡 Đáp án đúng: ${letters[qObj.answer]}`} — Giải thích Vi sinh &amp; Dược lý:
            </div>
            <div>${qObj.explain}</div>
          </div>
        </div>
      `;
    });

    listEl.innerHTML = html || `<div class="callout">Không có câu hỏi nào khớp bộ lọc đang chọn.</div>`;
    this.updateLessonScoreCircle(lesson);
  },

  answerLessonQuestion(lessonId, qIdx, chosenOpt) {
    const lesson = this.lessons.find((l) => l.id === lessonId);
    if (!lesson) return;

    if (!this.progress[lessonId]) {
      this.progress[lessonId] = { answered: {}, score: 0, total: lesson.questions.length };
    }
    const p = this.progress[lessonId];
    if (p.answered[qIdx] !== undefined) return;

    p.answered[qIdx] = chosenOpt;

    let score = 0;
    Object.keys(p.answered).forEach((k) => {
      const idx = parseInt(k);
      if (lesson.questions[idx] && p.answered[idx] === lesson.questions[idx].answer) {
        score++;
      }
    });
    p.score = score;
    p.total = lesson.questions.length;

    this.saveProgress();
    this.renderLessonQuiz(lesson);
  },

  updateLessonScoreCircle(lesson) {
    const circle = document.getElementById("lessonScoreCircle");
    if (!circle) return;
    const p = this.progress[lesson.id];
    const score = p ? p.score || 0 : 0;
    circle.textContent = `${score}/${lesson.questions.length}`;
  },

  revealAllLessonExplanations(lessonId) {
    const lesson = this.lessons.find((l) => l.id === lessonId);
    if (!lesson) return;
    lesson.questions.forEach((_, qIdx) => {
      document.getElementById(`qexp_${lessonId}_${qIdx}`)?.classList.add("visible");
    });
  },

  resetLessonQuiz(lessonId) {
    const lesson = this.lessons.find((l) => l.id === lessonId);
    if (!lesson) return;
    this.progress[lessonId] = { answered: {}, score: 0, total: lesson.questions.length };
    this.saveProgress();
    this.renderLessonQuiz(lesson);
  },

  // ========================================================================
  // VIEW 3: PHÒNG THI THỬ CÓ ĐỒNG HỒ ĐẾM NGƯỢC NHƯ THI THẬT
  // ========================================================================
  showMockExam() {
    this.stopAllTimers();
    this.currentLessonId = null;
    this.renderSidebar(document.getElementById("lessonSearchInput")?.value || "");
    document.getElementById("breadcrumb").textContent = "Phòng Thi Thử Có Đồng Hồ – Vi Sinh Y Học SĐH YDS 2026";
    this.closeDrawer();
    this.setBottomNavActive("mock");

    const totalPool = this.lessons.reduce((acc, l) => acc + l.questions.length, 0);

    const main = document.getElementById("mainContent");
    main.innerHTML = `
      <div class="lesson-hero">
        <div class="lesson-hero-meta">
          <span class="tag-pill">⏱️ ĐỒNG HỒ ĐẾM NGƯỢC NHƯ THI THẬT</span>
          <span class="tag-pill">NGÂN HÀNG ${totalPool} CÂU HỎI KSA</span>
          <span class="tag-pill">TỶ TRỌNG: 25% THUỘC • 37,5% HIỂU • 37,5% VẬN DỤNG</span>
        </div>
        <h1>🎯 Phòng Thi Thử Cao Học KHYS – Môn Vi Sinh Y Học</h1>
        <p>Tự động bốc đề phân bổ chuẩn theo thang nhận thức (Mức 1 – 2 – 3) và năng lực (Kiến thức – Kỹ năng – Thái độ), đảo thứ tự A/B/C/D, có đồng hồ đếm ngược tự động nộp bài khi hết giờ.</p>
      </div>

      <div class="card">
        <div class="card-title">⚙️ Thiết lập Ca Thi Thử Mới</div>
        <div class="sim-controls" style="margin-bottom:0;">
          <div class="control-group">
            <label>Số lượng câu hỏi:</label>
            <select id="mock_count" onchange="App.syncDefaultMinutes()">
              <option value="20">20 câu (15 phút)</option>
              <option value="40" selected>40 câu (30 phút – Chuẩn ôn nhanh)</option>
              <option value="60">60 câu (45 phút – Đề tổng duyệt)</option>
              <option value="100">100 câu (75 phút – Như thi SĐH thật)</option>
              <option value="${totalPool}">${totalPool} câu (120 phút – Toàn bộ ngân hàng)</option>
            </select>
          </div>
          <div class="control-group">
            <label>Thời gian làm bài (phút):</label>
            <input type="number" id="mock_minutes" min="3" max="180" value="30" style="width:100%;min-height:44px;padding:8px 12px;border-radius:8px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-main);font-size:15px;font-weight:700;" />
          </div>
          <div class="control-group">
            <label>Phạm vi Chủ đề Đề cương:</label>
            <select id="mock_group">
              <option value="ALL">Toàn bộ 7 bài (2 chuyên đề Đề cương – ${totalPool} câu)</option>
              <option value="I. NHIỄM KHUẨN & MIỄN DỊCH">Chuyên đề I: Nhiễm khuẩn &amp; Miễn dịch (Bài 1 – 3)</option>
              <option value="II. THUỐC KHÁNG SINH">Chuyên đề II: Thuốc Kháng sinh (Bài 4 – 7)</option>
            </select>
          </div>
          <div class="control-group">
            <label>Cơ cấu Mức độ &amp; KSA:</label>
            <select id="mock_mix">
              <option value="BALANCED" selected>Chuẩn Đề xuất (25% M1 • 37,5% M2 • 37,5% M3)</option>
              <option value="RANDOM">Bốc ngẫu nhiên tự do</option>
              <option value="L3_ONLY">Chuyên sâu Mức 3 (Vận dụng tình huống)</option>
              <option value="SA_ONLY">Chuyên sâu Kỹ năng (S) &amp; Thái độ (A)</option>
            </select>
          </div>
          <div class="control-group">
            <label>Chế độ làm bài:</label>
            <select id="mock_mode">
              <option value="REAL" selected>🎯 Thi thật (Ẩn đáp án tới khi Nộp bài)</option>
              <option value="PRACTICE">💡 Luyện tập (Hiện giải thích ngay từng câu)</option>
            </select>
          </div>
          <div class="control-group" style="justify-content:flex-end;">
            <button class="btn btn-primary" style="min-height:44px;" onclick="App.startMockQuiz()">🚀 Bắt đầu Tính giờ &amp; Làm Đề Mới</button>
          </div>
        </div>
      </div>

      <div id="mockQuizArea"></div>
    `;

    this.startMockQuiz();
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  syncDefaultMinutes() {
    const cnt = parseInt(document.getElementById("mock_count")?.value || "40");
    const minInput = document.getElementById("mock_minutes");
    if (!minInput) return;
    const map = { 20: 15, 40: 30, 60: 45, 100: 75, 168: 120 };
    minInput.value = map[cnt] || Math.round(cnt * 0.75);
  },

  shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  },

  startMockQuiz() {
    this.stopExamTimer();

    const count = parseInt(document.getElementById("mock_count")?.value || "40");
    const minutes = Math.max(1, Math.min(180, parseInt(document.getElementById("mock_minutes")?.value || "30")));
    const grp = document.getElementById("mock_group")?.value || "ALL";
    const mix = document.getElementById("mock_mix")?.value || "BALANCED";
    const mode = document.getElementById("mock_mode")?.value || "REAL";

    let pool = [];
    this.lessons.forEach((l) => {
      if (grp !== "ALL" && l.group !== grp) return;
      l.questions.forEach((qObj) => {
        if (mix === "L3_ONLY" && qObj.level !== 3) return;
        if (mix === "SA_ONLY" && qObj.ksa !== "S" && qObj.ksa !== "A") return;

        const indexedOpts = this.shuffleArray(
          qObj.options.map((text, idx) => ({ text, isCorrect: idx === qObj.answer }))
        );
        const newAns = indexedOpts.findIndex((o) => o.isCorrect);
        pool.push({
          lessonTitle: l.title,
          q: qObj.q,
          source: qObj.source,
          level: qObj.level || 2,
          ksa: qObj.ksa || "K",
          ksaLabel: qObj.ksaLabel || "K2: Hiểu",
          options: indexedOpts.map((o) => o.text),
          answer: newAns,
          explain: qObj.explain
        });
      });
    });

    const targetCount = Math.min(count, pool.length);
    let selected = [];
    if (mix === "BALANCED" && targetCount > 0) {
      const p1 = this.shuffleArray(pool.filter((q) => q.level === 1));
      const p2 = this.shuffleArray(pool.filter((q) => q.level === 2));
      const p3 = this.shuffleArray(pool.filter((q) => q.level === 3));

      const n1 = Math.round(targetCount * 0.25);
      const n2 = Math.round(targetCount * 0.375);
      const n3 = targetCount - n1 - n2;

      selected = [...p1.slice(0, n1), ...p2.slice(0, n2), ...p3.slice(0, n3)];
      if (selected.length < targetCount) {
        const usedSet = new Set(selected);
        const rem = this.shuffleArray(pool.filter((q) => !usedSet.has(q)));
        selected = [...selected, ...rem.slice(0, targetCount - selected.length)];
      }
      selected = this.shuffleArray(selected);
    } else {
      selected = this.shuffleArray(pool).slice(0, targetCount);
    }

    const totalSec = minutes * 60;
    this.mockState = {
      questions: selected,
      answered: {},
      flagged: {},
      mode,
      submitted: false,
      autoSubmitted: false,
      paused: false,
      reviewWrongOnly: false,
      totalSeconds: totalSec,
      secondsLeft: totalSec,
      score: 0
    };

    this.renderMockQuiz();
    this.startExamTimer();
  },

  startExamTimer() {
    this.stopExamTimer();
    this.examTimerInterval = setInterval(() => {
      if (!this.mockState || this.mockState.submitted || this.mockState.paused) return;
      if (!document.getElementById("mockQuizArea")) {
        this.stopExamTimer();
        return;
      }

      this.mockState.secondsLeft--;
      if (this.mockState.secondsLeft <= 0) {
        this.mockState.secondsLeft = 0;
        this.submitMockExam(true);
        return;
      }
      this.updateTimerBarDOM();
    }, 1000);
  },

  formatClock(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  },

  updateTimerBarDOM() {
    if (!this.mockState) return;
    const clockEl = document.getElementById("examClockText");
    const barEl = document.getElementById("examTimerBar");
    if (!clockEl || !barEl) return;

    const sLeft = this.mockState.secondsLeft;
    clockEl.textContent = this.formatClock(sLeft);

    barEl.classList.remove("warn", "critical");
    if (!this.mockState.submitted) {
      if (sLeft <= 60) barEl.classList.add("critical");
      else if (sLeft <= Math.min(300, Math.floor(this.mockState.totalSeconds * 0.25))) barEl.classList.add("warn");
    }
  },

  toggleExamPause() {
    if (!this.mockState || this.mockState.submitted) return;
    this.mockState.paused = !this.mockState.paused;
    this.renderMockQuiz();
  },

  toggleMockFlag(qIdx) {
    if (!this.mockState || this.mockState.submitted) return;
    this.mockState.flagged[qIdx] = !this.mockState.flagged[qIdx];
    this.renderMockQuiz();
  },

  answerMockQuestion(qIdx, chosenOpt) {
    if (!this.mockState || this.mockState.submitted || this.mockState.paused) return;
    if (this.mockState.mode === "PRACTICE" && this.mockState.answered[qIdx] !== undefined) return;

    this.mockState.answered[qIdx] = chosenOpt;
    this.recalcMockScore();
    this.renderMockQuiz();
  },

  recalcMockScore() {
    if (!this.mockState) return;
    let sc = 0;
    this.mockState.questions.forEach((qObj, idx) => {
      if (this.mockState.answered[idx] === qObj.answer) sc++;
    });
    this.mockState.score = sc;
  },

  submitMockExam(isAuto = false) {
    if (!this.mockState || this.mockState.submitted) return;
    if (!isAuto) {
      const answeredCount = Object.keys(this.mockState.answered).length;
      const total = this.mockState.questions.length;
      if (answeredCount < total) {
        const ok = confirm(`Bạn mới chọn ${answeredCount}/${total} câu (còn ${total - answeredCount} câu chưa làm). Bạn có chắc chắn muốn nộp bài ngay?`);
        if (!ok) return;
      }
    }
    this.stopExamTimer();
    this.mockState.submitted = true;
    this.mockState.autoSubmitted = isAuto;
    this.mockState.paused = false;
    this.recalcMockScore();
    this.renderMockQuiz();
    document.getElementById("mockResultCard")?.scrollIntoView({ behavior: "smooth" });
  },

  toggleReviewWrongOnly() {
    if (!this.mockState) return;
    this.mockState.reviewWrongOnly = !this.mockState.reviewWrongOnly;
    this.renderMockQuiz();
  },

  jumpToMockQuestion(idx) {
    document.getElementById(`mock_q_${idx}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
  },

  renderMockQuiz() {
    const area = document.getElementById("mockQuizArea");
    if (!area || !this.mockState) return;

    const { questions, answered, flagged, mode, submitted, autoSubmitted, paused, reviewWrongOnly, totalSeconds, secondsLeft, score } = this.mockState;
    const ansCount = Object.keys(answered).length;
    const letters = ["A", "B", "C", "D"];

    let timerCls = "exam-timer-bar";
    if (!submitted) {
      if (secondsLeft <= 60) timerCls += " critical";
      else if (secondsLeft <= Math.min(300, Math.floor(totalSeconds * 0.25))) timerCls += " warn";
    }

    let paletteHtml = "";
    questions.forEach((qObj, idx) => {
      const ch = answered[idx];
      let cls = "pal-dot";
      if (submitted || (mode === "PRACTICE" && ch !== undefined)) {
        if (ch === qObj.answer) cls += " correct";
        else cls += " wrong";
      } else if (ch !== undefined) {
        cls += " answered";
      }
      if (flagged[idx]) cls += " flagged";
      paletteHtml += `<button type="button" class="${cls}" onclick="App.jumpToMockQuestion(${idx})" title="Câu ${idx + 1}">${idx + 1}</button>`;
    });

    let summaryHtml = "";
    if (submitted) {
      const timeUsed = totalSeconds - secondsLeft;
      const grade10 = ((score / Math.max(1, questions.length)) * 10).toFixed(2).replace(".", ",");
      const pct = Math.round((score / Math.max(1, questions.length)) * 100);

      const statBy = (pred) => {
        const sub = questions.map((q, i) => ({ q, i })).filter((x) => pred(x.q));
        const ok = sub.filter((x) => answered[x.i] === x.q.answer).length;
        return { ok, total: sub.length, pct: sub.length ? Math.round((ok / sub.length) * 100) : 0 };
      };

      const sL1 = statBy((q) => q.level === 1);
      const sL2 = statBy((q) => q.level === 2);
      const sL3 = statBy((q) => q.level === 3);
      const sK = statBy((q) => q.ksa === "K");
      const sS = statBy((q) => q.ksa === "S");
      const sA = statBy((q) => q.ksa === "A");

      summaryHtml = `
        <div class="card" id="mockResultCard" style="border:2px solid ${pct >= 50 ? "var(--success)" : "var(--danger)"};">
          <div class="card-title">
            ${autoSubmitted ? "⏰ HẾT GIỜ LÀM BÀI — HỆ THỐNG ĐÃ TỰ ĐỘNG NỘP BÀI!" : "🏁 KẾT QUẢ BÀI THI THỬ VI SINH Y HỌC"}
          </div>
          <div class="metric-cards">
            <div class="metric-card">
              <div class="metric-label">Điểm số (Thang 10)</div>
              <div class="metric-val" style="font-size:24px;color:${pct >= 50 ? "var(--success)" : "var(--danger)"}">${grade10} / 10</div>
              <div class="metric-sub">Đúng ${score}/${questions.length} câu (${pct}%)</div>
            </div>
            <div class="metric-card">
              <div class="metric-label">Thời gian đã làm</div>
              <div class="metric-val">${this.formatClock(timeUsed)}</div>
              <div class="metric-sub">Quỹ thời gian: ${this.formatClock(totalSeconds)}</div>
            </div>
            <div class="metric-card">
              <div class="metric-label">Mức 1 • Mức 2 • Mức 3</div>
              <div style="font-size:13px;font-weight:700;margin-top:4px;">
                <span style="color:var(--success)">M1: ${sL1.ok}/${sL1.total} (${sL1.pct}%)</span><br/>
                <span style="color:var(--primary)">M2: ${sL2.ok}/${sL2.total} (${sL2.pct}%)</span><br/>
                <span style="color:var(--danger)">M3: ${sL3.ok}/${sL3.total} (${sL3.pct}%)</span>
              </div>
            </div>
            <div class="metric-card">
              <div class="metric-label">Năng lực K – S – A</div>
              <div style="font-size:13px;font-weight:700;margin-top:4px;">
                Kiến thức (K): ${sK.ok}/${sK.total} (${sK.pct}%)<br/>
                Kỹ năng (S): ${sS.ok}/${sS.total} (${sS.pct}%)<br/>
                Thái độ (A): ${sA.ok}/${sA.total} (${sA.pct}%)
              </div>
            </div>
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:10px;">
            <button type="button" class="btn btn-outline" onclick="App.toggleReviewWrongOnly()">
              ${reviewWrongOnly ? "📋 Hiện tất cả " + questions.length + " câu" : "❌ Chỉ lọc xem các câu làm sai / bỏ trống"}
            </button>
            <button type="button" class="btn btn-primary" onclick="App.startMockQuiz()">🔄 Tạo Đề Thi Mới</button>
          </div>
        </div>
      `;
    }

    let qHtml = "";
    if (paused && !submitted) {
      qHtml = `
        <div class="card" style="text-align:center;padding:42px 20px;">
          <h3 style="font-size:20px;margin-bottom:10px;">⏸️ Đồng hồ thi đang tạm dừng</h3>
          <p style="color:var(--text-muted);margin-bottom:16px;">Nội dung câu hỏi được tạm ẩn trong lúc tạm dừng để đảm bảo tính trung thực như thi thật.</p>
          <button type="button" class="btn btn-primary" onclick="App.toggleExamPause()">▶️ Tiếp tục làm bài</button>
        </div>
      `;
    } else {
      questions.forEach((qObj, idx) => {
        const chosen = answered[idx];
        const isChosen = chosen !== undefined;
        const revealThis = submitted || (mode === "PRACTICE" && isChosen);

        if (submitted && reviewWrongOnly && chosen === qObj.answer) return;

        let optsHtml = "";
        qObj.options.forEach((optText, oIdx) => {
          let cls = "q-opt";
          if (revealThis) {
            cls += " disabled";
            if (oIdx === qObj.answer) cls += " correct";
            else if (oIdx === chosen && chosen !== qObj.answer) cls += " wrong";
          } else if (oIdx === chosen) {
            cls += " selected-pending";
          }
          optsHtml += `
            <button class="${cls}" onclick="App.answerMockQuestion(${idx}, ${oIdx})">
              <span class="q-opt-letter">${letters[oIdx]}</span>
              <span style="flex:1;">${optText}</span>
            </button>
          `;
        });

        qHtml += `
          <div class="q-card" id="mock_q_${idx}">
            <div class="q-meta">
              <div class="badge-row">
                <span class="q-num">Câu ${idx + 1}/${questions.length} • ${qObj.lessonTitle}</span>
                ${this.formatLevelBadge(qObj.level)}
                ${this.formatKsaBadge(qObj.ksa, qObj.ksaLabel)}
              </div>
              <div style="display:flex;align-items:center;gap:8px;">
                ${!submitted ? `<button type="button" class="flag-btn ${flagged[idx] ? "flagged" : ""}" onclick="App.toggleMockFlag(${idx})">${flagged[idx] ? "🚩 Đã đánh dấu" : "🏳️ Đánh dấu xem lại"}</button>` : ""}
                <span class="q-source">${qObj.source}</span>
              </div>
            </div>
            <div class="q-text">${qObj.q}</div>
            <div class="q-options">${optsHtml}</div>
            <div class="q-explain ${revealThis ? "visible" : ""}">
              <div style="font-weight:700;margin-bottom:4px;color:var(--accent);">
                ${isChosen && chosen === qObj.answer ? "✅ CHÍNH XÁC!" : !isChosen ? `⚠️ CHƯA CHỌN ĐÁP ÁN (Đáp án đúng là ${letters[qObj.answer]})` : `❌ CHƯA ĐÚNG (Đáp án đúng là ${letters[qObj.answer]})`} — Giải thích:
              </div>
              <div>${qObj.explain}</div>
            </div>
          </div>
        `;
      });
    }

    area.innerHTML = `
      <div class="${timerCls}" id="examTimerBar">
        <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap;">
          <div class="timer-clock">⏱️ <span id="examClockText">${this.formatClock(secondsLeft)}</span></div>
          <div style="font-size:13.5px;font-weight:600;">
            ${submitted
              ? `Đã nộp bài • Đúng <strong style="color:var(--success)">${score}/${questions.length}</strong> câu`
              : `Đã làm <strong>${ansCount}/${questions.length}</strong> câu (${mode === "REAL" ? "Chế độ Thi thật: có thể đổi đáp án trước khi nộp" : "Chế độ Luyện tập"})`
            }
          </div>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          ${!submitted ? `
            <button type="button" class="btn btn-outline" style="min-height:38px;padding:6px 12px;" onclick="App.toggleExamPause()">
              ${paused ? "▶️ Tiếp tục" : "⏸️ Tạm dừng"}
            </button>
            <button type="button" class="btn btn-accent" style="min-height:38px;padding:6px 14px;" onclick="App.submitMockExam(false)">
              ✅ Nộp bài &amp; Chấm điểm
            </button>
          ` : `
            <button type="button" class="btn btn-primary" style="min-height:38px;padding:6px 14px;" onclick="App.startMockQuiz()">
              🚀 Thi đề mới
            </button>
          `}
        </div>
      </div>

      ${summaryHtml}

      <div class="card" style="padding:14px 16px;">
        <div style="font-size:12.5px;font-weight:700;color:var(--text-muted);margin-bottom:8px;">
          🧭 Bảng chuyển nhanh ${questions.length} câu hỏi (Xanh: Đã chọn | 🚩: Cần xem lại):
        </div>
        <div class="exam-palette">${paletteHtml}</div>
      </div>

      ${qHtml}
    `;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  App.init();
});

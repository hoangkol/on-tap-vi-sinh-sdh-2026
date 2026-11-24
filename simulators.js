// ==========================================================================
// BỘ MÔ PHỎNG TƯƠNG TÁC TRỰC QUAN 7 CHUYÊN ĐỀ VI SINH Y HỌC SĐH YDS 2026
// Mỗi bài học có 1 Phòng thí nghiệm / Mô phỏng tương tác trực tiếp
// ==========================================================================

window.Simulators = {
  render(simId, container) {
    if (!container) return;
    if (typeof this[simId] === "function") {
      this[simId](container);
    } else {
      container.innerHTML = `<div class="callout">Đang tải mô phỏng...</div>`;
    }
  },

  // ========================================================================
  // BÀI 1: PHÒNG LAB PHÂN LOẠI NHIỄM KHUẨN & KIỂM ĐỊNH KOCH - FALKOW
  // ========================================================================
  sim_koch_infection(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Tình huống Vi sinh Lâm sàng (Theo Sách YDS 2016):</label>
          <select id="s1_case" onchange="Simulators.upd_s1()">
            <option value="strep_throat">1. Streptococci tiêu huyết ở phết họng người bình thường</option>
            <option value="cperf_stool">2. Clostridium perfringens trong mẫu phân người bình thường</option>
            <option value="shigella_carrier">3. Shigella trong phân người khỏe mạnh (không tiêu chảy)</option>
            <option value="hib_meningitis">4. Viêm màng não mủ: cấy máu &amp; DNT đều có H. influenzae type b</option>
            <option value="diphtheria_toxin">5. C. diphtheriae khu trú họng, tổn thương cơ tim &amp; thần kinh</option>
            <option value="treponema_koch">6. Treponema pallidum (Giang mai) / M. leprae (Phong)</option>
            <option value="gonorrhea_koch">7. Neisseria gonorrhoeae (Lậu cầu)</option>
          </select>
        </div>
        <div class="control-group">
          <label>Kiểm thử Định đề Falkow (1988) – Trạng thái Gen Độc lực:</label>
          <select id="s1_falkow" onchange="Simulators.upd_s1()">
            <option value="wild">Dòng hoang dã (Gen độc lực bình thường)</option>
            <option value="knockout">Bất hoạt gen liên hệ độc lực (Knock-out)</option>
            <option value="revert">Đột biến ngược phục hồi gen độc lực</option>
          </select>
        </div>
      </div>
      <div id="s1_out"></div>
    `;
    this.upd_s1();
  },
  upd_s1() {
    const c = document.getElementById("s1_case").value;
    const fk = document.getElementById("s1_falkow").value;

    const cases = {
      strep_throat: {
        status: "KHÔNG PHẢI NHIỄM KHUẨN",
        badgeColor: "var(--success)",
        bg: "var(--success-light)",
        flora: "Vi sinh vật thường trú (Normal flora) tại vị trí sinh lý",
        koch: "Không áp dụng (cộng sinh bình thường)",
        bloodState: "Không xâm nhập máu",
        explain: "Câu tự lượng giá 1 (tr. 46): Sự tăng sinh của vi sinh vật thường trú (Streptococci tiêu huyết ở phết họng người bình thường) tại vị trí thông thường của nó KHÔNG được gọi là nhiễm khuẩn."
      },
      cperf_stool: {
        status: "KHÔNG PHẢI NHIỄM KHUẨN",
        badgeColor: "var(--success)",
        bg: "var(--success-light)",
        flora: "Vi khuẩn thường trú đường ruột",
        koch: "Không áp dụng nếu ở đúng vị trí thường trú",
        bloodState: "Không xâm nhập máu",
        explain: "Câu tự lượng giá 1 (tr. 46): Tìm thấy Clostridium perfringens trong mẫu phân của một người bình thường KHÔNG phải là nhiễm khuẩn (vì đây là cư dân thường trú ruột già; chỉ gây hoại thư sinh hơi khi vào vết thương mô thiếu oxy)."
      },
      shigella_carrier: {
        status: "CÓ NHIỄM KHUẨN (Người lành mang khuẩn)",
        badgeColor: "var(--warning)",
        bg: "var(--warning-light)",
        flora: "Tác nhân gây bệnh (Pathogen) tăng sinh không triệu chứng",
        koch: "Thỏa Định đề Koch 1884",
        bloodState: "Khu trú niêm mạc ruột – có khả năng lây lan",
        explain: "Dù không có triệu chứng lâm sàng, Shigella là vi khuẩn gây bệnh thực thụ chứ không phải vi khuẩn thường trú → VẪN coi là nhiễm khuẩn, người bệnh là Người lành mang khuẩn (Carrier)."
      },
      hib_meningitis: {
        status: "DU KHUẨN HUYẾT (Bacteremia) → Định cư Màng não",
        badgeColor: "var(--danger)",
        bg: "var(--danger-light)",
        flora: "Xâm nhập biểu mô hô hấp → Đường bạch huyết → Máu → DNT",
        koch: "Thỏa cả 4 phần Định đề Koch 1884",
        bloodState: "Du khuẩn huyết (Bacteremia – Theo đáp án 2B tr. 275)",
        explain: "Câu tự lượng giá 2 (tr. 46, đáp án 2B): H. influenzae type b hiện diện tạm thời trong máu (du khuẩn huyết) để di chuyển đến định cư và tăng sinh gây viêm màng não mủ."
      },
      diphtheria_toxin: {
        status: "NHIỄM KHUẨN TẠI CHỖ + SINH ĐỘC TỐ VÀO MÁU",
        badgeColor: "var(--danger)",
        bg: "var(--danger-light)",
        flora: "C. diphtheriae ở niêm mạc họng → Ngoại độc tố (40 ng) vào máu",
        koch: "Thỏa Định đề Koch 1884",
        bloodState: "Vi khuẩn ở tại chỗ; Độc tố theo máu tấn công cơ quan xa",
        explain: "Minh họa nhánh thứ hai của tiến trình nhiễm khuẩn (tr. 42): Vi khuẩn không cần vào máu trường diễn mà chỉ khu trú tại niêm mạc họng nhưng tiết ngoại độc tố vào máu tấn công tim và thần kinh."
      },
      treponema_koch: {
        status: "NGOẠI LỆ ĐỊNH ĐỀ KOCH 1884 (Không cấy được)",
        badgeColor: "var(--purple)",
        bg: "var(--purple-light)",
        flora: "Gây bệnh thực thụ nhưng vi phạm tiêu chuẩn 2 của Koch",
        koch: "Thất bại bước 2 (Không cấy được trên môi trường thông dụng)",
        bloodState: "Gây được mô hình bệnh thực nghiệm trên súc vật",
        explain: "Theo tr. 42: Treponema pallidum và Mycobacterium leprae không cấy được trên môi trường thông dụng nhưng vẫn gây được mô hình bệnh thực nghiệm → cần Định đề Koch phân tử (Falkow 1988)."
      },
      gonorrhea_koch: {
        status: "NGOẠI LỆ ĐỊNH ĐỀ KOCH 1884 (Không gây bệnh thú)",
        badgeColor: "var(--purple)",
        bg: "var(--purple-light)",
        flora: "Nuôi cấy được nhưng đặc hiệu loài người & dã nhân",
        koch: "Thất bại bước 3 (Không gây được bệnh thực nghiệm trên súc vật)",
        bloodState: "Nuôi cấy thuần khiết được trên môi trường phòng thí nghiệm",
        explain: "Theo tr. 42 & 45: Neisseria gonorrhoeae nuôi cấy được nhưng không gây được mô hình bệnh thực nghiệm trên động vật (chỉ gây bệnh ở người và dã nhân)."
      }
    };

    const d = cases[c];
    let falkowText = "Dòng hoang dã mang gen độc lực hoạt động → Có khả năng gây bệnh / độc lực bình thường (Bước 1 Falkow).";
    let falkowLevel = 100;
    if (fk === "knockout") {
      falkowText = "Bất hoạt gen độc lực → Giảm độc lực hoặc mất tính sinh bệnh đo lường được (Bước 2 Falkow).";
      falkowLevel = 15;
    } else if (fk === "revert") {
      falkowText = "Đột biến ngược khôi phục gen → Phục hồi hoàn toàn tính sinh bệnh (Bước 3 Falkow: Chứng minh nhân – quả phân tử).";
      falkowLevel = 100;
    }

    document.getElementById("s1_out").innerHTML = `
      <div class="metric-cards">
        <div class="metric-card" style="border:2px solid ${d.badgeColor};background:${d.bg}">
          <div class="metric-label">Phân loại Tình trạng</div>
          <div class="metric-val" style="font-size:15px;color:${d.badgeColor}">${d.status}</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">Kiểm định Định đề Koch (1884)</div>
          <div class="metric-val" style="font-size:14px;">${d.koch}</div>
          <div class="metric-sub">${d.flora}</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">Trạng thái Xâm nhập / Máu</div>
          <div class="metric-val" style="font-size:14px;color:var(--accent)">${d.bloodState}</div>
        </div>
      </div>
      <div class="svg-stage" style="margin-bottom:12px;">
        <svg viewBox="0 0 600 95" style="width:100%;max-width:600px;">
          <text x="15" y="24" font-size="12" font-weight="800" fill="var(--text-main)">Đo lường Độc lực theo Định đề Koch Phân tử (Falkow 1988):</text>
          <rect x="15" y="38" width="570" height="22" rx="11" fill="var(--border)"/>
          <rect x="15" y="38" width="${Math.round(5.7 * falkowLevel)}" height="22" rx="11" fill="${fk === "knockout" ? "var(--warning)" : "var(--danger)"}"/>
          <text x="300" y="53" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">Độc lực đo lường được: ${falkowLevel}%</text>
          <text x="15" y="80" font-size="11.5" font-weight="600" fill="var(--primary)">${falkowText}</text>
        </svg>
      </div>
      <div class="callout pearl" style="margin:0;">
        <div class="callout-title">📌 Biện luận Vi sinh học Chuẩn Sách YDS 2016</div>
        <p>${d.explain}</p>
      </div>
    `;
  },

  // ========================================================================
  // BÀI 2: PHÒNG LAB ĐỘC TỐ (NGOẠI ĐỘC TỐ vs NỘI ĐỘC TỐ LPS)
  // ========================================================================
  sim_toxins_virulence(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Độc tố / Yếu tố Độc lực:</label>
          <select id="s2_toxin" onchange="Simulators.upd_s2()">
            <option value="diphtheria">Ngoại độc tố Bạch hầu (Corynebacterium diphtheriae)</option>
            <option value="botulinum">Ngoại độc tố Botulinum (Clostridium botulinum)</option>
            <option value="tetani">Ngoại độc tố Uốn ván (Clostridium tetani)</option>
            <option value="tsst1">Độc tố 1 gây sốc độc tố TSST-1 (S. aureus)</option>
            <option value="cholera">Độc tố ruột (Vibrio cholerae)</option>
            <option value="perfringens">Độc tố Hoại thư sinh hơi (Clostridium perfringens)</option>
            <option value="endotoxin">Nội độc tố LPS (Vi khuẩn Gram âm chết phóng thích)</option>
          </select>
        </div>
        <div class="control-group">
          <label>Xử lý Môi trường / Nhiệt độ (°C): <strong id="s2_temp_lbl">37°C (Sinh lý)</strong></label>
          <input type="range" id="s2_temp" min="37" max="100" step="1" value="37" oninput="Simulators.upd_s2()" />
        </div>
        <div class="control-group">
          <label>Xử lý Hóa chất (Tạo Giải độc tố / Toxoid):</label>
          <select id="s2_chem" onchange="Simulators.upd_s2()">
            <option value="none">Không xử lý (Độc tố nguyên vẹn)</option>
            <option value="toxoid">Xử lý để chế Giải độc tố (Chủng ngừa)</option>
          </select>
        </div>
      </div>
      <div id="s2_out"></div>
    `;
    this.upd_s2();
  },
  upd_s2() {
    const t = document.getElementById("s2_toxin").value;
    const temp = parseInt(document.getElementById("s2_temp").value);
    const chem = document.getElementById("s2_chem").value;
    document.getElementById("s2_temp_lbl").textContent = temp === 37 ? "37°C (Sinh lý)" : `${temp}°C (Đun nóng)`;

    const isEndo = t === "endotoxin";
    const data = {
      diphtheria: { name: "Ngoại độc tố Bạch hầu", nature: "Protein (Plasmid/Phage)", dose: "Rất độc (Liều chết: 40 ng)", receptor: "Có thụ thể trên tế bào cơ thể", target: "Ngưng tổng hợp protein tế bào", fever: "Không gây sốt trực tiếp; bệnh đặc hiệu" },
      botulinum: { name: "Ngoại độc tố Botulinum", nature: "Protein (Cực độc)", dose: "Rất độc (Cực độc)", receptor: "Có thụ thể trên tế bào thần kinh", target: "Tác động thần kinh gây LIỆT MỀM", fever: "Không gây sốt; bệnh liệt mềm đặc hiệu" },
      tetani: { name: "Ngoại độc tố Uốn ván", nature: "Protein (Cực độc)", dose: "Rất độc (Cực độc)", receptor: "Có thụ thể trên tế bào thần kinh", target: "Tác động thần kinh gây CO CỨNG CƠ", fever: "Không gây sốt; bệnh uốn ván đặc hiệu" },
      tsst1: { name: "Độc tố TSST-1 (S. aureus niêm mạc)", nature: "Protein", dose: "Rất độc", receptor: "Có thụ thể tế bào miễn dịch", target: "Gây hội chứng sốc độc tố", fever: "Gây sốc độc tố đặc hiệu" },
      cholera: { name: "Độc tố ruột (V. cholerae...)", nature: "Protein", dose: "Rất độc", receptor: "Có thụ thể niêm mạc ruột", target: "Gây tiêu chảy cấp mất nước", fever: "Không gây sốt; tiêu chảy đặc hiệu" },
      perfringens: { name: "Độc tố C. perfringens", nature: "Protein", dose: "Rất độc", receptor: "Có thụ thể màng mô", target: "Hoại thư sinh hơi – hoại tử mô", fever: "Gây hoại tử mô đặc hiệu" },
      endotoxin: { name: "Nội độc tố LPS (Gram âm)", nature: "Lipopolysaccharide (Gen trên NST)", dose: "Tương đối ít độc", receptor: "KHÔNG có thụ thể đặc hiệu", target: "IL-1 (sốt), BC giảm→tăng, giãn mạch/sốc, C3 biến đổi, DIC", fever: "Hay gây sốt, choáng (không đặc hiệu)" }
    }[t];

    const heatLost = !isEndo && temp >= 65;
    const toxoidOk = !isEndo && chem === "toxoid";
    let activity = "HOẠT ĐỘNG ĐỘC TÍNH TỐI ĐA";
    let actColor = "var(--danger)";
    if (isEndo && chem === "toxoid") {
      activity = "KHÔNG THỂ CHẾ GIẢI ĐỘC TỐ! (Tính sinh kháng nguyên yếu)";
      actColor = "var(--warning)";
    } else if (isEndo && temp >= 65) {
      activity = "VẪN CÒN ĐỘC TÍNH (LPS tương đối bền với nhiệt!)";
      actColor = "var(--danger)";
    } else if (toxoidOk) {
      activity = "MẤT ĐỘC TÍNH – GIỮ TÍNH KHÁNG NGUYÊN (Thành Giải độc tố chủng ngừa!)";
      actColor = "var(--success)";
    } else if (heatLost) {
      activity = "BỊ PHÁ HỦY BỞI NHIỆT (Ngoại độc tố không bền với nhiệt!)";
      actColor = "var(--success)";
    }

    document.getElementById("s2_out").innerHTML = `
      <div class="metric-cards">
        <div class="metric-card">
          <div class="metric-label">Phân loại &amp; Nguồn</div>
          <div class="metric-val" style="font-size:14px;">${isEndo ? "Nội độc tố (VK chết)" : "Ngoại độc tố (VK sống)"}</div>
          <div class="metric-sub">${data.nature}</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">Thụ thể &amp; Độc lực</div>
          <div class="metric-val" style="font-size:14px;color:var(--purple)">${data.dose}</div>
          <div class="metric-sub">${data.receptor}</div>
        </div>
        <div class="metric-card" style="border:2px solid ${actColor}">
          <div class="metric-label">Kết quả Thử nghiệm (${temp}°C)</div>
          <div class="metric-val" style="font-size:13.5px;color:${actColor}">${activity}</div>
        </div>
      </div>
      <div class="callout ${isEndo ? "warning" : "trap"}" style="margin:0;">
        <div class="callout-title">🔬 Cơ chế Tác động Sinh lý Bệnh: ${data.name}</div>
        <p><strong>Tác động đích:</strong> ${data.target}.<br/>
        <strong>Biểu hiện lâm sàng &amp; Sốt:</strong> ${data.fever}.<br/>
        ${isEndo ? "<strong>Chuỗi hậu quả Nội độc tố (tr. 43):</strong> Kích thích tiết IL-1 → Sốt → Bạch cầu giảm rồi tăng → Giãn mạch, tăng tính thấm, giảm hồi lưu → Tụt HA/Sốc &amp; Toan huyết → Hoạt hóa C3 con đường biến đổi → Đông máu nội mạch rải rác (DIC) → Tử vong." : "<strong>Chú ý:</strong> Ngoại độc tố có tính sinh kháng nguyên cao nên có thể chế thành giải độc tố (toxoid) để chủng ngừa (như giải độc tố bạch hầu, uốn ván)."}</p>
      </div>
    `;
  },

  // ========================================================================
  // BÀI 3: PHÒNG LAB HÀNG RÀO KÝ CHỦ, THỰC BÀO & MIỄN DỊCH
  // ========================================================================
  sim_host_immunity(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Tình huống Ký chủ / Miễn dịch (tr. 44–46):</label>
          <select id="s3_state" onchange="Simulators.upd_s3()">
            <option value="healthy">1. Ký chủ Khỏe mạnh (Opsonin hóa Fc + C3 đầy đủ)</option>
            <option value="smoker">2. Hút thuốc lá / Uống rượu / Dùng thuốc phiện / Nhiễm virus hô hấp</option>
            <option value="diabetes">3. Bệnh nhân Đái tháo đường (Tăng đường huyết)</option>
            <option value="hypophos">4. Giảm phosphate máu hoặc Tăng áp lực thẩm thấu</option>
            <option value="newborn_coliform">5. Trẻ sơ sinh (&lt; 6 tháng) phơi nhiễm Coliform vs Bệnh khác</option>
            <option value="sad_serum">6. Bệnh nhân Bạch hầu được tiêm Huyết thanh SAD</option>
            <option value="vaccine_t">7. Chủng ngừa Vaccin / Truyền tế bào Lympho T</option>
          </select>
        </div>
      </div>
      <div id="s3_out"></div>
    `;
    this.upd_s3();
  },
  upd_s3() {
    const st = document.getElementById("s3_state").value;
    const map = {
      healthy: {
        barrier: "Nguyên vẹn (Lysozym, IgA tiết, lông chuyển, VSV thường trú)",
        phago: "Bắt nuốt (+) và Giết khuẩn (+) mạnh qua H₂O₂, iod, clo",
        immType: "Miễn dịch không đặc hiệu + Đặc hiệu phối hợp",
        transfer: "Opsonin hóa tối ưu nhờ thụ thể Fc (IgG) và C3 (bổ thể)",
        color: "var(--success)",
        note: "Thực bào di động (BC đa nhân, đơn nhân) và định cư (Kupffer gan, mô bào, phế bào) tiêu diệt vi khuẩn hiệu quả."
      },
      smoker: {
        barrier: "TỔN THƯƠNG NIÊM MẠC HÔ HẤP (Liệt/hỏng lông chuyển & chất nhầy)",
        phago: "Giảm khả năng dọn sạch tại phế nang",
        immType: "Suy yếu hàng rào sinh lý tại ngả vào hô hấp",
        transfer: "Dễ dàng dẫn đến nhiễm khuẩn đường hô hấp tăng cao",
        color: "var(--danger)",
        note: "Trang 44: Tổn thương hệ thống bảo vệ hô hấp (dùng rượu, thuốc lá, thuốc phiện, nhiễm virus đường hô hấp) đều dễ dàng làm nhiễm khuẩn hô hấp tăng lên."
      },
      diabetes: {
        barrier: "Hàng rào cơ học giảm khả năng lành thương",
        phago: "Bắt nuốt BÌNH THƯỜNG (+), nhưng ĐẠI BÀO MẤT KHẢ NĂNG GIẾT KHUẨN (–)!",
        immType: "Suy giảm Miễn dịch Tự nhiên tùy biến dưỡng / kích thích tố",
        transfer: "Nguy cơ nhiễm khuẩn nặng và dai dẳng hơn người bình thường",
        color: "var(--danger)",
        note: "Bẫy đề thi (tr. 45): Ở cơ thể bị đái tháo đường, hiện tượng thực bào vẫn bình thường nhưng đại bào mất khả năng giết chết vi khuẩn."
      },
      hypophos: {
        barrier: "Bình thường",
        phago: "GIẢM HOẠT ĐỘNG THỰC BÀO",
        immType: "Rối loạn nội môi làm giảm thực bào",
        transfer: "Ngược lại với viêm cấp tính (tăng khả năng giết của BC đa nhân)",
        color: "var(--warning)",
        note: "Trang 45: Sự tăng áp lực thẩm thấu và giảm phosphate máu đều làm giảm thực bào."
      },
      newborn_coliform: {
        barrier: "Đang hoàn thiện",
        phago: "Chức năng thực bào còn non yếu",
        immType: "Miễn dịch THU ĐƯỢC THỤ ĐỘNG (6 tháng đầu từ mẹ)",
        transfer: "IgG mẹ qua nhau thai (+); IgM diệt Coliform KHÔNG QUA NHAU THAI!",
        color: "var(--warning)",
        note: "Hai ý hay ra thi: (1) Trẻ < 6 tháng miễn dịch là Thu được thụ động (câu 5 tr. 46); (2) Viêm màng não mủ sơ sinh hay do Coliform vì kháng thể diệt Coliform là IgM không qua nhau thai được (tr. 45)."
      },
      sad_serum: {
        barrier: "Tạm thời trung hòa độc tố lưu hành",
        phago: "Hỗ trợ dọn phức hợp kháng nguyên – kháng thể",
        immType: "Miễn dịch THU ĐƯỢC THỤ ĐỘNG (Huyết thanh liệu pháp)",
        transfer: "Miễn dịch thể dịch (B): CÓ THỂ truyền bằng huyết thanh",
        color: "var(--primary)",
        note: "Trang 46: Tiêm SAD cho bệnh nhân bạch hầu là cung cấp kháng thể chống độc tố có sẵn để trung hòa độc tố trong máu → miễn dịch thu được thụ động."
      },
      vaccine_t: {
        barrier: "Tăng cường bảo vệ đặc hiệu lâu dài",
        phago: "Tế bào T tiết lymphokine tăng cường đại thực bào",
        immType: "Miễn dịch THU ĐƯỢC CHỦ ĐỘNG (Tế bào B & T)",
        transfer: "Thể dịch (B) truyền qua huyết thanh; Tế bào (T) CHỈ truyền bằng tế bào lympho!",
        color: "var(--accent)",
        note: "Trang 46: Lympho B (túi Bursa) chịu trách nhiệm miễn dịch thể dịch truyền qua huyết thanh; Lympho T (Thymus) chịu trách nhiệm miễn dịch tế bào, KHÔNG truyền bằng huyết thanh mà chỉ bằng tế bào lympho, và T còn giúp đỡ B."
      }
    }[st];

    document.getElementById("s3_out").innerHTML = `
      <div class="metric-cards">
        <div class="metric-card" style="border:2px solid ${map.color}">
          <div class="metric-label">Hàng rào Ngả vào</div>
          <div class="metric-val" style="font-size:13.5px;color:${map.color}">${map.barrier}</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">Trạng thái Thực bào</div>
          <div class="metric-val" style="font-size:13.5px;">${map.phago}</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">Phân loại Miễn dịch</div>
          <div class="metric-val" style="font-size:13.5px;color:var(--primary)">${map.immType}</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">Khả năng Truyền / Cơ chế</div>
          <div class="metric-val" style="font-size:13.5px;color:var(--purple)">${map.transfer}</div>
        </div>
      </div>
      <div class="callout pearl" style="margin:0;">
        <div class="callout-title">💡 Điểm Chốt Ghi nhớ Thi SĐH</div>
        <p>${map.note}</p>
      </div>
    `;
  },

  // ========================================================================
  // BÀI 4: BẢN ĐỒ TƯƠNG TÁC 4 ĐÍCH TÁC ĐỘNG KHÁNG SINH
  // ========================================================================
  sim_abx_mechanisms(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Thuốc / Nhóm Kháng sinh:</label>
          <select id="s4_drug" onchange="Simulators.upd_s4()">
            <option value="betalactam">β-lactam (Penicillin, Cephalosporin)</option>
            <option value="polymyxin">Polymyxin B / Colistin</option>
            <option value="polyene">Polyene (Amphotericin B, Nystatin)</option>
            <option value="aminoglycoside">Aminoglycoside (Gentamicin, Amikacin)</option>
            <option value="chloram">Chloramphenicol / Macrolide / Lincosamide</option>
            <option value="linezolid">Oxazolidinone (Linezolid)</option>
            <option value="rifampin">Rifampin</option>
            <option value="quinolone">Quinolone / Fluoroquinolone</option>
            <option value="tmpsmx">Sulfonamide + Trimethoprim</option>
          </select>
        </div>
        <div class="control-group">
          <label>Chọn Tế bào Đích:</label>
          <select id="s4_cell" onchange="Simulators.upd_s4()">
            <option value="gpos">Vi khuẩn Gram dương (Áp lực nội bào cao 3–5×)</option>
            <option value="gneg">Vi khuẩn Gram âm (Có màng ngoài LPS)</option>
            <option value="fungi">Vi nấm (Màng có Sterol, không peptidoglycan)</option>
            <option value="mammal">Tế bào Động vật Hữu nhũ (Ký chủ)</option>
          </select>
        </div>
        <div class="control-group">
          <label>Môi trường Thẩm thấu (Dành cho nhóm ức chế vách):</label>
          <select id="s4_env" onchange="Simulators.upd_s4()">
            <option value="iso">Đẳng trương (Isotonic – Sinh lý)</option>
            <option value="hyper">Ưu trương (Hypertonic)</option>
          </select>
        </div>
      </div>
      <div id="s4_out"></div>
    `;
    this.upd_s4();
  },
  upd_s4() {
    const drug = document.getElementById("s4_drug").value;
    const cell = document.getElementById("s4_cell").value;
    const env = document.getElementById("s4_env").value;

    let targetSite = "", outcome = "", color = "var(--primary)", detail = "";
    if (drug === "betalactam") {
      targetSite = "3–6 thụ thể PBPs (Transpeptidase) trên vách Peptidoglycan";
      if (cell === "mammal" || cell === "fungi") {
        outcome = "KHÔNG TÁC DỤNG (An toàn với TB hữu nhũ / nấm)";
        color = "var(--success)";
        detail = "Tế bào hữu nhũ và vi nấm KHÔNG có vách peptidoglycan nên không chịu độc tính của β-lactam.";
      } else if (env === "iso") {
        outcome = "LY GIẢI TẾ BÀO (Hoạt hóa Autolytic enzymes)";
        color = "var(--danger)";
        detail = "β-lactam phong bế transpeptidase và hoạt hóa enzym tự tiêu (autolysin) làm tế bào vỡ trong môi trường đẳng trương (nếu thiếu autolysin sẽ thành dung nạp / tolerant).";
      } else {
        outcome = cell === "gpos" ? "BIẾN THÀNH PROTOPLAST (Hình cầu không vách)" : "BIẾN THÀNH SPHEROPLAST (Vách không hoàn chỉnh)";
        color = "var(--warning)";
        detail = "Áp lực nội bào Gram+ > Gram- 3–5 lần. Ở môi trường ưu trương, vi khuẩn tồn tại tạm dưới dạng Protoplast (Gram+) hoặc Spheroplast (Gram-) nhưng rất dễ vỡ.";
      }
    } else if (drug === "polymyxin") {
      targetSite = "Màng tế bào chất không chứa sterol (Vi khuẩn Gram–)";
      if (cell === "gneg") { outcome = "DIỆT KHUẨN MẠNH (Rối loạn thẩm thấu màng)"; color = "var(--danger)"; detail = "Polymyxin gắn màng bào tương Gram– làm thoát đại phân tử & ion ra ngoài."; }
      else if (cell === "fungi") { outcome = "KHÔNG TÁC DỤNG (Màng nấm chứa Sterol)"; color = "var(--success)"; detail = "Polymyxin không tác dụng lên tế bào vi nấm có sterol."; }
      else if (cell === "gpos") { outcome = "KHÁNG (Không tác dụng lên Gram dương)"; color = "var(--warning)"; detail = "Theo tr. 57: Các vi khuẩn Gram dương, cầu khuẩn Gram âm và Mycobacteria đều kháng Polymyxin."; }
      else { outcome = "ĐỘC TÍNH THẬN CAO nếu dùng liều toàn thân"; color = "var(--warning)"; detail = "Polymyxin độc tính cao trên thận ký chủ."; }
    } else if (drug === "polyene") {
      targetSite = "Sterol trong màng tế bào Vi nấm (Amphotericin B, Nystatin)";
      if (cell === "fungi") { outcome = "DIỆT NẤM (Tương tác với Sterol màng nấm)"; color = "var(--danger)"; detail = "Polyenes phải tương tác với sterol trong màng tế bào vi nấm mới phát huy hiệu quả."; }
      else if (cell === "gpos" || cell === "gneg") { outcome = "KHÔNG TÁC DỤNG (Vi khuẩn không có Sterol)"; color = "var(--success)"; detail = "Màng tế bào vi khuẩn KHÔNG có sterol nên Polyenes hoàn toàn không diệt được vi khuẩn."; }
      else { outcome = "Có thể gắn cholesterol màng hữu nhũ (gây độc nhất định)"; color = "var(--warning)"; detail = "Amphotericin B có độc tính trên thận người nhưng ưu tiên sterol nấm (ergosterol)."; }
    } else if (drug === "aminoglycoside") {
      targetSite = "Tiểu đơn vị 30S Ribosome (4 giai đoạn • Phá vỡ Polysomes)";
      if (cell === "gpos" || cell === "gneg") { outcome = "DIỆT KHUẨN (Đọc sai mã mRNA ở vùng nhận diện)"; color = "var(--danger)"; detail = "Gắn 30S → phong bế phức hợp khởi đầu → đọc sai mã mRNA tạo protein vô dụng → vỡ polysomes thành monosomes."; }
      else { outcome = "Không tác dụng lên nấm / An toàn đích ribosome 80S hữu nhũ (lưu ý độc tai & thận)"; color = "var(--warning)"; detail = "Ribosome vi khuẩn 70S (30S+50S) khác ribosome 80S của hữu nhũ; tuy nhiên aminoglycoside độc dây VIII và thận."; }
    } else if (drug === "chloram") {
      targetSite = "Tiểu đơn vị 50S Ribosome (Peptidyl transferase / 23S rRNA)";
      if (cell === "gpos" || cell === "gneg") { outcome = "KÌM KHUẨN (Ngưng tổng hợp Protein)"; color = "var(--primary)"; detail = "Chloramphenicol ức chế peptidyl transferase trên 50S; Macrolide gắn 23S rRNA trên 50S; Lincosamide gắn 50S."; }
      else { outcome = "Chloramphenicol có thể gây thiếu máu suy tủy ở người"; color = "var(--warning)"; detail = "Cần lưu ý biến chứng suy tủy của Chloramphenicol (tr. 56)."; }
    } else if (drug === "linezolid") {
      targetSite = "Phức hợp đầu tiên N-formylmethionyl-tRNA tại 30S (tr. 50, 59)";
      outcome = cell === "gpos" ? "ỨC CHẾ MẠNH CẦU KHUẨN GRAM DƯƠNG (Kể cả kháng Glycopeptide)" : "Ít tác dụng trên Gram âm / nấm / tế bào hữu nhũ";
      color = cell === "gpos" ? "var(--danger)" : "var(--text-muted)";
      detail = "Theo sách YDS 2016 (tr. 50, 59): Linezolid ngăn dịch mã bằng cách ức chế phức hợp N-formylmethionyl-tRNA ở tiểu phần 30S, chủ yếu trên Gram dương.";
    } else if (drug === "rifampin") {
      targetSite = "RNA polymerase vi khuẩn (Ức chế tổng hợp RNA)";
      outcome = (cell === "gpos" || cell === "gneg") ? "ỨC CHẾ TỔNG HỢP RNA (Chú ý đột biến kháng nhanh 10⁻⁵)" : "Không ức chế RNA polymerase tế bào hữu nhũ ở liều điều trị";
      color = "var(--primary)";
      detail = "Rifampin gắn chặt RNA polymerase vi khuẩn; tần số đột biến kháng ở lao rất cao (10⁻⁵–10⁻⁶) nên phải phối hợp thuốc.";
    } else if (drug === "quinolone") {
      targetSite = "Enzym DNA gyrase (Ức chế tổng hợp DNA)";
      outcome = (cell === "gpos" || cell === "gneg") ? "DIỆT KHUẨN (Phong bế DNA gyrase)" : "Không tác động lên nấm / ít ảnh hưởng DNA người";
      color = "var(--danger)";
      detail = "Quinolone/Fluoroquinolone phong bế DNA gyrase, kháng thuốc do đột biến tiểu đơn vị A hoặc giảm thấm màng ngoài.";
    } else {
      targetSite = "Sulfonamide (cạnh tranh PABA) + Trimethoprim (ức chế DHFR)";
      if (cell === "mammal") { outcome = "AN TOÀN CAO (TB động vật không tự tổng hợp acid folic & Trimethoprim yếu hơn 50.000×)"; color = "var(--success)"; detail = "Tế bào động vật lấy acid folic từ ngoài và DHFR vi khuẩn nhạy với Trimethoprim gấp 50.000 lần tế bào hữu nhũ!"; }
      else { outcome = "HIỆP ĐỒNG CHẶN 2 BƯỚC TỔNG HỢP ACID FOLIC → PURINE DNA"; color = "var(--danger)"; detail = "Sulfonamide chặn PABA, Trimethoprim chặn khử dihydrofolic → tetrahydrofolic."; }
    }

    document.getElementById("s4_out").innerHTML = `
      <div class="metric-cards">
        <div class="metric-card">
          <div class="metric-label">Đích Tác động Phân tử</div>
          <div class="metric-val" style="font-size:14px;">${targetSite}</div>
        </div>
        <div class="metric-card" style="border:2px solid ${color}">
          <div class="metric-label">Kết quả Tương tác</div>
          <div class="metric-val" style="font-size:14px;color:${color}">${outcome}</div>
        </div>
      </div>
      <div class="callout pearl" style="margin:0;">
        <div class="callout-title">🧬 Giải thích Cơ chế theo Sách Vi khuẩn Y học 2016</div>
        <p>${detail}</p>
      </div>
    `;
  },

  // ========================================================================
  // BÀI 5: TRA CỨU PHỔ KHÁNG KHUẨN β-LACTAM & CÁC HỌ CHÍNH
  // ========================================================================
  sim_abx_classes(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Kháng sinh cần Tra cứu Phổ &amp; Đặc tính:</label>
          <select id="s5_abx" onchange="Simulators.upd_s5()">
            <option value="pncg">Penicillin G (Benzyl-penicillin)</option>
            <option value="nafcillin">Nafcillin (Penicillin kháng β-lactamase)</option>
            <option value="ampicillin">Ampicillin / Amoxicillin</option>
            <option value="c1g">Cephalosporin TH1 (Cefazolin, Cephalexin)</option>
            <option value="cefoxitin">Cephamycin TH2 (Cefoxitin, Cefotetan)</option>
            <option value="ceftriaxone">Cephalosporin TH3 (Ceftriaxone, Cefotaxime)</option>
            <option value="ceftazidime">Cephalosporin TH3 (Ceftazidime, Cefoperazone)</option>
            <option value="cefepime">Cephalosporin TH4 (Cefepime)</option>
            <option value="ceftobiprole">Cephalosporin TH5 (Ceftobiprole vs Ceftaroline)</option>
            <option value="aztreonam">Monobactam (Aztreonam)</option>
            <option value="imipenem">Carbapenem (Imipenem+Cilastatin / Meropenem)</option>
            <option value="ertapenem">Carbapenem (Ertapenem)</option>
            <option value="chloram">Chloramphenicol</option>
            <option value="macrolide">Macrolide (Erythromycin, Azithromycin, Clarithromycin)</option>
            <option value="clindamycin">Lincosamide (Clindamycin vs Lincomycin)</option>
          </select>
        </div>
      </div>
      <div id="s5_out"></div>
    `;
    this.upd_s5();
  },
  upd_s5() {
    const k = document.getElementById("s5_abx").value;
    const db = {
      pncg: ["Nhạy cao", "KHÁNG (β-lac)", "Nhạy", "KHÔNG", "KHÔNG", "KHÔNG", "Không bền acid", "Hủy bởi penicillinase thành penicillinoic acid; Fleming 1928."],
      nafcillin: ["Nhạy (tụ cầu)", "KHÁNG", "Yếu hơn PNC-G", "KHÔNG", "KHÔNG", "KHÔNG", "Tiêm", "Kháng β-lactamase, tác động Gram+ thấp hơn PNC-G và KHÔNG Gram-."],
      ampicillin: ["Nhạy (nếu ko β-lac)", "KHÁNG", "Nhạy", "Mở rộng Gram–", "KHÔNG", "KHÔNG", "Amox bền acid", "Phổ rộng Gram+ & Gram- nhưng bị β-lactamase phá hủy → phối hợp Sulbactam/Clavulanate."],
      c1g: ["Mạnh nhất Gram+", "KHÁNG", "TRỪ Enterococci!", "Trung bình (E. coli, Kleb)", "KHÔNG", "KHÔNG B. fragilis", "KHÔNG thấm TKTW", "Không dùng trị viêm màng não; nhạy cầu khuẩn kỵ khí nhưng không B. fragilis."],
      cefoxitin: ["Mạnh vừa", "KHÁNG", "KHÁNG", "Tốt (kháng β-lac cổ điển)", "KHÔNG", "RẤT MẠNH B. fragilis", "Ít vào DNT", "Thuộc Cephamycin (nấm Actinomyces) xếp vào TH2; dùng trị viêm phúc mạc, viêm vùng chậu."],
      ceftriaxone: ["Giảm Gram+", "KHÁNG", "S. pneumoniae (+)", "RẤT MẠNH", "KHÔNG", "KHÔNG", "THẤM TỐT TKTW", "Trị viêm màng não mủ do trực khuẩn Gram âm; không diệt Pseudomonas."],
      ceftazidime: ["Giảm Gram+", "KHÁNG", "S. pneumoniae (+)", "RẤT MẠNH", "RẤT MẠNH (Pseudomonas)", "KHÔNG", "Ceftazidime (+); Cefoperazone (–)", "Ceftazidime & Cefoperazone diệt Pseudomonas; riêng Cefoperazone KHÔNG thấm tốt TKTW!"],
      cefepime: ["Mạnh như TH1", "KHÁNG", "Tốt", "Kháng β-lac cao hơn TH3", "MẠNH", "KHÔNG", "XUYÊN HÀNG RÀO MÁU NÃO", "Trị viêm màng não và Pseudomonas aeruginosa."],
      ceftobiprole: ["Mạnh", "HIỆU QUẢ MRSA!", "Ceftobiprole diệt VRE!", "Rộng", "Ceftobiprole (+); Ceftaroline (–)", "—", "Hệ thống", "TH5 trị MRSA! Lưu ý: Ceftobiprole diệt được Pseudomonas & VRE; Ceftaroline KHÔNG có tác dụng này."],
      aztreonam: ["KHÔNG", "KHÁNG", "KHÔNG", "MẠNH (chỉ Gram–)", "Có hoạt tính", "KHÔNG", "Hệ thống", "Monobactam duy nhất: CHỈ diệt vi khuẩn Gram âm, vô hiệu với Gram+ và kỵ khí."],
      imipenem: ["Rất mạnh", "KHÁNG MRSA!", "Tốt (trừ MRSA)", "BỀN VỚI ESBL!", "MẠNH (Doripenem mạnh nhất)", "Tốt", "Imipenem thấm DNT tốt", "Imipenem phải phối hợp Cilastatin (chống dihydropeptidase ống thận); Meropenem không bị dipeptidase hủy."],
      ertapenem: ["Rất mạnh", "KHÁNG MRSA!", "Tốt", "BỀN VỚI ESBL!", "KHÔNG Pseudomonas & Acinetobacter!", "Tốt", "Hệ thống", "Carbapenem bền ESBL nhưng KHÔNG diệt Pseudomonas và Acinetobacter."],
      chloram: ["Tốt", "Thay đổi", "Tốt", "Salmonella, H. inf β-lac+", "KHÔNG", "RẤT TỐT (Áp-xe não)", "THẤM TỐT TKTW & DNT", "Ngưng khuẩn; biến chứng nặng: Thiếu máu suy tủy! Chọn lọc sốt thương hàn, áp-xe não."],
      macrolide: ["Mạnh", "Thay đổi", "Mạnh", "KHÔNG (Entero/Ps/Acineto)", "KHÔNG", "Hạn chế", "Thấm mô tốt", "Chọn lọc: M. pneumoniae, C. trachomatis, L. pneumophila, C. jejuni, H. pylori (Clarithromycin)."],
      clindamycin: ["Mạnh (Lincomycin: xương)", "Thay đổi", "Mạnh", "KHÔNG", "KHÔNG", "RẤT MẠNH (B. fragilis)", "KHÔNG VÀO TKTW", "Bền acid (uống/IV). Clindamycin trị kỵ khí nặng; Lincomycin trị viêm tủy xương tụ cầu."]
    }[k];

    const badge = (txt) => {
      const bad = txt.includes("KHÔNG") || txt.includes("KHÁNG");
      const good = txt.includes("MẠNH") || txt.includes("HIỆU QUẢ") || txt.includes("ESBL") || txt.includes("THẤM TỐT") || txt.includes("XUYÊN");
      const col = bad ? "var(--danger)" : good ? "var(--success)" : "var(--primary)";
      return `<span style="font-weight:700;color:${col}">${txt}</span>`;
    };

    document.getElementById("s5_out").innerHTML = `
      <div class="table-responsive">
        <table class="med-table">
          <thead>
            <tr>
              <th>Cầu khuẩn Gram+</th>
              <th>MRSA</th>
              <th>Phế cầu / Enterococci</th>
              <th>Trực khuẩn Gram–</th>
              <th>Pseudomonas</th>
              <th>Kỵ khí (B. fragilis)</th>
              <th>Thấm DNT / Đường dùng</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${badge(db[0])}</td>
              <td>${badge(db[1])}</td>
              <td>${badge(db[2])}</td>
              <td>${badge(db[3])}</td>
              <td>${badge(db[4])}</td>
              <td>${badge(db[5])}</td>
              <td>${badge(db[6])}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="callout pearl" style="margin:0;">
        <div class="callout-title">📌 Điểm nhấn Lâm sàng &amp; Bẫy Đề thi</div>
        <p>${db[7]}</p>
      </div>
    `;
  },

  // ========================================================================
  // BÀI 6: PHÒNG LAB ĐA KHÁNG (MRSA/VRE/KỴ KHÍ) & KHÁNG LAO
  // ========================================================================
  sim_special_tb(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Tác nhân Đa kháng / Bệnh lý Đặc biệt:</label>
          <select id="s6_bug" onchange="Simulators.upd_s6()">
            <option value="mrsa">1. Tụ cầu kháng Methicillin (MRSA)</option>
            <option value="vre">2. Enterococci kháng Vancomycin (VRE)</option>
            <option value="cdiff">3. Tiêu chảy liên quan Kháng sinh do Clostridium difficile</option>
            <option value="mdr_gn">4. Trực khuẩn Gram âm đa kháng (Pseudomonas / Acinetobacter)</option>
            <option value="leprosy">5. Bệnh Phong (Mycobacterium leprae) / PCP ở AIDS</option>
            <option value="tb">6. Bệnh Lao (Mycobacterium tuberculosis)</option>
          </select>
        </div>
        <div class="control-group">
          <label>Kiểm tra Độc tính Đặc trưng của Thuốc:</label>
          <select id="s6_tox" onchange="Simulators.upd_s6()">
            <option value="ethambutol">Ethambutol (Kháng lao)</option>
            <option value="pyrazinamide">Pyrazinamide (Kháng lao)</option>
            <option value="rifampin">Rifampin (Kháng lao)</option>
            <option value="inh">Isoniazid / INH (Kháng lao)</option>
            <option value="dapsone">Dapsone (Trị phong)</option>
            <option value="ag">Aminoglycoside (Gentamicin / Streptomycin)</option>
            <option value="colistin">Polymyxin B / Colistin</option>
          </select>
        </div>
      </div>
      <div id="s6_out"></div>
    `;
    this.upd_s6();
  },
  upd_s6() {
    const bug = document.getElementById("s6_bug").value;
    const tox = document.getElementById("s6_tox").value;

    const bugs = {
      mrsa: {
        drugs: "Vancomycin, Teicoplanin (1 lần/ngày), Linezolid, Daptomycin, Streptogramin (30:70), Tigecyclin, Cephalosporin TH5 (Ceftobiprole, Ceftaroline)",
        avoid: "Mọi Carbapenem (Imipenem, Meropenem...), Cephalosporin TH1–TH4 đều KHÔNG diệt được MRSA!"
      },
      vre: {
        drugs: "Linezolid (Oxazolidinone), Streptogramin (Quinupristin/Dalfopristin 30:70), Ceftobiprole (TH5), Tigecyclin",
        avoid: "Vancomycin vô hiệu; Enterococci kháng vancomycin thường kháng luôn Quinolone; Ceftaroline không diệt VRE!"
      },
      cdiff: {
        drugs: "Metronidazole (đặc hiệu trị tiêu chảy liên quan kháng sinh do C. difficile & vi khuẩn kỵ khí / đơn bào)",
        avoid: "Không tiếp tục lạm dụng kháng sinh phổ rộng gây loạn khuẩn bội nhiễm."
      },
      mdr_gn: {
        drugs: "Polymyxin B / Colistin (mạnh trên trực khuẩn Gram- kể cả Pseudomonas đa kháng), Doripenem, Ceftazidime, Cefepime, Fluoroquinolone",
        avoid: "Tigecyclin KHÔNG tốt với Pseudomonas, Stenotrophomonas maltophilia, Burkholderia cepacia; Ertapenem không diệt Pseudomonas/Acinetobacter."
      },
      leprosy: {
        drugs: "Dapsone phối hợp Rifampin (bệnh phong); Dapsone cũng trị Pneumocystis pneumonia ở bệnh nhân AIDS",
        avoid: "Không dùng đơn độc vì dễ kháng; theo dõi thiếu máu tán huyết do Dapsone."
      },
      tb: {
        drugs: "Phối hợp đa thuốc: Rifampin + Isoniazid (INH) + Ethambutol + Pyrazinamide (PAS nay ít dùng do độc tiêu hóa)",
        avoid: "TUYỆT ĐỐI không dùng đơn độc Rifampin (tần số đột biến kháng 10⁻⁵–10⁻⁶); lao kháng Sulfonamide."
      }
    }[bug];

    const toxs = {
      ethambutol: "Rối loạn thị giác (tác dụng phụ thường gặp nhất) • Quá mẫn.",
      pyrazinamide: "Độc gan (1–5%) • Tăng acid uric huyết (hyperuricemia) • Buồn nôn, ói mửa. Không kháng chéo với INH.",
      rifampin: "Tần số đột biến kháng cao (10⁻⁵–10⁻⁶) nếu dùng đơn độc • Gắn RNA polymerase (< 1 μg/mL).",
      inh: "Ức chế tổng hợp acid mycolic • Thấm cực tốt vào các mô kể cả Dịch não tủy!",
      dapsone: "Thiếu máu tán huyết • Không dung nạp tiêu hóa, sốt, ngứa, mẩn đỏ.",
      ag: "Độc dây thần kinh thính giác (VIII) và Thận • Hoạt tính mạnh hơn ở pH kiềm.",
      colistin: "Độc tính cao nhất là đối với Thận • Không vào được dịch não tủy hay khớp xương."
    }[tox];

    document.getElementById("s6_out").innerHTML = `
      <div class="grid-2">
        <div class="callout pearl" style="margin:0;">
          <div class="callout-title">✅ Lựa chọn Điều trị Chuẩn</div>
          <p><strong>Thuốc hiệu quả:</strong> ${bugs.drugs}</p>
        </div>
        <div class="callout trap" style="margin:0;">
          <div class="callout-title">⚠️ Thuốc Không hiệu quả / Bẫy Lâm sàng</div>
          <p>${bugs.avoid}</p>
        </div>
      </div>
      <div class="callout warning" style="margin-top:12px;margin-bottom:0;">
        <div class="callout-title">🩺 Cảnh báo Dược lý &amp; Độc tính Thuốc đang chọn</div>
        <p>${toxs}</p>
      </div>
    `;
  },

  // ========================================================================
  // BÀI 7: MÔ PHỎNG PHỐI HỢP KHÁNG SINH & TRUYỀN GEN KHÁNG THUỐC
  // ========================================================================
  sim_resistance_synergy(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Cặp Phối hợp Kháng sinh (tr. 64–65):</label>
          <select id="s7_pair" onchange="Simulators.upd_s7()">
            <option value="smx_tmp">1. Sulfonamide + Trimethoprim (Shigella, Salmonella, PCP)</option>
            <option value="amp_gent">2. Ampicillin + Gentamicin (Viêm nội tâm mạc E. faecalis)</option>
            <option value="pip_tob">3. Piperacillin + Tobramycin (Chống Pseudomonas)</option>
            <option value="amox_clav">4. Amoxicillin + Acid Clavulanic (hoặc Sulbactam/Tazobactam)</option>
            <option value="ampho_fluc">5. Amphotericin B + Flucytosine (Nấm Cryptococcus, Candida)</option>
            <option value="rif_inh">6. Rifampin + Isoniazid (Điều trị Lao)</option>
            <option value="pnc_chloram">7. Penicillin/Aminoglycoside + Chloramphenicol/Tetracyclin</option>
          </select>
        </div>
        <div class="control-group">
          <label>Thứ tự &amp; Liều lượng đưa thuốc vào ổ nhiễm:</label>
          <select id="s7_order" onchange="Simulators.upd_s7()">
            <option value="optimal">Đưa đồng thời / Diệt khuẩn trước ở liều đủ cao</option>
            <option value="static_first">Thuốc kìm khuẩn đến ổ nhiễm TRƯỚC ở liều tối thiểu</option>
          </select>
        </div>
      </div>
      <div id="s7_out"></div>
    `;
    this.upd_s7();
  },
  upd_s7() {
    const pair = document.getElementById("s7_pair").value;
    const order = document.getElementById("s7_order").value;

    let type = "HIỆP ĐỒNG (SYNERGISM)", color = "var(--success)", mech = "", curvePath = "M 30,30 Q 140,95 360,120", label = "Diệt khuẩn tăng vọt (Hiệp đồng)";
    if (pair === "smx_tmp") {
      mech = "Cơ chế Hiệp đồng 1: Hai thuốc lần lượt ức chế 2 bước trên cùng con đường biến dưỡng acid folic (Sulfonamide cạnh tranh PABA; Trimethoprim ức chế DHFR).";
    } else if (pair === "amp_gent") {
      mech = "Cơ chế Hiệp đồng 2: Thuốc ức chế vách tế bào (Ampicillin) phá vách giúp Aminoglycoside (Gentamicin) thấm vào tế bào dễ hơn → loại sạch Enterococcus faecalis trong viêm nội tâm mạc.";
    } else if (pair === "pip_tob") {
      mech = "Cơ chế Hiệp đồng 2: Piperacillin ức chế vách giúp Tobramycin đi vào tế bào dễ dàng → hiệp đồng diệt Pseudomonas.";
    } else if (pair === "amox_clav") {
      mech = "Cơ chế Hiệp đồng 4: Chất ức chế β-lactamase (Acid clavulanic, Sulbactam, Tazobactam) gắn không thuận nghịch vào β-lactamase, bảo vệ Amoxicillin/Ticarcillin/Piperacillin khỏi bị phá hủy.";
    } else if (pair === "ampho_fluc") {
      mech = "Cơ chế Hiệp đồng 3: Amphotericin B tác động lên màng tế bào (chứa sterol) giúp Flucytosine đi vào bên trong tế bào nấm (Cryptococcus, Candida) dễ dàng hơn.";
    } else if (pair === "rif_inh") {
      type = "PHỐI HỢP NGỪA ĐỘT BIẾN KHÁNG THUỐC";
      mech = "Hai thuốc không có phản ứng chéo: Mỗi thuốc sẽ loại trừ các chủng đột biến kháng thuốc kia (đặc biệt ngừa đột biến kháng Rifampin tần số 10⁻⁵–10⁻⁶).";
    } else {
      if (order === "static_first") {
        type = "ĐỐI KHÁNG (ANTAGONISM)";
        color = "var(--danger)";
        curvePath = "M 30,30 Q 160,42 360,48";
        label = "Hiệu lực thấp hơn đơn trị (Đối kháng!)";
        mech = "Thuốc kìm khuẩn (Chloramphenicol/Tetracyclin) đến trước làm ngừng tổng hợp protein & ngừng phân bào → vi khuẩn không nhân lên nên thuốc diệt khuẩn (Penicillin) mất tác dụng ly giải vách!";
      } else {
        type = "KHÔNG ĐỔI / NGUY CƠ ĐỐI KHÁNG";
        color = "var(--warning)";
        curvePath = "M 30,30 Q 160,65 360,72";
        label = "Không nên phối hợp Diệt khuẩn + Kìm khuẩn";
        mech = "Theo tr. 64 & câu 5 tr. 65: Phối hợp β-lactam với tetracyclin/chloramphenicol không cho tác dụng hiệp đồng và có nguy cơ đối kháng nếu thuốc kìm khuẩn đến trước.";
      }
    }

    document.getElementById("s7_out").innerHTML = `
      <div class="metric-cards">
        <div class="metric-card" style="border:2px solid ${color}">
          <div class="metric-label">Kết quả Tương tác Phối hợp</div>
          <div class="metric-val" style="font-size:16px;color:${color}">${type}</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">4 Kết quả có thể gặp khi Phối hợp</div>
          <div class="metric-sub" style="font-size:12.5px;font-weight:700;">Không đổi • Cộng • Đối kháng • Hiệp đồng</div>
        </div>
      </div>
      <div class="svg-stage" style="margin-bottom:12px;">
        <svg viewBox="0 0 420 145" style="width:100%;max-width:460px;">
          <line x1="30" y1="15" x2="30" y2="125" stroke="var(--text-muted)" stroke-width="2"/>
          <line x1="30" y1="125" x2="380" y2="125" stroke="var(--text-muted)" stroke-width="2"/>
          <text x="14" y="25" font-size="10" fill="var(--text-muted)">CFU</text>
          <text x="360" y="139" font-size="10" fill="var(--text-muted)">Giờ</text>
          <path d="M 30,30 Q 150,70 360,82" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,4"/>
          <text x="364" y="84" font-size="9.5" fill="#64748b">Đơn trị</text>
          <path d="${curvePath}" fill="none" stroke="${color}" stroke-width="4"/>
          <text x="200" y="26" text-anchor="middle" font-size="11.5" font-weight="800" fill="${color}">${label}</text>
        </svg>
      </div>
      <div class="callout ${color === "var(--danger)" ? "trap" : "pearl"}" style="margin:0;">
        <div class="callout-title">🔬 Cơ chế Dược lý Vi sinh</div>
        <p>${mech}</p>
      </div>
    `;
  }
};

// ==========================================================================
// 7 HOẠT CẢNH MINH HỌA QUÁ TRÌNH VI SINH & KHÁNG SINH TRỰC QUAN (ANIMATED SVG)
// Bổ sung trực quan tiến trình cho từng chuyên đề (KHÔNG thay thế lý thuyết chữ)
// ==========================================================================

window.ProcessAnimations = {
  timer: null,
  currentLessonId: null,
  currentStep: 0,
  isPlaying: false,

  stopTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.isPlaying = false;
  },

  specs: {
    // ======================================================================
    // BÀI 1: TIẾN TRÌNH NHIỄM KHUẨN & ĐỊNH ĐỀ KOCH - FALKOW
    // ======================================================================
    1: {
      title: "🎬 Minh họa 4 Giai đoạn Tiến trình Nhiễm khuẩn (Từ Ngả vào đến Lan tràn)",
      steps: [
        {
          name: "Bước 1: Xâm nhập từ Ngả vào (Biểu mô / Tổn thương)",
          desc: "Vi khuẩn gây bệnh (<em>pathogen</em>) xâm nhập qua <strong>biểu mô</strong> (hô hấp, tiêu hóa, sinh dục – tiết niệu) hoặc qua <strong>vết cắt, vết bỏng, vết thương</strong> ở da và niêm mạc.",
          highlight: "VSV thường trú ở đúng chỗ KHÔNG phải nhiễm khuẩn"
        },
        {
          name: "Bước 2: Bám dính & Tăng sinh Tạo nơi Nhiễm khuẩn Đầu tiên",
          desc: "Vi khuẩn phải <strong>bám dính tế bào ký chủ</strong> (vượt lực đẩy tĩnh điện nhờ tính kỵ nước, pili, LTA, protein M) và tăng sinh tại biểu mô tạo <strong>ổ nhiễm khuẩn đầu tiên</strong> (có thể thành người lành mang khuẩn nếu không triệu chứng).",
          highlight: "Shigella trong phân không triệu chứng = Nhiễm khuẩn!"
        },
        {
          name: "Bước 3: Lan tràn vào Mô & Vào máu (Bacteremia vs Septicemia)",
          desc: "Vi khuẩn lan trực tiếp vào mô hoặc qua <strong>đường bạch huyết</strong> vào máu: tạm thời = <strong>du khuẩn huyết (bacteremia)</strong>, trường diễn = <strong>nhiễm khuẩn huyết (septicemia)</strong>.",
          highlight: "H. influenzae b máu + DNT (tr. 46) = Du khuẩn huyết"
        },
        {
          name: "Bước 4: Định cư Cơ quan Đích hoặc Gây bệnh bằng Độc tố",
          desc: "Vi khuẩn từ máu đến định cư tăng sinh ở cơ quan thích hợp (như màng não), HOẶC ở tại chỗ nhưng <strong>sinh ngoại độc tố vào máu</strong> tấn công tim, thần kinh (VD: bệnh bạch hầu).",
          highlight: "Koch 1884 (4 phần) & Falkow phân tử 1988 (3 phần)"
        }
      ],
      renderSvg(s) {
        const a0 = s === 0, a1 = s === 1, a2 = s === 2, a3 = s === 3;
        return `
          <svg viewBox="0 0 640 215" class="proc-svg">
            <rect x="8" y="15" width="142" height="180" rx="12" fill="${a0 ? "var(--primary-light)" : "var(--bg-card)"}" stroke="${a0 ? "var(--primary)" : "var(--border)"}" stroke-width="${a0 ? 3 : 1.5}"/>
            <text x="79" y="38" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--primary)">1. NGẢ VÀO</text>
            <rect x="24" y="95" width="110" height="22" rx="4" fill="#cbd5e1"/>
            <rect x="24" y="117" width="110" height="24" rx="4" fill="#fde68a"/>
            <text x="79" y="133" text-anchor="middle" font-size="10" font-weight="700" fill="#78350f">Lớp Biểu mô</text>
            <circle cx="79" cy="64" r="10" fill="var(--danger)">
              ${a0 ? `<animate attributeName="cy" values="56;90;56" dur="1.4s" repeatCount="indefinite"/>` : ""}
            </circle>
            <text x="79" y="162" text-anchor="middle" font-size="10" fill="var(--text-main)">Hô hấp, Tiêu hóa,</text>
            <text x="79" y="176" text-anchor="middle" font-size="10" fill="var(--text-muted)">Vết thương da</text>

            <rect x="168" y="15" width="144" height="180" rx="12" fill="${a1 ? "var(--accent-light)" : "var(--bg-card)"}" stroke="${a1 ? "var(--accent)" : "var(--border)"}" stroke-width="${a1 ? 3 : 1.5}"/>
            <text x="240" y="38" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--accent)">2. BÁM DÍNH</text>
            <rect x="184" y="108" width="112" height="28" rx="6" fill="#fed7aa" stroke="#ea580c"/>
            <text x="240" y="126" text-anchor="middle" font-size="10" font-weight="700" fill="#9a3412">TB Biểu mô (–)</text>
            <ellipse cx="225" cy="90" rx="14" ry="8" fill="#0f766e">
              ${a1 ? `<animate attributeName="rx" values="13;16;13" dur="1.1s" repeatCount="indefinite"/>` : ""}
            </ellipse>
            <ellipse cx="258" cy="90" rx="14" ry="8" fill="#0f766e"/>
            <line x1="225" y1="98" x2="225" y2="108" stroke="#0f766e" stroke-width="2.5"/>
            <line x1="258" y1="98" x2="258" y2="108" stroke="#0f766e" stroke-width="2.5"/>
            <text x="240" y="158" text-anchor="middle" font-size="10" font-weight="700" fill="var(--accent)">Tạo ổ đầu tiên</text>
            <text x="240" y="174" text-anchor="middle" font-size="9.5" fill="var(--text-muted)">(Hoặc người lành mang)</text>

            <rect x="330" y="15" width="144" height="180" rx="12" fill="${a2 ? "var(--warning-light)" : "var(--bg-card)"}" stroke="${a2 ? "var(--warning)" : "var(--border)"}" stroke-width="${a2 ? 3 : 1.5}"/>
            <text x="402" y="38" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--warning)">3. BẠCH HUYẾT / MÁU</text>
            <rect x="344" y="76" width="116" height="32" rx="16" fill="#fecdd3" stroke="#e11d48" stroke-width="2"/>
            <circle cx="372" cy="92" r="7" fill="#be123c">
              ${a2 ? `<animate attributeName="cx" values="362;436;362" dur="1.6s" repeatCount="indefinite"/>` : ""}
            </circle>
            <circle cx="408" cy="90" r="6" fill="#0f766e"/>
            <text x="402" y="132" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-main)">Tạm thời: Du khuẩn huyết</text>
            <text x="402" y="148" text-anchor="middle" font-size="10" font-weight="700" fill="var(--danger)">Trường diễn: NK huyết</text>
            <text x="402" y="172" text-anchor="middle" font-size="9.5" fill="var(--text-muted)">(Bacteremia vs Septicemia)</text>

            <rect x="492" y="15" width="140" height="180" rx="12" fill="${a3 ? "var(--danger-light)" : "var(--bg-card)"}" stroke="${a3 ? "var(--danger)" : "var(--border)"}" stroke-width="${a3 ? 3 : 1.5}"/>
            <text x="562" y="38" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--danger)">4. CƠ QUAN ĐÍCH</text>
            <circle cx="562" cy="88" r="24" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
            <text x="562" y="86" text-anchor="middle" font-size="10" font-weight="800" fill="#5b21b6">Màng não</text>
            <text x="562" y="99" text-anchor="middle" font-size="9.5" fill="#5b21b6">Tim / Thần kinh</text>
            ${a3 ? `<circle cx="562" cy="122" r="5" fill="#e11d48"><animate attributeName="r" values="4;8;4" dur="1.1s" repeatCount="indefinite"/></circle>` : ""}
            <text x="562" y="150" text-anchor="middle" font-size="10" font-weight="700" fill="var(--danger)">Định cư tăng sinh</text>
            <text x="562" y="166" text-anchor="middle" font-size="9.5" fill="var(--text-muted)">hoặc Tiết độc tố (Bạch hầu)</text>
          </svg>
        `;
      }
    },

    // ======================================================================
    // BÀI 2: CƠ CHẾ TẤN CÔNG ĐỘC LỰC VI KHUẨN
    // ======================================================================
    2: {
      title: "🎬 Minh họa 4 Vũ khí Độc lực Vi khuẩn (Bám dính – Enzym – Độc tố – Chống thực bào)",
      steps: [
        {
          name: "1. Bám dính Vượt đẩy Tĩnh điện",
          desc: "Dù vi khuẩn và tế bào ký chủ đều mang điện tích âm, tính <strong>kỵ nước bề mặt cao</strong> cộng với <strong>pili (E. coli), LTA và protein M (S. pyogenes)</strong> giúp vi khuẩn bám chặt biểu mô.",
          highlight: "Bám dính = điều kiện tiên quyết để xâm nhập"
        },
        {
          name: "2. Enzym Ngoại bào Phá hủy Mô & IgA1",
          desc: "<strong>Collagenase &amp; Hyaluronidase</strong> phá hủy mô giúp lan tràn; <strong>Coagulase</strong> tạo vỏ fibrin tránh thực bào; <strong>Hemolysin/Leucocidin</strong> hủy tế bào máu; <strong>IgA1 protease</strong> cắt kháng thể niêm mạc.",
          highlight: "IgA1 protease: N. gonorrhoeae, N. meningitidis, H. influenzae"
        },
        {
          name: "3. Ngoại độc tố (Protein) vs Nội độc tố (LPS)",
          desc: "Vi khuẩn sống tiết <strong>Ngoại độc tố</strong> (rất độc, có thụ thể đặc hiệu, làm toxoid được, gen plasmid). Vi khuẩn Gram âm chết phóng thích <strong>Nội độc tố LPS</strong> (bền nhiệt, gây sốt IL-1, sốc, hoạt hóa C3 biến đổi, DIC).",
          highlight: "Bạch hầu (40 ng), Botulinum (liệt mềm), Tetani (co cứng)"
        },
        {
          name: "4. Né tránh Thực bào & Gây bệnh Nội bào",
          desc: "<strong>Protein A (S. aureus)</strong> gắn Fc của IgG; <strong>Nang (Pneumococcus), Pili (N. gonorrhoeae), Protein M (S. pyogenes)</strong> cản thực bào; vi khuẩn nội bào ngăn <strong>phagosome hòa lysosome</strong>.",
          highlight: "Hậu nhiễm Streptococci: Thấp khớp cấp (họng) / Viêm cầu thận (da)"
        }
      ],
      renderSvg(s) {
        const a0 = s === 0, a1 = s === 1, a2 = s === 2, a3 = s === 3;
        return `
          <svg viewBox="0 0 640 215" class="proc-svg">
            <rect x="8" y="15" width="144" height="180" rx="12" fill="${a0 ? "var(--primary-light)" : "var(--bg-card)"}" stroke="${a0 ? "var(--primary)" : "var(--border)"}" stroke-width="${a0 ? 3 : 1.5}"/>
            <text x="80" y="38" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--primary)">1. BÁM DÍNH</text>
            <ellipse cx="80" cy="84" rx="26" ry="14" fill="#0f766e"/>
            <path d="M62 96 L58 112 M74 98 L72 112 M86 98 L88 112 M98 96 L102 112" stroke="#0d9488" stroke-width="2.5">
              ${a0 ? `<animate attributeName="opacity" values="0.4;1;0.4" dur="1s" repeatCount="indefinite"/>` : ""}
            </path>
            <rect x="26" y="114" width="108" height="24" rx="6" fill="#fef3c7" stroke="#d97706"/>
            <text x="80" y="130" text-anchor="middle" font-size="10" font-weight="700" fill="#92400e">Pili / LTA / Protein M</text>
            <text x="80" y="164" text-anchor="middle" font-size="10" fill="var(--text-muted)">Kỵ nước thắng đẩy (–)/(–)</text>

            <rect x="168" y="15" width="144" height="180" rx="12" fill="${a1 ? "var(--warning-light)" : "var(--bg-card)"}" stroke="${a1 ? "var(--warning)" : "var(--border)"}" stroke-width="${a1 ? 3 : 1.5}"/>
            <text x="240" y="38" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--warning)">2. ENZYM NGOẠI BÀO</text>
            <circle cx="215" cy="84" r="14" fill="#fbbf24" opacity="0.85">
              ${a1 ? `<animate attributeName="r" values="12;16;12" dur="1.2s" repeatCount="indefinite"/>` : ""}
            </circle>
            <text x="215" y="88" text-anchor="middle" font-size="11" font-weight="800" fill="#78350f">✂️</text>
            <text x="256" y="80" font-size="9.5" font-weight="700" fill="var(--text-main)">IgA1 protease</text>
            <text x="256" y="95" font-size="9.5" font-weight="700" fill="var(--text-main)">Hyaluronidase</text>
            <text x="240" y="124" text-anchor="middle" font-size="10" fill="var(--text-main)">Collagenase • Coagulase</text>
            <text x="240" y="142" text-anchor="middle" font-size="10" fill="var(--text-main)">Hemolysin • Leucocidin</text>
            <text x="240" y="170" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--warning)">Phá hủy mô &amp; IgA niêm mạc</text>

            <rect x="328" y="15" width="148" height="180" rx="12" fill="${a2 ? "var(--danger-light)" : "var(--bg-card)"}" stroke="${a2 ? "var(--danger)" : "var(--border)"}" stroke-width="${a2 ? 3 : 1.5}"/>
            <text x="402" y="38" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--danger)">3. ĐỘC TỐ (EXO vs ENDO)</text>
            <rect x="340" y="54" width="124" height="44" rx="8" fill="#ffe4e6" stroke="#e11d48"/>
            <text x="402" y="72" text-anchor="middle" font-size="10" font-weight="800" fill="#9f1239">Ngoại độc tố (Protein)</text>
            <text x="402" y="88" text-anchor="middle" font-size="9.5" fill="#9f1239">VK sống • Plasmid • Toxoid (+)</text>
            <rect x="340" y="108" width="124" height="48" rx="8" fill="#ede9fe" stroke="#7c3aed"/>
            <text x="402" y="126" text-anchor="middle" font-size="10" font-weight="800" fill="#5b21b6">Nội độc tố (LPS Gram–)</text>
            <text x="402" y="142" text-anchor="middle" font-size="9.5" fill="#5b21b6">VK chết • NST • IL-1/Sốc/DIC</text>
            ${a2 ? `<circle cx="402" cy="174" r="5" fill="var(--danger)"><animate attributeName="r" values="4;7;4" dur="1s" repeatCount="indefinite"/></circle>` : ""}

            <rect x="492" y="15" width="140" height="180" rx="12" fill="${a3 ? "var(--purple-light)" : "var(--bg-card)"}" stroke="${a3 ? "var(--purple)" : "var(--border)"}" stroke-width="${a3 ? 3 : 1.5}"/>
            <text x="562" y="38" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--purple)">4. CHỐNG THỰC BÀO</text>
            <circle cx="562" cy="92" r="26" fill="none" stroke="#7c3aed" stroke-width="3" stroke-dasharray="5,3">
              ${a3 ? `<animateTransform attributeName="transform" type="rotate" from="0 562 92" to="360 562 92" dur="6s" repeatCount="indefinite"/>` : ""}
            </circle>
            <circle cx="562" cy="92" r="15" fill="#0f766e"/>
            <text x="562" y="96" text-anchor="middle" font-size="9" font-weight="800" fill="#fff">NANG</text>
            <text x="562" y="138" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-main)">Protein A ↔ Fc IgG</text>
            <text x="562" y="155" text-anchor="middle" font-size="9.5" fill="var(--text-muted)">Ngăn Phagosome–Lysosome</text>
            <text x="562" y="172" text-anchor="middle" font-size="9.5" fill="var(--purple)">Lẩn trốn &amp; Tranh sắt</text>
          </svg>
        `;
      }
    },

    // ======================================================================
    // BÀI 3: HÀNG RÀO KÝ CHỦ, THỰC BÀO & MIỄN DỊCH ĐẶC HIỆU
    // ======================================================================
    3: {
      title: "🎬 Minh họa 4 Tuyến Phòng thủ Ký chủ (Hàng rào – Opsonin/Thực bào – Thể dịch B – Tế bào T)",
      steps: [
        {
          name: "Bước 1: Hàng rào Sinh lý tại Ngả vào",
          desc: "<strong>Da</strong> (acid, acid béo, lysozym), <strong>Niêm mạc hô hấp</strong> (chất nhầy, lông tơ, ho, IgA tiết, đại thực bào phổi), <strong>Tiêu hóa</strong> (nước bọt, acid dạ dày, enzym ruột) và <strong>Hệ VSV thường trú</strong>.",
          highlight: "Rượu, thuốc lá, thuốc phiện, virus phá hỏng lông chuyển"
        },
        {
          name: "Bước 2: Opsonin hóa & Quá trình Thực bào",
          desc: "Thực bào di động (BC đa nhân, đơn nhân) và định cư (<strong>Kupffer, mô bào, phế bào</strong>) gắn qua thụ thể <strong>Fc &amp; C3</strong> (opsonin hóa) → tạo phagosome → hòa lysosome giết khuẩn bằng <strong>H₂O₂, iod, clo</strong>.",
          highlight: "Đái tháo đường: Nuốt bình thường nhưng KHÔNG giết được!"
        },
        {
          name: "Bước 3: Miễn dịch Đặc hiệu Tự nhiên vs Thu được",
          desc: "<strong>Tự nhiên</strong> tùy loài, giống, cá nhân, tuổi (<strong>IgM diệt Coliform không qua nhau thai</strong>), biến dưỡng. <strong>Thu được Thụ động</strong>: kháng thể mẹ 6 tháng đầu &amp; huyết thanh (SAD). <strong>Chủ động</strong>: mắc bệnh / vaccin.",
          highlight: "Trẻ < 6 tháng: Miễn dịch thu được thụ động"
        },
        {
          name: "Bước 4: Miễn dịch Thể dịch (B) vs Miễn dịch Tế bào (T)",
          desc: "<strong>Lympho B</strong> (túi Bursa) tạo kháng thể → <strong>truyền được qua huyết thanh</strong>. <strong>Lympho T</strong> (tuyến ức Thymus) → <strong>chỉ truyền bằng tế bào lympho</strong> (không qua huyết thanh) và hỗ trợ tế bào B.",
          highlight: "B truyền qua huyết thanh • T truyền qua tế bào"
        }
      ],
      renderSvg(s) {
        const a0 = s === 0, a1 = s === 1, a2 = s === 2, a3 = s === 3;
        return `
          <svg viewBox="0 0 640 215" class="proc-svg">
            <rect x="8" y="15" width="144" height="180" rx="12" fill="${a0 ? "var(--primary-light)" : "var(--bg-card)"}" stroke="${a0 ? "var(--primary)" : "var(--border)"}" stroke-width="${a0 ? 3 : 1.5}"/>
            <text x="80" y="38" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--primary)">1. HÀNG RÀO NGẢ VÀO</text>
            <path d="M26 115 Q45 85 64 115 T102 115 T134 115" fill="none" stroke="#0f766e" stroke-width="4">
              ${a0 ? `<animate attributeName="stroke-width" values="3;5;3" dur="1.2s" repeatCount="indefinite"/>` : ""}
            </path>
            <text x="80" y="75" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-main)">Lysozym • IgA tiết</text>
            <text x="80" y="140" text-anchor="middle" font-size="10" fill="var(--text-main)">Lông chuyển hô hấp</text>
            <text x="80" y="158" text-anchor="middle" font-size="10" fill="var(--text-muted)">Acid dạ dày &amp; VSV thường trú</text>

            <rect x="168" y="15" width="148" height="180" rx="12" fill="${a1 ? "var(--accent-light)" : "var(--bg-card)"}" stroke="${a1 ? "var(--accent)" : "var(--border)"}" stroke-width="${a1 ? 3 : 1.5}"/>
            <text x="242" y="38" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--accent)">2. THỰC BÀO</text>
            <circle cx="242" cy="94" r="30" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
            <circle cx="232" cy="92" r="9" fill="#e11d48">
              ${a1 ? `<animate attributeName="opacity" values="1;0.25;1" dur="1.3s" repeatCount="indefinite"/>` : ""}
            </circle>
            <circle cx="255" cy="96" r="10" fill="#fbbf24" stroke="#d97706"/>
            <text x="255" y="100" text-anchor="middle" font-size="8" font-weight="800" fill="#78350f">L</text>
            <text x="242" y="142" text-anchor="middle" font-size="10" font-weight="700" fill="var(--accent)">Fc + C3 (Opsonin hóa)</text>
            <text x="242" y="160" text-anchor="middle" font-size="9.5" fill="var(--text-main)">H₂O₂, Iod, Clo diệt khuẩn</text>
            <text x="242" y="176" text-anchor="middle" font-size="9.5" fill="var(--danger)">ĐTĐ: Nuốt (+) Giết (–)</text>

            <rect x="332" y="15" width="144" height="180" rx="12" fill="${a2 ? "var(--warning-light)" : "var(--bg-card)"}" stroke="${a2 ? "var(--warning)" : "var(--border)"}" stroke-width="${a2 ? 3 : 1.5}"/>
            <text x="404" y="38" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--warning)">3. NGUỒN MIỄN DỊCH</text>
            <rect x="346" y="54" width="116" height="44" rx="8" fill="#fef3c7" stroke="#d97706"/>
            <text x="404" y="72" text-anchor="middle" font-size="10" font-weight="800" fill="#92400e">Thụ động (&lt; 6 tháng)</text>
            <text x="404" y="88" text-anchor="middle" font-size="9.5" fill="#92400e">IgG mẹ / Huyết thanh SAD</text>
            <rect x="346" y="108" width="116" height="44" rx="8" fill="#dcfce7" stroke="#16a34a"/>
            <text x="404" y="126" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">Chủ động</text>
            <text x="404" y="142" text-anchor="middle" font-size="9.5" fill="#166534">Sau mắc bệnh / Vaccin</text>
            <text x="404" y="174" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--danger)">IgM không qua nhau thai</text>

            <rect x="492" y="15" width="140" height="180" rx="12" fill="${a3 ? "var(--purple-light)" : "var(--bg-card)"}" stroke="${a3 ? "var(--purple)" : "var(--border)"}" stroke-width="${a3 ? 3 : 1.5}"/>
            <text x="562" y="38" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--purple)">4. LYMPHO B &amp; T</text>
            <circle cx="530" cy="88" r="20" fill="#7c3aed"/>
            <text x="530" y="92" text-anchor="middle" font-size="13" font-weight="800" fill="#fff">B</text>
            <circle cx="594" cy="88" r="20" fill="#0d9488"/>
            <text x="594" y="92" text-anchor="middle" font-size="13" font-weight="800" fill="#fff">T</text>
            ${a3 ? `<path d="M574 88 L552 88" stroke="#0d9488" stroke-width="3"><animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite"/></path>` : ""}
            <text x="562" y="132" text-anchor="middle" font-size="9.8" font-weight="700" fill="var(--text-main)">B (Bursa) → Huyết thanh</text>
            <text x="562" y="150" text-anchor="middle" font-size="9.8" font-weight="700" fill="var(--text-main)">T (Thymus) → Tế bào</text>
            <text x="562" y="172" text-anchor="middle" font-size="9.5" fill="var(--purple)">T giúp B tạo kháng thể</text>
          </svg>
        `;
      }
    },

    // ======================================================================
    // BÀI 4: 4 CƠ CHẾ TÁC ĐỘNG KHÁNG SINH LÊN TẾ BÀO VI KHUẨN
    // ======================================================================
    4: {
      title: "🎬 Minh họa 4 Cơ chế Tác động Phân tử của Kháng sinh lên Tế bào Vi khuẩn",
      steps: [
        {
          name: "Cơ chế 1: Ức chế Sự thành lập Vách Peptidoglycan",
          desc: "<strong>β-lactam</strong> gắn PBPs (transpeptidase) → hoạt hóa <strong>autolysin</strong> ly giải tế bào. Áp lực nội bào Gram+ > Gram- 3–5 lần → <strong>Protoplast</strong> (Gram+) và <strong>Spheroplast</strong> (Gram-). <em>Vancomycin, Bacitracin</em> ức chế giai đoạn sớm bên trong màng.",
          highlight: "Không có peptidoglycan → An toàn với TB hữu nhũ"
        },
        {
          name: "Cơ chế 2: Ức chế Nhiệm vụ Màng Tế bào",
          desc: "Màng nấm có <strong>sterol</strong>, màng vi khuẩn không có sterol. Do đó <strong>Polyenes (Amphotericin B, Nystatin)</strong> chỉ diệt nấm, <strong>Imidazoles</strong> ức chế tổng hợp lipid màng nấm, còn <strong>Polymyxins (Colistin)</strong> chỉ diệt trực khuẩn Gram-.",
          highlight: "Polymyxin (vi khuẩn Gram–) vs Polyene (vi nấm có sterol)"
        },
        {
          name: "Cơ chế 3: Ức chế Tổng hợp Protein (Ribosome 30S & 50S)",
          desc: "<strong>30S:</strong> Aminoglycosides (4 bước, đọc sai mã, vỡ polysomes), Tetracyclin, Tigecyclin, Linezolid (N-formylmethionyl-tRNA). <strong>50S:</strong> Chloramphenicol (peptidyl transferase), Macrolide (23S rRNA), Lincosamide, Streptogramin.",
          highlight: "Aminoglycoside = Diệt khuẩn; Tetracyclin/Chloram = Kìm khuẩn"
        },
        {
          name: "Cơ chế 4: Ức chế Tổng hợp Acid Nucleic",
          desc: "<strong>Rifampin</strong> gắn RNA polymerase (ức chế RNA); <strong>Quinolone</strong> phong bế DNA gyrase (ức chế DNA); <strong>Sulfonamide</strong> cạnh tranh PABA &amp; <strong>Trimethoprim</strong> ức chế DHFR vi khuẩn mạnh gấp 50.000 lần TB hữu nhũ.",
          highlight: "Lao kháng Sulfonamide nhưng nhạy PAS"
        }
      ],
      renderSvg(s) {
        const a0 = s === 0, a1 = s === 1, a2 = s === 2, a3 = s === 3;
        return `
          <svg viewBox="0 0 640 215" class="proc-svg">
            <rect x="8" y="15" width="144" height="180" rx="12" fill="${a0 ? "var(--primary-light)" : "var(--bg-card)"}" stroke="${a0 ? "var(--primary)" : "var(--border)"}" stroke-width="${a0 ? 3 : 1.5}"/>
            <text x="80" y="38" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--primary)">1. VÁCH TẾ BÀO</text>
            <rect x="34" y="56" width="92" height="58" rx="22" fill="none" stroke="#0f766e" stroke-width="5" stroke-dasharray="${a0 ? "12,6" : "none"}">
              ${a0 ? `<animate attributeName="stroke-dashoffset" from="0" to="36" dur="1.5s" repeatCount="indefinite"/>` : ""}
            </rect>
            <text x="80" y="88" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--primary)">PBPs / Autolysin</text>
            <text x="80" y="138" text-anchor="middle" font-size="9.8" font-weight="700" fill="var(--text-main)">β-lactam, Vancomycin</text>
            <text x="80" y="155" text-anchor="middle" font-size="9.5" fill="var(--danger)">Protoplast / Spheroplast</text>
            <text x="80" y="172" text-anchor="middle" font-size="9" fill="var(--text-muted)">Dung nạp nếu thiếu autolysin</text>

            <rect x="168" y="15" width="144" height="180" rx="12" fill="${a1 ? "var(--accent-light)" : "var(--bg-card)"}" stroke="${a1 ? "var(--accent)" : "var(--border)"}" stroke-width="${a1 ? 3 : 1.5}"/>
            <text x="240" y="38" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--accent)">2. MÀNG TẾ BÀO</text>
            <ellipse cx="240" cy="84" rx="44" ry="26" fill="#e0f2fe" stroke="#0284c7" stroke-width="2.5" stroke-dasharray="6,4"/>
            <circle cx="222" cy="84" r="5" fill="#e11d48">
              ${a1 ? `<animate attributeName="cy" values="84;118" dur="1.1s" repeatCount="indefinite"/>` : ""}
            </circle>
            <circle cx="258" cy="84" r="5" fill="#d97706">
              ${a1 ? `<animate attributeName="cy" values="84;118" dur="1.3s" repeatCount="indefinite"/>` : ""}
            </circle>
            <text x="240" y="136" text-anchor="middle" font-size="9.8" font-weight="700" fill="var(--text-main)">Polymyxin (VK Gram–)</text>
            <text x="240" y="154" text-anchor="middle" font-size="9.8" font-weight="700" fill="var(--accent)">Polyene → Sterol Nấm</text>
            <text x="240" y="172" text-anchor="middle" font-size="9" fill="var(--text-muted)">Imidazoles: lipid màng nấm</text>

            <rect x="328" y="15" width="148" height="180" rx="12" fill="${a2 ? "var(--warning-light)" : "var(--bg-card)"}" stroke="${a2 ? "var(--warning)" : "var(--border)"}" stroke-width="${a2 ? 3 : 1.5}"/>
            <text x="402" y="38" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--warning)">3. RIBOSOME 30S/50S</text>
            <ellipse cx="402" cy="70" rx="34" ry="15" fill="#fbbf24" stroke="#b45309"/>
            <text x="402" y="74" text-anchor="middle" font-size="10.5" font-weight="800" fill="#78350f">50S (Mac/Chl/Lin)</text>
            <ellipse cx="402" cy="98" rx="28" ry="12" fill="#fde68a" stroke="#b45309"/>
            <text x="402" y="102" text-anchor="middle" font-size="10" font-weight="800" fill="#78350f">30S (AG/Tet/Lzd)</text>
            ${a2 ? `<line x1="354" y1="84" x2="450" y2="84" stroke="#e11d48" stroke-width="2.5"><animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite"/></line>` : ""}
            <text x="402" y="136" text-anchor="middle" font-size="9.8" font-weight="700" fill="var(--text-main)">Đọc sai mã / Ngăn nối aa</text>
            <text x="402" y="154" text-anchor="middle" font-size="9.5" fill="var(--text-muted)">AG: Vỡ polysomes → monosomes</text>
            <text x="402" y="172" text-anchor="middle" font-size="9" fill="var(--warning)">Linezolid: fMet-tRNA tại 30S</text>

            <rect x="492" y="15" width="140" height="180" rx="12" fill="${a3 ? "var(--purple-light)" : "var(--bg-card)"}" stroke="${a3 ? "var(--purple)" : "var(--border)"}" stroke-width="${a3 ? 3 : 1.5}"/>
            <text x="562" y="38" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--purple)">4. ACID NUCLEIC</text>
            <path d="M522 72 Q542 56 562 72 T602 72" fill="none" stroke="#7c3aed" stroke-width="3"/>
            <path d="M522 88 Q542 104 562 88 T602 88" fill="none" stroke="#a78bfa" stroke-width="3"/>
            ${a3 ? `<circle cx="562" cy="80" r="7" fill="#e11d48"><animate attributeName="r" values="5;8;5" dur="1s" repeatCount="indefinite"/></circle>` : ""}
            <text x="562" y="124" text-anchor="middle" font-size="9.8" font-weight="700" fill="var(--text-main)">Quinolone: DNA gyrase</text>
            <text x="562" y="142" text-anchor="middle" font-size="9.8" font-weight="700" fill="var(--text-main)">Rifampin: RNA pol</text>
            <text x="562" y="160" text-anchor="middle" font-size="9.5" fill="var(--purple)">SMX (PABA) + TMP (DHFR)</text>
            <text x="562" y="176" text-anchor="middle" font-size="9" fill="var(--text-muted)">TMP mạnh gấp 50.000× ở VK</text>
          </svg>
        `;
      }
    },

    // ======================================================================
    // BÀI 5: TIẾN HÓA PHỔ KHÁNG KHUẨN β-LACTAM & CÁC HỌ CHÍNH
    // ======================================================================
    5: {
      title: "🎬 Minh họa Tiến hóa Phổ Kháng khuẩn β-lactam (Penicillin → 5 Thế hệ Cephalosporin → Carbapenem)",
      steps: [
        {
          name: "Bước 1: Penicillin (6-APA) & 4 Nhóm Lâm sàng 1986",
          desc: "<strong>PNC-G</strong> (Fleming 1928) bị dịch vị và penicillinase hủy → bán tổng hợp bằng <strong>amidase</strong> (1959): kháng β-lactamase (<em>Nafcillin</em>), phổ rộng (<em>Ampicillin, Piperacillin</em>), bền acid uống được (<em>PNC-V, Amoxicillin</em>).",
          highlight: "6-APA = Vòng β-lactam + Thiazolidine"
        },
        {
          name: "Bước 2: Cephalosporin Thế hệ 1 → Thế hệ 2 (+ Cephamycin)",
          desc: "<strong>TH1</strong> mạnh cầu khuẩn Gram+ (trừ Enterococci, MRSA), không thấm TKTW. <strong>TH2</strong> mở rộng sang Gram-; riêng Cephamycin (<strong>cefoxitin, cefotetan</strong>) diệt mạnh kỵ khí <em>B. fragilis</em>.",
          highlight: "TH1 & TH2 đều không diệt Pseudomonas/Acinetobacter"
        },
        {
          name: "Bước 3: Cephalosporin Thế hệ 3 → Thế hệ 4 → Thế hệ 5",
          desc: "<strong>TH3</strong> mạnh trực khuẩn Gram- (<em>ceftazidime, cefoperazone</em> diệt Pseudomonas) &amp; thấm TKTW (trừ cefoperazone). <strong>TH4</strong> bền β-lactamase hơn &amp; thấm TKTW. <strong>TH5</strong> (<em>ceftobiprole, ceftaroline</em>) diệt <strong>MRSA</strong>!",
          highlight: "Ceftobiprole diệt thêm Pseudomonas & VRE; Ceftaroline thì không"
        },
        {
          name: "Bước 4: Monobactam & Carbapenem (Chống ESBL)",
          desc: "<strong>Aztreonam</strong> chỉ diệt Gram-. <strong>Carbapenem</strong> bền với <strong>ESBL</strong> nhưng không diệt MRSA: <strong>Imipenem + Cilastatin</strong> (ngăn dihydropeptidase ống thận); <strong>Ertapenem</strong> không diệt <em>Pseudomonas/Acinetobacter</em>.",
          highlight: "Meropenem ít tác dụng phụ thần kinh hơn Imipenem"
        }
      ],
      renderSvg(s) {
        const a0 = s === 0, a1 = s === 1, a2 = s === 2, a3 = s === 3;
        return `
          <svg viewBox="0 0 640 215" class="proc-svg">
            <rect x="8" y="15" width="142" height="180" rx="12" fill="${a0 ? "var(--primary-light)" : "var(--bg-card)"}" stroke="${a0 ? "var(--primary)" : "var(--border)"}" stroke-width="${a0 ? 3 : 1.5}"/>
            <text x="79" y="38" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--primary)">1. PENICILLIN</text>
            <rect x="36" y="58" width="40" height="40" rx="4" fill="#ccfbf1" stroke="#0f766e" stroke-width="2.5"/>
            <text x="56" y="82" text-anchor="middle" font-size="9.5" font-weight="800" fill="#0f766e">β-lac</text>
            <polygon points="76,58 112,68 112,92 76,98" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
            <text x="93" y="83" text-anchor="middle" font-size="8.5" font-weight="700" fill="#0369a1">Thia</text>
            <text x="79" y="126" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-main)">PNC-G → PNC-V</text>
            <text x="79" y="144" text-anchor="middle" font-size="9.5" fill="var(--text-muted)">Nafcillin (kháng β-lac)</text>
            <text x="79" y="162" text-anchor="middle" font-size="9.5" fill="var(--text-muted)">Ampicillin, Amoxicillin</text>

            <rect x="166" y="15" width="146" height="180" rx="12" fill="${a1 ? "var(--accent-light)" : "var(--bg-card)"}" stroke="${a1 ? "var(--accent)" : "var(--border)"}" stroke-width="${a1 ? 3 : 1.5}"/>
            <text x="239" y="38" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--accent)">2. CEPHALO TH 1–2</text>
            <rect x="180" y="56" width="118" height="46" rx="8" fill="#dbeafe" stroke="#2563eb"/>
            <text x="239" y="75" text-anchor="middle" font-size="10" font-weight="800" fill="#1e40af">TH1 (Cefazolin)</text>
            <text x="239" y="91" text-anchor="middle" font-size="9" fill="#1e40af">Mạnh Gram+ • Không TKTW</text>
            <rect x="180" y="112" width="118" height="52" rx="8" fill="#dcfce7" stroke="#16a34a"/>
            <text x="239" y="130" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">TH2 + Cephamycin</text>
            <text x="239" y="145" text-anchor="middle" font-size="9" fill="#166534">Cefoxitin, Cefotetan:</text>
            <text x="239" y="158" text-anchor="middle" font-size="9" font-weight="700" fill="#15803d">Diệt mạnh B. fragilis!</text>

            <rect x="328" y="15" width="148" height="180" rx="12" fill="${a2 ? "var(--purple-light)" : "var(--bg-card)"}" stroke="${a2 ? "var(--purple)" : "var(--border)"}" stroke-width="${a2 ? 3 : 1.5}"/>
            <text x="402" y="38" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--purple)">3. CEPHALO TH 3–4–5</text>
            <text x="402" y="64" text-anchor="middle" font-size="10" font-weight="800" fill="var(--text-main)">TH3: Gram– &amp; TKTW</text>
            <text x="402" y="80" text-anchor="middle" font-size="9.2" fill="var(--text-muted)">Ceftazidime: Pseudomonas</text>
            <text x="402" y="96" text-anchor="middle" font-size="9.2" fill="var(--danger)">(Cefoperazone: ko TKTW)</text>
            <text x="402" y="120" text-anchor="middle" font-size="10" font-weight="800" fill="var(--text-main)">TH4: Cefepime (TKTW+Ps)</text>
            <rect x="342" y="132" width="120" height="48" rx="8" fill="#ede9fe" stroke="#7c3aed"/>
            <text x="402" y="150" text-anchor="middle" font-size="10" font-weight="800" fill="#5b21b6">TH5: Diệt MRSA!</text>
            <text x="402" y="166" text-anchor="middle" font-size="9" fill="#5b21b6">Ceftobiprole (+Ps, VRE)</text>

            <rect x="492" y="15" width="140" height="180" rx="12" fill="${a3 ? "var(--danger-light)" : "var(--bg-card)"}" stroke="${a3 ? "var(--danger)" : "var(--border)"}" stroke-width="${a3 ? 3 : 1.5}"/>
            <text x="562" y="38" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--danger)">4. MONO &amp; CARBAPENEM</text>
            <rect x="504" y="54" width="116" height="44" rx="8" fill="#fef3c7" stroke="#d97706"/>
            <text x="562" y="72" text-anchor="middle" font-size="10" font-weight="800" fill="#92400e">Aztreonam</text>
            <text x="562" y="88" text-anchor="middle" font-size="9" fill="#92400e">Chỉ Gram– (ko Gram+/kỵ)</text>
            <rect x="504" y="108" width="116" height="68" rx="8" fill="#ffe4e6" stroke="#e11d48"/>
            <text x="562" y="126" text-anchor="middle" font-size="10" font-weight="800" fill="#9f1239">Carbapenem (ESBL+)</text>
            <text x="562" y="142" text-anchor="middle" font-size="9" fill="#9f1239">Imipenem + Cilastatin</text>
            <text x="562" y="156" text-anchor="middle" font-size="9" fill="#9f1239">Ertapenem: ko Ps/Acineto</text>
            <text x="562" y="170" text-anchor="middle" font-size="9" font-weight="700" fill="#be123c">Không diệt MRSA</text>
          </svg>
        `;
      }
    },

    // ======================================================================
    // BÀI 6: KHÁNG SINH ĐA KHÁNG & THUỐC KHÁNG LAO
    // ======================================================================
    6: {
      title: "🎬 Minh họa Phác đồ Đặc trị Đa kháng (MRSA/VRE/Kỵ khí) & 5 Thuốc Kháng Lao",
      steps: [
        {
          name: "1. Glycopeptide & Polypeptide (Phổ Cực đối lập)",
          desc: "<strong>Vancomycin / Teicoplanin</strong> (t½ dài 1 lần/ngày) chỉ diệt <strong>Gram+</strong> (đặc biệt MRSA). Ngược lại, <strong>Polymyxin B / Colistin</strong> chỉ diệt <strong>trực khuẩn Gram-</strong> (kể cả Pseudomonas), không vào DNT.",
          highlight: "Glycopeptide = Chỉ Gram+ • Polymyxin = Chỉ trực khuẩn Gram–"
        },
        {
          name: "2. Quinolone 4 Thế hệ (Từ Tiết niệu đến Toàn thân & Kỵ khí)",
          desc: "<strong>TH1</strong> (nalidixic) chỉ trị nhiễm trùng tiểu. <strong>TH2–3–4 (Fluoroquinolone)</strong> thấm mô rộng, diệt Enterobacteriaceae kháng C3G, Pseudomonas, không điển hình, Mycobacteria; <strong>thế hệ mới diệt cả kỵ khí</strong>.",
          highlight: "VRE thường kháng Quinolone"
        },
        {
          name: "3. Nhóm Mới Trị MRSA / VRE / Đa kháng & C. difficile",
          desc: "<strong>Daptomycin</strong> (khử cực màng phụ thuộc Ca²⁺), <strong>Quinupristin/Dalfopristin</strong> (30:70), <strong>Linezolid</strong> (thấm tốt phổi, xương), <strong>Tigecyclin</strong> (không diệt <em>P. aeruginosa, S. maltophilia, B. cepacia</em>), <strong>Metronidazole</strong> (kỵ khí &amp; <em>C. difficile</em>).",
          highlight: "Dapsone + Rifampin trị bệnh phong (tác phụ: tán huyết)"
        },
        {
          name: "4. Phối hợp 5 Thuốc Kháng Lao & Tác dụng phụ Đặc trưng",
          desc: "<strong>Rifampin</strong> (đột biến kháng 10⁻⁵–10⁻⁶ → phải phối hợp), <strong>INH</strong> (ức chế acid mycolic, vào DNT tốt), <strong>Ethambutol</strong> (rối loạn thị giác), <strong>Pyrazinamide</strong> (độc gan 1–5% &amp; tăng acid uric), <strong>PAS</strong> (ít dùng do hại tiêu hóa).",
          highlight: "Phối hợp đa thuốc ngăn đột biến kháng Rifampin"
        }
      ],
      renderSvg(s) {
        const a0 = s === 0, a1 = s === 1, a2 = s === 2, a3 = s === 3;
        return `
          <svg viewBox="0 0 640 215" class="proc-svg">
            <rect x="8" y="15" width="144" height="180" rx="12" fill="${a0 ? "var(--primary-light)" : "var(--bg-card)"}" stroke="${a0 ? "var(--primary)" : "var(--border)"}" stroke-width="${a0 ? 3 : 1.5}"/>
            <text x="80" y="38" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--primary)">1. GLYCO vs POLY</text>
            <rect x="20" y="54" width="120" height="54" rx="8" fill="#ccfbf1" stroke="#0f766e"/>
            <text x="80" y="72" text-anchor="middle" font-size="10" font-weight="800" fill="#115e59">Vancomycin / Teico</text>
            <text x="80" y="88" text-anchor="middle" font-size="9.5" fill="#115e59">Chỉ Gram+ (MRSA)</text>
            <text x="80" y="101" text-anchor="middle" font-size="9" fill="#0f766e">Teicoplanin: 1 lần/ngày</text>
            <rect x="20" y="118" width="120" height="54" rx="8" fill="#ffe4e6" stroke="#e11d48"/>
            <text x="80" y="136" text-anchor="middle" font-size="10" font-weight="800" fill="#9f1239">Colistin / Polymyxin</text>
            <text x="80" y="152" text-anchor="middle" font-size="9.5" fill="#9f1239">Chỉ Trực khuẩn Gram–</text>
            <text x="80" y="165" text-anchor="middle" font-size="9" fill="#9f1239">Độc thận • Ko vào DNT</text>

            <rect x="168" y="15" width="144" height="180" rx="12" fill="${a1 ? "var(--accent-light)" : "var(--bg-card)"}" stroke="${a1 ? "var(--accent)" : "var(--border)"}" stroke-width="${a1 ? 3 : 1.5}"/>
            <text x="240" y="38" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--accent)">2. QUINOLONE 4 TH</text>
            <text x="240" y="66" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-muted)">TH1: Nalidixic (Tiểu)</text>
            <path d="M240 76 L240 100" stroke="var(--accent)" stroke-width="3">
              ${a1 ? `<animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite"/>` : ""}
            </path>
            <rect x="180" y="102" width="120" height="72" rx="8" fill="#e0f2fe" stroke="#0284c7"/>
            <text x="240" y="120" text-anchor="middle" font-size="10" font-weight="800" fill="#0369a1">TH2–4 Fluoroquinolone</text>
            <text x="240" y="136" text-anchor="middle" font-size="9.2" fill="#0369a1">Enterobacter, Ps, Lao</text>
            <text x="240" y="152" text-anchor="middle" font-size="9.2" font-weight="700" fill="#0c4a6e">TH mới: Kỵ khí (+)</text>
            <text x="240" y="166" text-anchor="middle" font-size="9" fill="#be123c">VRE thường kháng FQ</text>

            <rect x="328" y="15" width="148" height="180" rx="12" fill="${a2 ? "var(--purple-light)" : "var(--bg-card)"}" stroke="${a2 ? "var(--purple)" : "var(--border)"}" stroke-width="${a2 ? 3 : 1.5}"/>
            <text x="402" y="38" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--purple)">3. NHÓM MỚI ĐA KHÁNG</text>
            <text x="402" y="64" text-anchor="middle" font-size="9.8" font-weight="700" fill="var(--text-main)">Daptomycin (màng Ca²⁺)</text>
            <text x="402" y="84" text-anchor="middle" font-size="9.8" font-weight="700" fill="var(--text-main)">Streptogramin (30:70)</text>
            <text x="402" y="104" text-anchor="middle" font-size="9.8" font-weight="700" fill="var(--text-main)">Linezolid (phổi, xương)</text>
            <text x="402" y="124" text-anchor="middle" font-size="9.8" font-weight="700" fill="var(--text-main)">Tigecyclin (ko Ps/Burk/Steno)</text>
            <rect x="342" y="138" width="120" height="42" rx="8" fill="#fef3c7" stroke="#d97706"/>
            <text x="402" y="155" text-anchor="middle" font-size="9.5" font-weight="800" fill="#92400e">Metronidazole: C. diff</text>
            <text x="402" y="170" text-anchor="middle" font-size="9.5" font-weight="700" fill="#92400e">Dapsone: Phong (tán huyết)</text>

            <rect x="492" y="15" width="140" height="180" rx="12" fill="${a3 ? "var(--warning-light)" : "var(--bg-card)"}" stroke="${a3 ? "var(--warning)" : "var(--border)"}" stroke-width="${a3 ? 3 : 1.5}"/>
            <text x="562" y="38" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--warning)">4. KHÁNG LAO</text>
            <text x="562" y="66" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-main)">Rifampin (RNA • 10⁻⁵)</text>
            <text x="562" y="88" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-main)">INH (Acid mycolic • DNT)</text>
            <text x="562" y="110" text-anchor="middle" font-size="10" font-weight="700" fill="var(--danger)">Ethambutol (Mắt/Thị giác)</text>
            <text x="562" y="132" text-anchor="middle" font-size="10" font-weight="700" fill="var(--danger)">PZA (Gan 1–5% • Acid uric)</text>
            <text x="562" y="154" text-anchor="middle" font-size="9.5" fill="var(--text-muted)">PAS (Tiêu hóa nặng)</text>
            ${a3 ? `<circle cx="562" cy="175" r="5" fill="var(--warning)"><animate attributeName="r" values="4;7;4" dur="1s" repeatCount="indefinite"/></circle>` : ""}
          </svg>
        `;
      }
    },

    // ======================================================================
    // BÀI 7: ĐỀ KHÁNG, TRUYỀN GEN & PHỐI HỢP KHÁNG SINH
    // ======================================================================
    7: {
      title: "🎬 Minh họa Lan truyền Gen Kháng thuốc (Yếu tố R) & Phối hợp Hiệp đồng – Đối kháng",
      steps: [
        {
          name: "1. Kháng không Di truyền vs Đề kháng Di truyền",
          desc: "<strong>Không di truyền:</strong> Vi khuẩn không nhân lên (lao ngủ) hoặc biến thành <strong>dạng L</strong> mất vách. <strong>Di truyền:</strong> Đột biến NST (10⁻⁷–10⁻¹², VD protein P12 kháng streptomycin) hoặc <strong>Plasmid (yếu tố R)</strong> mang gen enzym hủy thuốc.",
          highlight: "Kháng thuốc không di truyền = không nhân lên / dạng L"
        },
        {
          name: "2. 4 Cơ chế Truyền Gen Kháng thuốc (Giao phối phổ biến nhất)",
          desc: "<strong>Biến nạp</strong> (DNA tự do) • <strong>Tải nạp</strong> (qua phage) • <strong>Giao phối / Conjugation</strong> (qua ống nhỏ từ <strong>F⁺ → F⁻</strong>, phổ biến nhất ở Gram- và cầu khuẩn Gram+) • <strong>Chuyển vị</strong> (plasmid ↔ plasmid / NST).",
          highlight: "Giao phối F⁺ → F⁻ là cơ chế lan rộng kháng thuốc chính"
        },
        {
          name: "3. Cơ chế Đối kháng khi Phối hợp Sai Thời điểm",
          desc: "Phối hợp <strong>diệt khuẩn</strong> (Penicillin/AG) + <strong>kìm khuẩn</strong> (Chloramphenicol/Tetracyclin) có thể gây <strong>đối kháng</strong> nếu thuốc kìm khuẩn đến ổ nhiễm trùng <strong>TRƯỚC</strong>, việc giết khuẩn là bắt buộc và liều chỉ tối thiểu.",
          highlight: "Thứ tự: Kìm khuẩn đến trước → Đóng băng đích của Diệt khuẩn"
        },
        {
          name: "4. 4 Cơ chế Hiệp đồng (Synergism) Chuẩn Mực",
          desc: "(1) Chặn 2 bước biến dưỡng: <strong>SMX + TMP</strong>; (2) Mở vách cho AG vào: <strong>Ampicillin + Gentamicin</strong>, <strong>Piperacillin + Tobramycin</strong>; (3) Mở màng nấm: <strong>Amphotericin B + Flucytosine</strong>; (4) Chặn β-lactamase: <strong>Clavulanic/Sulbactam/Tazobactam</strong>.",
          highlight: "β-lactam + AG và β-lactam + ức chế β-lactamase = Hiệp đồng"
        }
      ],
      renderSvg(s) {
        const a0 = s === 0, a1 = s === 1, a2 = s === 2, a3 = s === 3;
        return `
          <svg viewBox="0 0 640 215" class="proc-svg">
            <rect x="8" y="15" width="144" height="180" rx="12" fill="${a0 ? "var(--primary-light)" : "var(--bg-card)"}" stroke="${a0 ? "var(--primary)" : "var(--border)"}" stroke-width="${a0 ? 3 : 1.5}"/>
            <text x="80" y="38" text-anchor="middle" font-size="11" font-weight="800" fill="var(--primary)">1. NGUỒN KHÁNG THUỐC</text>
            <rect x="20" y="54" width="120" height="54" rx="8" fill="#fef3c7" stroke="#d97706"/>
            <text x="80" y="72" text-anchor="middle" font-size="9.8" font-weight="800" fill="#92400e">Không di truyền</text>
            <text x="80" y="88" text-anchor="middle" font-size="9" fill="#92400e">Không nhân lên (ngủ)</text>
            <text x="80" y="101" text-anchor="middle" font-size="9" fill="#92400e">Dạng L (mất vách)</text>
            <rect x="20" y="118" width="120" height="56" rx="8" fill="#ccfbf1" stroke="#0f766e"/>
            <text x="80" y="136" text-anchor="middle" font-size="9.8" font-weight="800" fill="#115e59">Di truyền (Chủ yếu)</text>
            <text x="80" y="152" text-anchor="middle" font-size="9" fill="#115e59">NST (P12) &amp; Yếu tố R</text>
            <text x="80" y="165" text-anchor="middle" font-size="9" fill="#115e59">(Plasmid β-lactamase)</text>

            <rect x="168" y="15" width="146" height="180" rx="12" fill="${a1 ? "var(--accent-light)" : "var(--bg-card)"}" stroke="${a1 ? "var(--accent)" : "var(--border)"}" stroke-width="${a1 ? 3 : 1.5}"/>
            <text x="241" y="38" text-anchor="middle" font-size="11" font-weight="800" fill="var(--accent)">2. GIAO PHỐI F⁺ → F⁻</text>
            <ellipse cx="204" cy="86" rx="22" ry="14" fill="#0f766e"/>
            <text x="204" y="90" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">F⁺</text>
            <line x1="226" y1="86" x2="256" y2="86" stroke="#0284c7" stroke-width="4"/>
            <ellipse cx="278" cy="86" rx="22" ry="14" fill="#64748b"/>
            <text x="278" y="90" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">F⁻</text>
            ${a1 ? `<circle cx="241" cy="86" r="4.5" fill="#fbbf24"><animate attributeName="cx" values="210;274" dur="1.2s" repeatCount="indefinite"/></circle>` : ""}
            <text x="241" y="128" text-anchor="middle" font-size="9.8" font-weight="700" fill="var(--accent)">Giao phối: Phổ biến nhất!</text>
            <text x="241" y="146" text-anchor="middle" font-size="9.3" fill="var(--text-main)">Biến nạp (DNA tự do)</text>
            <text x="241" y="162" text-anchor="middle" font-size="9.3" fill="var(--text-main)">Tải nạp (Phage) • Chuyển vị</text>

            <rect x="330" y="15" width="144" height="180" rx="12" fill="${a2 ? "var(--danger-light)" : "var(--bg-card)"}" stroke="${a2 ? "var(--danger)" : "var(--border)"}" stroke-width="${a2 ? 3 : 1.5}"/>
            <text x="402" y="38" text-anchor="middle" font-size="11" font-weight="800" fill="var(--danger)">3. ĐỐI KHÁNG (HIẾM)</text>
            <rect x="344" y="60" width="116" height="44" rx="8" fill="#ffe4e6" stroke="#e11d48"/>
            <text x="402" y="78" text-anchor="middle" font-size="9.8" font-weight="800" fill="#9f1239">Kìm khuẩn đến TRƯỚC</text>
            <text x="402" y="94" text-anchor="middle" font-size="9" fill="#9f1239">(Chloram / Tetracyclin)</text>
            <text x="402" y="124" text-anchor="middle" font-size="10" font-weight="800" fill="var(--danger)">⚔️ Ngăn VK nhân lên</text>
            <text x="402" y="144" text-anchor="middle" font-size="9.3" fill="var(--text-main)">→ Diệt khuẩn (Penicillin)</text>
            <text x="402" y="162" text-anchor="middle" font-size="9.3" fill="var(--text-muted)">mất hiệu lực (liều tối thiểu)</text>

            <rect x="490" y="15" width="142" height="180" rx="12" fill="${a3 ? "var(--success-light)" : "var(--bg-card)"}" stroke="${a3 ? "var(--success)" : "var(--border)"}" stroke-width="${a3 ? 3 : 1.5}"/>
            <text x="561" y="38" text-anchor="middle" font-size="11" font-weight="800" fill="var(--success)">4. 4 CƠ CHẾ HIỆP ĐỒNG</text>
            <text x="561" y="66" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--text-main)">1. SMX + TMP (PABA+DHFR)</text>
            <text x="561" y="90" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--text-main)">2. Ampicillin + Gentamicin</text>
            <text x="561" y="114" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--text-main)">3. Ampho B + Flucytosine</text>
            <text x="561" y="138" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--text-main)">4. Amoxicillin + Clavulanic</text>
            ${a3 ? `<circle cx="561" cy="166" r="6" fill="var(--success)"><animate attributeName="r" values="5;8;5" dur="1s" repeatCount="indefinite"/></circle>` : ""}
            <text x="561" y="182" text-anchor="middle" font-size="9" font-weight="700" fill="var(--success)">Hiệu quả vượt trội đơn trị</text>
          </svg>
        `;
      }
    }
  },

  render(lessonId, container) {
    this.stopTimer();
    this.currentLessonId = lessonId;
    this.currentStep = 0;
    const spec = this.specs[lessonId];
    if (!container || !spec) return;
    this.mount(container, spec);
  },

  mount(container, spec) {
    const step = spec.steps[this.currentStep];
    const buttonsHtml = spec.steps
      .map(
        (st, idx) => `
      <button type="button" class="pill-btn ${idx === this.currentStep ? "active" : ""}" onclick="ProcessAnimations.goTo(${idx})">
        ${idx + 1}. ${st.name.split("–")[0].split(":")[0]}
      </button>`
      )
      .join("");

    container.innerHTML = `
      <div class="proc-box">
        <div class="proc-header">
          <div>
            <span class="sim-badge" style="background:var(--accent);">🎬 Bổ sung Trực quan Quá trình</span>
            <h3 style="font-size:17.5px;font-weight:800;margin-top:6px;color:var(--text-main);">${spec.title}</h3>
          </div>
          <div class="proc-controls">
            <button type="button" class="btn btn-outline" style="min-height:36px;padding:6px 10px;font-size:12.5px;" onclick="ProcessAnimations.prev()">⏮️ Trước</button>
            <button type="button" class="btn btn-primary" style="min-height:36px;padding:6px 12px;font-size:12.5px;" id="procPlayBtn" onclick="ProcessAnimations.togglePlay()">
              ${this.isPlaying ? "⏸️ Tạm dừng" : "▶️ Chạy minh họa"}
            </button>
            <button type="button" class="btn btn-outline" style="min-height:36px;padding:6px 10px;font-size:12.5px;" onclick="ProcessAnimations.next()">Tiếp ⏭️</button>
          </div>
        </div>

        <div class="pill-btn-group">${buttonsHtml}</div>

        <div class="svg-stage" style="margin:12px 0;">
          ${spec.renderSvg(this.currentStep)}
        </div>

        <div class="callout pearl" style="margin:0;">
          <div class="callout-title" style="justify-content:space-between;">
            <span>📌 ${step.name}</span>
            <span class="tag-pill" style="background:var(--accent);color:#fff;">💡 ${step.highlight}</span>
          </div>
          <p style="margin-top:4px;">${step.desc}</p>
        </div>
      </div>
    `;
  },

  goTo(idx) {
    const spec = this.specs[this.currentLessonId];
    const el = document.getElementById("procAnimContainer");
    if (!spec || !el) return;
    this.currentStep = (idx + spec.steps.length) % spec.steps.length;
    this.mount(el, spec);
  },

  next() {
    this.goTo(this.currentStep + 1);
  },

  prev() {
    this.goTo(this.currentStep - 1);
  },

  togglePlay() {
    if (this.isPlaying) {
      this.stopTimer();
      const btn = document.getElementById("procPlayBtn");
      if (btn) btn.innerHTML = "▶️ Chạy minh họa";
    } else {
      this.isPlaying = true;
      const btn = document.getElementById("procPlayBtn");
      if (btn) btn.innerHTML = "⏸️ Tạm dừng";
      this.timer = setInterval(() => {
        if (!document.getElementById("procAnimContainer")) {
          this.stopTimer();
          return;
        }
        this.next();
      }, 3200);
    }
  }
};

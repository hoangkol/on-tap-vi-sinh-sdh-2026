// ==========================================================================
// DỮ LIỆU BÀI HỌC PHẦN 1: NHIỄM KHUẨN VÀ MIỄN DỊCH (BÀI 1 ĐẾN BÀI 3)
// Chuẩn Giáo trình Vi khuẩn Y học (Bộ môn Vi sinh ĐHYD TP.HCM 2016) – Chương 5 (tr. 41–46)
// ==========================================================================

window.LESSONS_PART1 = [
  // ========================================================================
  // BÀI 1: ĐẠI CƯƠNG NHIỄM KHUẨN & ĐỊNH ĐỀ KOCH – FALKOW
  // ========================================================================
  {
    id: 1,
    group: "I. NHIỄM KHUẨN & MIỄN DỊCH",
    title: "Bài 1: Đại cương Nhiễm khuẩn & Định đề Koch – Falkow",
    shortTitle: "Đại cương Nhiễm khuẩn & Koch",
    textbookRef: "Vi khuẩn Y học YDS 2016 – Bài 5: Nhiễm khuẩn và miễn dịch (tr. 41–42, 46)",
    summary: "Phân biệt nhiễm khuẩn với hệ vi khuẩn thường trú và người lành mang khuẩn; định nghĩa độc lực, tính sinh bệnh; Định đề Koch (1884) và Định đề Koch phân tử Falkow (1988); tiến trình nhiễm khuẩn (du khuẩn huyết vs nhiễm khuẩn huyết).",
    simId: "sim_koch_infection",
    simTitle: "Phòng Lab Phân loại Tình trạng Nhiễm khuẩn & Kiểm định Định đề Koch – Falkow",
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">📖 1. Các Khái niệm Nền tảng về Nhiễm khuẩn</div>
          <ul class="theory-list">
            <li><strong>Tác nhân gây bệnh (Pathogen):</strong> Là vi sinh vật có khả năng gây bệnh cho ký chủ.</li>
            <li><strong>Nhiễm khuẩn (Infection):</strong> Là tình trạng tác nhân gây bệnh <strong>tăng sinh trong cơ thể ký chủ</strong>.
              <div class="callout pearl" style="margin:8px 0;">
                <div class="callout-title">🔑 Tiêu chuẩn phân biệt cốt lõi (Cực hay ra thi!)</div>
                <ul>
                  <li>Sự tăng sinh của <strong>vi sinh vật thường trú (normal flora)</strong> tại vị trí thông thường của nó <strong>KHÔNG</strong> được gọi là nhiễm khuẩn (VD: <em>Streptococci</em> tiêu huyết ở phết họng, <em>Clostridium perfringens</em> trong phân người bình thường).</li>
                  <li>Ngược lại, sự tăng sinh của <strong>vi khuẩn gây bệnh thực sự</strong> trong cơ thể <strong>dù KHÔNG có triệu chứng lâm sàng</strong> vẫn được coi là <strong>nhiễm khuẩn</strong> (VD: tìm thấy <em>Shigella</em> trong phân người bình thường).</li>
                </ul>
              </div>
            </li>
            <li><strong>Người lành mang khuẩn (Carrier):</strong> Là tình trạng ký chủ <strong>bị nhiễm khuẩn nhưng không biểu hiện triệu chứng</strong> và có khả năng <strong>lây bệnh</strong> cho cơ thể khác.</li>
            <li><strong>Tác nhân nhiễm khuẩn cơ hội (Opportunistic pathogen):</strong> Tác nhân chỉ có thể gây bệnh khi <strong>sức đề kháng của cơ thể bị hư hại</strong>.</li>
            <li><strong>Tính sinh bệnh (Pathogenicity):</strong> Khả năng <em>có thể gây bệnh</em> của một tác nhân nhiễm khuẩn (tính chất).</li>
            <li><strong>Tính sinh độc (Toxigenicity):</strong> Khả năng sinh độc tố gây bệnh.</li>
            <li><strong>Độc lực (Virulence):</strong> Là khả năng <strong>định lượng</strong> của một tác nhân để gây được bệnh. Vi khuẩn độc lực cao là vi khuẩn có thể gây bệnh dù xâm nhập vào cơ thể với <strong>số lượng nhỏ</strong>.</li>
          </ul>
        </div>

        <div class="card">
          <div class="card-title">🔬 2. Xác định Vi khuẩn Gây bệnh: Định đề Koch &amp; Falkow</div>
          <p style="font-size:14px;margin-bottom:8px;"><strong>A. Định đề Koch (Robert Koch, 1884):</strong> Đưa ra khi khám phá <em>Mycobacterium tuberculosis</em> gây bệnh lao, gồm <strong>4 phần</strong>:</p>
          <ol class="theory-list">
            <li>Vi khuẩn được coi là gây bệnh khi được <strong>tìm thấy trong tổn thương</strong> của các cơ thể bị cùng một loại bệnh.</li>
            <li>Vi khuẩn này phải được <strong>cấy và thuần khiết</strong> trong thí nghiệm qua nhiều đời.</li>
            <li><strong>Gây được mô hình bệnh thực nghiệm</strong> trên súc vật với canh cấy thuần khiết này.</li>
            <li>Từ súc vật thí nghiệm <strong>phân lập lại</strong> được chính vi khuẩn gây bệnh nói trên.</li>
          </ol>
          <div class="callout trap">
            <div class="callout-title">⚠️ Ngoại lệ khiến Định đề Koch 1884 không áp dụng được</div>
            <ul>
              <li><em>Treponema pallidum</em> (giang mai) và <em>Mycobacterium leprae</em> (phong): <strong>KHÔNG cấy được</strong> trên môi trường thông dụng (dù gây được mô hình bệnh thực nghiệm).</li>
              <li><em>Neisseria gonorrhoeae</em> (lậu): <strong>nuôi cấy được</strong> nhưng <strong>KHÔNG gây bệnh thực nghiệm</strong> được trên động vật (chỉ gây bệnh cho người và dã nhân).</li>
            </ul>
          </div>
          <p style="font-size:14px;margin:10px 0 6px;"><strong>B. Định đề Koch Phân tử (Stanley Falkow, 1988):</strong> Gồm <strong>3 phần</strong> khắc phục hạn chế trên:</p>
          <ol class="theory-list">
            <li>Kiểu hình hay tính chất khảo sát có liên hệ với những thành viên sinh bệnh của giống hay những dòng gây bệnh của loài.</li>
            <li><strong>Bất hoạt gen</strong> liên hệ với độc lực sẽ dẫn đến sự <strong>giảm độc lực hay tính sinh bệnh</strong> đo lường được.</li>
            <li><strong>Sự đột biến ngược</strong> của gen đó làm <strong>phục hồi tính sinh bệnh</strong>.</li>
          </ol>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🧭 3. Tiến trình Nhiễm khuẩn &amp; Phân biệt Du khuẩn huyết – Nhiễm khuẩn huyết</div>
        <div class="table-responsive">
          <table class="med-table">
            <thead>
              <tr>
                <th>Giai đoạn Tiến trình</th>
                <th>Cơ chế &amp; Đặc điểm Sinh học</th>
                <th>Ví dụ &amp; Bẫy Trắc nghiệm Kinh điển</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Xâm nhập từ ngả vào</strong></td>
                <td>Thường qua <strong>biểu mô</strong> (niêm mạc hô hấp, tiêu hóa, sinh dục – tiết niệu) hoặc qua <strong>vùng tổn thương</strong> ở da và niêm mạc (vết cắt, vết bỏng, vết thương).</td>
                <td>Hàng rào da và niêm mạc toàn vẹn là tuyến phòng thủ cơ học và sinh hóa đầu tiên.</td>
              </tr>
              <tr>
                <td><strong>2. Bám dính &amp; Tăng sinh tại chỗ</strong></td>
                <td>Vi khuẩn phải bám dính tế bào ký chủ (thường tại biểu mô) và tăng sinh tại đây để tạo <strong>nơi nhiễm khuẩn đầu tiên</strong>.</td>
                <td>Nếu không bám dính được, vi khuẩn sẽ bị đẩy ra ngoài bởi lông chuyển, nhu động ruột, dòng nước tiểu.</td>
              </tr>
              <tr>
                <td><strong>3. Lan tràn vào mô &amp; vào máu</strong></td>
                <td>Lan trực tiếp vào mô hoặc qua <strong>đường bạch huyết</strong> để vào máu:<br/>• <strong>Du khuẩn huyết (Bacteremia):</strong> Nhiễm khuẩn máu <em>tạm thời</em>.<br/>• <strong>Nhiễm khuẩn huyết (Septicemia):</strong> Nhiễm khuẩn máu <em>trường diễn</em>.</td>
                <td><strong>Câu hỏi kinh điển YDS (tr. 46):</strong> Bệnh nhân viêm màng não mủ cấy máu và dịch não tủy đều có <em>H. influenzae</em> type b → đang ở tình trạng <strong>du khuẩn huyết (bacteremia)</strong> (máu chỉ là đường vận chuyển tạm thời tới cơ quan đích là màng não).</td>
              </tr>
              <tr>
                <td><strong>4. Cơ chế gây bệnh từ xa</strong></td>
                <td>Có thể lan tràn định cư tăng sinh ở cơ quan thích hợp, HOẶC chỉ ở tại chỗ nhưng <strong>sinh độc tố vào máu</strong> tấn công các cơ quan.</td>
                <td>Ví dụ điển hình: <strong>Bệnh bạch hầu</strong> (<em>C. diphtheriae</em> khu trú ở họng tạo giả mạc nhưng tiết ngoại độc tố vào máu hại tim, thần kinh).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Tình trạng nào sau đây KHÔNG phải là nhiễm khuẩn theo quan điểm Vi sinh Y học?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5, Câu tự lượng giá 1 (tr. 46)",
        options: [
          "Tìm thấy Streptococci tiêu huyết trong phết họng hoặc Clostridium perfringens trong mẫu phân của một người bình thường",
          "Tìm thấy vi khuẩn Shigella trong mẫu phân của một người bình thường không có triệu chứng tiêu chảy",
          "Tìm thấy Haemophilus influenzae type b trong mẫu dịch não tủy của bệnh nhân sốt cao",
          "Tìm thấy Corynebacterium diphtheriae tăng sinh và tiết độc tố tại niêm mạc họng"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 275): 1E (Cả B: Streptococci tiêu huyết ở phết họng và C: C. perfringens trong phân người bình thường đều là vi sinh vật thường trú tại vị trí thông thường nên KHÔNG phải nhiễm khuẩn). Ngược lại, Shigella là vi khuẩn gây bệnh, dù có mặt ở người không triệu chứng vẫn là nhiễm khuẩn (người lành mang khuẩn)."
      },
      {
        q: "Một người bị viêm màng não mủ, kết quả cấy máu và cấy dịch não tủy đều phân lập được vi khuẩn Haemophilus influenzae type b. Theo giáo trình Vi khuẩn Y học YDS 2016, người bệnh này đang ở tình trạng nào?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5, Câu tự lượng giá 2 (tr. 46)",
        options: [
          "Tình trạng du khuẩn huyết (bacteremia)",
          "Tình trạng nhiễm khuẩn huyết trường diễn (septicemia)",
          "Tình trạng người lành mang khuẩn (carrier)",
          "Tình trạng nhiễm khuẩn cơ hội từ hệ thường trú"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 275): 2B – Tình trạng du khuẩn huyết (bacteremia). Vi khuẩn hiện diện tạm thời trong máu để di chuyển và định cư tăng sinh tại cơ quan thích hợp (màng não) gây viêm màng não mủ, phân biệt với nhiễm khuẩn huyết trường diễn (septicemia)."
      },
      {
        q: "Theo định nghĩa chuẩn trong giáo trình Vi khuẩn Y học, thuật ngữ 'Độc lực' (Virulence) biểu thị khái niệm nào?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 41)",
        options: [
          "Khả năng định lượng của một tác nhân để gây được bệnh (gây bệnh dù xâm nhập với số lượng nhỏ)",
          "Khả năng có thể gây bệnh nói chung của một loài vi sinh vật (tính chất)",
          "Khả năng sinh ngoại độc tố protein qua gen quy định trên plasmid",
          "Khả năng sống cộng sinh bình thường trên bề mặt niêm mạc ký chủ"
        ],
        answer: 0,
        explain: "Tính sinh bệnh (pathogenicity) là khả năng có thể gây bệnh, còn Độc lực (virulence) là khả năng ĐỊNH LƯỢNG của một tác nhân để gây được bệnh; vi khuẩn độc lực cao có thể gây bệnh dù xâm nhập với số lượng nhỏ."
      },
      {
        q: "Khái niệm 'Người lành mang khuẩn' (Carrier) được định nghĩa chính xác là tình trạng nào?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 41)",
        options: [
          "Ký chủ bị nhiễm khuẩn nhưng không biểu hiện triệu chứng và có khả năng lây bệnh cho cơ thể khác",
          "Ký chủ mang hệ vi sinh vật thường trú (normal flora) trên da và đường tiêu hóa",
          "Ký chủ chỉ mắc bệnh khi hệ miễn dịch suy giảm bởi tác nhân cơ hội",
          "Ký chủ đã được chủng ngừa giải độc tố nên không còn mang vi khuẩn gây bệnh"
        ],
        answer: 0,
        explain: "Người lành mang khuẩn (carrier) là ký chủ đang bị nhiễm khuẩn (tác nhân gây bệnh thực sự tăng sinh), không biểu hiện triệu chứng nhưng có khả năng phát tán lây bệnh cho người khác."
      },
      {
        q: "Robert Koch đã đề xuất Định đề Koch gồm 4 tiêu chuẩn vào năm 1884 trong quá trình khám phá tác nhân gây bệnh nào?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 41)",
        options: [
          "Mycobacterium tuberculosis (bệnh lao)",
          "Corynebacterium diphtheriae (bệnh bạch hầu)",
          "Treponema pallidum (bệnh giang mai)",
          "Neisseria gonorrhoeae (bệnh lậu)"
        ],
        answer: 0,
        explain: "Năm 1884, trong khi khám phá vi khuẩn Mycobacterium tuberculosis gây bệnh lao, Robert Koch đã đưa ra định đề 4 phần dùng chung để xác định một loài vi khuẩn gây bệnh đặc hiệu."
      },
      {
        q: "Vì sao Định đề Koch 1884 KHÔNG phù hợp để chứng minh nguyên nhân gây bệnh của Treponema pallidum và Mycobacterium leprae?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 42)",
        options: [
          "Vì hai vi khuẩn này không nuôi cấy được trên môi trường thông dụng dù gây được mô hình bệnh thực nghiệm",
          "Vì hai vi khuẩn này chỉ gây bệnh bằng ngoại độc tố mà không xâm nhập vào mô",
          "Vì hai vi khuẩn này dễ dàng nuôi cấy thuần khiết nhưng không tìm thấy trong tổn thương",
          "Vì hai vi khuẩn này thuộc hệ vi sinh vật thường trú bình thường ở người"
        ],
        answer: 0,
        explain: "T. pallidum (giang mai) và M. leprae (phong) không cấy được trên môi trường nhân tạo thông dụng (vi phạm tiêu chuẩn 2 của Koch), dù có thể gây mô hình bệnh thực nghiệm."
      },
      {
        q: "Trường hợp ngoại lệ nào với Định đề Koch có đặc điểm 'nuôi cấy được trên môi trường phòng thí nghiệm nhưng KHÔNG gây được bệnh thực nghiệm trên động vật'?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 42)",
        options: [
          "Neisseria gonorrhoeae",
          "Mycobacterium tuberculosis",
          "Salmonella typhi",
          "Clostridium tetani"
        ],
        answer: 0,
        explain: "Neisseria gonorrhoeae (lậu cầu) nuôi cấy được nhưng không gây bệnh thực nghiệm được trên động vật (chỉ gây bệnh trên người và dã nhân)."
      },
      {
        q: "Điểm cốt lõi của Định đề Koch phân tử do Falkow đề xuất năm 1988 là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 42)",
        options: [
          "Bất hoạt gen độc lực làm giảm độc lực đo được, và đột biến ngược phục hồi gen đó sẽ khôi phục tính sinh bệnh",
          "Mọi vi khuẩn gây bệnh bắt buộc phải nuôi cấy thuần khiết được trên thạch máu qua nhiều thế hệ",
          "Chỉ các gen nằm trên plasmid mới được xem là yếu tố gây bệnh đặc hiệu của loài",
          "Xác định bệnh bằng cách tìm kháng thể IgM đặc hiệu trong huyết thanh của vật chủ thực nghiệm"
        ],
        answer: 0,
        explain: "Định đề Koch phân tử (Falkow 1988) gắn kết kiểu hình gây bệnh với gen: (1) kiểu hình gắn với dòng gây bệnh, (2) bất hoạt gen độc lực → giảm độc lực đo lường được, (3) đột biến ngược → phục hồi tính sinh bệnh."
      },
      {
        q: "Trong tiến trình nhiễm khuẩn, sự khác biệt giữa 'Du khuẩn huyết' (Bacteremia) và 'Nhiễm khuẩn huyết' (Septicemia) là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 42)",
        options: [
          "Du khuẩn huyết là nhiễm khuẩn máu tạm thời, còn nhiễm khuẩn huyết là tình trạng nhiễm khuẩn máu trường diễn",
          "Du khuẩn huyết chỉ do vi khuẩn Gram dương, còn nhiễm khuẩn huyết chỉ do vi khuẩn Gram âm",
          "Du khuẩn huyết không có vi khuẩn trong máu mà chỉ có ngoại độc tố lưu hành",
          "Du khuẩn huyết luôn gây tử vong nhanh hơn nhiễm khuẩn huyết do không đáp ứng kháng sinh"
        ],
        answer: 0,
        explain: "Theo tr. 42: Vi khuẩn qua đường bạch huyết vào máu gây nhiễm khuẩn máu có thể tạm thời (du khuẩn huyết, bacteremia) hoặc trường diễn (nhiễm khuẩn huyết, septicemia)."
      },
      {
        q: "Cơ chế gây bệnh đặc trưng của vi khuẩn bạch hầu (Corynebacterium diphtheriae) trong tiến trình nhiễm khuẩn là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 42)",
        options: [
          "Tăng sinh tại chỗ nhiễm khuẩn ban đầu ở niêm mạc rồi sinh ngoại độc tố vào máu tấn công các cơ quan",
          "Xâm nhập ồ ạt vào máu gây nhiễm khuẩn huyết trường diễn đa cơ quan ngay từ đầu",
          "Chỉ gây bệnh cơ hội khi ký chủ bị đái tháo đường hoặc suy giảm miễn dịch tế bào T",
          "Bám dính bằng protein A lên vùng Fc của IgG để phá hủy hồng cầu tại chỗ"
        ],
        answer: 0,
        explain: "Vi khuẩn bạch hầu khu trú tăng sinh tại niêm mạc hầu họng và gây tổn thương cơ quan từ xa (tim, thần kinh) bằng cách giải phóng ngoại độc tố vào máu."
      },
      {
        q: "Sự tăng sinh của tác nhân nào sau đây được xếp loại là nhiễm khuẩn dù bệnh nhân hoàn toàn không có triệu chứng lâm sàng?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 41, 46)",
        options: [
          "Sự tăng sinh của Shigella trong đường ruột người bình thường",
          "Sự tăng sinh của vi khuẩn thường trú tại đúng vị trí cư trú sinh lý của nó",
          "Sự hiện diện của Streptococci tiêu huyết ở phết họng người khỏe mạnh",
          "Sự hiện diện của Clostridium perfringens trong mẫu phân người khỏe mạnh"
        ],
        answer: 0,
        explain: "Sự tăng sinh của vi khuẩn gây bệnh thực sự (như Shigella) trong cơ thể dù không biểu hiện triệu chứng vẫn được coi là nhiễm khuẩn (người lành mang khuẩn)."
      },
      {
        q: "Bước bắt buộc ngay sau khi vi khuẩn xâm nhập qua ngả vào niêm mạc để thiết lập ổ nhiễm khuẩn ban đầu là bước nào?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 42)",
        options: [
          "Bám dính vào tế bào ký chủ (thường tại biểu mô) và tăng sinh tại đó",
          "Giải phóng nội độc tố lipopolysaccharide vào vòng tuần hoàn chung",
          "Xâm nhập ngay vào bên trong nhân tế bào thực bào để tránh kháng thể",
          "Chuyển hóa sắt dạng trùng hợp thành hemoglobin của ký chủ"
        ],
        answer: 0,
        explain: "Khi vào cơ thể, vi khuẩn phải bám dính được vào tế bào ký chủ (thường ở biểu mô) và tăng sinh tại đây để tạo nên nơi nhiễm khuẩn đầu tiên trước khi lan tràn."
      }
    ]
  },

  // ========================================================================
  // BÀI 2: YẾU TỐ ĐỘC LỰC VI KHUẨN (ĐỘC TỐ, ENZYM & CHỐNG THỰC BÀO)
  // ========================================================================
  {
    id: 2,
    group: "I. NHIỄM KHUẨN & MIỄN DỊCH",
    title: "Bài 2: Yếu tố Độc lực Vi khuẩn (Độc tố, Enzym & Chống thực bào)",
    shortTitle: "Độc lực, Độc tố & Enzym",
    textbookRef: "Vi khuẩn Y học YDS 2016 – Bài 5 (tr. 42–44, 46)",
    summary: "Cơ chế bám dính vượt đẩy tĩnh điện; Bảng 5.1 đối chiếu Ngoại độc tố (protein) và Nội độc tố (LPS); hậu quả sinh lý bệnh của nội độc tố; 5 enzym ngoại bào; 3 nhóm yếu tố chống thực bào; nội bào, dị biệt KN, tranh sắt và tổn thương miễn dịch.",
    simId: "sim_toxins_virulence",
    simTitle: "Trình Đối chiếu Ngoại độc tố vs Nội độc tố (Bảng 5.1) & Mô phỏng Độc tố – Enzym",
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">🧲 1. Yếu tố Bám dính &amp; Xâm nhập Tế bào Ký chủ</div>
          <ul class="theory-list">
            <li><strong>Vấn đề lực đẩy tĩnh điện:</strong> Bề mặt vi khuẩn và bề mặt tế bào ký chủ <strong>đều mang điện tích âm</strong> nên đẩy nhau.</li>
            <li><strong>Cách khắc phục 1 – Tính kỵ nước bề mặt:</strong> Bề mặt vi khuẩn có <strong>tính kỵ nước càng cao</strong> thì càng dễ thắng được lực đẩy tĩnh điện để bám dính.</li>
            <li><strong>Cách khắc phục 2 – Phân tử bề mặt:</strong> Pili của <em>E. coli</em>; tua (<em>fimbriae</em>) chứa <strong>lipoteichoic acid (LTA)</strong> và <strong>protein M</strong> của <em>Streptococcus pyogenes</em>.</li>
            <li><strong>2 kiểu xâm nhập tế bào ký chủ vào mô:</strong>
              <ul>
                <li>Qua kẽ hở giữa các tế bào biểu mô: <em>Salmonella</em>.</li>
                <li>Xâm nhập vào bên trong tế bào biểu mô (có thể tăng sinh hoặc không tăng sinh trong tế bào này) rồi mới xâm nhập vào mô: <em>Neisseria gonorrhoeae</em>, <em>Yersinia</em>...</li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="card">
          <div class="card-title">🧪 2. Các Enzym Ngoại bào Phá hủy Mô &amp; Lan tràn</div>
          <p style="font-size:13.5px;margin-bottom:8px;">Giúp vi khuẩn hủy mô, dễ xâm nhập và lan tràn hoặc né tránh đáp ứng bảo vệ:</p>
          <ul class="theory-list">
            <li><strong>Collagenase:</strong> Hủy collagen của mô liên kết.</li>
            <li><strong>Coagulase:</strong> Làm đông sợi fibrin xung quanh vi khuẩn, <strong>bảo vệ vi khuẩn thoát khỏi thực bào</strong> (đặc trưng tụ cầu vàng).</li>
            <li><strong>Hyaluronidase:</strong> Hủy acid hyaluronic (chất gắn kết gian bào), giúp vi khuẩn <strong>lan tràn</strong> sâu vào mô.</li>
            <li><strong>Hemolysin và Leucocidin:</strong> Làm tiêu hồng cầu và giảm/hủy bạch cầu.</li>
            <li><strong>IgA1 protease:</strong> Phá hủy <strong>IgA1</strong> – kháng thể chủ lực trên bề mặt niêm mạc; là yếu tố gây bệnh quan trọng của <em>Neisseria gonorrhoeae</em>, <em>Neisseria meningitidis</em> và <em>Haemophilus influenzae</em>.</li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-title">☠️ 3. So sánh Ngoại độc tố và Nội độc tố (Bảng 5.1 chuẩn YDS 2016)</div>
        <div class="table-responsive">
          <table class="med-table">
            <thead>
              <tr>
                <th>Tiêu chí so sánh</th>
                <th>Ngoại độc tố (Exotoxin)</th>
                <th>Nội độc tố (Endotoxin)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>Nguồn giải phóng</strong></td><td>Do vi khuẩn <strong>còn sống tiết ra</strong></td><td>Do vi khuẩn <strong>chết phóng thích</strong> (thành phần vách)</td></tr>
              <tr><td><strong>Nhóm vi khuẩn</strong></td><td>Vi khuẩn <strong>Gram dương và Gram âm</strong> tiết ra</td><td>Thấy ở vi khuẩn <strong>Gram âm</strong>, ít ở Gram dương</td></tr>
              <tr><td><strong>Bản chất hóa học</strong></td><td><strong>Protein</strong></td><td><strong>Lipopolysaccharide (LPS)</strong></td></tr>
              <tr><td><strong>Tính bền với nhiệt</strong></td><td><strong>Không bền</strong> với nhiệt</td><td><strong>Tương đối bền</strong> với nhiệt</td></tr>
              <tr><td><strong>Tính sinh kháng nguyên</strong></td><td><strong>Cao</strong></td><td><strong>Yếu</strong></td></tr>
              <tr><td><strong>Chế giải độc tố (Toxoid)</strong></td><td><strong>Có thể</strong> chế thành giải độc tố để chủng ngừa</td><td><strong>Không thể</strong> chế thành giải độc tố</td></tr>
              <tr><td><strong>Mức độ độc</strong></td><td><strong>Rất độc</strong> (cực độc ở liều nhỏ)</td><td><strong>Tương đối ít độc</strong></td></tr>
              <tr><td><strong>Thụ thể trên tế bào</strong></td><td><strong>Có thụ thể</strong> đặc hiệu trên tế bào cơ thể</td><td><strong>Không có thụ thể</strong></td></tr>
              <tr><td><strong>Biểu hiện bệnh</strong></td><td>Gây bệnh đặc hiệu; <strong>không gây sốt</strong></td><td>Không gây bệnh đặc hiệu; <strong>hay gây sốt, choáng</strong></td></tr>
              <tr><td><strong>Vị trí gen quy định</strong></td><td>Quy định bởi <strong>plasmid</strong> (hoặc phage)</td><td>Quy định bởi gen nằm trên <strong>nhiễm sắc thể</strong></td></tr>
            </tbody>
          </table>
        </div>
        <div class="grid-2" style="margin-top:12px;">
          <div class="callout trap" style="margin:0;">
            <div class="callout-title">💉 Các Ngoại độc tố Quan trọng Thường gặp</div>
            <ul>
              <li><strong>Bạch hầu (<em>C. diphtheriae</em>):</strong> Cực độc, liều gây chết chỉ <strong>40 ng</strong>; làm <strong>ngưng tổng hợp protein</strong>.</li>
              <li><strong>Botulism (<em>C. botulinum</em>):</strong> Cực độc, tác động thần kinh gây <strong>liệt mềm</strong>.</li>
              <li><strong>Uốn ván (<em>C. tetani</em>):</strong> Cực độc, tác động thần kinh gây <strong>co cứng cơ</strong>.</li>
              <li><strong>Hoại thư sinh hơi (<em>C. perfringens</em>):</strong> Gây hoại tử mô.</li>
              <li><strong>Độc tố gây đỏ của liên cầu khuẩn:</strong> Gây mẩn đỏ ngoài da.</li>
              <li><strong>Độc tố 1 gây sốc độc tố (TSST-1):</strong> Do vài dòng <em>Staphylococcus aureus</em> trên niêm mạc tiết ra.</li>
              <li><strong>Độc tố ruột:</strong> Gây tiêu chảy, do nhiều giống vi khuẩn tiết ra (VD: <em>Vibrio cholerae</em>).</li>
            </ul>
          </div>
          <div class="callout warning" style="margin:0;">
            <div class="callout-title">🔥 Hậu quả Bệnh lý của Nội độc tố (Gram âm) &amp; Peptidoglycan</div>
            <ul>
              <li><strong>Sốt:</strong> Tác động lên tế bào làm tiết <strong>Interleukin 1 (IL-1)</strong> ảnh hưởng trung tâm điều hòa thân nhiệt.</li>
              <li><strong>Thay đổi bạch cầu:</strong> Giai đoạn đầu <strong>giảm bạch cầu</strong>, sau đó <strong>tăng bạch cầu</strong>.</li>
              <li><strong>Hạ huyết áp &amp; Tổn hại dinh dưỡng/Toan huyết:</strong> Giãn mạch ngoại biên, tăng tính thấm mao quản, giảm hồi lưu tĩnh mạch, kích thích chất giãn mạch → sốc &amp; toan huyết.</li>
              <li><strong>Kích hoạt yếu tố C3</strong> của bổ thể theo <strong>con đường biến đổi</strong> (alternative pathway).</li>
              <li><strong>Đông máu nội mạch rải rác (DIC):</strong> Tác động trực tiếp yếu tố đông máu và hậu quả hạ huyết áp – sốc → <strong>Gây chết</strong>.</li>
              <li><em>Peptidoglycan:</em> Tác động giống LPS nhưng yếu hơn.</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🛡️ 4. Cơ chế Chống Thực bào &amp; Né tránh Miễn dịch của Vi khuẩn</div>
        <div class="grid-2">
          <div>
            <h4 style="color:var(--primary);margin-bottom:6px;">3 Nhóm Yếu tố Chống Thực bào</h4>
            <ul class="theory-list">
              <li><strong>Kết hợp yếu tố của cơ thể</strong> làm thực bào không nhận diện được: VD <strong>protein A của <em>S. aureus</em></strong> gắn với phần <strong>Fc của IgG</strong>.</li>
              <li><strong>Trang bị yếu tố bề mặt</strong> chống lại thực bào: <strong>Nang</strong> của <em>Pneumococcus</em>, <strong>pili</strong> của <em>N. gonorrhoeae</em>, <strong>protein M</strong> của <em>S. pyogenes</em>.</li>
              <li><strong>Tiết các yếu tố hòa tan</strong> ngăn cản sự hóa hướng động của bạch cầu.</li>
            </ul>
          </div>
          <div>
            <h4 style="color:var(--primary);margin-bottom:6px;">4 Cơ chế Tồn tại &amp; Gây hại Khác</h4>
            <ul class="theory-list">
              <li><strong>Tính gây bệnh nội bào:</strong> Sống và tăng sinh trong thực bào nhờ <strong>ngăn cản sự kết hợp phagosome với lysosome</strong>; hoặc tăng sinh trong tế bào không phải thực bào.</li>
              <li><strong>Tính dị biệt kháng nguyên:</strong> Thay đổi týp huyết thanh để lẩn trốn miễn dịch đặc hiệu.</li>
              <li><strong>Tranh thủ chất dinh dưỡng (đặc biệt là Sắt):</strong> Sắt tự do trong cơ thể rất ít (gắn protein); vi khuẩn phải dùng sắt dạng trùng hợp (ái lực thấp) hoặc tiết hệ thống có ái lực rất cao với sắt.</li>
              <li><strong>Tổn thương miễn dịch hậu nhiễm:</strong> <strong>Thấp khớp cấp</strong> sau nhiễm <em>Streptococci</em> ở họng (viêm họng); <strong>Viêm cầu thận cấp</strong> sau nhiễm <em>Streptococci</em> ngoài da.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Yếu tố cấu trúc nào sau đây giúp vi khuẩn kháng lại mạnh mẽ sự thực bào của ký chủ?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5, Câu tự lượng giá 3 (tr. 46)",
        options: [
          "Nang (capsule) của phế cầu (Streptococcus pneumoniae)",
          "Bào tử (endospore) nằm trong bào tương khi gặp điều kiện khô hạn",
          "Nội độc tố lipopolysaccharide phóng thích khi vi khuẩn ly giải",
          "Chuỗi polysome gắn mRNA ở tiểu đơn vị 30S – 50S"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 275): 3A (Nang). Trang bị yếu tố bề mặt chống thực bào gồm nang của Pneumococcus, pili của N. gonorrhoeae và protein M của S. pyogenes. Bào tử giúp chịu đựng môi trường khắc nghiệt chứ không phải yếu tố bề mặt chống thực bào."
      },
      {
        q: "Những vi khuẩn nào sau đây gây bệnh chủ yếu thông qua ngoại độc tố (exotoxin)?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5, Câu tự lượng giá 4 (tr. 46)",
        options: [
          "Corynebacterium diphtheriae và Vibrio cholerae",
          "Chỉ Salmonella typhi mà không có Vibrio cholerae",
          "Chỉ các trực khuẩn Gram âm đường ruột qua nội độc tố LPS",
          "Treponema pallidum và Mycoplasma pneumoniae"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 275): 4D (B hay C đúng, tức Corynebacterium diphtheriae tiết ngoại độc tố bạch hầu và Vibrio cholerae tiết độc tố ruột gây tiêu chảy). Salmonella typhi chủ yếu liên quan đến nội độc tố và xâm nhập."
      },
      {
        q: "Vì sao bề mặt vi khuẩn và bề mặt tế bào ký chủ vốn đẩy nhau về mặt tĩnh điện nhưng vi khuẩn vẫn bám dính được?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 42)",
        options: [
          "Do bề mặt vi khuẩn có tính kỵ nước cao giúp thắng lực đẩy tĩnh điện âm, kết hợp các phân tử bám dính như pili, LTA, protein M",
          "Do vi khuẩn đảo ngược điện tích màng thành dương hoàn toàn bằng enzym coagulase",
          "Do kháng thể IgA1 tiết tạo cầu nối gắn cố định vi khuẩn vào biểu mô ký chủ",
          "Do nội độc tố LPS có thụ thể chuyên biệt hút chặt tế bào biểu mô"
        ],
        answer: 0,
        explain: "Cả vi khuẩn và tế bào ký chủ đều mang điện tích âm nên đẩy nhau; vi khuẩn có tính kỵ nước bề mặt càng cao càng dễ thắng lực đẩy này, cộng thêm pili (E. coli), lipoteichoic acid và protein M (S. pyogenes)."
      },
      {
        q: "Đặc điểm nào sau đây ĐÚNG với Ngoại độc tố nhưng KHÔNG ĐÚNG với Nội độc tố (theo Bảng 5.1)?",
        source: "Vi khuẩn Y học YDS 2016 – Bảng 5.1 (tr. 43)",
        options: [
          "Bản chất protein, không bền với nhiệt, có thể chế thành giải độc tố (toxoid) và do gen trên plasmid quy định",
          "Bản chất lipopolysaccharide, tương đối bền với nhiệt, tính sinh kháng nguyên yếu",
          "Chỉ do vi khuẩn chết phóng thích từ vách tế bào, gây sốt thông qua interleukin 1",
          "Không có thụ thể đặc hiệu trên tế bào cơ thể và do gen trên nhiễm sắc thể quy định"
        ],
        answer: 0,
        explain: "Theo Bảng 5.1 (tr. 43): Ngoại độc tố là protein, do vi khuẩn sống tiết ra, không bền nhiệt, sinh kháng nguyên cao, chế được giải độc tố chủng ngừa, có thụ thể tế bào, gây bệnh đặc hiệu không gây sốt, quy định bởi plasmid."
      },
      {
        q: "Liều gây chết của ngoại độc tố bạch hầu (Corynebacterium diphtheriae) và cơ chế phân tử của nó là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 42)",
        options: [
          "40 ng; làm ngưng tổng hợp protein của tế bào ký chủ",
          "40 mg; kích hoạt yếu tố C3 của bổ thể qua con đường cổ điển",
          "400 μg; gây liệt mềm do ức chế giải phóng acetylcholin",
          "4 ng; làm đông sợi fibrin quanh ổ nhiễm khuẩn"
        ],
        answer: 0,
        explain: "Trang 42 ghi rõ: Ngoại độc tố bạch hầu do Corynebacterium diphtheriae tiết ra rất độc, liều gây chết là 40 ng, có tác dụng làm ngưng tổng hợp protein."
      },
      {
        q: "Cặp đôi tác nhân và biểu hiện thần kinh – cơ của ngoại độc tố nào sau đây chính xác?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 42)",
        options: [
          "Clostridium botulinum gây liệt mềm; Clostridium tetani gây co cứng cơ",
          "Clostridium botulinum gây co cứng cơ; Clostridium tetani gây liệt mềm",
          "Clostridium perfringens gây sốc độc tố TSST-1; S. aureus gây hoại tử sinh hơi",
          "Streptococcus pyogenes gây liệt mềm; Corynebacterium diphtheriae gây co cứng cơ"
        ],
        answer: 0,
        explain: "Ngoại độc tố Botulinum (C. botulinum) tác động thần kinh gây liệt mềm; ngoại độc tố uốn ván (C. tetani) tác động thần kinh gây co cứng cơ."
      },
      {
        q: "Nội độc tố của vi khuẩn Gram âm gây sốt và kích hoạt bổ thể theo cơ chế nào?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 43)",
        options: [
          "Kích thích tế bào tiết Interleukin 1 (IL-1) tác động trung tâm điều hòa thân nhiệt; hoạt hóa yếu tố C3 qua con đường biến đổi",
          "Gắn trực tiếp vào thụ thể nhiệt ở da; hoạt hóa C1q qua phức hợp kháng nguyên – kháng thể",
          "Tiết giải độc tố gây co mạch trung tâm; hoạt hóa trực tiếp phức hợp tấn công màng C9 không qua C3",
          "Ức chế sản xuất IL-1 của đại thực bào; bất hoạt hoàn toàn bổ thể C3 trong huyết thanh"
        ],
        answer: 0,
        explain: "Trang 43: Nội độc tố tác động lên một vài tế bào làm tiết Interleukin 1 ảnh hưởng trung tâm điều hòa thân nhiệt gây sốt, đồng thời kích hoạt yếu tố C3 của bổ thể thông qua con đường biến đổi (alternative pathway)."
      },
      {
        q: "Diễn biến số lượng bạch cầu ngoại vi điển hình dưới tác động của nội độc tố vi khuẩn Gram âm là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 43)",
        options: [
          "Giảm bạch cầu ở giai đoạn đầu của nhiễm khuẩn, sau đó là tăng bạch cầu",
          "Tăng bạch cầu kịch phát ngay từ phút đầu rồi giảm vĩnh viễn về 0",
          "Chỉ giảm bạch cầu ái toan, bạch cầu đa nhân trung tính không thay đổi",
          "Không ảnh hưởng đến bạch cầu mà chỉ gây tan hồng cầu ồ ạt"
        ],
        answer: 0,
        explain: "Trang 43 ghi rõ: Nội độc tố làm giảm bạch cầu trong giai đoạn đầu của nhiễm khuẩn, rồi sau đó là tăng bạch cầu."
      },
      {
        q: "Enzym ngoại bào nào giúp vi khuẩn phá hủy kháng thể bề mặt niêm mạc và là yếu tố gây bệnh của N. gonorrhoeae, N. meningitidis, H. influenzae?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 43)",
        options: [
          "IgA1 protease",
          "Hyaluronidase",
          "Coagulase",
          "Collagenase"
        ],
        answer: 0,
        explain: "IgA1 protease phá hủy IgA1 (kháng thể trên bề mặt niêm mạc), là yếu tố gây bệnh của Neisseria gonorrhoeae, Neisseria meningitidis và Haemophilus influenzae."
      },
      {
        q: "Cơ chế chống thực bào đặc hiệu của Protein A ở Staphylococcus aureus là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 44)",
        options: [
          "Gắn với phần Fc của kháng thể IgG khiến tế bào thực bào không nhận diện được",
          "Hòa tan acid hyaluronic giúp vi khuẩn chạy trốn khỏi ổ viêm nhanh chóng",
          "Ức chế trực tiếp sự tổng hợp H2O2 và iod bên trong tế bào lympho B",
          "Tạo lớp vỏ peptidoglycan dày gấp 5 lần ngăn cản mọi đại thực bào"
        ],
        answer: 0,
        explain: "Protein A của S. aureus là ví dụ điển hình cho cơ chế 'kết hợp với một yếu tố của cơ thể': gắn vào phần Fc của IgG làm thực bào không nhận diện được (vô hiệu hóa opsonin hóa)."
      },
      {
        q: "Vi khuẩn gây bệnh nội bào tồn tại và tăng sinh được bên trong tế bào thực bào chủ yếu nhờ cơ chế nào?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 44)",
        options: [
          "Ngăn cản sự kết hợp giữa phagosome và lysosome trong tế bào thực bào",
          "Tiết ngoại độc tố TSST-1 làm đông đặc toàn bộ bào tương của đại thực bào",
          "Chuyển thành dạng bào tử bất hoạt hoàn toàn trong nhân của bạch cầu đa nhân",
          "Trung hòa pH kiềm của dịch tiêu hóa nhờ enzym urease ngoại bào"
        ],
        answer: 0,
        explain: "Trang 44: Một số vi khuẩn có khả năng sống và tăng sinh trong các thực bào nhờ ngăn cản sự kết hợp với phagosome và lysosome trong thực bào."
      },
      {
        q: "Tổn thương miễn dịch hậu nhiễm Streptococci phân biệt theo vị trí nhiễm khuẩn ban đầu như thế nào?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 44)",
        options: [
          "Thấp khớp cấp sau nhiễm Streptococci ở họng (viêm họng); Viêm cầu thận cấp sau nhiễm Streptococci ngoài da",
          "Viêm cầu thận cấp chỉ sau nhiễm ở họng; Thấp khớp cấp chỉ sau nhiễm trùng tiểu",
          "Sốc độc tố TSST-1 sau nhiễm ở họng; Hoại thư sinh hơi sau nhiễm ngoài da",
          "Đông máu nội mạch rải rác DIC sau nhiễm ở họng; Hội chứng liệt mềm sau nhiễm da"
        ],
        answer: 0,
        explain: "Trang 44 nêu rõ: Tổn thương miễn dịch gặp ở trường hợp bị thấp khớp cấp sau khi nhiễm Streptococci ở họng (viêm họng) hay bị viêm cầu thận cấp sau khi nhiễm Streptococci ngoài da."
      }
    ]
  },

  // ========================================================================
  // BÀI 3: CƠ CHẾ CHỐNG NHIỄM KHUẨN CỦA KÝ CHỦ (KHÔNG ĐẶC HIỆU & ĐẶC HIỆU)
  // ========================================================================
  {
    id: 3,
    group: "I. NHIỄM KHUẨN & MIỄN DỊCH",
    title: "Bài 3: Cơ chế Chống Nhiễm khuẩn của Ký chủ (Không đặc hiệu & Đặc hiệu)",
    shortTitle: "Miễn dịch Ký chủ",
    textbookRef: "Vi khuẩn Y học YDS 2016 – Bài 5 (tr. 44–46)",
    summary: "Hàng rào da, niêm mạc hô hấp/tiêu hóa và hệ VSV thường trú; cơ chế thực bào (opsonin hóa Fc/C3, phagosome-lysosome, yếu tố tăng/giảm thực bào ở ĐTĐ); β-lysin, Interferon, viêm, sốt; Miễn dịch tự nhiên (5 yếu tố) vs thu được (chủ động/thụ động); Lympho B vs Lympho T.",
    simId: "sim_host_immunity",
    simTitle: "Phòng Lab Hàng rào Ký chủ, Thực bào & Phân loại Miễn dịch Tự nhiên / Thu được",
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">🚧 1. Cơ chế Không đặc hiệu: Hàng rào Sinh lý tại Ngả vào</div>
          <ul class="theory-list">
            <li><strong>Da:</strong> Mồ hôi và chất nhày có <strong>tính acid</strong>, chứa các <strong>acid béo độc hại</strong> với vi khuẩn và enzym <strong>lysozym</strong> (lysozym cũng có trong nước mắt, dịch tiết cổ tử cung, niêm mạc hô hấp).</li>
            <li><strong>Niêm mạc hô hấp:</strong> Chất nhầy dính giữ vi khuẩn → <strong>hệ thống lông tơ</strong> cử động đẩy ra ngoài + phản xạ ho, hắt hơi; kết hợp lysozym, <strong>IgA tiết</strong>, đại thực bào phổi. Nếu xuyên qua sẽ bị đại thực bào đưa đến <strong>hạch lympho kế cận</strong> (tiền đồn đầu tiên).
              <div class="callout trap" style="margin:6px 0;">
                <div class="callout-title">⚠️ Yếu tố làm tổn thương hàng rào hô hấp</div>
                Dùng <strong>rượu, thuốc lá, thuốc phiện, nhiễm virus đường hô hấp</strong> → dễ tăng nhiễm khuẩn hô hấp.
              </div>
            </li>
            <li><strong>Bộ máy tiêu hóa:</strong> Nước bọt (enzym thủy giải), dạ dày (dịch acid), ruột (enzym hủy protein, đại thực bào hoạt động, IgA tiết).</li>
            <li><strong>Hệ vi sinh vật thường trú:</strong> Sống trên niêm mạc, ức chế vi khuẩn gây bệnh bằng cách <strong>cạnh tranh chất dinh dưỡng</strong> hay <strong>tiết các chất độc</strong> đối với vi khuẩn gây bệnh.</li>
          </ul>
        </div>

        <div class="card">
          <div class="card-title">🫧 2. Thực bào, Hệ Võng Nội Mô &amp; Đáp ứng Không đặc hiệu</div>
          <ul class="theory-list">
            <li><strong>Hai nhóm tế bào thực bào:</strong>
              <ul>
                <li><em>Di động (máu, bạch huyết):</em> Bạch cầu đa nhân, bạch cầu đơn nhân.</li>
                <li><em>Định cư (hệ lưới võng nội mô):</em> <strong>Tế bào Kupffer</strong> ở gan, <strong>mô bào (histiocytes)</strong> ở mô, <strong>phế bào (pneumocytes)</strong> ở phế nang.</li>
              </ul>
            </li>
            <li><strong>Tăng vs Giảm thực bào:</strong>
              <ul>
                <li><em>Tăng:</em> Sự <strong>opsonin hóa</strong> (nhờ thụ thể trên bề mặt thực bào gắn <strong>Fc của kháng thể</strong> hay <strong>C3 của bổ thể</strong>); hiện tượng viêm cấp tính.</li>
                <li><em>Giảm:</em> Tăng áp lực thẩm thấu, giảm phosphate máu.</li>
                <li><strong>Bẫy Đái tháo đường:</strong> Hiện tượng thực bào (bắt nuốt) vẫn bình thường, nhưng <strong>đại thực bào mất khả năng giết chết vi khuẩn</strong>!</li>
              </ul>
            </li>
            <li><strong>Cơ chế bắt &amp; giết vi khuẩn:</strong> Chìa chân giả tạo <strong>phagosome</strong> → hòa với <strong>lysosome</strong> → giết khuẩn nhờ các <strong>peroxid (H₂O₂)</strong>, chất oxy hóa (<strong>iod, clo</strong>), enzym tiêu hủy trong lysosome.</li>
            <li><strong>Yếu tố dịch thể &amp; toàn thân:</strong> <strong>β-lysin</strong> trong huyết thanh diệt một số vi khuẩn Gram dương; <strong>Interferon</strong> ngăn cản virus; <strong>Viêm</strong> (giãn mao mạch + hóa hướng động); <strong>Sốt</strong> (nội độc tố, lymphokine tác động trung tâm điều nhiệt).</li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🎯 3. Miễn dịch Đặc hiệu: Tự nhiên vs Thu được &amp; Cơ chế B – T</div>
        <div class="grid-2">
          <div>
            <h4 style="color:var(--primary);margin-bottom:6px;">A. Miễn dịch Tự nhiên (5 yếu tố chi phối)</h4>
            <ul class="theory-list">
              <li><strong>Tùy loại:</strong> VD vi khuẩn bệnh lậu chỉ gây bệnh trên người và dã nhân, không gây trên động vật khác.</li>
              <li><strong>Tùy di truyền &amp; giống:</strong> Bệnh <em>Coccidioidomycosis</em> lan tỏa ở người da đen cao gấp <strong>10 lần</strong> người da trắng.</li>
              <li><strong>Tùy cá nhân:</strong> Quần thể đề kháng hơn hoặc cá nhân khiếm khuyết di truyền tạo kháng thể.</li>
              <li><strong>Tùy tuổi:</strong> Trẻ quá nhỏ và người già dễ nhiễm khuẩn; VD viêm màng não mủ sơ sinh hay do <em>Coliform</em> vì kháng thể giết khuẩn này là <strong>IgM không thể qua nhau thai được</strong>.</li>
              <li><strong>Tùy biến dưỡng / kích thích tố:</strong> Suy dinh dưỡng, đái tháo đường dễ nhiễm khuẩn hơn.</li>
            </ul>
          </div>
          <div>
            <h4 style="color:var(--primary);margin-bottom:6px;">B. Miễn dịch Thu được (Thụ động vs Chủ động)</h4>
            <ul class="theory-list">
              <li><strong>Thu được Thụ động:</strong>
                <ul>
                  <li>Trẻ sơ sinh <strong>6 tháng đầu</strong> miễn dịch nhờ <strong>kháng thể từ mẹ truyền qua nhau thai và qua sữa mẹ</strong>.</li>
                  <li><strong>Huyết thanh phòng ngừa &amp; huyết thanh liệu pháp:</strong> VD tiêm <strong>SAD</strong> (kháng thể chống độc tố bạch hầu) để trung hòa độc tố trong máu.</li>
                </ul>
              </li>
              <li><strong>Thu được Chủ động:</strong> Có được <strong>sau khi mắc bệnh</strong> hoặc <strong>sau chủng ngừa vaccin</strong>. Có thể vĩnh viễn suốt đời (đậu mùa, sốt vàng, trái rạ, sởi) hoặc tạm thời tùy loại vaccin/vi khuẩn.</li>
            </ul>
          </div>
        </div>
        <div class="table-responsive" style="margin-top:10px;">
          <table class="med-table">
            <thead>
              <tr>
                <th>Cơ chế Miễn dịch Đặc hiệu</th>
                <th>Tế bào chịu trách nhiệm &amp; Nguồn gốc</th>
                <th>Khả năng truyền miễn dịch thụ động</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Miễn dịch qua trung gian kháng thể (Thể dịch)</strong></td>
                <td><strong>Tế bào lympho B</strong> (tương đương túi <strong>Bursa</strong> ở gia cầm / loài chim)</td>
                <td><strong>CÓ THỂ truyền được qua huyết thanh</strong></td>
              </tr>
              <tr>
                <td><strong>Miễn dịch qua trung gian tế bào</strong></td>
                <td><strong>Tế bào lympho T</strong> (thẩm quyền miễn dịch nhờ tuyến ức <strong>Thymus</strong>)</td>
                <td><strong>KHÔNG truyền bằng huyết thanh</strong>, chỉ truyền được bằng <strong>tế bào lympho</strong>. Tế bào T còn giúp đỡ tế bào B trong miễn dịch thể dịch.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Trẻ nhỏ trước 6 tháng tuổi có khả năng miễn dịch được với nhiều bệnh nhiễm khuẩn nhờ kháng thể từ mẹ truyền qua nhau thai và sữa mẹ. Đây là loại miễn dịch nào?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5, Câu tự lượng giá 5 (tr. 46)",
        options: [
          "Miễn dịch thu được thụ động",
          "Miễn dịch thu được chủ động",
          "Miễn dịch tự nhiên tùy theo giống và loài",
          "Miễn dịch không đặc hiệu qua trung gian tế bào T"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 275): 5C – Miễn dịch thu được thụ động. Trẻ sơ sinh có miễn dịch trong 6 tháng đầu đời nhờ kháng thể có sẵn từ mẹ truyền qua nhau thai khi còn là bào thai hoặc qua sữa mẹ."
      },
      {
        q: "Vì sao trẻ sơ sinh rất dễ bị viêm màng não mủ do các vi khuẩn Coliform dù đã nhận kháng thể từ mẹ qua nhau thai?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 45)",
        options: [
          "Vì kháng thể giết nhóm vi khuẩn Coliform thuộc lớp IgM, không thể đi qua hàng rào nhau thai được",
          "Vì trẻ sơ sinh chưa có tế bào Kupffer ở gan và phế bào ở phế nang",
          "Vì sữa mẹ chứa IgA1 protease làm phân hủy toàn bộ kháng thể của trẻ",
          "Vì vi khuẩn Coliform có màng tế bào chứa sterol kháng lại bổ thể C3"
        ],
        answer: 0,
        explain: "Trang 45: Miễn dịch tự nhiên tùy theo tuổi – bệnh viêm màng não mủ ở trẻ sơ sinh thường hay do vi khuẩn Coliform gây ra, vì kháng thể giết vi khuẩn này là IgM không thể qua nhau được."
      },
      {
        q: "Ở bệnh nhân đái tháo đường, khiếm khuyết đặc trưng của quá trình thực bào dẫn đến dễ nhiễm khuẩn là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 45)",
        options: [
          "Hiện tượng bắt nuốt thực bào vẫn bình thường nhưng đại thực bào mất khả năng giết chết vi khuẩn",
          "Đại thực bào không thể chìa chân giả nên hoàn toàn không hình thành được phagosome",
          "Bệnh nhân mất hoàn toàn thụ thể Fc và C3 trên màng bạch cầu đa nhân",
          "Toàn bộ hệ lưới võng nội mô bị thay thế bằng mô bào không hoạt động"
        ],
        answer: 0,
        explain: "Trang 45 ghi rõ: Ở cơ thể bị đái tháo đường, hiện tượng thực bào vẫn bình thường nhưng đại bào mất khả năng giết chết vi khuẩn."
      },
      {
        q: "Hai yếu tố làm GIẢM khả năng thực bào được nêu trong giáo trình Vi khuẩn Y học là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 45)",
        options: [
          "Sự tăng áp lực thẩm thấu và giảm phosphate máu",
          "Hiện tượng viêm cấp tính và sự opsonin hóa bởi C3",
          "Tăng interleukin 1 và tăng lysozym trong nước mắt",
          "Sự có mặt của IgG gắn thụ thể Fc và tế bào Kupffer"
        ],
        answer: 0,
        explain: "Trang 45: Sự opsonin hóa (Fc, C3) và viêm cấp tính làm tăng thực bào; trái lại, sự tăng áp lực thẩm thấu và giảm phosphate máu đều làm giảm thực bào."
      },
      {
        q: "Trong hệ lưới võng nội mô, các đại thực bào đơn nhân định cư tại gan, mô và phế nang lần lượt có tên gọi là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 45)",
        options: [
          "Tế bào Kupffer (gan), mô bào / histiocytes (mô), phế bào / pneumocytes (phế nang)",
          "Bạch cầu đa nhân (gan), tế bào B (mô), tế bào T (phế nang)",
          "Phế bào (gan), tế bào Kupffer (mô), nguyên bào sợi (phế nang)",
          "Histiocytes (gan), tế bào Kupffer (mô), đại thực bào di động (phế nang)"
        ],
        answer: 0,
        explain: "Trang 45: Hệ lưới võng nội mô có những đại thực bào đơn nhân định cư gồm tế bào Kupffer ở gan, mô bào (histiocytes) ở các mô, phế bào (pneumocytes) ở phế nang."
      },
      {
        q: "Sự opsonin hóa làm gia tăng mạnh hoạt động thực bào thông qua việc thụ thể trên bề mặt thực bào gắn vào thành phần nào?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 45)",
        options: [
          "Phần Fc của kháng thể hoặc thành phần C3 của bổ thể",
          "Phần Fab của kháng thể hoặc chuỗi peptidoglycan vách vi khuẩn",
          "Enzym coagulase hoặc hyaluronidase của vi khuẩn",
          "Lipopolysaccharide màng ngoài hoặc protein A tụ cầu"
        ],
        answer: 0,
        explain: "Trang 45: Sự opsonin hóa nhờ có những thụ thể trên bề mặt thực bào dành gắn phần Fc của kháng thể hay C3 của bổ thể."
      },
      {
        q: "Các tác nhân hóa học trực tiếp tiêu diệt vi khuẩn bên trong phagolysosome gồm những chất nào?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 45)",
        options: [
          "Các peroxid như H₂O₂, các chất oxy hóa như iod, clo và các enzym tiêu hủy trong lysosome",
          "Kháng thể IgA tiết, β-lysin và interferon typ I",
          "Acid lactic từ chuyển hóa đường, kali ngoại bào và fibrinogen",
          "Collagenase, hyaluronidase và protein M ngoại bào"
        ],
        answer: 0,
        explain: "Trang 45: Quá trình giết vi khuẩn trong lysosome là do các peroxid như H₂O₂; các chất oxid hóa như iod, clo; và enzym tiêu hủy vi khuẩn trong lysosome."
      },
      {
        q: "Enzym lysozym có tác dụng ức chế và tiêu diệt vi khuẩn hiện diện tự nhiên tại những vị trí nào của ký chủ?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 44)",
        options: [
          "Da, nước mắt, dịch tiết cổ tử cung và niêm mạc hô hấp",
          "Chỉ có duy nhất bên trong dịch vị dạ dày và tụy ngoại tiết",
          "Chỉ có trong huyết thanh người đã được tiêm phòng vaccin",
          "Chỉ nằm trong các hạt của tế bào lympho T ở tuyến ức"
        ],
        answer: 0,
        explain: "Trang 44: Da (mồ hôi, chất nhày) có chứa lysozym, và lysozym cũng có cả trong nước mắt, dịch tiết cổ tử cung, niêm mạc hô hấp."
      },
      {
        q: "Hoạt chất nào trong huyết thanh có khả năng giết chết một số vi khuẩn Gram dương thuộc cơ chế cấu trúc sinh hóa của mô?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 45)",
        options: [
          "β-lysin",
          "Interleukin 1",
          "IgA1 protease",
          "Acid hyaluronic"
        ],
        answer: 0,
        explain: "Trang 45: Dưới mục 'Cấu trúc sinh hóa học của mô': β-lysin trong huyết thanh có thể giết chết một số vi khuẩn Gram dương; Interferon ngăn cản virus."
      },
      {
        q: "Việc tiêm huyết thanh kháng độc tố bạch hầu (SAD) để điều trị bệnh nhân mắc bạch hầu thuộc hình thức miễn dịch nào?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 46)",
        options: [
          "Miễn dịch thu được thụ động (huyết thanh liệu pháp)",
          "Miễn dịch thu được chủ động nhân tạo bằng giải độc tố",
          "Miễn dịch tự nhiên tùy theo cá nhân và tuổi tác",
          "Miễn dịch không đặc hiệu qua trung gian bạch cầu đa nhân"
        ],
        answer: 0,
        explain: "Trang 46: Huyết thanh phòng ngừa và huyết thanh liệu pháp (VD: tiêm SAD kháng thể chống độc tố bạch hầu để trung hòa độc tố trong máu) là miễn dịch thu được thụ động."
      },
      {
        q: "Sự khác biệt cơ bản về khả năng truyền thụ động giữa Miễn dịch thể dịch (Lympho B) và Miễn dịch tế bào (Lympho T) là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 46)",
        options: [
          "Miễn dịch qua trung gian kháng thể (lympho B) truyền được qua huyết thanh; miễn dịch tế bào (lympho T) chỉ truyền được bằng tế bào lympho",
          "Cả miễn dịch lympho B và lympho T đều dễ dàng truyền từ cơ thể này sang cơ thể khác qua huyết thanh",
          "Miễn dịch qua trung gian tế bào (lympho T) truyền được qua huyết thanh, còn lympho B thì không",
          "Lympho B có nguồn gốc từ tuyến ức (thymus) nên hỗ trợ lympho T từ túi Bursa"
        ],
        answer: 0,
        explain: "Trang 46: Miễn dịch thể dịch (lympho B, tương đương túi Bursa ở chim) có thể truyền được qua huyết thanh. Miễn dịch tế bào (lympho T, qua thymus) không thể truyền bằng huyết thanh mà chỉ bằng tế bào lympho, và T còn giúp đỡ B."
      },
      {
        q: "Hệ vi sinh vật thường trú (normal flora) trên niêm mạc giúp bảo vệ ký chủ chống lại vi khuẩn gây bệnh bằng cách nào?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 44)",
        options: [
          "Cạnh tranh chất dinh dưỡng và tiết các chất có tính độc đối với vi khuẩn gây bệnh",
          "Thực bào trực tiếp các vi khuẩn gây bệnh và hòa với lysosome",
          "Sản xuất kháng thể IgM và IgA tiết đặc hiệu theo từng chủng gây bệnh",
          "Gây sốt thông qua việc tiết interleukin 1 tác động lên vùng dưới đồi"
        ],
        answer: 0,
        explain: "Trang 44: Hệ vi sinh vật thường trú sống trên niêm mạc, ức chế vi khuẩn gây bệnh bằng cách tranh chất dinh dưỡng hay tiết các chất có tính độc đối với vi khuẩn."
      }
    ]
  }
];

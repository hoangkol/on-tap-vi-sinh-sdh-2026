// ==========================================================================
// DỮ LIỆU BÀI HỌC PHẦN 2: THUỐC KHÁNG SINH (BÀI 4 ĐẾN BÀI 7)
// Chuẩn Giáo trình Vi khuẩn Y học (Bộ môn Vi sinh ĐHYD TP.HCM 2016) – Chương 6 (tr. 47–65)
// ==========================================================================

window.LESSONS_PART2 = [
  // ========================================================================
  // BÀI 4: ĐẠI CƯƠNG KHÁNG SINH & 4 CƠ CHẾ TÁC ĐỘNG LÊN VI KHUẨN
  // ========================================================================
  {
    id: 4,
    group: "II. THUỐC KHÁNG SINH",
    title: "Bài 4: Đại cương Kháng sinh & 4 Cơ chế Tác động lên Tế bào Vi khuẩn",
    shortTitle: "Đại cương & 4 Cơ chế Kháng sinh",
    textbookRef: "Vi khuẩn Y học YDS 2016 – Bài 6: Thuốc kháng sinh (tr. 47–51, 65)",
    summary: "Phân biệt Kháng sinh – Chất sát khuẩn (Antiseptics) – Chất tẩy uế (Disinfectants); 4 cơ chế tác động ở mức phân tử: (1) Vách tế bào (PBP, autolysin, protoplast/spheroplast), (2) Màng tế bào (Polymyxins vs Polyenes/Sterol), (3) Ribosome 30S/50S (polysomes), (4) Acid nucleic (Rifampin, Quinolone, PABA/Sulfonamide, DHFR/Trimethoprim).",
    simId: "sim_abx_mechanisms",
    simTitle: "Bản đồ Tương tác 4 Đích Tác động Kháng sinh trên Vi khuẩn, Nấm & Tế bào Hữu nhũ",
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">💊 1. Đại cương &amp; Phân biệt Kháng sinh – Sát khuẩn – Tẩy uế</div>
          <ul class="theory-list">
            <li><strong>Kháng sinh:</strong> Những chất tác động chống lại sự sống của vi khuẩn, ngăn nhân lên bằng cách tác động ở <strong>mức phân tử</strong>, vào một/nhiều giai đoạn chuyển hóa cần thiết hoặc cân bằng lý hóa.</li>
            <li><strong>Tính đặc hiệu &amp; Hoạt phổ:</strong> Mỗi kháng sinh chỉ tác động lên một hoặc một nhóm vi khuẩn nhất định (không có cùng hoạt tính trên mọi loài). Có loại <strong>hoạt phổ rộng</strong> và loại <strong>hoạt phổ hẹp</strong>.</li>
            <li><strong>Nguồn gốc:</strong> Tổng hợp hóa học, hoặc ly trích từ động vật, thực vật hay vi sinh vật.</li>
          </ul>
          <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Tiêu chí</th>
                  <th>Thuốc Kháng sinh</th>
                  <th>Chất Sát khuẩn (Antiseptics)</th>
                  <th>Chất Tẩy uế (Disinfectants)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>Độ đặc hiệu &amp; Độc tính</strong></td><td>Đặc hiệu đích vi khuẩn, an toàn dùng toàn thân</td><td>Tác động hóa học <strong>ít đặc hiệu</strong>; liều hiệu lực thường gây <strong>độc hại mô sống</strong></td><td><strong>Rất độc hại</strong> cho cả vi sinh vật lẫn ký chủ</td></tr>
                <tr><td><strong>Phạm vi dùng</strong></td><td>Điều trị toàn thân (uống, tiêm) hoặc tại chỗ</td><td><strong>Chỉ dùng tại chỗ</strong> (bôi ngoài da); có khi chỉ ức chế nên VSV có thể phục hồi</td><td><strong>Chỉ dùng tẩy uế đồ vật</strong>, dụng cụ, bề mặt</td></tr>
              </tbody>
            </table>
          </div>
          <p style="font-size:13px;color:var(--text-muted);margin-top:6px;">Điều kiện dùng chất sát khuẩn phụ thuộc: <strong>nồng độ, độ hòa tan, nhiệt độ và thời gian tiếp xúc</strong>.</p>
        </div>

        <div class="card">
          <div class="card-title">🧱 2. Cơ chế 1: Ức chế Sự thành lập Vách Tế bào</div>
          <p style="font-size:13.5px;margin-bottom:6px;">Gồm: <strong>Penicillin, Cephalosporin, Bacitracin, Cycloserine, Ristocetin, Vancomycin, Teicoplanin, Novobiocin</strong>.</p>
          <ul class="theory-list">
            <li><strong>Áp lực thẩm thấu nội bào:</strong> Ở vi khuẩn <strong>Gram dương cao hơn Gram âm 3 – 5 lần</strong>. Khi tổng hợp vách bị ức chế:
              <ul>
                <li>Gram dương biến thành dạng hình cầu không vách (<strong>Protoplast</strong>).</li>
                <li>Gram âm biến thành dạng vách không hoàn chỉnh (<strong>Spheroplast</strong>).</li>
                <li>Cả 2 đều dễ vỡ trong môi trường trương lực bình thường (đẳng trương), chỉ tồn tại tạm ở môi trường ưu trương nhưng vẫn rất dễ vỡ.</li>
              </ul>
            </li>
            <li><strong>Cơ chế β-lactam:</strong> Gắn vào <strong>3 – 6 thụ thể PBPs</strong> (<em>penicillin-binding proteins</em>, một số là enzym <strong>transpeptidase</strong>) → phong bế tổng hợp peptidoglycan → loại bỏ chất ức chế <strong>enzym tự tiêu (autolytic enzymes)</strong> → ly giải tế bào. Nếu vi khuẩn khiếm khuyết autolysin thì chỉ bị ức chế mà không chết (gọi là <strong>dung nạp / tolerant</strong>).</li>
            <li><strong>Vì sao tế bào động vật hữu nhũ không độc với β-lactam?</strong> Vì không có vách peptidoglycan.</li>
            <li><strong>Nhóm giai đoạn đầu bên trong màng:</strong> Bacitracin, Teicoplanin, Vancomycin, Ristocetin và Novobiocin ức chế giai đoạn đầu tổng hợp peptidoglycan ở bên trong màng tế bào chất → thuốc phải ngấm vào trong màng mới tác dụng.</li>
          </ul>
          <div class="callout trap" style="margin:6px 0;">
            <div class="callout-title">🛡️ Kháng β-lactam &amp; Chất ức chế β-lactamase</div>
            Enzym <strong>β-lactamase</strong> (plasmid ở <em>S. aureus</em>; nhiễm sắc thể ở Gram âm) mở vòng β-lactam làm mất hoạt tính. <strong>Acid clavulanic, Sulbactam, Tazobactam</strong> gắn ái lực cao vào β-lactamase mà không bị thủy giải → bảo vệ ampicillin, amoxicillin, ticarcillin (tác dụng <strong>hợp đồng</strong>). Ngoài ra vi khuẩn có thể kháng do đột biến NST làm mất/thay đổi PBPs hoặc không hoạt hóa autolysin.
          </div>
        </div>
      </div>

      <div class="grid-2">
        <div class="card">
          <div class="card-title">🫧 3. Cơ chế 2: Ức chế Nhiệm vụ Màng Tế bào</div>
          <ul class="theory-list">
            <li>Gồm: <strong>Amphotericin B, Colistin, Imidazoles, Nystatin, Polymyxins</strong>.</li>
            <li><strong>Cơ chế:</strong> Phá vỡ hàng rào thẩm thấu chọn lọc và vận chuyển chủ động → đại phân tử &amp; ion thoát ra ngoài → tế bào chết.</li>
          </ul>
          <div class="callout formula">
            <div class="callout-title">🔬 Bẫy kinh điển: Sterol Màng Tế bào (Polymyxins vs Polyenes)</div>
            <ul>
              <li>Màng tế bào <strong>vi nấm có chứa sterol</strong>; màng tế bào <strong>vi khuẩn KHÔNG có sterol</strong>.</li>
              <li><strong>Polyenes (Amphotericin B, Nystatin)</strong> phải tương tác với sterol nên <strong>CHỈ diệt vi nấm</strong>, không tác dụng trên vi khuẩn.</li>
              <li><strong>Polymyxins (Polymyxin B, Colistin)</strong> tác động trên vi khuẩn <strong>Gram âm</strong>, <strong>KHÔNG tác dụng lên vi nấm có sterol</strong>.</li>
              <li><strong>Imidazoles</strong> kháng nấm làm suy yếu màng tế bào vi nấm bằng cách <strong>ức chế tổng hợp lipid màng</strong>.</li>
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="card-title">🧬 4. Cơ chế 3: Ức chế Tổng hợp Protein (Ribosome 30S &amp; 50S)</div>
          <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Kháng sinh / Nhóm</th>
                  <th>Tiểu đơn vị &amp; Cơ chế phân tử</th>
                  <th>Cơ chế Đề kháng chính</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Aminoglycosides</strong><br/><em>(Diệt khuẩn)</em></td>
                  <td>Gắn <strong>30S</strong> theo <strong>4 giai đoạn</strong>: (1) gắn thụ thể 30S → (2) phong bế phức hợp khởi đầu (mRNA + fMet-tRNA) → (3) <strong>đọc sai mã mRNA</strong> ở vùng nhận diện (tạo protein vô chức năng) → (4) vỡ polysomes thành monosomes.</td>
                  <td>• Thiếu thụ thể 30S (NST)<br/>• Enzym phá hủy thuốc: <strong>adenylylase, phosphorylase, acetylase</strong> (plasmid)<br/>• Giảm thấm / giảm vận chuyển chủ động vào tế bào.</td>
                </tr>
                <tr>
                  <td><strong>Tetracyclin</strong><br/><em>(Ngưng khuẩn)</em></td>
                  <td>Gắn <strong>30S</strong>, ngăn amino acid mới nối vào chuỗi peptide. (TB hữu nhũ không tập trung chủ động tetracyclin).</td>
                  <td>Thay đổi tính thấm (plasmid): không vận chuyển chủ động vào hoặc bơm thoát nhanh.</td>
                </tr>
                <tr>
                  <td><strong>Glycylcyclin (Tigecyclin)</strong></td>
                  <td>Gắn <strong>30S</strong> mạnh/nhiều hơn tetracyclin → có tác dụng <strong>diệt khuẩn</strong> phổ rộng.</td>
                  <td>Hiệu quả trên nhiều chủng đa kháng tetracyclin.</td>
                </tr>
                <tr>
                  <td><strong>Oxazolidinone (Linezolid)</strong></td>
                  <td>Ức chế tổng hợp protein chủ yếu Gram+ bằng cách ức chế phức hợp <strong>N-formylmethionyl-tRNA tại vị trí 30S</strong>.</td>
                  <td>Dùng cho cầu khuẩn Gram+ kháng glycopeptide.</td>
                </tr>
                <tr>
                  <td><strong>Chloramphenicol</strong></td>
                  <td>Gắn <strong>50S</strong>, ức chế enzym <strong>peptidyl transferase</strong>.</td>
                  <td>Tiết <strong>chloramphenicol acetyltransferase</strong> (plasmid).</td>
                </tr>
                <tr>
                  <td><strong>Macrolide</strong></td>
                  <td>Gắn <strong>50S (vị trí 23S rRNA)</strong>, ngăn thành lập phức hợp đầu tiên.</td>
                  <td>Thiếu thụ thể trên ribosome (NST hay plasmid).</td>
                </tr>
                <tr>
                  <td><strong>Lincosamide</strong></td>
                  <td>Gắn <strong>50S</strong> (tương tự Macrolide).</td>
                  <td>Đột biến NST mất vị trí gắn trên <strong>50S</strong>.</td>
                </tr>
                <tr>
                  <td><strong>Streptogramin</strong><br/><em>(Quinupristin/Dalfopristin)</em></td>
                  <td>2 dẫn xuất pristinamycin gắn vào các vị trí khác nhau trên <strong>50S</strong> → hợp đồng diệt khuẩn Gram+.</td>
                  <td>—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🧪 5. Cơ chế 4: Ức chế Sự tổng hợp Acid Nucleic</div>
        <div class="table-responsive">
          <table class="med-table">
            <thead>
              <tr>
                <th>Thuốc / Nhóm</th>
                <th>Đích tác động &amp; Cơ chế</th>
                <th>Điểm đặc biệt &amp; Bẫy Đề thi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Rifampin</strong></td>
                <td>Gắn chặt vào <strong>RNA polymerase</strong> của vi khuẩn → ức chế tổng hợp <strong>RNA</strong>.</td>
                <td>Kháng thuốc do đột biến NST làm thay đổi RNA polymerase.</td>
              </tr>
              <tr>
                <td><strong>Quinolone &amp; Fluoroquinolone</strong></td>
                <td>Phong bế enzym <strong>DNA gyrase</strong> → ức chế tổng hợp <strong>DNA</strong>.</td>
                <td>Kháng thuốc do đột biến NST thay đổi tiểu đơn vị A của DNA gyrase hoặc giảm thấm màng ngoài.</td>
              </tr>
              <tr>
                <td><strong>Sulfonamide &amp; PAS</strong></td>
                <td>Cấu trúc tương tự <strong>PABA (p-aminobenzoic acid)</strong> → ức chế cạnh tranh tổng hợp acid folic.</td>
                <td>• <strong>TB động vật</strong> lấy acid folic từ ngoài nên không bị ảnh hưởng.<br/>• <strong>Trực khuẩn lao</strong> kháng sulfonamide nhưng nhạy <strong>PAS</strong>; phần lớn vi khuẩn nhạy sulfonamide lại kháng PAS.</td>
              </tr>
              <tr>
                <td><strong>Trimethoprim &amp; Pyrimethamine</strong></td>
                <td>Ức chế enzym <strong>dihydrofolic acid reductase (DHFR)</strong> (khử dihydrofolic → tetrahydrofolic để tổng hợp purin DNA).</td>
                <td>• <strong>Trimethoprim</strong> ức chế DHFR vi khuẩn mạnh hơn tế bào hữu nhũ <strong>50.000 lần</strong>.<br/>• <strong>Pyrimethamine (Daraprim)</strong> ái lực mạnh hơn với enzym hữu nhũ nên độc hơn → phối hợp sulfonamide trị <em>Toxoplasma</em>.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Nhận định nào sau đây ĐÚNG về nguyên tắc hoạt phổ và phân loại thuốc kháng sinh?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6, Câu tự lượng giá 1 (tr. 65)",
        options: [
          "Các loại kháng sinh có hoạt phổ khác nhau và được xếp loại dựa trên cơ sở đặc hiệu dược lý",
          "Mọi loại kháng sinh đều có cùng một hoạt tính như nhau đối với tất cả các loài vi khuẩn",
          "Phân loại kháng sinh chỉ dựa vào tên thương mại trên thị trường mà không theo cấu trúc hóa học",
          "Chất tẩy uế và chất sát khuẩn có thể dùng tiêm tĩnh mạch thay thế kháng sinh khi nhiễm khuẩn nặng"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 275): 1E (Câu B và C đúng). Các kháng sinh có hoạt phổ khác nhau (tác động đặc hiệu trên một hay một nhóm vi khuẩn nhất định) và được phân loại dựa trên cơ sở đặc hiệu dược lý."
      },
      {
        q: "Sự khác biệt cơ bản giữa thuốc kháng sinh, chất sát khuẩn (antiseptics) và chất tẩy uế (disinfectants) là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 47)",
        options: [
          "Kháng sinh tác động đặc hiệu ở mức phân tử; chất sát khuẩn ít đặc hiệu và độc với mô nên chỉ dùng tại chỗ; chất tẩy uế rất độc cho cả VSV và ký chủ nên chỉ tẩy uế đồ vật",
          "Chất sát khuẩn chỉ diệt virus mà không diệt vi khuẩn; chất tẩy uế uống được để diệt khuẩn đường ruột",
          "Kháng sinh chỉ ức chế vi khuẩn tạm thời, còn chất sát khuẩn luôn diệt 100% bào tử vi khuẩn",
          "Chất sát khuẩn tác động đặc hiệu lên ribosome 30S nên hoàn toàn không gây hại cho mô sống của cơ thể"
        ],
        answer: 0,
        explain: "Trang 47: Chất sát khuẩn tác động hóa học ít đặc hiệu, gây độc mô sống nên chỉ bôi ngoài da tại chỗ (đôi khi chỉ ức chế nên vi khuẩn phục hồi lại). Chất tẩy uế rất độc cho cả VSV và ký chủ nên chỉ dùng tẩy uế đồ vật."
      },
      {
        q: "Áp lực nội bào ở vi khuẩn Gram dương so với vi khuẩn Gram âm như thế nào, và khi tổng hợp vách bị kháng sinh ức chế thì hai nhóm này biến đổi thành dạng nào?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 48)",
        options: [
          "Áp lực nội bào Gram dương lớn hơn Gram âm 3 – 5 lần; Gram dương biến thành Protoplast (không vách) và Gram âm biến thành Spheroplast (vách không hoàn chỉnh)",
          "Áp lực nội bào Gram âm lớn hơn Gram dương 3 – 5 lần; Gram dương thành Spheroplast và Gram âm thành Protoplast",
          "Hai nhóm có áp lực nội bào bằng nhau và đều hóa thành dạng bào tử bền vững trong môi trường đẳng trương",
          "Gram dương giữ nguyên hình que nhờ lớp LPS, còn Gram âm vỡ tức thì thành Protoplast"
        ],
        answer: 0,
        explain: "Trang 48: Áp lực nội bào ở vi khuẩn Gram dương lớn hơn ở Gram âm từ 3 – 5 lần. Khi vách bị ức chế, Gram dương biến thành dạng cầu không vách (protoplast) và Gram âm thành vách không hoàn chỉnh (spheroplast), dễ vỡ ở môi trường đẳng trương."
      },
      {
        q: "Hiện tượng vi khuẩn bị ức chế phát triển bởi β-lactam nhưng KHÔNG bị giết (gọi là dung nạp / tolerant) xảy ra khi nào?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 48, 53)",
        options: [
          "Khi thuốc gắn PBPs nhưng không hoạt hóa được các enzym tự tiêu (autolytic enzymes) trong vách tế bào",
          "Khi tế bào vi khuẩn chuyển từ màng lipid sang màng chứa sterol như vi nấm",
          "Khi vi khuẩn tiết ra enzym chloramphenicol acetyltransferase nằm trên plasmid",
          "Khi môi trường xung quanh vi khuẩn là dung dịch nhược trương hoàn toàn"
        ],
        answer: 0,
        explain: "Trang 48 & 53: Sau khi β-lactam phong bế transpeptidase (PBPs), giai đoạn tiếp theo là hoạt hóa các autolytic enzymes gây ly giải tế bào. Nếu vi khuẩn khiếm khuyết hoặc thuốc không hoạt hóa được enzym tự tiêu, vi khuẩn chỉ bị ức chế chứ không bị giết (tolerant)."
      },
      {
        q: "Vì sao Polyenes (Amphotericin B, Nystatin) không tác dụng lên vi khuẩn, và ngược lại Polymyxins không tác dụng lên tế bào vi nấm?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 49)",
        options: [
          "Vì màng tế bào vi nấm chứa sterol (đích của polyenes), còn màng tế bào vi khuẩn không có sterol",
          "Vì vi nấm có vách peptidoglycan dày gấp 5 lần ngăn cản hoàn toàn phân tử polymyxin",
          "Vì vi khuẩn Gram âm có tiểu đơn vị ribosome 80S giống hệt tế bào vi nấm",
          "Vì polyenes chỉ ức chế tổng hợp vách chitin bằng cách gắn vào các thụ thể PBPs"
        ],
        answer: 0,
        explain: "Trang 49: Màng tế bào vi nấm chứa sterols, còn màng tế bào vi khuẩn thì không. Polyenes phải tương tác với sterol trong màng tế bào vi nấm mới có hiệu quả; trái lại polymyxins không tác dụng lên tế bào vi nấm có sterol."
      },
      {
        q: "Kháng sinh nhóm nào tác động qua 4 giai đoạn trên tiểu đơn vị 30S, bao gồm gây đọc sai mã mRNA tại vùng nhận diện và làm vỡ polysomes thành monosomes?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 49)",
        options: [
          "Aminoglycosides (như streptomycin, gentamicin, amikacin)",
          "Tetracyclin",
          "Chloramphenicol",
          "Macrolide (như erythromycin, azithromycin)"
        ],
        answer: 0,
        explain: "Trang 49: Kiểu tác động của Aminoglycosides gồm 4 giai đoạn: (1) gắn thụ thể chuyên biệt trên 30S; (2) phong bế phức hợp khởi đầu; (3) thông tin mRNA bị đọc sai ở vùng nhận diện tạo protein không chức năng; (4) làm vỡ polysomes thành các monosomes bất hoạt."
      },
      {
        q: "Cơ chế tác động phân tử của Chloramphenicol là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 50)",
        options: [
          "Gắn vào tiểu đơn vị 50S của ribosome, ức chế enzym peptidyl transferase ngăn gắn amino acid mới",
          "Gắn vào tiểu đơn vị 30S gây vỡ polysome thành monosome bất hoạt",
          "Gắn vào vị trí 23S rRNA trên 50S ức chế phức hợp khởi đầu N-formylmethionyl-tRNA",
          "Phong bế enzym DNA gyrase và RNA polymerase của tế bào vi khuẩn"
        ],
        answer: 0,
        explain: "Trang 50: Chloramphenicol gắn vào tiểu đơn vị 50S của ribosome, ức chế enzym peptidyl transferase, ngăn chặn các amino acid mới gắn vào chuỗi peptide mới thành lập."
      },
      {
        q: "Nhóm kháng sinh mới nào ngăn chặn quá trình dịch mã bằng cách ức chế phức hợp khởi đầu N-formylmethionyl-tRNA tại tiểu phần 30S (chủ yếu Gram dương)?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 50, 59)",
        options: [
          "Oxazolidinone (Linezolid)",
          "Streptogramin (Quinupristin/Dalfopristin)",
          "Glycopeptide (Vancomycin)",
          "Lipopeptide vòng (Daptomycin)"
        ],
        answer: 0,
        explain: "Trang 50 & 59: Oxazolidinone (Linezolid) ức chế tổng hợp protein chủ yếu ở vi khuẩn Gram dương bằng cách ức chế N-formylmethionyl-tRNA – phức hợp đầu tiên để tổng hợp protein ở tiểu phần 30S."
      },
      {
        q: "Rifampin và Quinolone ức chế tổng hợp acid nucleic của vi khuẩn lần lượt thông qua các đích enzym nào?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 50–51)",
        options: [
          "Rifampin ức chế RNA polymerase (ngăn tổng hợp RNA); Quinolone phong bế DNA gyrase (ngăn tổng hợp DNA)",
          "Rifampin phong bế DNA gyrase; Quinolone ức chế dihydrofolic acid reductase",
          "Rifampin ức chế peptidyl transferase; Quinolone ức chế transpeptidase",
          "Rifampin cạnh tranh PABA; Quinolone ức chế RNA polymerase"
        ],
        answer: 0,
        explain: "Trang 50–51: Rifampin gắn chặt vào RNA polymerase ức chế tổng hợp RNA; tất cả quinolone và fluoroquinolone ức chế tổng hợp DNA bằng cách phong bế DNA gyrase."
      },
      {
        q: "Tại sao Trimethoprim an toàn cho tế bào động vật hữu nhũ hơn Pyrimethamine khi cả hai cùng ức chế enzym dihydrofolic acid reductase (DHFR)?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 51)",
        options: [
          "Vì Trimethoprim ức chế DHFR ở vi khuẩn hiệu quả hơn ở tế bào hữu nhũ tới 50.000 lần, còn Pyrimethamine có hoạt tính cao với enzym hữu nhũ hơn nên độc hơn",
          "Vì tế bào hữu nhũ có khả năng tự tổng hợp trực tiếp PABA để vượt qua tác dụng của Trimethoprim",
          "Vì Trimethoprim không đi qua được màng tế bào vi khuẩn Gram dương mà chỉ vào vi khuẩn Gram âm",
          "Vì Pyrimethamine phá hủy vách peptidoglycan còn Trimethoprim chỉ tác động ở thận"
        ],
        answer: 0,
        explain: "Trang 51: Trimethoprim ức chế DHFR ở vi khuẩn hiệu quả hơn ở tế bào hữu nhũ 50.000 lần. Pyrimethamine (Daraprim) cũng ức chế DHFR nhưng có hoạt tính đối với enzym ở tế bào hữu nhũ cao hơn nên độc hơn trimethoprim."
      },
      {
        q: "Điểm khác biệt đặc trưng về tính nhạy cảm giữa trực khuẩn lao (M. tuberculosis) và đa số các vi khuẩn khác đối với Sulfonamide và PAS là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 51)",
        options: [
          "Trực khuẩn lao không bị ức chế bởi sulfonamide nhưng bị ức chế bởi PAS; ngược lại phần lớn vi khuẩn nhạy sulfonamide lại kháng PAS",
          "Cả trực khuẩn lao lẫn các vi khuẩn Gram dương đều nhạy cảm hoàn toàn với PAS hơn sulfonamide",
          "PAS chỉ ức chế tổng hợp RNA polymerase của trực khuẩn lao mà không liên quan đến PABA",
          "Trực khuẩn lao tổng hợp acid folic trực tiếp từ peptidoglycan nên kháng cả hai thuốc"
        ],
        answer: 0,
        explain: "Trang 51: Trực khuẩn lao không bị ức chế bởi sulfonamide nhưng bị ức chế bởi PAS (acid p-aminosalicylic); ngược lại vi khuẩn nhạy sulfonamide phần lớn kháng PAS (do khác biệt vị trí thụ thể dành cho PABA)."
      },
      {
        q: "Kháng sinh nào dưới đây ức chế giai đoạn đầu của quá trình tổng hợp peptidoglycan ở BÊN TRONG màng tế bào chất (do đó thuốc phải ngấm vào bên trong màng mới có tác dụng)?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 48–49)",
        options: [
          "Bacitracin, Teicoplanin, Vancomycin, Ristocetin và Novobiocin",
          "Chỉ riêng Penicillin G và Cefazolin thế hệ 1",
          "Amphotericin B, Nystatin và Imidazoles",
          "Ciprofloxacin, Levofloxacin và Moxifloxacin"
        ],
        answer: 0,
        explain: "Trang 48–49: Một số kháng sinh như bacitracin, teicoplanin, vancomycin, ristocetin và novobiocin ức chế giai đoạn đầu của việc tổng hợp peptidoglycan xảy ra bên trong màng tế bào chất nên phải ngấm vào trong màng mới tác dụng."
      }
    ]
  },

  // ========================================================================
  // BÀI 5: CÁC HỌ KHÁNG SINH CHÍNH (SULFONAMIDE, β-LACTAM, AMINOGLYCOSIDE, PROTEIN)
  // ========================================================================
  {
    id: 5,
    group: "II. THUỐC KHÁNG SINH",
    title: "Bài 5: Họ Sulfonamide, β-lactam, Aminoglycoside & Nhóm Ức chế Protein",
    shortTitle: "Sulfonamide, β-lactam & Protein",
    textbookRef: "Vi khuẩn Y học YDS 2016 – Bài 6 (tr. 51–57, 65)",
    summary: "Sulfonamide (tan vs không tan, Cotrimoxazole 5:1); Penicillin (6-APA, PNC-G, PNC-V, 4 nhóm 1986); Cephalosporin (7-ACA, 5 thế hệ từ TH1 đến TH5 MRSA/VRE); Monobactam (Aztreonam); Carbapenem (Imipenem+Cilastatin, Ertapenem); Aminoglycoside; Tetracyclin; Chloramphenicol; Macrolide & Lincosamide.",
    simId: "sim_abx_classes",
    simTitle: "Phòng Tra cứu Phổ Kháng khuẩn β-lactam (5 Thế hệ) & Các Họ Kháng sinh Chính",
    theoryHtml: `
      <div class="card">
        <div class="card-title">🧪 1. Sulfonamide &amp; Penicillin (Nhân 6-APA)</div>
        <div class="grid-2">
          <div>
            <h4 style="color:var(--primary);margin-bottom:6px;">A. Họ Sulfonamide</h4>
            <ul class="theory-list">
              <li><strong>Nhóm hòa tan</strong> (<em>trisulfapyrimidines, sulfisoxazole</em>): hấp thu nhanh qua tiêu hóa, thải nhanh qua tiểu (dạng muối Na⁺ tiêm được). Loại thải chậm (<em>sulfamethoxypyridazine</em>) dễ gây độc.</li>
              <li><strong>Phối hợp kinh điển:</strong> <strong>5 phần sulfamethoxazole + 1 phần trimethoprim</strong> (TMP-SMX).</li>
              <li><strong>Nhóm không hòa tan</strong> (<em>phtalysulfathiazole, succinyl sulfathiazole</em>): rất ít hấp thu qua ruột → dùng ức chế vi khuẩn lòng ruột <strong>chuẩn bị giải phẫu ruột già</strong>.</li>
              <li><em>Lưu ý:</em> Lý thuyết phổ rộng (Gram+, Gram-, Chlamydia, Nocardia, đơn bào) nhưng hiện nay phần lớn đã kháng.</li>
            </ul>
          </div>
          <div>
            <h4 style="color:var(--primary);margin-bottom:6px;">B. Nhóm Penicillin (Nhân 6-aminopenicillanic acid)</h4>
            <ul class="theory-list">
              <li>Gồm vòng <strong>β-lactam + thiazolidine</strong>.</li>
              <li><strong>Penicillin G (benzyl-penicillin):</strong> Fleming tìm ra 1928, Florey &amp; Chain đưa vào chữa bệnh 1941 (nấm <em>Penicillium notatum / chrysogenum</em>). Diệt cầu khuẩn Gram+/Gram-, trực khuẩn Gram+, <em>Haemophilus</em>, một số <em>Moraxella, Pasteurella</em>; <strong>KHÔNG</strong> diệt trực khuẩn đường ruột, <em>Pseudomonas</em>. <strong>Bị dịch vị phá hủy</strong> (không uống) và bị <strong>penicillinase</strong> mở vòng thành <em>penicillinoic acid</em> mất tác dụng.</li>
              <li><strong>Penicillin V (phenoxymethyl penicillin):</strong> Bền với dịch vị, uống được.</li>
              <li><strong>Bán tổng hợp (từ 1959):</strong> Dùng <strong>amidase</strong> cắt chuỗi bên PNC-G để gắn chuỗi bên mới.</li>
              <li><strong>4 Nhóm lâm sàng (1986):</strong> (1) Mạnh Gram+, cầu khuẩn Gram-, xoắn khuẩn nhưng hủy bởi β-lactamase &amp; acid (<em>PNC-G</em>); (2) Kháng β-lactamase, không diệt Gram- (<em>Nafcillin</em>); (3) Phổ rộng Gram+/Gram- nhưng bị hủy bởi β-lactamase (<em>Ampicillin, Piperacillin</em>); (4) Bền dịch vị uống được (<em>PNC-V, Cloxacillin, Amoxicillin</em>).</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🧬 2. Cephalosporin (Nhân 7-ACA – 5 Thế hệ), Monobactam &amp; Carbapenem</div>
        <div class="table-responsive">
          <table class="med-table">
            <thead>
              <tr>
                <th>Nhóm / Thế hệ</th>
                <th>Thuốc đại diện</th>
                <th>Phổ kháng khuẩn &amp; Đặc điểm Dược động học Cốt lõi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Cephalosporin TH 1</strong></td>
                <td>Cephalexin, Cephradine, Cefazolin, Cefadroxil</td>
                <td>Tác động cao <strong>cầu khuẩn Gram+</strong> (<strong>TRỪ Enterococci và MRSA</strong>); trung bình trực khuẩn Gram- (<em>E. coli, Proteus, Klebsiella</em>). Nhạy cầu khuẩn kỵ khí nhưng <strong>KHÔNG diệt <em>B. fragilis</em></strong>. <strong>Không thấm TKTW</strong> (không trị viêm màng não).</td>
              </tr>
              <tr>
                <td><strong>Cephalosporin TH 2</strong><br/><em>(+ Cephamycin)</em></td>
                <td>Cefaclor, Cefonicid, Ceprozil, Cefuroxime.<br/><em>Cephamycin (từ Actinomyces):</em> Cefoxitin, Cefotetan, Cefmethazole, Flomoxef</td>
                <td>Tác động cả <strong>Gram+ và Gram-</strong>, kháng β-lactamase cổ điển, nhưng <strong>KHÔNG diệt <em>Pseudomonas</em> và <em>Acinetobacter</em></strong>. Riêng <strong>Cefoxitin và Cefotetan</strong> diệt mạnh kỵ khí <strong><em>Bacteroides fragilis</em></strong> (viêm phúc mạc, viêm vùng chậu).</td>
              </tr>
              <tr>
                <td><strong>Cephalosporin TH 3</strong></td>
                <td>Cefcapene, Cefdinir, Cefetamet, Cefotaxime, Cefpodoxime, Ceftriaxone, Cefoperazone, Ceftazidime</td>
                <td><strong>Giảm tác động cầu khuẩn Gram+</strong> (<strong>TRỪ <em>S. pneumoniae</em></strong>); rất mạnh <strong>trực khuẩn Gram-</strong> kể cả <em>Pseudomonas</em> (<strong>Ceftazidime &amp; Cefoperazone</strong>). Nhiều thuốc (<strong>TRỪ Cefoperazone</strong>) thấm tốt TKTW → trị <strong>viêm màng não mủ trực khuẩn Gram-</strong>.</td>
              </tr>
              <tr>
                <td><strong>Cephalosporin TH 4</strong></td>
                <td>Cefclidine, Cefepime, Cefpirome, Cefozopran</td>
                <td>Phổ rộng: Gram+ như TH1; Gram- kháng β-lactamase cao hơn TH3; <strong>xuyên hàng rào máu não</strong> (viêm màng não) và trị <strong><em>Pseudomonas aeruginosa</em></strong>.</td>
              </tr>
              <tr>
                <td><strong>Cephalosporin TH 5</strong></td>
                <td><strong>Ceftobiprole</strong>, <strong>Ceftaroline</strong></td>
                <td>Hiệu quả trên <strong>tụ cầu kháng methicillin (MRSA)</strong>. Riêng <strong>Ceftobiprole</strong> diệt được thêm <strong><em>Pseudomonas</em> và VRE</strong>; <strong>Ceftaroline KHÔNG</strong> có tác dụng này.</td>
              </tr>
              <tr>
                <td><strong>Monobactam</strong></td>
                <td><strong>Aztreonam</strong> (duy nhất)</td>
                <td>Vòng β-lactam đơn độc. <strong>CHỈ diệt vi khuẩn Gram âm</strong> (không tác dụng Gram dương hay kỵ khí).</td>
              </tr>
              <tr>
                <td><strong>Carbapenem</strong></td>
                <td>Imipenem, Meropenem, Doripenem, Ertapenem</td>
                <td>Bền với mọi β-lactamase kể cả <strong>ESBL</strong>; phổ rộng Gram+/Gram- nhưng <strong>KHÔNG diệt MRSA</strong>.<br/>• <strong>Ertapenem:</strong> KHÔNG diệt <em>Pseudomonas</em> &amp; <em>Acinetobacter</em>.<br/>• <strong>Imipenem:</strong> Thấm tốt DNT; bị <em>dihydropeptidase</em> ống thận phá hủy → phải phối hợp <strong>cilastatin</strong>.<br/>• <strong>Meropenem:</strong> Không bị dipeptidase phá hủy, ít tác dụng phụ thần kinh hơn imipenem.<br/>• <strong>Doripenem:</strong> Tác dụng đặc biệt với <em>Pseudomonas</em>.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🧫 3. Aminoglycoside, Tetracyclin, Chloramphenicol, Macrolide &amp; Lincosamide</div>
        <div class="table-responsive">
          <table class="med-table">
            <thead>
              <tr>
                <th>Họ Kháng sinh</th>
                <th>Thuốc &amp; Dược động học</th>
                <th>Phổ tác động &amp; Độc tính / Lưu ý Lâm sàng</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Aminoglycoside</strong></td>
                <td>Streptomycin (Waksman 1944), Neomycin, Kanamycin, Amikacin, Gentamicin, Tobramycin, Sisocimin, Netilmicin.<br/>Hoạt tính ở <strong>pH kiềm cao hơn pH acid</strong>.</td>
                <td>• Phổ rộng, có tác dụng trên <em>Mycobacterium</em> (streptomycin, kanamycin). <strong>Vi khuẩn kỵ khí và Rickettsia KHÁNG</strong>.<br/>• <strong>Độc tính: Dây thần kinh thính giác và Thận</strong>.<br/>• Neomycin chỉ dùng tại chỗ (nhỏ mắt, xịt mũi, bôi da) hoặc uống trị tiêu chảy. Amikacin &amp; netilmicin mạnh hơn gentamicin/tobramycin.<br/>• Phối hợp penicillin trị nhiễm khuẩn huyết / viêm nội tâm mạc <em>S. faecalis</em> (tăng thấm vào tế bào).</td>
              </tr>
              <tr>
                <td><strong>Tetracyclin</strong></td>
                <td>Tetracyclin, Doxycyclin, Minocyclin, Oxytetracyclin... Hấp thu nhanh đường ruột, <strong>rất khó xâm nhập dịch não tủy</strong>.</td>
                <td><strong>Ngưng khuẩn.</strong> Chọn lọc cho <strong>Rickettsia, Chlamydia, Mycoplasma pneumoniae</strong>, vi khuẩn tả, phối hợp streptomycin trị <em>Brucella, Yersinia, Francisella</em>. Một số vi khuẩn kháng tetracyclin vẫn nhạy <strong>minocyclin</strong>.</td>
              </tr>
              <tr>
                <td><strong>Chloramphenicol</strong></td>
                <td>Từ <em>Streptomyces venezuelae</em> (dẫn xuất: thiamphenicol). Thấm rộng mọi mô kể cả <strong>TKTW và dịch não tủy</strong>.</td>
                <td><strong>Ngưng khuẩn.</strong> Biến chứng nguy hiểm: <strong>Thiếu máu do suy tủy</strong>.<br/>Chọn lọc: <em>Salmonella</em> (thương hàn), <em>H. influenzae</em> sinh β-lactamase, viêm màng não mô cầu nhạy PNC, kỵ khí/áp-xe não, Rickettsia nặng, nhiễm khuẩn mắt (trừ Chlamydia).</td>
              </tr>
              <tr>
                <td><strong>Macrolide</strong></td>
                <td>Erythromycin, Dirithromycin (1 lần/ngày), Azialides (Clarithromycin, Azithromycin), Ketolide (Telithromycin).</td>
                <td>Chủ yếu cầu khuẩn Gram+, <em>H. influenzae, B. pertussis</em>, không điển hình (<em>M. pneumoniae, C. trachomatis, L. pneumophila, C. jejuni</em>). <strong>KHÔNG</strong> diệt Enterobacteriaceae, <em>Pseudomonas, Acinetobacter</em>.<br/>• Clarithromycin nổi bật: <em>L. pneumophila, H. pylori, C. trachomatis</em>.<br/>• Azithromycin nổi bật: <em>C. jejuni, H. influenzae, M. pneumoniae, N. gonorrhoeae</em>. Cả hai diệt được MAC. Vi khuẩn kháng erythromycin cũng kháng clarithromycin &amp; azithromycin; riêng <strong>Telithromycin</strong> trị được chủng kháng macrolide.</td>
              </tr>
              <tr>
                <td><strong>Lincosamide</strong></td>
                <td>Lincomycin, Clindamycin. Bền acid (uống/IV), <strong>KHÔNG vào TKTW</strong>.</td>
                <td>• <strong>Clindamycin:</strong> Nhiễm khuẩn nặng do <strong>vi khuẩn kỵ khí (<em>Bacteroides fragilis</em>)</strong>.<br/>• <strong>Lincomycin:</strong> Đặc biệt hữu hiệu nhiễm khuẩn <strong>tủy xương do <em>Staphylococci</em></strong>.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Phát biểu nào sau đây ĐÚNG về Sulfonamide, Penicillin G và Chloramphenicol theo giáo trình Vi khuẩn Y học?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6, Câu tự lượng giá 2 (tr. 65)",
        options: [
          "Sulfonamide ức chế cạnh tranh PABA; Penicillin G bị ly giải bởi β-lactamase và không bền acid; Chloramphenicol có thể gây thiếu máu do suy tủy",
          "Penicillin G bền với acid dịch vị nên dùng đường uống tốt nhất; Chloramphenicol chỉ gây độc cho dây thần kinh số VIII",
          "Sulfonamide chỉ diệt nấm có sterol; Penicillin G diệt mạnh Pseudomonas aeruginosa",
          "Chloramphenicol hoàn toàn không thấm vào dịch não tủy và chỉ dùng tẩy uế bề mặt dụng cụ"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 275): 2E (Cả A, B và C đúng): Sulfonamides ức chế cạnh tranh PABA; PNCG bị β-lactamase ly giải thành penicillinoic acid và không bền với acid dịch vị; Chloramphenicol có thể gây thiếu máu do suy tủy."
      },
      {
        q: "Nhóm thuốc nào dưới đây có độc tính đặc trưng trên dây thần kinh thính giác và thận?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6, Câu tự lượng giá 3 (tr. 65)",
        options: [
          "Aminoglycoside",
          "β-lactam",
          "Macrolide",
          "Chloramphenicol"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 275): 3D – Aminoglycoside. Tất cả aminoglycoside đều có hoạt tính ở pH kiềm cao hơn pH acid và gây độc cho dây thần kinh thính giác và thận ở các mức độ khác nhau."
      },
      {
        q: "Tỷ lệ phối hợp giữa Sulfamethoxazole và Trimethoprim trong chế phẩm Cotrimoxazole (TMP-SMX) là bao nhiêu?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 52)",
        options: [
          "5 phần sulfamethoxazole và 1 phần trimethoprim",
          "1 phần sulfamethoxazole và 5 phần trimethoprim",
          "30 phần sulfamethoxazole và 70 phần trimethoprim",
          "1 phần sulfamethoxazole và 1 phần trimethoprim"
        ],
        answer: 0,
        explain: "Trang 52: Sự phối hợp 5 phần sulfamethoxazole và 1 phần trimethoprim tạo nên thuốc trimethoprim-sulfamethoxazole. (Chú ý: tỷ lệ 30:70 là của Streptogramin Quinupristin-Dalfopristin!)."
      },
      {
        q: "Các loại Sulfonamide không hòa tan (phtalysulfathiazole, succinyl sulfathiazole) được chỉ định trong trường hợp nào?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 52)",
        options: [
          "Ức chế vi khuẩn trong lòng ruột để chuẩn bị cho các trường hợp giải phẫu ruột già",
          "Tiêm tĩnh mạch điều trị viêm màng não mủ do trực khuẩn Gram âm",
          "Điều trị lao phổi kháng đa thuốc thay thế cho isoniazid và rifampin",
          "Điều trị nhiễm trùng hệ thống do MRSA và Enterococci kháng vancomycin"
        ],
        answer: 0,
        explain: "Trang 52: Những sulfonamides không hòa tan như phtalysulfathiazole, succinyl sulfathiazole rất ít được hấp thu qua đường ruột, thường dùng ức chế vi khuẩn trong lòng ruột chuẩn bị giải phẫu ruột già."
      },
      {
        q: "Trong các Cephalosporin thế hệ 2, hai thuốc Cephamycin nào có tác dụng đặc biệt cao đối với vi khuẩn kỵ khí Bacteroides fragilis (viêm phúc mạc, viêm vùng chậu)?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 54)",
        options: [
          "Cefoxitin và Cefotetan",
          "Cefazolin và Cephalexin",
          "Ceftazidime và Cefoperazone",
          "Cefepime và Cefpirome"
        ],
        answer: 0,
        explain: "Trang 54: Cephamycin (nguồn gốc nấm Actinomyces) được xếp vào Cephalosporin thế hệ 2; trong đó cefoxitin và cefotetan có tác động cao với vi khuẩn kỵ khí B. fragilis, dùng trong nhiễm trùng hỗn hợp kỵ khí như viêm phúc mạc, viêm vùng chậu."
      },
      {
        q: "Hai Cephalosporin thế hệ 3 nào có hoạt tính mạnh đối với Pseudomonas aeruginosa, và thuốc thế hệ 3 nào KHÔNG thấm tốt vào hệ thần kinh trung ương?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 54)",
        options: [
          "Diệt Pseudomonas: Ceftazidime và Cefoperazone; Không thấm tốt TKTW: Cefoperazone",
          "Diệt Pseudomonas: Cefotaxime và Ceftriaxone; Không thấm tốt TKTW: Ceftriaxone",
          "Diệt Pseudomonas: Cefazolin và Cefuroxime; Không thấm tốt TKTW: Cefepime",
          "Diệt Pseudomonas: Ceftaroline và Cefdinir; Không thấm tốt TKTW: Cefotaxime"
        ],
        answer: 0,
        explain: "Trang 54: Cephalosporin thế hệ 3 tác động cao lên trực khuẩn Gram âm kể cả Pseudomonas (như ceftazidime và cefoperazone). Nhiều thuốc thế hệ 3 (TRỪ cefoperazone) đến được TKTW nên trị viêm màng não mủ Gram âm."
      },
      {
        q: "Sự khác biệt giữa hai Cephalosporin thế hệ 5 (Ceftobiprole và Ceftaroline) về phổ kháng khuẩn là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 54)",
        options: [
          "Cả hai đều hiệu quả trên MRSA; Ceftobiprole diệt được thêm Pseudomonas và Enterococci kháng vancomycin (VRE), còn Ceftaroline thì không",
          "Ceftaroline diệt được Pseudomonas và VRE, còn Ceftobiprole chỉ diệt được tụ cầu nhạy methicillin",
          "Cả hai đều bất lực trước MRSA nhưng là thuốc đầu tay diệt vi khuẩn kỵ khí B. fragilis",
          "Ceftobiprole là Monobactam chỉ diệt Gram âm, còn Ceftaroline là Carbapenem"
        ],
        answer: 0,
        explain: "Trang 54: Cephalosporin thế hệ 5 có hiệu quả trên MRSA, gồm ceftobiprole và ceftaroline; trong đó ceftobiprole tác dụng được trên Pseudomonas và VRE, còn ceftaroline không có tác dụng này."
      },
      {
        q: "Đặc điểm phổ kháng khuẩn của Monobactam duy nhất trên thị trường hiện nay (Aztreonam) là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 54)",
        options: [
          "Chỉ tác dụng trên vi khuẩn Gram âm, không có tác dụng với vi khuẩn Gram dương hay vi khuẩn kỵ khí",
          "Chỉ tác dụng trên cầu khuẩn Gram dương (kể cả MRSA) và hoàn toàn không diệt Gram âm",
          "Phổ cực rộng diệt cả Gram dương, Gram âm, kỵ khí và nấm có sterol",
          "Chỉ có tác dụng trên trực khuẩn lao và Rickettsia"
        ],
        answer: 0,
        explain: "Trang 54: Monobactam (vòng β-lactam đơn độc, duy nhất là aztreonam) chỉ có tác dụng trên vi khuẩn Gram âm, không tác dụng với vi khuẩn Gram dương hay vi khuẩn kỵ khí."
      },
      {
        q: "Trong nhóm Carbapenem, vì sao Imipenem phải dùng kèm Cilastatin, còn Ertapenem có giới hạn phổ nào cần nhớ?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 54–55)",
        options: [
          "Imipenem bị dihydropeptidase ở ống thận bất hoạt (cilastatin ức chế peptidase); Ertapenem không có tác dụng trên Pseudomonas và Acinetobacter",
          "Imipenem bị gan chuyển hóa thành độc tố; Ertapenem là thuốc duy nhất diệt được MRSA trong nhóm",
          "Imipenem chỉ uống mà không tiêm được; Ertapenem chuyên trị Pseudomonas đa kháng",
          "Cilastatin giúp imipenem gắn vào tiểu đơn vị 30S; Ertapenem không diệt được Enterobacteriaceae sinh ESBL"
        ],
        answer: 0,
        explain: "Trang 54–55: Carbapenem bền với ESBL (nhưng không diệt MRSA). Ertapenem không tác dụng trên Pseudomonas và Acinetobacter. Imipenem bị dihydropeptidase ở ống thận bất hoạt nên phải phối hợp cilastatin; Meropenem không bị dipeptidase bất hoạt."
      },
      {
        q: "Những nhóm vi sinh vật nào ĐỀ KHÁNG tự nhiên với các Aminoglycoside?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 55)",
        options: [
          "Vi khuẩn kỵ khí và các Rickettsia",
          "Trực khuẩn Gram âm đường ruột và Mycobacterium tuberculosis",
          "Pseudomonas aeruginosa khi phối hợp với piperacillin",
          "Streptococcus faecalis khi phối hợp với ampicillin"
        ],
        answer: 0,
        explain: "Trang 55: Aminoglycosides là kháng sinh phổ rộng, có tác động đối với Mycobacterium, nhưng các vi khuẩn kỵ khí và các Rickettsia kháng lại với các thuốc này (vì vận chuyển chủ động aminoglycoside phụ thuộc oxy)."
      },
      {
        q: "Tác dụng chọn lọc đặc trưng của Macrolide trên các vi khuẩn không điển hình và những vi khuẩn nào KHÁNG hoàn toàn với Macrolide?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 56–57)",
        options: [
          "Nhạy tốt: Mycoplasma pneumoniae, Chlamydia trachomatis, Legionella pneumophila, Campylobacter jejuni; Không tác dụng: Enterobacteriaceae, Pseudomonas, Acinetobacter",
          "Nhạy tốt: Pseudomonas và Acinetobacter; Không tác dụng: Staphylococci và Streptococci",
          "Nhạy tốt: Enterobacteriaceae sinh ESBL; Không tác dụng: Bordetella pertussis và H. influenzae",
          "Azithromycin đặc biệt kém hiệu quả với H. influenzae nhưng cực mạnh với trực khuẩn lao M. tuberculosis"
        ],
        answer: 0,
        explain: "Trang 56: Macrolide nhạy tốt trên cầu khuẩn Gram+, H. influenzae, B. pertussis, M. pneumoniae, C. trachomatis, L. pneumophila, C. jejuni; KHÔNG có tác dụng trên trực khuẩn Gram âm dễ mọc như Enterobacteriaceae, Pseudomonas, Acinetobacter."
      },
      {
        q: "Sự khác biệt về chỉ định lâm sàng giữa Clindamycin và Lincomycin (họ Lincosamide) là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 57)",
        options: [
          "Clindamycin trị nhiễm khuẩn nặng do vi khuẩn kỵ khí (B. fragilis); Lincomycin đặc biệt hữu hiệu trong nhiễm khuẩn tủy xương do Staphylococci",
          "Clindamycin chuyên trị viêm màng não vì thấm rất tốt dịch não tủy; Lincomycin trị trực khuẩn lao",
          "Cả hai đều chỉ diệt trực khuẩn Gram âm hiếu khí đường ruột và Pseudomonas",
          "Clindamycin chỉ bôi ngoài da như bacitracin vì không bền với acid dạ dày"
        ],
        answer: 0,
        explain: "Trang 57: Lincosamide bền acid, thấm rộng các mô NGOẠI TRỪ hệ thần kinh trung ương. Clindamycin thường chỉ định cho nhiễm khuẩn nặng do vi khuẩn kỵ khí (B. fragilis), còn lincomycin đặc biệt hữu hiệu với nhiễm khuẩn tủy xương do Staphylococci."
      }
    ]
  },

  // ========================================================================
  // BÀI 6: POLYPEPTIDE, GLYCOPEPTIDE, QUINOLONE, NHÓM MỚI & KHÁNG LAO
  // ========================================================================
  {
    id: 6,
    group: "II. THUỐC KHÁNG SINH",
    title: "Bài 6: Polypeptide, Glycopeptide, Quinolone, Nhóm Mới & Thuốc Kháng Lao",
    shortTitle: "Quinolone, Glycopeptide & Lao",
    textbookRef: "Vi khuẩn Y học YDS 2016 – Bài 6 (tr. 57–61)",
    summary: "Polypeptide (Polymyxin B/Colistin, Bacitracin); Glycopeptide (Vancomycin, Teicoplanin); Quinolone 4 thế hệ (từ Nalidixic đến Fluoroquinolone); Daptomycin, Streptogramin (30:70), Linezolid, Tigecyclin, Dapsone, Metronidazole; 5 Thuốc kháng lao (Rifampin, INH, Ethambutol, PAS, Pyrazinamide).",
    simId: "sim_special_tb",
    simTitle: "Phòng Lab Kháng sinh Đa kháng (MRSA/VRE/Kỵ khí) & Phác đồ – Độc tính Kháng Lao",
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">🧪 1. Polypeptide &amp; Glycopeptide</div>
          <ul class="theory-list">
            <li><strong>Polymyxin B &amp; Polymyxin E (Colistin):</strong> Không hấp thu đường tiêu hóa (chỉ tiêm), không vào dịch não tủy hay khớp xương. Rất độc (nhất là <strong>thận</strong>). Diệt khuẩn mạnh <strong>trực khuẩn Gram âm</strong> kể cả <em>Pseudomonas</em> kháng nhiều thuốc. <strong>Gram dương, cầu khuẩn Gram âm, Mycobacteria đều KHÁNG</strong>.</li>
            <li><strong>Bacitracin &amp; Tyrothricin:</strong> Chỉ diệt <strong>Gram dương</strong>, rất độc → chỉ dùng tại chỗ (thay đổi màng bào tương).</li>
            <li><strong>Glycopeptide (Vancomycin &amp; Teicoplanin):</strong> Chỉ tác động trên <strong>vi khuẩn Gram dương</strong> (ức chế tổng hợp vách).
              <ul>
                <li><strong>Vancomycin:</strong> Trị nhiễm trùng hệ thống nặng do tụ cầu, đặc biệt <strong>MRSA</strong>; lưu ý đã xuất hiện VISA (nhạy trung gian) và <strong>VRE</strong> (<em>Enterococci</em> kháng vancomycin).</li>
                <li><strong>Teicoplanin:</strong> Nửa vòng đời (<em>half-life</em>) dài → tiện dùng <strong>1 lần/ngày</strong>.</li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="card">
          <div class="card-title">🧬 2. Quinolone &amp; Fluoroquinolone (4 Thế hệ)</div>
          <ul class="theory-list">
            <li><strong>Thế hệ 1</strong> (<em>nalidixic acid [1962], conoxacin, oxolinic, piromidic, pipemidic, rosoxacin</em>): Không đạt nồng độ hệ thống sau uống → <strong>chỉ dùng nhiễm trùng đường tiểu</strong>.</li>
            <li><strong>Thế hệ 2</strong> (<em>ciprofloxacin, norfloxacin, ofloxacin, enoxacin, pefloxacin, lomefloxacin...</em>) – <strong>Thế hệ 3</strong> (<em>levofloxacin, sparfloxacin, tosufloxacin...</em>) – <strong>Thế hệ 4</strong> (<em>moxifloxacin, gatifloxacin, gemifloxacin, sitafloxacin...</em>): Gọi là <strong>Fluoroquinolone</strong>, đạt nồng độ hữu dụng trong máu và mô.</li>
            <li><strong>Phổ:</strong> Cao trên <em>Enterobacteriaceae</em> (kể cả chủng kháng C3G), <em>Haemophilus, Neisseriae, Chlamydia, P. aeruginosa, Legionella</em>; diệt được <em>M. tuberculosis, M. fortuitum, M. kansasii, M. chelonei</em>. Thế hệ mới tăng tác dụng với <strong>vi khuẩn kỵ khí</strong> (đơn trị liệu nhiễm trùng hỗn hợp hiếu–kỵ khí).</li>
            <li><strong>Lưu ý kháng:</strong> <em>Enterococci</em> kháng vancomycin (VRE) thường kháng luôn quinolone. Đề kháng do đột biến NST thay đổi tiểu đơn vị A của <strong>DNA gyrase</strong> hoặc giảm thấm màng ngoài.</li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🚀 3. Các Nhóm Kháng sinh Khác &amp; Thuốc Trị Phong / Kỵ khí</div>
        <div class="table-responsive">
          <table class="med-table">
            <thead>
              <tr>
                <th>Thuốc / Nhóm</th>
                <th>Cơ chế &amp; Đặc điểm chính</th>
                <th>Chỉ định / Giới hạn quan trọng</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Daptomycin</strong></td>
                <td>Lipopeptide vòng (<em>Streptomyces roseoporus</em>). Diệt khuẩn bằng <strong>khử cực màng tế bào phụ thuộc calcium</strong>. Chích 1 lần/ngày.</td>
                <td>Nhiễm trùng da &amp; mô mềm do cầu khuẩn Gram+; <strong>hợp đồng khi phối hợp gentamycin</strong>.</td>
              </tr>
              <tr>
                <td><strong>Streptogramin</strong><br/><em>(Quinupristin-Dalfopristin)</em></td>
                <td>Hỗn hợp <strong>30:70</strong> dẫn xuất bán tổng hợp pristinamycin (nhóm B &amp; nhóm A). Gắn 50S tác động cộng hưởng.</td>
                <td>Diệt <strong>MRSA, VRE, Pneumococci kháng penicillin</strong>, một số kỵ khí &amp; <em>N. gonorrhoeae, H. influenzae</em>. <strong>KHÔNG diệt <em>Enterobacteriaceae, P. aeruginosa, Acinetobacter</em></strong>.</td>
              </tr>
              <tr>
                <td><strong>Oxazolidinone (Linezolid)</strong></td>
                <td>Phổ tương tự glycopeptide; thấm rất tốt dịch hô hấp, xương, mỡ, nước tiểu.</td>
                <td>Viêm phổi, nhiễm trùng máu, da mô mềm do <em>Staphylococci</em> &amp; <em>Enterococci</em> kháng glycopeptide.</td>
              </tr>
              <tr>
                <td><strong>Novobiocin &amp; Acid fusidic</strong></td>
                <td>Novobiocin ức chế <strong>DNA và RNA</strong>; Acid fusidic ức chế tổng hợp protein.</td>
                <td>Phổ giới hạn trên Gram+ (chủ yếu tụ cầu).</td>
              </tr>
              <tr>
                <td><strong>Nitrofurans (Nitrofurantoin)</strong></td>
                <td>Diệt khuẩn mạnh <em>in vitro</em> Gram+ &amp; Gram-; thải qua đường tiểu.</td>
                <td>Chỉ định điều trị <strong>nhiễm khuẩn đường tiểu</strong>.</td>
              </tr>
              <tr>
                <td><strong>Glycylcyclin (Tigecyclin)</strong></td>
                <td>Gắn 30S (diệt khuẩn). Mạnh hơn tetracyclin trên MRSA, <em>S. pneumoniae</em>, <em>Enterococci</em>, <em>Shigella, Salmonella, Acinetobacter</em>, kỵ khí (<em>B. fragilis</em>).</td>
                <td><strong>KHÔNG</strong> tác dụng tốt với <strong><em>P. aeruginosa, Stenotrophomonas maltophilia, Burkholderia cepacia</em></strong>. Trị nhiễm trùng phức tạp da, mô mềm, nội tạng.</td>
              </tr>
              <tr>
                <td><strong>Dapsone</strong></td>
                <td>Cấu trúc giống sulfonamide.</td>
                <td>Phối hợp rifampin trị <strong>bệnh phong (leprosy)</strong>; trị <em>Pneumocystis pneumonia</em> ở bệnh nhân AIDS. Tác dụng phụ: <strong>thiếu máu tán huyết</strong>, rối loạn tiêu hóa.</td>
              </tr>
              <tr>
                <td><strong>Metronidazole</strong></td>
                <td>Diệt đơn bào (<em>Trichomonas, Giardia, Amib</em>) &amp; <strong>vi khuẩn kỵ khí</strong>.</td>
                <td>Phòng ngừa trước giải phẫu ruột già; trị <strong>tiêu chảy liên quan kháng sinh do <em>Clostridium difficile</em></strong>.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🫁 4. Các Thuốc Kháng Lao (5 Thuốc Cốt lõi)</div>
        <div class="table-responsive">
          <table class="med-table">
            <thead>
              <tr>
                <th>Thuốc Kháng Lao</th>
                <th>Cơ chế / Dược động học</th>
                <th>Lưu ý Kháng thuốc &amp; Tác dụng phụ Đặc trưng</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Rifampin</strong></td>
                <td>Bán tổng hợp từ rifamycin (<em>Streptomyces mediterranei</em>). Hấp thu tốt đường uống. Ức chế tổng hợp RNA (gắn <strong>RNA polymerase</strong>).</td>
                <td>Ức chế lao ở nồng độ thấp (&lt; 1 μg/mL) nhưng <strong>tần số đột biến kháng cao (10⁻⁵ – 10⁻⁶)</strong> → <strong>phải phối hợp</strong> ethambutol, isoniazid...</td>
              </tr>
              <tr>
                <td><strong>Isoniazid (INH)</strong></td>
                <td>Ức chế tổng hợp <strong>acid mycolic</strong> của vách trực khuẩn lao. Hấp thu hoàn toàn qua tiêu hóa, <strong>thấm dễ dàng vào dịch não tủy</strong>.</td>
                <td>Ít hiệu quả trên đa số vi khuẩn khác nhưng đặc hiệu với <em>M. tuberculosis</em>; luôn phối hợp để tránh kháng thuốc.</td>
              </tr>
              <tr>
                <td><strong>Ethambutol</strong></td>
                <td>Tổng hợp, tan nước, bền nhiệt; hấp thu tốt qua ruột.</td>
                <td>Kháng thuốc nhanh nếu dùng đơn độc. Tác dụng phụ thường gặp nhất: <strong>rối loạn thị giác</strong>.</td>
              </tr>
              <tr>
                <td><strong>PAS (Aminosalicylic acid)</strong></td>
                <td>Cấu trúc giống PABA &amp; sulfonamide; ức chế lao ở 1–5 μg/mL.</td>
                <td>Tác dụng phụ <strong>đường tiêu hóa trầm trọng</strong> nên hiện nay ít dùng.</td>
              </tr>
              <tr>
                <td><strong>Pyrazinamide</strong></td>
                <td>Hấp thu tốt tiêu hóa, khuếch tán rộng.</td>
                <td><strong>Không có phản ứng chéo</strong> với isoniazid hay thuốc lao khác. Tác dụng phụ: <strong>độc gan (1–5%)</strong>, buồn nôn, ói mửa, quá mẫn, <strong>tăng acid uric huyết (hyperuricemia)</strong>.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Phổ kháng khuẩn chính xác của Polymyxin B và Polymyxin E (Colistin) là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 57)",
        options: [
          "Diệt khuẩn mạnh trực khuẩn Gram âm (kể cả Pseudomonas đa kháng); vi khuẩn Gram dương, cầu khuẩn Gram âm và Mycobacteria đều kháng",
          "Diệt khuẩn mạnh cầu khuẩn Gram dương (kể cả MRSA và VRE); trực khuẩn Gram âm hoàn toàn kháng",
          "Thấm cực tốt vào dịch não tủy và khớp xương để điều trị viêm màng não do phế cầu",
          "Tác dụng chọn lọc lên vi nấm nhờ gắn vào sterol trên màng tế bào vi nấm"
        ],
        answer: 0,
        explain: "Trang 57: Polymyxin B và Colistin có hoạt tính diệt khuẩn mạnh đối với trực khuẩn Gram âm (kể cả Pseudomonas đa kháng), trong khi vi khuẩn Gram dương, cầu khuẩn Gram âm và Mycobacteria đều kháng; thuốc không vào được dịch não tủy hay khớp xương."
      },
      {
        q: "Ưu điểm dược động học giúp Teicoplanin tiện lợi hơn Vancomycin trong thực hành lâm sàng là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 58)",
        options: [
          "Có nửa vòng đời (half-life) dài nên chỉ cần dùng 1 lần/ngày",
          "Diệt được cả trực khuẩn Gram âm tiết ESBL và Pseudomonas aeruginosa",
          "Hấp thu hoàn toàn qua đường uống và không cần chỉnh liều ở bệnh nhân suy thận",
          "Tác dụng mạnh lên vi khuẩn kỵ khí Gram âm như Bacteroides fragilis"
        ],
        answer: 0,
        explain: "Trang 58: Teicoplanin có cấu trúc và phổ tác động tương tự vancomycin (chỉ tác động trên Gram dương) nhưng có nửa vòng đời (half-life) dài nên tiện cho việc sử dụng 1 lần/ngày."
      },
      {
        q: "Vì sao các Quinolone thế hệ 1 (như acid nalidixic) chỉ hữu ích trong điều trị nhiễm trùng đường tiểu?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 58)",
        options: [
          "Vì sau khi uống, các thuốc thế hệ 1 không đạt được nồng độ diệt khuẩn hệ thống trong máu và mô",
          "Vì thế hệ 1 bị enzym dihydropeptidase ở ống thận phân hủy toàn bộ ngay khi hấp thu",
          "Vì thế hệ 1 chỉ tác động lên vi khuẩn kỵ khí bắt buộc cư trú tại bàng quang",
          "Vì thế hệ 1 gắn không thuận nghịch vào tiểu đơn vị 50S gây suy tủy nếu dùng liều cao"
        ],
        answer: 0,
        explain: "Trang 58: Các quinolone thế hệ đầu tiên không đạt đến nồng độ diệt khuẩn hệ thống sau khi sử dụng bằng đường uống, do đó chỉ ích lợi đối với nhiễm trùng đường tiểu."
      },
      {
        q: "Điểm tiến bộ nổi bật của các Fluoroquinolone thế hệ mới (như thế hệ 3, 4: levofloxacin, moxifloxacin...) so với các thế hệ đầu là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 58)",
        options: [
          "Tăng tác dụng với vi khuẩn kỵ khí, cho phép đơn trị liệu (monotherapy) các nhiễm trùng phối hợp hiếu khí – kỵ khí, và có tác dụng với một số Mycobacteria",
          "Chuyển từ cơ chế ức chế DNA gyrase sang phá hủy trực tiếp vách peptidoglycan giống penicillin",
          "Hoàn toàn không bị vi khuẩn kháng thuốc dù sử dụng kéo dài đơn độc",
          "Diệt hiệu quả tất cả các chủng Enterococci kháng vancomycin (VRE)"
        ],
        answer: 0,
        explain: "Trang 58: Quinolones thế hệ mới tăng tác dụng với vi khuẩn kỵ khí, cho phép sử dụng đơn trị liệu các nhiễm trùng phối hợp hiếu khí – kỵ khí, và cũng tác dụng với M. tuberculosis, M. fortuitum, M. kansasii, M. chelonei. (Lưu ý: VRE thường kháng với quinolones)."
      },
      {
        q: "Cơ chế diệt khuẩn đặc trưng của kháng sinh Daptomycin là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 59)",
        options: [
          "Gây khử cực màng tế bào vi khuẩn theo cách phụ thuộc calcium (calcium-dependent manner)",
          "Gắn vào 3–6 thụ thể PBPs để hoạt hóa enzym tự tiêu vách tế bào",
          "Ức chế cạnh tranh PABA ngăn tổng hợp tetrahydrofolic acid",
          "Phá vỡ polysome thành monosome tại tiểu đơn vị 30S"
        ],
        answer: 0,
        explain: "Trang 59: Daptomycin là lipopeptide vòng từ Streptomyces roseoporus, diệt khuẩn bằng cách gây khử cực màng tế bào theo cách phụ thuộc calcium; chích 1 lần/ngày trị nhiễm trùng da/mô mềm cầu khuẩn Gram+, có hợp đồng với gentamycin."
      },
      {
        q: "Tỷ lệ phối hợp của hai dẫn xuất pristinamycin trong Streptogramin (Quinupristin : Dalfopristin) và phổ tác dụng của thuốc là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 59)",
        options: [
          "Hỗn hợp 30:70; diệt cộng hưởng các Gram dương đa kháng (MRSA, VRE, Pneumococci kháng PNC) nhưng KHÔNG tác dụng trên Enterobacteriaceae, Pseudomonas, Acinetobacter",
          "Hỗn hợp 5:1; chuyên trị trực khuẩn Gram âm đường ruột và Pseudomonas aeruginosa",
          "Hỗn hợp 50:50; chỉ dùng đường bôi ngoài da để tẩy uế vết thương",
          "Hỗn hợp 10:90; chuyên dùng điều trị bệnh lao phổi và bệnh phong"
        ],
        answer: 0,
        explain: "Trang 59: Quinupristin-dalfopristin là hỗn hợp 30:70 của pristinamycin nhóm B và nhóm A, cộng hưởng diệt Gram+ đa kháng (MRSA, VRE, Pneumococci kháng PNC), có diệt một số kỵ khí và N. gonorrhoeae, H. influenzae nhưng KHÔNG tác dụng với Enterobacteriaceae, Pseudomonas, Acinetobacter."
      },
      {
        q: "Ba trực khuẩn Gram âm hiếu khí nào KHÔNG đáp ứng tốt với Glycylcyclin (Tigecyclin)?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 60)",
        options: [
          "Pseudomonas aeruginosa, Stenotrophomonas maltophilia và Burkholderia cepacia",
          "Escherichia coli, Shigella và Salmonella",
          "Acinetobacter baumannii và Bacteroides fragilis",
          "Haemophilus influenzae và Neisseria gonorrhoeae"
        ],
        answer: 0,
        explain: "Trang 60: Tigecyclin có tác dụng tốt trên MRSA, S. pneumoniae, Enterococci, Shigella, Salmonella, Acinetobacter và B. fragilis, NHƯNG không có tác dụng tốt với P. aeruginosa, Stenotrophomonas maltophilia hay Burkholderia cepacia."
      },
      {
        q: "Thuốc Metronidazole được chọn lựa trong điều trị hai tình huống nhiễm khuẩn quan trọng nào trên lâm sàng?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 60)",
        options: [
          "Nhiễm trùng do vi khuẩn kỵ khí (kể cả phòng ngừa trước giải phẫu ruột già) và tiêu chảy liên quan kháng sinh do Clostridium difficile",
          "Viêm màng não do trực khuẩn Gram âm hiếu khí và nhiễm trùng tiểu do Pseudomonas",
          "Nhiễm khuẩn tủy xương do Staphylococci và lao màng não",
          "Nhiễm khuẩn mắt do Chlamydia và viêm phổi do Mycoplasma"
        ],
        answer: 0,
        explain: "Trang 60: Metronidazole điều trị đơn bào (Trichomonas, Giardia, Amib), hiệu quả với vi khuẩn kỵ khí, dùng phòng ngừa trước giải phẫu ruột già và điều trị tiêu chảy liên quan kháng sinh của Clostridium difficile."
      },
      {
        q: "Thuốc Dapsone thường phối hợp với rifampin trong bệnh lý nào và tác dụng phụ huyết học đặc trưng cần theo dõi là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 60)",
        options: [
          "Điều trị bệnh phong (leprosy) (và Pneumocystis pneumonia ở bệnh nhân AIDS); gây thiếu máu tán huyết",
          "Điều trị bệnh lao đa kháng; gây rối loạn thị giác nặng",
          "Điều trị tiêu chảy do C. difficile; gây điếc không hồi phục",
          "Điều trị sốt thương hàn; gây tăng acid uric huyết kịch phát"
        ],
        answer: 0,
        explain: "Trang 60: Dapsone có cấu trúc tương tự sulfonamide, thường kết hợp rifampin trị bệnh phong (leprosy) và dùng trị Pneumocystis pneumonia ở bệnh nhân AIDS; phản ứng phụ thường gặp là thiếu máu tán huyết, không dung nạp tiêu hóa, sốt, ngứa, mẩn đỏ."
      },
      {
        q: "Tại sao trong điều trị bệnh lao KHÔNG bao giờ dùng đơn độc Rifampin dù thuốc ức chế Mycobacteria ở nồng độ rất thấp (< 1 μg/mL)?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 60, 62)",
        options: [
          "Vì chủng đột biến kháng rifampin xảy ra ở tần số rất cao (10⁻⁵ – 10⁻⁶) nên điều trị đơn thuần thường thất bại",
          "Vì rifampin không thể hấp thu qua đường uống và không vào được phổi",
          "Vì rifampin gây phá hủy hàng rào máu não và gây suy tủy ngay liều đầu",
          "Vì trực khuẩn lao không có enzym RNA polymerase để gắn thuốc"
        ],
        answer: 0,
        explain: "Trang 60 & 62: Dù Mycobacteria bị ức chế bởi rifampin ở nồng độ < 1 μg/mL, nhưng tần số đột biến kháng rifampin rất cao (10⁻⁵ – 10⁻⁶, cao hơn mức 10⁻⁷–10⁻¹² thông thường) nên phải phối hợp ethambutol, isoniazid..."
      },
      {
        q: "Cơ chế tác động đặc hiệu của Isoniazid (INH) lên Mycobacterium tuberculosis và đặc điểm thấm mô của thuốc là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 60)",
        options: [
          "Ức chế sự tổng hợp acid mycolic của vách vi khuẩn lao; thấm dễ dàng vào các mô kể cả dịch não tủy",
          "Ức chế DNA gyrase của vi khuẩn lao; hoàn toàn không qua được hàng rào máu não",
          "Ức chế tiểu đơn vị 50S của ribosome; gây thiếu máu tán huyết nặng",
          "Cạnh tranh trực tiếp với PABA; chỉ tan trong dầu và không hấp thu qua ruột"
        ],
        answer: 0,
        explain: "Trang 60: Isoniazid (isonicotinic acid hydrazide, INH) tác dụng trên Mycobacteria bằng cách ức chế tổng hợp acid mycolic, hấp thu nhanh và hoàn toàn qua tiêu hóa, vào dễ dàng các mô kể cả dịch não tủy."
      },
      {
        q: "Cặp tác dụng phụ đặc trưng nhất của hai thuốc kháng lao Ethambutol và Pyrazinamide là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 61)",
        options: [
          "Ethambutol: Rối loạn thị giác; Pyrazinamide: Độc gan (1–5%) và tăng acid uric huyết (hyperuricemia)",
          "Ethambutol: Điếc vĩnh viễn; Pyrazinamide: Thiếu máu suy tủy",
          "Ethambutol: Thiếu máu tán huyết; Pyrazinamide: Rối loạn thị giác",
          "Ethambutol: Viêm gân Achilles; Pyrazinamide: Suy thận cấp không hồi phục"
        ],
        answer: 0,
        explain: "Trang 61: Ethambutol có tác dụng phụ thường gặp nhất là rối loạn thị giác. Pyrazinamide gây độc gan (1–5%), buồn nôn, ói mửa, quá mẫn và tăng acid uric huyết (hyperuricemia)."
      }
    ]
  },

  // ========================================================================
  // BÀI 7: SỰ KHÁNG THUỐC & NGUYÊN TẮC SỬ DỤNG KHÁNG SINH HỢP LÝ
  // ========================================================================
  {
    id: 7,
    group: "II. THUỐC KHÁNG SINH",
    title: "Bài 7: Sự Kháng thuốc & Nguyên tắc Sử dụng Kháng sinh Hợp lý",
    shortTitle: "Kháng thuốc & Phối hợp KS",
    textbookRef: "Vi khuẩn Y học YDS 2016 – Bài 6 (tr. 61–65)",
    summary: "5 Cơ chế đề kháng; Nguồn gốc không di truyền (ngủ/L-form) vs Di truyền (NST P12 & Yếu tố R/plasmid); 4 Cơ chế truyền gen (Biến nạp, Tải nạp, Giao phối F⁺→F⁻, Chuyển vị); Kháng chéo; Kháng sinh đồ; Phối hợp KS (Đối kháng vs 4 cơ chế Hiệp đồng) & 5 nguy hiểm lạm dụng KS.",
    simId: "sim_resistance_synergy",
    simTitle: "Mô phỏng Phối hợp Kháng sinh (Hiệp đồng vs Đối kháng) & Lan truyền Gen Đề kháng",
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">🛡️ 1. Năm Cơ chế Đề kháng Kháng sinh của Vi khuẩn</div>
          <ol class="theory-list">
            <li><strong>Sản xuất enzym phá hủy hoạt tính thuốc:</strong>
              <ul>
                <li><strong>β-lactamase:</strong> <em>Staphylococci</em> kháng penicillin G; một số trực khuẩn Gram âm.</li>
                <li><strong>Adenylylase, phosphorylase, acetylase:</strong> Trực khuẩn Gram âm kháng aminoglycosides.</li>
                <li><strong>Chloramphenicol acetyltransferase:</strong> Kháng chloramphenicol.</li>
              </ul>
            </li>
            <li><strong>Thay đổi khả năng thẩm thấu của màng tế bào:</strong> Tetracyclin không tích tụ được trong vi khuẩn kháng; kháng polymyxin, amikacin do thiếu tính thấm màng.</li>
            <li><strong>Điểm gắn của thuốc bị thay đổi cấu trúc:</strong> Mất/đổi protein ở 30S (kháng aminoglycosides, <strong>protein P12</strong> kháng streptomycin); đổi thụ thể 50S (kháng erythromycin); mất/đổi <strong>PBPs</strong> (kháng penicillin).</li>
            <li><strong>Thay đổi đường biến dưỡng:</strong> Vi khuẩn kháng sulfonamide không cần PABA ngoại bào nữa mà sử dụng trực tiếp acid folic có sẵn.</li>
            <li><strong>Enzym biến dưỡng bị thay đổi:</strong> Vẫn thực hiện chức năng nhưng giảm ái lực với thuốc (VD: <em>tetrahydropteroic acid synthetase</em> ở vi khuẩn kháng sulfonamide có ái lực với PABA cao hơn với sulfonamide).</li>
          </ol>
        </div>

        <div class="card">
          <div class="card-title">🧬 2. Nguồn gốc Kháng thuốc &amp; 4 Cơ chế Truyền Gen</div>
          <p style="font-size:13.5px;margin-bottom:6px;"><strong>A. Nguồn gốc KHÔNG do di truyền:</strong></p>
          <ul class="theory-list">
            <li><strong>Vi khuẩn không nhân lên:</strong> VD trực khuẩn lao nằm im nhiều năm không đáp ứng điều trị, đến khi nhân lên lại (VD sau dùng corticoid) thì nhạy cảm hoàn toàn trở lại.</li>
            <li><strong>Mất điểm gắn đặc biệt:</strong> Vi khuẩn nhạy penicillin biến thành <strong>dạng L</strong> (thiếu phần lớn vách) → kháng penicillin/cephalosporin; khi tổng hợp lại được vách sẽ nhạy lại.</li>
          </ul>
          <p style="font-size:13.5px;margin:8px 0 6px;"><strong>B. Nguồn gốc DI TRUYỀN (Phần lớn):</strong></p>
          <ul class="theory-list">
            <li><strong>Đề kháng Nhiễm sắc thể:</strong> Đột biến ngẫu nhiên tần số <strong>10⁻⁷ – 10⁻¹²</strong> (riêng rifampin <strong>10⁻⁵</strong>); kháng sinh đóng vai trò chọn lọc; hay gặp đột biến protein P12 trên 30S (kháng streptomycin).</li>
            <li><strong>Đề kháng Ngoài nhiễm sắc thể (Yếu tố R / Plasmid):</strong> Mang gen kháng một đến nhiều kháng sinh &amp; kim loại nặng (kiểm soát tiết β-lactamase, chloramphenicol acetyltransferase...).</li>
            <li><strong>4 Cơ chế truyền vật liệu di truyền &amp; plasmid:</strong>
              <ul>
                <li><strong>Biến nạp (Transformation):</strong> Mảnh DNA giải phóng từ vi khuẩn cho → vi khuẩn nhận.</li>
                <li><strong>Tải nạp (Transduction):</strong> DNA plasmid gắn vào <strong>phage</strong> truyền sang vi khuẩn cùng loại.</li>
                <li><strong>Giao phối (Conjugation):</strong> Qua ống nhỏ (<em>tubules</em>) từ vi khuẩn <strong>F⁺ sang F⁻</strong> — đây là <strong>hình thức thông thường nhất</strong> làm lan rộng kháng thuốc ở Gram âm &amp; một số cầu khuẩn Gram dương.</li>
                <li><strong>Chuyển vị (Transposition):</strong> Truyền đoạn ngắn DNA từ plasmid này sang plasmid khác hoặc sang nhiễm sắc thể.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-title">⚖️ 3. Kháng chéo, Kháng sinh đồ &amp; Giới hạn Kháng thuốc</div>
        <div class="grid-2">
          <div>
            <ul class="theory-list">
              <li><strong>Sự kháng chéo:</strong> Thường gặp ở các thuốc thành phần hóa học gần giống nhau (<em>polymyxin B – colistin; erythromycin – oleandomycin; neomycin – kanamycin</em>), nhưng cũng gặp giữa thuốc <strong>không liên hệ hóa học</strong> (<strong>erythromycin – lincomycin</strong>).</li>
              <li><strong>3 Biện pháp hạn chế kháng thuốc:</strong>
                <ol>
                  <li>Duy trì liều lượng trong mô <strong>đủ cao</strong> ức chế cả vi khuẩn ban đầu lẫn đột biến bước đầu.</li>
                  <li>Dùng đồng thời <strong>2 thuốc không có phản ứng chéo</strong> (VD: rifampicin + isoniazid trị lao).</li>
                  <li>Hạn chế dùng các kháng sinh có giá trị đặc biệt.</li>
                </ol>
              </li>
            </ul>
          </div>
          <div>
            <div class="callout pearl" style="margin:0;">
              <div class="callout-title">🧫 3 Chỉ định Thử nghiệm Tính nhạy cảm (Kháng sinh đồ)</div>
              <ol>
                <li>Tác nhân thường kháng nhiều loại kháng sinh (VD: <strong>trực khuẩn đường ruột</strong>).</li>
                <li>Quá trình nhiễm khuẩn đe dọa tính mạng (<strong>viêm màng não, nhiễm khuẩn máu</strong>).</li>
                <li>Cần loại bỏ nhanh chóng vi khuẩn khỏi cơ thể (<strong>viêm nội tâm mạc</strong>).</li>
              </ol>
              <p style="margin-top:6px;font-size:13px;">Ngoài ra có <em>Thử nghiệm tác động diệt khuẩn trong huyết tương</em> để xác định trực tiếp liều thuốc đủ diệt tác nhân.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🤝 4. Sử dụng Phối hợp Kháng sinh &amp; Nguy hiểm Lạm dụng</div>
        <div class="grid-2">
          <div>
            <h4 style="color:var(--primary);margin-bottom:6px;">Chỉ định &amp; Bất lợi Phối hợp</h4>
            <ul class="theory-list">
              <li><strong>4 Chỉ định:</strong> (1) Nhiễm khuẩn nặng / thiếu hụt miễn dịch; (2) Giảm đột biến kháng thuốc ở nhiễm khuẩn mạn; (3) Nhiễm khuẩn do nhiều loại vi khuẩn phối hợp; (4) Đạt <strong>hiệp đồng diệt khuẩn</strong> hoặc giảm liều để tránh độc tính.</li>
              <li><strong>5 Bất lợi:</strong> (1) Thầy thuốc yên tâm, bỏ sót chẩn đoán phân biệt; (2) Tăng nguy cơ quá mẫn; (3) Phí tổn cao; (4) Hiệu quả có khi không hơn 1 thuốc; (5) Có thể xảy ra đối kháng (hiếm).</li>
            </ul>
            <div class="callout trap">
              <div class="callout-title">⚔️ Cơ chế Đối kháng (Hiếm, phụ thuộc thời gian – liều lượng)</div>
              Xảy ra khi phối hợp <strong>thuốc diệt khuẩn</strong> (penicillin, aminoglycoside) với <strong>thuốc kìm khuẩn</strong> (chloramphenicol, tetracyclin), chủ yếu nếu:
              <ul>
                <li>Thuốc kìm khuẩn <strong>đến vị trí nhiễm trùng trước</strong> thuốc diệt khuẩn.</li>
                <li>Việc giết vi khuẩn là cần thiết cho điều trị.</li>
                <li>Liều hiệu quả của thuốc chỉ tối thiểu.</li>
              </ul>
            </div>
          </div>
          <div>
            <h4 style="color:var(--primary);margin-bottom:6px;">4 Cơ chế Hiệp đồng (Synergism) Kinh điển</h4>
            <ol class="theory-list">
              <li><strong>Ức chế lần lượt 2 bước trên một con đường biến dưỡng:</strong>
                <ul>
                  <li><em>Sulfonamide (PABA) + Trimethoprim (DHFR):</em> trị <em>Shigella, Salmonella, Serratia</em>, Pneumocystosis, Malaria.</li>
                  <li><em>Pyrimethamine + Sulfonamide/Clindamycin:</em> trị <em>Toxoplasma</em>.</li>
                </ul>
              </li>
              <li><strong>Thuốc ức chế vách giúp thuốc 2 vào tế bào dễ hơn:</strong>
                <ul>
                  <li><em>Ampicillin + Gentamicin:</em> loại sạch <em>Enterococcus faecalis</em> (viêm nội tâm mạc).</li>
                  <li><em>Piperacillin + Tobramycin:</em> hiệp đồng chống <em>Pseudomonas</em>.</li>
                </ul>
              </li>
              <li><strong>Thuốc tác động màng tế bào giúp thuốc 2 vào tế bào:</strong> <em>Amphotericin B + Flucytosine</em> (trị nấm <em>Cryptococcus, Candida</em>).</li>
              <li><strong>Thuốc bảo vệ thuốc 2 khỏi bị enzym hủy:</strong> Chất ức chế β-lactamase (<em>acid clavulanic, sulbactam, tazobactam</em>) bảo vệ <em>amoxicillin, ticarcillin, piperacillin</em>.</li>
            </ol>
            <div class="callout warning">
              <div class="callout-title">🚨 5 Nguy hiểm của Lạm dụng Kháng sinh</div>
              (1) Quá mẫn, sốc phản vệ, nốt đỏ, sốt, xáo trộn máu, viêm gan ứ mật; (2) Thay đổi VSV thường trú gây <strong>bội nhiễm</strong> khuẩn kháng thuốc; (3) Che lấp nhiễm khuẩn nặng; (4) Độc tính trực tiếp của thuốc; (5) Phát triển chủng kháng thuốc do diệt mất vi khuẩn nhạy cảm.
            </div>
          </div>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Kháng thuốc có nguồn gốc KHÔNG do di truyền có liên quan đến yếu tố nào sau đây?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6, Câu tự lượng giá 4 (tr. 65)",
        options: [
          "Vi khuẩn ở trạng thái không nhân lên (hoặc biến đổi thành dạng L mất vách tế bào)",
          "Đột biến trên nhiễm sắc thể làm thay đổi protein P12 ở tiểu đơn vị 30S",
          "Tiếp nhận plasmid mang yếu tố R qua quá trình giao phối F⁺ → F⁻",
          "Chiếm phần lớn tất cả các trường hợp vi khuẩn kháng kháng sinh trên lâm sàng"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 275): 4C – Vi khuẩn ở trạng thái không nhân lên. Nguồn gốc không di truyền gồm vi khuẩn không nhân lên (như trực khuẩn lao nằm ngủ) hoặc biến đổi thành dạng L mất điểm gắn vách tế bào; còn nguồn gốc di truyền mới chiếm phần lớn."
      },
      {
        q: "Kiểu phối hợp kháng sinh nào sau đây mang lại tác dụng HIỆP ĐỒNG (synergism)?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6, Câu tự lượng giá 5 (tr. 65)",
        options: [
          "β-lactam phối hợp với aminoglycoside hoặc β-lactam phối hợp với chất ức chế β-lactamase",
          "β-lactam phối hợp với tetracyclin khi tetracyclin đến ổ nhiễm trùng trước",
          "Chloramphenicol phối hợp với penicillin ở liều tối thiểu để điều trị viêm màng não",
          "Hai kháng sinh thuộc cùng một họ dùng liên tiếp nhau trong một đợt điều trị"
        ],
        answer: 0,
        explain: "Đáp án sách (tr. 275): 5D (Câu A và B đúng): β-lactam + aminoglycoside (vách mở đường cho aminoglycoside vào) và β-lactam + chất ức chế β-lactamase (bảo vệ vòng β-lactam). Ngược lại β-lactam + tetracyclin có thể gây đối kháng."
      },
      {
        q: "Trong các cơ chế truyền vật liệu di truyền và yếu tố R giữa vi khuẩn với nhau, cơ chế nào là THÔNG THƯỜNG NHẤT làm lan rộng sự kháng thuốc ở vi khuẩn Gram âm và một số cầu khuẩn Gram dương?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 62)",
        options: [
          "Giao phối (Conjugation) qua ống nhỏ từ vi khuẩn cho F⁺ sang vi khuẩn nhận F⁻",
          "Biến nạp (Transformation) bằng cách hấp thu mảnh DNA tự do ngoài môi trường",
          "Tải nạp (Transduction) thông qua thực khuẩn thể (phage)",
          "Chuyển vị (Transposition) nội bộ giữa plasmid và nhiễm sắc thể"
        ],
        answer: 0,
        explain: "Trang 62: Giao phối (conjugation) truyền plasmid hay phần NST qua ống nhỏ (tubules) từ F⁺ sang F⁻ là hình thức thông thường nhất, qua đó sự kháng thuốc lan rộng trong vi khuẩn Gram âm cũng như một số cầu khuẩn Gram dương."
      },
      {
        q: "Sự kháng thuốc do đột biến nhiễm sắc thể đối với Streptomycin thường liên quan trực tiếp đến biến đổi cấu trúc nào?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 62)",
        options: [
          "Đột biến gen kiểm soát protein P12 ở tiểu đơn vị 30S của ribosome vi khuẩn",
          "Đột biến mất toàn bộ màng tế bào chất chứa sterol",
          "Nhận gen tiết β-lactamase từ yếu tố R ngoại nhiễm sắc thể",
          "Chuyển đổi hoàn toàn thành dạng L không có vách peptidoglycan"
        ],
        answer: 0,
        explain: "Trang 62: Protein P12 ở tiểu đơn vị 30S ribosome vi khuẩn được dùng làm thụ thể gắn streptomycin; khi đột biến gen kiểm soát P12, vi khuẩn sẽ kháng streptomycin."
      },
      {
        q: "Sự khác biệt giữa 'Biến nạp' (Transformation), 'Tải nạp' (Transduction) và 'Chuyển vị' (Transposition) trong truyền gen kháng thuốc là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 62–63)",
        options: [
          "Biến nạp truyền mảnh DNA giải phóng tự do; Tải nạp truyền DNA plasmid qua phage; Chuyển vị truyền đoạn DNA ngắn từ plasmid sang plasmid khác hoặc NST",
          "Biến nạp cần thực khuẩn thể phage; Tải nạp cần tiếp xúc trực tiếp qua ống F⁺; Chuyển vị chỉ xảy ra ở vi nấm",
          "Cả ba đều chỉ xảy ra ở tế bào động vật hữu nhũ khi thiếu acid folic",
          "Chuyển vị là hình thức thông thường nhất truyền kháng thuốc từ vi khuẩn Gram âm sang ký chủ"
        ],
        answer: 0,
        explain: "Trang 62–63: Biến nạp truyền mảnh DNA sau giải phóng; Tải nạp gắn DNA plasmid vào phage để truyền sang vi khuẩn cùng loại; Chuyển vị truyền đoạn DNA ngắn từ plasmid này sang plasmid khác hoặc sang nhiễm sắc thể."
      },
      {
        q: "Cặp kháng sinh nào sau đây thể hiện hiện tượng KHÁNG CHÉO dù hai thuốc KHÔNG có liên hệ về cấu trúc hóa học?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 63)",
        options: [
          "Erythromycin và Lincomycin",
          "Polymyxin B và Colistin",
          "Neomycin và Kanamycin",
          "Rifampicin và Isoniazid"
        ],
        answer: 0,
        explain: "Trang 63: Kháng chéo thường gặp ở các thuốc thành phần hóa học gần giống nhau (polymyxin B – colistin, erythromycin – oleandomycin, neomycin – kanamycin), nhưng cũng có thể thấy giữa những thuốc KHÔNG liên hệ hóa học là erythromycin – lincomycin (do cùng đích gần nhau trên 50S)."
      },
      {
        q: "Ba trường hợp nào được chỉ định thực hiện Thử nghiệm tính nhạy cảm kháng sinh (Kháng sinh đồ) theo giáo trình Vi khuẩn Y học?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 63)",
        options: [
          "Tác nhân thường kháng nhiều KS (trực khuẩn đường ruột); Nhiễm khuẩn đe dọa tính mạng (viêm màng não, nhiễm khuẩn máu); Cần loại bỏ nhanh vi khuẩn (viêm nội tâm mạc)",
          "Mọi trường hợp cảm lạnh do virus; Viêm họng nhẹ do vi khuẩn thường trú; Chuẩn bị phẫu thuật ruột già",
          "Chỉ thực hiện với bệnh nhân dị ứng penicillin hoặc bệnh nhân nhiễm nấm Candida",
          "Chỉ áp dụng khi vi khuẩn chuyển sang dạng L mất vách trong môi trường ưu trương"
        ],
        answer: 0,
        explain: "Trang 63 nêu đúng 3 chỉ định kháng sinh đồ: (1) tác nhân thường kháng nhiều kháng sinh (trực khuẩn đường ruột); (2) nhiễm khuẩn đe dọa tính mạng (viêm màng não, nhiễm khuẩn máu); (3) cần loại bỏ nhanh vi khuẩn khỏi cơ thể (viêm nội tâm mạc)."
      },
      {
        q: "Tác dụng đối kháng khi phối hợp kháng sinh diệt khuẩn (penicillin, aminoglycoside) với kháng sinh kìm khuẩn (chloramphenicol, tetracyclin) xảy ra chủ yếu trong điều kiện nào?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 64)",
        options: [
          "Thuốc kìm khuẩn đến vị trí nhiễm trùng trước thuốc diệt khuẩn, việc giết vi khuẩn là cần thiết cho điều trị, và liều hiệu quả chỉ tối thiểu",
          "Thuốc diệt khuẩn đến trước với liều thật cao, phối hợp thêm chất ức chế β-lactamase",
          "Bệnh nhân bị nhiễm trùng đa khuẩn do cả vi khuẩn hiếu khí và kỵ khí ở ổ bụng",
          "Hai thuốc lần lượt ức chế 2 giai đoạn liên tiếp trên con đường tổng hợp acid folic"
        ],
        answer: 0,
        explain: "Trang 64: Tác dụng đối kháng giữa diệt khuẩn và kìm khuẩn ít gặp, xảy ra chủ yếu khi: (1) thuốc kìm khuẩn đến vị trí nhiễm trùng trước thuốc diệt khuẩn; (2) việc giết vi khuẩn là cần thiết cho điều trị; (3) liều hiệu quả của thuốc chỉ tối thiểu."
      },
      {
        q: "Phối hợp thuốc nào sau đây đạt tác dụng hiệp đồng theo cơ chế 'thuốc 1 tác động lên màng tế bào giúp thuốc 2 đi vào tế bào dễ dàng hơn'?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 64)",
        options: [
          "Amphotericin B phối hợp với Flucytosine điều trị nấm (Cryptococcus, Candida)",
          "Ampicillin phối hợp với Gentamicin điều trị Enterococcus faecalis",
          "Sulfonamide phối hợp với Trimethoprim điều trị Shigella và Salmonella",
          "Amoxicillin phối hợp với Acid clavulanic chống vi khuẩn tiết β-lactamase"
        ],
        answer: 0,
        explain: "Trang 64 phân biệt rõ 4 cơ chế hiệp đồng: (1) 2 bước chuyển hóa (SMX+TMP); (2) ức chế vách giúp aminoglycoside vào (Ampicillin+Gentamicin); (3) tác động màng tế bào giúp thuốc 2 vào (Amphotericin B + Flucytosine); (4) ức chế enzym bất hoạt (Clavulanic + Amoxicillin)."
      },
      {
        q: "Phối hợp Ampicillin + Gentamicin (trị viêm nội tâm mạc Enterococcus faecalis) và Piperacillin + Tobramycin (chống Pseudomonas) thuộc cơ chế hiệp đồng nào?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 64)",
        options: [
          "Thuốc ức chế vách tế bào (penicillin/cephalosporin) làm cho aminoglycoside đi vào bên trong tế bào dễ hơn",
          "Hai thuốc ức chế liên tiếp hai enzym của con đường tổng hợp acid folic",
          "Gentamicin ức chế β-lactamase để bảo vệ vòng β-lactam của ampicillin",
          "Cả hai thuốc cùng gắn cạnh tranh vào protein P12 trên tiểu đơn vị 30S"
        ],
        answer: 0,
        explain: "Trang 64: Cơ chế hiệp đồng số 2 – một thuốc ức chế vách tế bào (penicillin/cephalosporin) làm cho thuốc thứ hai (aminoglycoside) đi vào bên trong tế bào dễ dàng hơn."
      },
      {
        q: "Cơ chế đề kháng Sulfonamide theo kiểu 'thay đổi enzym biến dưỡng' khác với cơ chế 'thay đổi đường biến dưỡng' như thế nào?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 61)",
        options: [
          "Thay đổi enzym: tetrahydropteroic acid synthetase vẫn hoạt động nhưng giảm ái lực với sulfonamide so với PABA; Thay đổi đường biến dưỡng: không cần PABA ngoại bào mà dùng acid folic có sẵn",
          "Thay đổi enzym là tiết ra β-lactamase phá hủy sulfonamide; Thay đổi đường biến dưỡng là bơm ngược thuốc ra ngoài màng",
          "Cả hai cơ chế đều do vi khuẩn mất hoàn toàn vách tế bào chuyển thành dạng L",
          "Thay đổi enzym chỉ xảy ra ở vi khuẩn lao khi gặp rifampin và isoniazid"
        ],
        answer: 0,
        explain: "Trang 61 phân biệt rõ hai cơ chế: (1) Thay đổi đường biến dưỡng: không còn cần PABA ngoại bào nữa mà dùng acid folic có sẵn; (2) Enzym bị thay đổi: tetrahydropteroic acid synthetase ở vi khuẩn kháng đột biến giảm ái lực với sulfonamide so với PABA."
      },
      {
        q: "Hiện tượng 'bội nhiễm vi khuẩn kháng thuốc' khi lạm dụng kháng sinh xảy ra do nguyên nhân trực tiếp nào?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 64–65)",
        options: [
          "Kháng sinh làm thay đổi hệ vi khuẩn thường trú và loại bỏ các vi khuẩn nhạy cảm, tạo điều kiện cho chủng kháng thuốc phát triển bùng lên",
          "Kháng sinh kích thích trực tiếp tế bào lympho B sản xuất quá mức IgA1 protease",
          "Kháng sinh chuyển hóa thành nội độc tố LPS tích tụ ở niêm mạc ruột",
          "Kháng sinh gắn vào thụ thể Fc của đại thực bào làm ngưng quá trình thực bào"
        ],
        answer: 0,
        explain: "Trang 64–65: Hai trong 5 nguy hiểm của lạm dụng kháng sinh là làm thay đổi vi khuẩn thường trú gây bội nhiễm vi khuẩn kháng thuốc, và phát triển chủng vi khuẩn kháng thuốc do loại bỏ vi khuẩn nhạy cảm."
      }
    ]
  }
];

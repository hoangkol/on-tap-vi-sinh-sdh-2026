// ==========================================================================
// MỞ RỘNG CÂU HỎI & PHÂN LOẠI KSA + MỨC NHẬN THỨC (BÀI 1 ĐẾN BÀI 7)
// Mức 1 (Thuộc/Nhớ lại: 6/24 = 25%) | Mức 2 (Hiểu: 9/24 = 37,5%) | Mức 3 (Vận dụng: 9/24 = 37,5%)
// K (Kiến thức) | S (Kỹ năng) | A (Thái độ / Ra quyết định lâm sàng)
// Tổng ngân hàng: 7 bài × 24 câu = 168 câu trắc nghiệm chuẩn YDS 2016
// ==========================================================================

window.EXTRA_QUESTIONS = {
  // ========================================================================
  // BÀI 1: ĐẠI CƯƠNG NHIỄM KHUẨN & ĐỊNH ĐỀ KOCH – FALKOW
  // Base: L1=4, L2=6, L3=2 | Extra: L1=2, L2=3, L3=7 -> Tổng: L1=6, L2=9, L3=9
  // ========================================================================
  1: {
    baseTags: [
      { level: 2, ksa: "S", ksaLabel: "S1: Phân biệt tình trạng" },
      { level: 3, ksa: "S", ksaLabel: "S2: Biện luận xét nghiệm" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giải thích)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giải thích)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế)" },
      { level: 3, ksa: "A", ksaLabel: "A2: Đánh giá nguy cơ lây" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Khái niệm 'Tác nhân nhiễm khuẩn cơ hội' (Opportunistic pathogen) dùng để chỉ loại vi sinh vật nào?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 41)",
        options: [
          "Tác nhân chỉ có thể gây bệnh khi sức đề kháng của cơ thể bị hư hại",
          "Tác nhân luôn gây bệnh nặng ở người khỏe mạnh chỉ với số lượng rất nhỏ",
          "Tác nhân chỉ tồn tại bên ngoài môi trường đất nước, không bao giờ sống trên ký chủ",
          "Tác nhân không có khả năng sinh độc tố nhưng gây sốt qua interleukin 1"
        ],
        answer: 0,
        explain: "Trang 41 định nghĩa rõ: Tác nhân nhiễm khuẩn cơ hội (opportunistic pathogen) là tác nhân chỉ có thể gây bệnh khi sức đề kháng của cơ thể bị hư hại."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Bốn tiêu chuẩn trong Định đề Koch (1884) được đặt ra nhằm mục đích trực tiếp nào?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 41)",
        options: [
          "Xác định một loài vi khuẩn là tác nhân gây nên một bệnh đặc hiệu nào đó",
          "Phân loại kháng sinh theo phổ kháng khuẩn rộng hay phổ kháng khuẩn hẹp",
          "Định lượng nồng độ ức chế tối thiểu của kháng sinh trong huyết thanh",
          "Chế tạo giải độc tố từ nội độc tố lipopolysaccharide của vi khuẩn Gram âm"
        ],
        answer: 0,
        explain: "Trang 41: Định đề Koch (1884) áp dụng chung cho việc xác định một loại vi khuẩn gây một bệnh đặc hiệu nào đó."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt)",
        q: "Sự khác biệt giữa 'Tính sinh bệnh' (Pathogenicity) và 'Độc lực' (Virulence) của vi khuẩn là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 41)",
        options: [
          "Tính sinh bệnh là khả năng có thể gây bệnh nói chung (định tính), còn độc lực là khả năng định lượng để gây được bệnh",
          "Tính sinh bệnh chỉ gặp ở vi khuẩn Gram dương, còn độc lực chỉ gặp ở vi khuẩn Gram âm",
          "Tính sinh bệnh đo bằng số lượng vi khuẩn tối thiểu, còn độc lực chỉ khả năng sinh giải độc tố",
          "Hai khái niệm hoàn toàn đồng nghĩa và đều bắt buộc phải cấy thuần khiết trên thạch"
        ],
        answer: 0,
        explain: "Trang 41: Tính sinh bệnh (pathogenicity) là khả năng có thể gây bệnh của một tác nhân nhiễm khuẩn; còn Độc lực (virulence) là khả năng ĐỊNH LƯỢNG của một tác nhân để gây được bệnh."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giải thích)",
        q: "Trong tiến trình nhiễm khuẩn, con đường giải phẫu nào thường giúp vi khuẩn từ ổ nhiễm mô ban đầu xâm nhập vào vòng tuần hoàn máu?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 42)",
        options: [
          "Qua đường bạch huyết (lymphatic system) đi vào máu",
          "Đi ngược qua ống tụy ngoại tiết vào động mạch chủ bụng",
          "Xuyên trực tiếp qua hàng rào sừng hóa nguyên vẹn của lòng bàn tay",
          "Theo sợi thần kinh thị giác đi thẳng vào tâm nhĩ phải"
        ],
        answer: 0,
        explain: "Trang 42: Nhiễm khuẩn có thể lan trực tiếp vào mô hay qua đường bạch huyết để vào máu, tạo nên du khuẩn huyết (tạm thời) hoặc nhiễm khuẩn huyết (trường diễn)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giải thích)",
        q: "Ý nghĩa của bước thứ 3 trong Định đề Koch phân tử (Falkow 1988) – 'đột biến ngược của gen làm phục hồi tính sinh bệnh' – là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 42)",
        options: [
          "Loại trừ khả năng giảm độc lực trước đó là do tổn thương ngẫu nhiên khác, khẳng định chính xác gen đó quyết định tính sinh bệnh",
          "Chứng minh mọi đột biến nhiễm sắc thể đều truyền được qua giao phối F⁺ → F⁻",
          "Cho thấy vi khuẩn có thể tự biến đổi từ vi khuẩn thường trú thành dạng L mất vách",
          "Xác nhận thuốc kháng sinh đã làm thay đổi cấu trúc thụ thể PBP trên vách vi khuẩn"
        ],
        answer: 0,
        explain: "Trong Định đề Falkow (1988), bước 2 bất hoạt gen làm giảm độc lực và bước 3 đột biến ngược khôi phục lại gen đó để phục hồi tính sinh bệnh giúp chứng minh chắc chắn mối quan hệ nhân – quả của gen độc lực."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Biện luận thí nghiệm",
        q: "Một nghiên cứu sinh bất hoạt gen X ở dòng E. coli gây tiêu chảy, thấy mất hẳn khả năng bám dính và giảm độc lực trên mô hình ruột; khi đưa lại gen X nguyên vẹn vào, độc lực phục hồi như cũ. Thí nghiệm này minh họa trọn vẹn nguyên lý nào?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 42)",
        options: [
          "Định đề Koch phân tử của Stanley Falkow (1988)",
          "Định đề Koch cổ điển 4 tiêu chuẩn (1884) về nuôi cấy thuần khiết",
          "Hiện tượng dung nạp kháng sinh (tolerant) do thiếu autolysin",
          "Cơ chế truyền yếu tố R qua thực khuẩn thể (transduction)"
        ],
        answer: 0,
        explain: "Đây chính là 3 bước của Định đề Koch phân tử (Falkow 1988): gắn kết kiểu hình với dòng gây bệnh → bất hoạt gen làm giảm độc lực đo được → phục hồi gen (đột biến ngược) khôi phục tính sinh bệnh."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Thái độ kiểm soát lây",
        q: "Khi sàng lọc nhân viên chế biến thực phẩm, một người hoàn toàn khỏe mạnh nhưng mẫu phân cấy dương tính với Salmonella hoặc Shigella. Thái độ chuyên môn nào đúng?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 41)",
        options: [
          "Xác định đây là tình trạng nhiễm khuẩn (người lành mang khuẩn), cần cách ly công việc chế biến và xử lý nguồn lây",
          "Xem như hệ vi khuẩn thường trú bình thường giống Clostridium perfringens ở phân và cho làm việc tiếp",
          "Kết luận dương tính giả vì nhiễm khuẩn bắt buộc phải có sốt cao và tiêu chảy nặng",
          "Kết luận vi khuẩn chỉ là tác nhân cơ hội nên không có khả năng lây sang người khỏe mạnh"
        ],
        answer: 0,
        explain: "Theo định nghĩa tr. 41: Sự tăng sinh của vi khuẩn gây bệnh trong cơ thể dù không có triệu chứng vẫn coi là nhiễm khuẩn; người đó là 'người lành mang khuẩn' (carrier) có khả năng lây bệnh cho người khác."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Biện luận lâm sàng",
        q: "Hai mẫu bệnh phẩm ở hai người khỏe mạnh bình thường: Mẫu A (phết họng) phân lập Streptococci tiêu huyết; Mẫu B (mẫu phân) phân lập Shigella. Nhận định chính xác cho cả hai mẫu là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 41, 46)",
        options: [
          "Mẫu A không phải nhiễm khuẩn (thường trú đúng chỗ); Mẫu B là nhiễm khuẩn (người lành mang khuẩn)",
          "Cả Mẫu A và Mẫu B đều không phải nhiễm khuẩn vì cả hai người đều khỏe mạnh",
          "Cả Mẫu A và Mẫu B đều là nhiễm khuẩn huyết trường diễn (septicemia)",
          "Mẫu A là nhiễm khuẩn cơ hội; Mẫu B không phải nhiễm khuẩn vì thuộc thường trú ruột"
        ],
        answer: 0,
        explain: "Streptococci tiêu huyết ở phết họng người bình thường là VSV thường trú tại vị trí thông thường nên KHÔNG phải nhiễm khuẩn; ngược lại Shigella là tác nhân gây bệnh nên dù không triệu chứng vẫn là nhiễm khuẩn."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân tích vi sinh",
        q: "Một nhà nghiên cứu nghi ngờ một xoắn khuẩn mới không mọc trên bất kỳ môi trường thạch dinh dưỡng nào nhưng thấy rất nhiều trong tổn thương bệnh lý. Nếu chỉ dựa vào Định đề Koch 1884, bước nào sẽ gây bế tắc giống trường hợp Treponema pallidum?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 41–42)",
        options: [
          "Tiêu chuẩn thứ 2: Vi khuẩn phải được cấy và thuần khiết trong thí nghiệm qua nhiều đời",
          "Tiêu chuẩn thứ 1: Tìm thấy vi khuẩn trong tổn thương của các cơ thể mắc bệnh",
          "Tiêu chuẩn thứ 3: Gây bệnh thực nghiệm nếu tiêm trực tiếp dịch tổn thương",
          "Tiêu chuẩn thứ 4: Quan sát thấy xoắn khuẩn dưới kính hiển vi nền đen"
        ],
        answer: 0,
        explain: "Trang 42: Treponema pallidum và Mycobacterium leprae không cấy được trên môi trường thông dụng (vi phạm bước 2 của Định đề Koch 1884)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân biệt cơ chế bệnh",
        q: "Hai bệnh nhân đều có sốt cao nặng: Bệnh nhân 1 cấy máu dương tính liên tục nhiều ngày kèm ổ áp-xe đa cơ quan; Bệnh nhân 2 cấy họng có C. diphtheriae nhưng cấy máu âm tính, xuất hiện viêm cơ tim. Phân tích cơ chế sinh bệnh đúng nhất cho 2 ca này?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 42)",
        options: [
          "Bệnh nhân 1 ở tình trạng nhiễm khuẩn huyết trường diễn (septicemia); Bệnh nhân 2 vi khuẩn khu trú tại chỗ và sinh ngoại độc tố vào máu tấn công tim",
          "Cả hai bệnh nhân đều đang ở tình trạng du khuẩn huyết thoáng qua (bacteremia)",
          "Bệnh nhân 1 chỉ bị nhiễm độc nội độc tố từ thường trú họng; Bệnh nhân 2 bị nhiễm khuẩn huyết trường diễn",
          "Bệnh nhân 2 bắt buộc phải có C. diphtheriae tăng sinh ồ ạt trong máu mới gây tổn thương cơ tim"
        ],
        answer: 0,
        explain: "Trang 42 phân biệt rõ: vi khuẩn có thể vào máu trường diễn (nhiễm khuẩn huyết, septicemia) lan tràn đa cơ quan (Ca 1), HOẶC chỉ tăng sinh tại chỗ rồi phóng thích độc tố vào máu tấn công các cơ quan xa như bệnh bạch hầu (Ca 2)."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Quyết định dự phòng",
        q: "Một bệnh nhân bỏng diện rộng mất lớp biểu bì da nguyên vẹn, sau 5 ngày nhiễm nặng vi khuẩn vốn thường trú ngoài da. Cơ chế nào giải thích biến cố này theo kiến thức Chương 5?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 41–42, 44)",
        options: [
          "Tổn thương hàng rào da tạo ngả vào và làm hư hại sức đề kháng tại chỗ, khiến vi khuẩn cơ hội xâm nhập tăng sinh gây bệnh",
          "Độc lực của vi khuẩn tăng đột biến do tiếp xúc với không khí lạnh ngoài phòng bệnh",
          "Vi khuẩn tự sinh (spontaneous generation) từ dịch tiết vết bỏng mà không cần xâm nhập",
          "Kháng thể IgM trong máu thoát ra ngoài da gây tan rã mô lành xung quanh"
        ],
        answer: 0,
        explain: "Trang 41–42: Tác nhân cơ hội gây bệnh khi sức đề kháng cơ thể hư hại; tổn thương da (vết cắt, vết bỏng) làm mất hàng rào sinh lý bảo vệ và mở ngả vào cho vi khuẩn xâm nhập vào mô."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Biện luận định lượng",
        q: "Chủng vi khuẩn A chỉ cần 50 tế bào xâm nhập đã gây bệnh cho chuột, trong khi chủng B cùng loài phải cần tới 10⁶ tế bào mới gây được bệnh tương tự. Kết luận chính xác nhất về mặt định lượng là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 41)",
        options: [
          "Chủng A có độc lực (virulence) cao hơn rất nhiều so với chủng B",
          "Chủng B có tính sinh bệnh (pathogenicity) nhưng chủng A thì không có",
          "Chủng B có tính sinh độc tố mạnh gấp 20.000 lần chủng A",
          "Chủng A thuộc hệ vi khuẩn thường trú còn chủng B là tác nhân gây bệnh"
        ],
        answer: 0,
        explain: "Trang 41: Độc lực (virulence) là khả năng ĐỊNH LƯỢNG để gây bệnh; vi khuẩn có độc lực cao là vi khuẩn có thể gây bệnh dù xâm nhập vào cơ thể với số lượng nhỏ."
      }
    ]
  },

  // ========================================================================
  // BÀI 2: YẾU TỐ ĐỘC LỰC VI KHUẨN (ĐỘC TỐ, ENZYM & CHỐNG THỰC BÀO)
  // Base: L1=5, L2=6, L3=1 | Extra: L1=1, L2=3, L3=8 -> Tổng: L1=6, L2=9, L3=9
  // ========================================================================
  2: {
    baseTags: [
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giải thích)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Đối chiếu)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giải thích)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế)" },
      { level: 3, ksa: "S", ksaLabel: "S2: Phân biệt biến chứng" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Cặp enzym ngoại bào nào giúp tụ cầu tạo vỏ bọc sợi huyết tránh thực bào và giúp vi khuẩn phân hủy chất nền gian bào để lan tràn vào mô?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 43)",
        options: [
          "Coagulase (đông sợi fibrin thoát thực bào) và Hyaluronidase (hủy acid hyaluronic giúp lan tràn)",
          "IgA1 protease (đông fibrin) và Collagenase (trung hòa acid hyaluronic)",
          "Hemolysin (tổng hợp collagen) và Leucocidin (tăng số lượng bạch cầu)",
          "Peptidyl transferase (đông fibrin) và Transpeptidase (hủy màng tế bào)"
        ],
        answer: 0,
        explain: "Trang 43: Coagulase làm đông sợi fibrin bảo vệ vi khuẩn thoát khỏi thực bào; Hyaluronidase hủy hyaluronic acid giúp vi khuẩn lan tràn."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt)",
        q: "Hai kiểu xâm nhập biểu mô khác nhau của Salmonella so với Neisseria gonorrhoeae và Yersinia được mô tả như thế nào?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 42)",
        options: [
          "Salmonella đi qua kẽ hở giữa các tế bào biểu mô; N. gonorrhoeae và Yersinia xâm nhập vào bên trong tế bào biểu mô rồi mới vào mô",
          "Salmonella sống bắt buộc nội bào trong đại thực bào; N. gonorrhoeae chỉ tiết ngoại độc tố từ ngoài da",
          "Cả hai nhóm đều dùng enzym collagenase phá hủy toàn bộ lớp cơ trơn trước khi chạm tới biểu mô",
          "Yersinia chỉ đi qua kẽ hở tế bào biểu mô, còn Salmonella không bao giờ vượt qua niêm mạc ruột"
        ],
        answer: 0,
        explain: "Trang 42: Vài vi khuẩn xâm nhập vào mô qua kẽ hở của các tế bào biểu mô (Salmonella); vài vi khuẩn khác lại xâm nhập vào tế bào biểu mô tăng sinh hay không tăng sinh rồi sau đó mới xâm nhập vào mô (N. gonorrhoeae, Yersinia...)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế)",
        q: "Hậu quả 'tổn hại dinh dưỡng các cơ quan và toan huyết' khi nhiễm nội độc tố vi khuẩn Gram âm bắt nguồn trực tiếp từ cơ chế nào?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 43)",
        options: [
          "Hậu quả của tình trạng hạ huyết áp và sốc (do giãn mạch ngoại biên, tăng tính thấm mao quản, giảm hồi lưu tĩnh mạch)",
          "Do nội độc tố gắn vào tiểu đơn vị 30S làm tế bào cơ quan ngưng tổng hợp protein giống độc tố bạch hầu",
          "Do nội độc tố phá hủy trực tiếp kháng thể IgA1 trên bề mặt niêm mạc ruột",
          "Do nội độc tố chế thành giải độc tố gây phản ứng quá mẫn tức thì"
        ],
        answer: 0,
        explain: "Trang 43: Nội độc tố gây giãn mạch ngoại biên, tăng tính thấm mao quản, giảm hồi lưu tĩnh mạch, kích thích tiết chất giãn mạch → hạ huyết áp – sốc, dẫn đến tổn hại dinh dưỡng các cơ quan và toan huyết, kết hợp hoạt hóa yếu tố đông máu gây DIC."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giải thích)",
        q: "So với lipopolysaccharide (LPS) của vi khuẩn Gram âm, thành phần Peptidoglycan trong vách vi khuẩn có đặc điểm tác động sinh học như thế nào?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 43)",
        options: [
          "Tác động giống lipopolysaccharide (nội độc tố) nhưng ở mức độ yếu hơn",
          "Độc tính mạnh gấp 1.000 lần ngoại độc tố uốn ván và gây liệt mềm tức thì",
          "Chỉ gây ra mẩn đỏ ngoài da đặc hiệu như độc tố gây đỏ của liên cầu khuẩn",
          "Có bản chất protein không bền nhiệt nên dễ chế thành giải độc tố chủng ngừa"
        ],
        answer: 0,
        explain: "Trang 43 dưới mục PEPTIDOGLYCAN ghi ngắn gọn và rõ ràng: 'Tác động giống lipopolysaccharide nhưng yếu hơn.'"
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân tích tình huống",
        q: "Trong phòng thí nghiệm, một mẫu độc tố X mất hoàn toàn độc tính sau khi đun ở 80°C nhưng vẫn kích thích cơ thể sinh kháng thể đặc hiệu mạnh và chế được giải độc tố (toxoid). Độc tố X thuộc loại nào?",
        source: "Vi khuẩn Y học YDS 2016 – Bảng 5.1 (tr. 43)",
        options: [
          "Ngoại độc tố (bản chất protein, do plasmid quy định)",
          "Nội độc tố (bản chất lipopolysaccharide, do nhiễm sắc thể quy định)",
          "Peptidoglycan thành phần vách tế bào Gram dương",
          "Yếu tố lipoteichoic acid (LTA) trên tua fimbriae"
        ],
        answer: 0,
        explain: "Theo Bảng 5.1 (tr. 43): Ngoại độc tố bản chất protein, không bền nhiệt, tính sinh kháng nguyên cao, có thể chế thành giải độc tố để chủng ngừa và quy định bởi plasmid."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Xử trí dự phòng",
        q: "Tại sao người ta KHÔNG thể sản xuất vaccin dạng giải độc tố (toxoid) để phòng ngừa sốc nhiễm khuẩn do nội độc tố LPS của trực khuẩn Gram âm?",
        source: "Vi khuẩn Y học YDS 2016 – Bảng 5.1 (tr. 43)",
        options: [
          "Vì nội độc tố bản chất lipopolysaccharide, tính sinh kháng nguyên yếu và không thể chế thành giải độc tố",
          "Vì nội độc tố rất độc ở liều 40 ng nên làm chết ngay tế bào lympho B trước khi tạo kháng thể",
          "Vì nội độc tố do vi khuẩn còn sống tiết ra liên tục nên không thu gom được trong canh cấy",
          "Vì nội độc tố quá không bền với nhiệt độ phòng thí nghiệm nên phân hủy ngay lập tức"
        ],
        answer: 0,
        explain: "Bảng 5.1 (tr. 43): Nội độc tố có bản chất LPS, tương đối bền với nhiệt, tính sinh kháng nguyên yếu và KHÔNG thể chế thành giải độc tố."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Biện luận cơ chế",
        q: "Một bệnh nhân nhiễm tụ cầu (S. aureus) ở họng/niêm mạc xuất hiện sốt cao, tụt huyết áp, phát ban đa cơ quan; xét nghiệm độc tố phân lập được TSST-1. Nguồn gốc và đặc điểm của TSST-1 là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 43)",
        options: [
          "Ngoại độc tố (Độc tố 1 gây sốc độc tố) do một vài dòng Staphylococcus aureus trên niêm mạc tiết ra",
          "Nội độc tố LPS từ vách của S. aureus phóng thích sau khi tế bào bị penicillin ly giải",
          "Enzym hyaluronidase của liên cầu khuẩn kết hợp với collagenase ngoài da",
          "Độc tố ruột gây tiêu chảy đặc hiệu của Clostridium perfringens"
        ],
        answer: 0,
        explain: "Trang 43: Độc tố 1 gây sốc độc tố (TSST1) là một ngoại độc tố quan trọng do vài dòng Staphylococcus aureus trên niêm mạc tiết ra."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân tích chiến lược VK",
        q: "Trong cơ thể ký chủ, nồng độ sắt tự do cực kỳ thấp vì đa số sắt đã gắn với protein. Vi khuẩn gây bệnh vượt qua trở ngại dinh dưỡng này để tăng trưởng bằng cách nào?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 44)",
        options: [
          "Có cơ chế ái lực thấp sử dụng sắt dạng trùng hợp hoặc có hệ thống ái lực rất cao với sắt để tranh đoạt sử dụng sắt",
          "Chuyển hóa trực tiếp calci trong huyết tương thay thế hoàn toàn vai trò của nguyên tố sắt",
          "Ức chế tủy xương ký chủ phóng thích ferritin tự do vào huyết tương thông qua protein A",
          "Phá hủy toàn bộ tế bào Kupffer ở gan để lấy sắt dự trữ trong lysosome"
        ],
        answer: 0,
        explain: "Trang 44: Để tăng trưởng trong cơ thể (nơi sắt tự do rất ít vì gắn protein), vi khuẩn hoặc có ái lực thấp để sử dụng sắt dạng trùng hợp, hoặc có ái lực rất cao với sắt để tranh thủ sử dụng sắt."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân biệt yếu tố bề mặt",
        q: "Ghép đúng cặp vi khuẩn với yếu tố bề mặt giúp chúng chống lại sự thực bào của ký chủ theo sách Vi khuẩn Y học:",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 44)",
        options: [
          "Pneumococcus (Nang); Neisseria gonorrhoeae (Pili); Streptococcus pyogenes (Protein M)",
          "Pneumococcus (Protein A); S. aureus (Nang); S. pyogenes (Pili)",
          "N. gonorrhoeae (Protein M); S. pyogenes (Protein A); E. coli (Coagulase)",
          "C. diphtheriae (Nang); C. tetani (Protein A); S. aureus (IgA1 protease)"
        ],
        answer: 0,
        explain: "Trang 44 nêu chính xác 3 ví dụ yếu tố bề mặt chống thực bào: Nang của Pneumococcus, Pili của N. gonorrhoeae, và Protein M của S. pyogenes (còn Protein A của S. aureus gắn phần Fc của IgG)."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Liên hệ lâm sàng",
        q: "Một trẻ 9 tuổi xuất hiện tiểu ít, phù mặt, tiểu máu 2 tuần sau đợt nhiễm trùng da chốc lở do liên cầu khuẩn (Streptococci), trong khi một trẻ khác bị đau khớp di chuyển sau viêm họng liên cầu. Khác biệt về vị trí nhiễm tiên phát quyết định tổn thương miễn dịch nào?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 44)",
        options: [
          "Viêm cầu thận cấp thường xảy ra sau nhiễm Streptococci ngoài da; Thấp khớp cấp xảy ra sau nhiễm Streptococci ở họng",
          "Cả thấp khớp cấp lẫn viêm cầu thận cấp đều chỉ xảy ra sau khi nhiễm nội độc tố LPS ở đường ruột",
          "Nhiễm Streptococci ngoài da gây sốc TSST-1; nhiễm ở họng gây liệt mềm giống botulism",
          "Bệnh nhân viêm cầu thận cấp là do liên cầu khuẩn xâm nhập trực tiếp qua kẽ hở tế bào cầu thận"
        ],
        answer: 0,
        explain: "Trang 44: Tổn thương miễn dịch gặp ở trường hợp bị thấp khớp cấp sau khi nhiễm Streptococci ở họng (viêm họng) hay bị viêm cầu thận cấp sau khi nhiễm Streptococci ngoài da."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân tích sinh bệnh",
        q: "Một bệnh nhân nhiễm khuẩn huyết Gram âm nặng có sốt cao 40°C, tụt huyết áp 70/40 mmHg, toan chuyển hóa và xuất huyết rải rác do giảm tiểu cầu & yếu tố đông máu. Cơ chế gây rối loạn đông máu (DIC) trong bệnh cảnh này là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 43)",
        options: [
          "Nội độc tố tác động trực tiếp lên các yếu tố đông máu kết hợp với hậu quả của hạ huyết áp – sốc",
          "Vi khuẩn Gram âm tiết enzym coagulase làm đông toàn bộ sợi fibrin trong lòng động mạch",
          "Ngoại độc tố bạch hầu 40 ng ức chế tổng hợp yếu tố đông máu ở tủy xương",
          "Hoạt hóa bổ thể C3 theo con đường cổ điển làm vỡ màng hồng cầu gây ngưng kết ABO"
        ],
        answer: 0,
        explain: "Trang 43: Nội độc tố gây Đông máu nội mạch rải rác (DIC) do tác động trực tiếp lên các yếu tố đông máu và do hậu quả hạ huyết áp – sốc."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Biện luận cơ chế",
        q: "Cơ chế nào giúp một số vi khuẩn dù có hệ miễn dịch đặc hiệu mạnh của ký chủ nhưng vẫn tái nhiễm hoặc kéo dài dai dẳng ở cùng một cá thể?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 44)",
        options: [
          "Tính dị biệt kháng nguyên: thay đổi týp huyết thanh để lẩn trốn miễn dịch đặc hiệu của cơ thể",
          "Tiết giải độc tố trung hòa toàn bộ tế bào lympho T tuyến ức",
          "Thay đổi thành phần vách tế bào thành sterol để chống lại bổ thể C3",
          "Chuyển từ hình cầu protoplast sang hình que có lông chuyển"
        ],
        answer: 0,
        explain: "Trang 44 dưới mục 'Tính dị biệt kháng nguyên': Có những týp huyết thanh gây bệnh và không gây bệnh; vi khuẩn cũng có thể thay đổi týp huyết thanh để lẩn trốn miễn dịch đặc hiệu của cơ thể."
      }
    ]
  },

  // ========================================================================
  // BÀI 3: CƠ CHẾ CHỐNG NHIỄM KHUẨN CỦA KÝ CHỦ (KHÔNG ĐẶC HIỆU & ĐẶC HIỆU)
  // Base: L1=5, L2=5, L3=2 | Extra: L1=1, L2=4, L3=7 -> Tổng: L1=6, L2=9, L3=9
  // ========================================================================
  3: {
    baseTags: [
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân loại)" },
      { level: 3, ksa: "S", ksaLabel: "S2: Biện luận lâm sàng" },
      { level: 3, ksa: "K", ksaLabel: "K3: Vận dụng cơ chế" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "S", ksaLabel: "S1: Phân loại điều trị" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Đối chiếu)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giải thích)" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Cơ quan nào đóng vai trò 'tiền đồn đầu tiên' khi vi khuẩn xuyên qua lớp niêm mạc hô hấp và bị đại thực bào bắt mang đến?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 44)",
        options: [
          "Hạch lympho kế cận",
          "Tế bào Kupffer tại xoang gan",
          "Túi Bursa ở xương ức",
          "Màng lọc cầu thận"
        ],
        answer: 0,
        explain: "Trang 44: Nếu xuyên qua được lớp niêm mạc hô hấp, vi khuẩn sẽ gặp sự kháng cự của đại thực bào rồi bị đại thực bào mang đến hạch lympho kế cận – đây là tiền đồn đầu tiên ngăn chặn vi khuẩn."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giải thích)",
        q: "Hàng rào bảo vệ tại bộ máy tiêu hóa ngăn chặn vi khuẩn xâm nhập qua đường ăn uống gồm đầy đủ các yếu tố nào sau đây?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 44)",
        options: [
          "Nước bọt (enzym thủy giải), dạ dày (dịch acid), ruột (enzym hủy protein, đại thực bào hoạt động, IgA tiết)",
          "Chỉ có dịch acid dạ dày, hoàn toàn không có đại thực bào hay IgA tiết ở ruột",
          "Hệ thống lông chuyển đường tiêu hóa đẩy ngược vi khuẩn ra thực quản kết hợp β-lysin",
          "Enzym collagenase và coagulase tiết từ tế bào thành dạ dày"
        ],
        answer: 0,
        explain: "Trang 44: Ở bộ máy tiêu hóa, nước bọt mang các enzym thủy giải, dạ dày có dịch acid, ruột có enzym hủy protein và các đại thực bào hoạt động, các IgA tiết."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt)",
        q: "Sự khác biệt giữa vai trò của phản ứng 'Viêm' và phản ứng 'Sốt' trong đáp ứng bảo vệ không đặc hiệu theo giáo trình là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 45)",
        options: [
          "Viêm tăng đưa bạch cầu tới ổ viêm nhờ giãn mao mạch và hóa hướng động; Sốt do nội độc tố/lymphokine lên trung tâm điều nhiệt (tăng kháng thể & biệt hóa T ở thú thực nghiệm, ở người chưa rõ)",
          "Sốt làm tăng hoạt động thực bào ngay tức thì ở người, còn Viêm làm giảm số lượng bạch cầu đến ổ nhiễm",
          "Cả Viêm và Sốt đều là cơ chế miễn dịch đặc hiệu truyền được qua huyết thanh",
          "Sốt chỉ do ngoại độc tố protein gây ra và luôn làm giảm sản xuất kháng thể trên súc vật"
        ],
        answer: 0,
        explain: "Trang 45: Hiện tượng viêm làm tăng đề kháng vì gia tăng bạch cầu đến chỗ viêm nhờ giãn nở mao mạch và hóa hướng động. Hiện tượng sốt do nội độc tố, lymphokine tác động trung tâm điều nhiệt; trên súc vật thực nghiệm tăng tạo kháng thể và biệt hóa tế bào T, ở người chưa thấy rõ."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân tích)",
        q: "Năm yếu tố chi phối 'Miễn dịch tự nhiên' (không qua phơi nhiễm hay tiêm chủng trước đó) trong giáo trình Vi khuẩn Y học là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 45)",
        options: [
          "Tùy loại; Tùy di truyền và giống; Tùy cá nhân; Tùy tuổi; Tùy tình trạng biến dưỡng hay kích thích tố",
          "Tùy huyết thanh liệu pháp; Tùy vaccin; Tùy kháng sinh; Tùy giải độc tố; Tùy sữa mẹ",
          "Tùy plasmid; Tùy phage; Tùy transposon; Tùy PABA; Tùy PBPs",
          "Tùy nhiệt độ; Tùy pH kiềm; Tùy sterol màng; Tùy acid sialic; Tùy bổ thể C9"
        ],
        answer: 0,
        explain: "Trang 45 liệt kê chính xác 5 mục của Miễn dịch tự nhiên: Tùy theo loại, Tùy theo di truyền và giống, Tùy theo cá nhân, Tùy theo tuổi, Tùy theo tình trạng biến dưỡng hay kích thích tố."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Đối chiếu)",
        q: "Ví dụ minh họa cho 'Miễn dịch tự nhiên tùy theo di truyền và giống' được nêu trực tiếp trong sách Vi khuẩn Y học là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 45)",
        options: [
          "Bệnh Coccidioidomycosis lan tỏa ở người da đen cao gấp 10 lần người da trắng; một số dòng chuột kháng vi khuẩn tốt hơn dòng khác",
          "Vi khuẩn bệnh lậu chỉ gây bệnh ở người và dã nhân chứ không gây bệnh ở động vật khác",
          "Trẻ sơ sinh dễ bị viêm màng não mủ do Coliform vì kháng thể IgM không qua được nhau thai",
          "Người mắc bệnh trái rạ và sởi thường có miễn dịch vĩnh viễn suốt đời"
        ],
        answer: 0,
        explain: "Trang 45: Tùy theo di truyền và giống – ví dụ bệnh Coccidioidomycosis lan tỏa ở người da đen cao gấp 10 lần người da trắng; một vài loại chuột mẫn cảm virus và đề kháng vi khuẩn hơn loài chuột khác. (Còn lậu là 'Tùy theo loại', Coliform sơ sinh là 'Tùy theo tuổi')."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Khuyến cáo dự phòng",
        q: "Một người nghiện rượu nặng và hút thuốc lá lâu năm thường xuyên bị viêm phế quản – viêm phổi tái phát. Yếu tố hàng rào bảo vệ nào bị tổn thương trực tiếp theo giải thích của giáo trình?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 44)",
        options: [
          "Hệ thống chất nhầy và lông tơ cử động đẩy vi khuẩn ở niêm mạc hô hấp bị tổn thương bởi rượu, thuốc lá (cũng như thuốc phiện và nhiễm virus hô hấp)",
          "Nồng độ acid HCl trong dạ dày giảm mạnh làm mất khả năng tiêu hủy ngoại độc tố phế cầu",
          "Huyết thanh mất hoàn toàn β-lysin nên không diệt được trực khuẩn Gram âm đường ruột",
          "Tế bào lympho B ở hạch bạch huyết không còn nhận diện được phần Fc của kháng thể"
        ],
        answer: 0,
        explain: "Trang 44: Tổn thương hệ thống bảo vệ niêm mạc hô hấp (như dùng rượu, thuốc lá, thuốc phiện, nhiễm virus đường hô hấp) đều dễ dàng làm cho nhiễm khuẩn hô hấp tăng lên."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân tích thí nghiệm",
        q: "Trong một thí nghiệm trên chuột lang, nhà nghiên cứu truyền miễn dịch chống vi khuẩn lao từ chuột đã miễn dịch sang chuột lành: Nhóm A chỉ nhận huyết thanh không tế bào; Nhóm B nhận hỗn dịch tế bào lympho sống từ lách/hạch. Kết quả nào phù hợp cơ chế miễn dịch?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 46)",
        options: [
          "Chỉ Nhóm B nhận được miễn dịch bảo vệ (vì miễn dịch qua trung gian tế bào lympho T không truyền qua huyết thanh mà chỉ truyền bằng tế bào lympho)",
          "Chỉ Nhóm A nhận được miễn dịch bảo vệ nhờ β-lysin và IgA tiết trong huyết thanh",
          "Cả hai nhóm đều có miễn dịch thu được chủ động vĩnh viễn suốt đời",
          "Nhóm A tạo được miễn dịch tế bào nhờ hồng cầu mang kháng nguyên từ chuột cho"
        ],
        answer: 0,
        explain: "Trang 46: Miễn dịch qua trung gian tế bào (lympho T có thẩm quyền từ thymus) KHÔNG thể truyền bằng huyết thanh mà chỉ bằng tế bào lympho."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Biện luận cơ chế",
        q: "Khi cắt bỏ tuyến ức (thymus) sớm ở động vật sơ sinh, không chỉ miễn dịch qua trung gian tế bào suy sụp mà đáp ứng kháng thể của tế bào B đối với nhiều kháng nguyên cũng giảm mạnh. Giải thích đúng nhất là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 46)",
        options: [
          "Tế bào lympho T trưởng thành qua tuyến ức (thymus) còn đóng vai trò giúp đỡ tế bào lympho B trong miễn dịch qua trung gian kháng thể",
          "Tuyến ức là nơi duy nhất sản xuất bổ thể C3 và yếu tố opsonin hóa Fc",
          "Tế bào lympho B bắt buộc phải di cư vào tuyến ức để tổng hợp kháng thể IgA1 protease",
          "Cắt tuyến ức làm mất hoàn toàn hệ vi sinh vật thường trú trên da và niêm mạc"
        ],
        answer: 0,
        explain: "Trang 46 ghi rõ: Tế bào T có được thẩm quyền miễn dịch nhờ thymus; ngoài miễn dịch qua trung gian tế bào, 'Tế bào T còn giúp đỡ tế bào lympho B trong miễn dịch qua trung gian kháng thể.'"
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Đánh giá lâm sàng",
        q: "Bệnh nhân bị bỏng nặng mất nước điện giải dẫn đến tăng áp lực thẩm thấu máu, hoặc bệnh nhân nuôi dưỡng tĩnh mạch bị giảm phosphate máu nặng. Nguy cơ miễn dịch không đặc hiệu nào tăng cao trên bệnh nhân này?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 45)",
        options: [
          "Giảm hoạt động thực bào của bạch cầu và đại thực bào",
          "Tăng quá mức khả năng opsonin hóa qua thụ thể C3 và Fc",
          "Chuyển hóa miễn dịch tế bào T thành miễn dịch thụ động truyền qua huyết thanh",
          "Kích thích gan tiết quá nhiều β-lysin gây vỡ màng tế bào hồng cầu"
        ],
        answer: 0,
        explain: "Trang 45: Sự tăng áp lực thẩm thấu và giảm phosphate máu đều làm giảm thực bào."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân loại miễn dịch",
        q: "Xác định đúng thứ tự phân loại miễn dịch của 3 tình huống sau: (I) Người khỏi bệnh sởi không mắc lại; (II) Tiêm huyết thanh kháng độc tố bạch hầu SAD; (III) Suy dinh dưỡng nặng dễ nhiễm khuẩn:",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 45–46)",
        options: [
          "(I) Thu được chủ động; (II) Thu được thụ động; (III) Suy giảm miễn dịch tự nhiên tùy tình trạng biến dưỡng",
          "(I) Thu được thụ động; (II) Thu được chủ động; (III) Miễn dịch tự nhiên tùy giống",
          "(I) Tự nhiên tùy tuổi; (II) Miễn dịch tế bào T; (III) Thu được chủ động",
          "(I) Thu được chủ động; (II) Không đặc hiệu qua lysozym; (III) Thu được thụ động"
        ],
        answer: 0,
        explain: "Sau mắc sởi có miễn dịch suốt đời = Thu được chủ động; Tiêm huyết thanh SAD trung hòa độc tố = Thu được thụ động; Suy dinh dưỡng dễ nhiễm khuẩn = thuộc mục Miễn dịch tự nhiên tùy tình trạng biến dưỡng hay kích thích tố."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân tích hàng rào",
        q: "Dùng kháng sinh phổ rộng kéo dài tiêu diệt hệ vi sinh vật thường trú bình thường ở ruột/niêm mạc làm phát sinh tiêu chảy do bội nhiễm. Cơ chế bảo vệ tự nhiên nào của ký chủ đã bị vô hiệu hóa?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 44)",
        options: [
          "Cơ chế không đặc hiệu của hệ vi sinh vật thường trú: mất sự cạnh tranh chất dinh dưỡng và mất các chất độc đối kháng với vi khuẩn gây bệnh",
          "Cơ chế miễn dịch đặc hiệu thụ động qua đường sữa mẹ trước 6 tháng tuổi",
          "Mất hoàn toàn chức năng tiết H2O2 và iod bên trong lysosome của tế bào Kupffer",
          "Phá hủy lớp sừng hóa acid béo trên bề mặt da làm mất lysozym ở nước mắt"
        ],
        answer: 0,
        explain: "Trang 44: Hệ vi sinh vật thường trú sống trên niêm mạc ức chế vi khuẩn gây bệnh bằng cách tranh chất dinh dưỡng hay tiết các chất có tính độc đối với vi khuẩn; mất hệ này sẽ mất rào cản sinh học tại chỗ."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Biện luận cơ chế",
        q: "Bệnh nhân bị suy giảm nồng độ bổ thể C3 bẩm sinh thường tái phát nhiễm khuẩn sinh mủ nặng. Ngoài vai trò tan màng, sự thiếu hụt C3 làm suy giảm bước nào của quá trình thực bào?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 5 (tr. 45)",
        options: [
          "Giảm quá trình opsonin hóa vì bề mặt thực bào có thụ thể gắn C3 giúp gia tăng thực bào",
          "Mất hoàn toàn lysozym trong nước mắt và dịch tiết cổ tử cung",
          "Làm thay đổi bản chất tế bào lympho B từ túi Bursa thành tế bào lympho T",
          "Ngăn cản đại thực bào chìa chân giả ở bệnh nhân không có đái tháo đường"
        ],
        answer: 0,
        explain: "Trang 45: Cơ chế gia tăng thực bào là sự opsonin hóa, nhờ có những thụ thể trên bề mặt thực bào dành gắn phần Fc của kháng thể hay C3 của bổ thể."
      }
    ]
  },

  // ========================================================================
  // BÀI 4: ĐẠI CƯƠNG KHÁNG SINH & 4 CƠ CHẾ TÁC ĐỘNG
  // Base: L1=5, L2=6, L3=1 | Extra: L1=1, L2=3, L3=8 -> Tổng: L1=6, L2=9, L3=9
  // ========================================================================
  4: {
    baseTags: [
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "A", ksaLabel: "A1: Phân biệt an toàn" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Đối chiếu)" },
      { level: 3, ksa: "K", ksaLabel: "K3: Vận dụng cơ chế" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giải thích)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (So sánh)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Có khoảng bao nhiêu thụ thể PBPs (penicillin-binding proteins) trên tế bào vi khuẩn làm đích gắn ban đầu cho các thuốc β-lactam?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 48)",
        options: [
          "Khoảng 3 – 6 thụ thể PBPs (trong đó một số là enzym transpeptidase)",
          "Duy nhất 1 thụ thể trên tiểu đơn vị 50S của ribosome",
          "Khoảng 50 – 60 thụ thể sterol nằm xuyên qua màng bào tương",
          "Chính xác 2 thụ thể là RNA polymerase và DNA gyrase"
        ],
        answer: 0,
        explain: "Trang 48: Giai đoạn tác động đầu tiên của β-lactam là gắn vào các thụ thể PBPs (penicillin-binding proteins) của tế bào; có khoảng 3–6 thụ thể PBP, trong đó một số thụ thể là enzym transpeptidase."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế)",
        q: "Khác biệt về vị trí tác động trên ribosome 50S giữa Macrolide (erythromycin, azithromycin...) và Chloramphenicol là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 50)",
        options: [
          "Macrolide gắn vào 50S ở vị trí 23S rRNA ngăn thành lập phức hợp đầu tiên; Chloramphenicol gắn 50S ức chế enzym peptidyl transferase",
          "Macrolide gắn 30S làm vỡ polysome; Chloramphenicol gắn DNA gyrase ngăn tổng hợp DNA",
          "Cả hai đều gắn trực tiếp vào PABA để cạnh tranh tổng hợp acid folic ở 50S",
          "Macrolide ức chế vách peptidoglycan còn Chloramphenicol phá vỡ màng tế bào chất"
        ],
        answer: 0,
        explain: "Trang 50: Chloramphenicol gắn tiểu đơn vị 50S ức chế enzym peptidyl transferase; Macrolide gắn tiểu đơn vị 50S ở vị trí 23S rRNA ngăn cản thành lập phức hợp đầu tiên để tổng hợp chuỗi peptide."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (So sánh)",
        q: "Vì sao Glycylcyclin (Tigecyclin) đạt tác dụng DIỆT KHUẨN dù cơ chế tương tự Tetracyclin (vốn chỉ kìm khuẩn)?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 50)",
        options: [
          "Do Tigecyclin có khả năng gắn vào ribosome (tiểu đơn vị 30S) nhiều hơn so với tetracyclin",
          "Do Tigecyclin chứa vòng β-lactam nên vừa ức chế vách vừa phá vỡ màng chứa sterol",
          "Do Tigecyclin ức chế đồng thời cả RNA polymerase lẫn dihydrofolic acid reductase",
          "Do Tigecyclin chỉ tác dụng lên tế bào vi nấm và ký sinh trùng đơn bào"
        ],
        answer: 0,
        explain: "Trang 50: Glycylcyclin tác động tương tự tetracyclin (gắn tiểu đơn vị 30S), tuy nhiên thuốc có tác dụng diệt khuẩn do khả năng gắn vào ribosome nhiều hơn."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giải thích)",
        q: "Thuốc kháng nấm nhóm Imidazoles làm suy yếu sự toàn vẹn màng tế bào vi nấm theo cơ chế nào (khác với Polyenes)?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 49)",
        options: [
          "Ức chế sự tổng hợp lipid của màng tế bào vi nấm (thay vì gắn trực tiếp vào sterol có sẵn như Polyenes)",
          "Phá hủy lớp vách peptidoglycan chứa D-alanin-D-alanin của nấm",
          "Gắn vào tiểu đơn vị 30S gây đọc sai mã mRNA tại vùng nhận diện",
          "Cạnh tranh trực tiếp với PABA ngăn tổng hợp purin trong nhân nấm"
        ],
        answer: 0,
        explain: "Trang 49: Polyenes (amphotericin B, nystatin) tương tác với sterol trong màng vi nấm; còn các Imidazoles kháng nấm làm suy yếu sự toàn vẹn màng tế bào vi nấm bằng cách ức chế sự tổng hợp lipid của màng tế bào."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân tích cơ chế",
        q: "Trong ống nghiệm chứa môi trường ưu trương (hypertonic), người ta bổ sung Penicillin G nồng độ cao vào canh cấy vi khuẩn Gram dương và Gram âm nhạy cảm. Hình thái tế bào thu được dưới kính hiển vi là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 48)",
        options: [
          "Gram dương biến thành dạng hình cầu không vách (Protoplast); Gram âm biến thành dạng vách không hoàn chỉnh (Spheroplast)",
          "Cả Gram dương và Gram âm đều vỡ tan hoàn toàn tức thì nhờ bảo vệ bởi áp lực ưu trương",
          "Gram dương thành Spheroplast có vách; Gram âm thành Protoplast không vách",
          "Cả hai giữ nguyên vách tế bào nhưng ngừng tổng hợp protein trên polysomes"
        ],
        answer: 0,
        explain: "Trang 48: Khi tổng hợp vách bị ức chế, vi khuẩn Gram dương biến thành dạng hình cầu không có vách (protoplast) và Gram âm thành vách không hoàn chỉnh (spheroplast); trong môi trường đẳng trương chúng dễ vỡ, còn trong môi trường ưu trương chúng tồn tại dưới dạng protoplast/spheroplast rất dễ vỡ."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Biện luận cơ chế",
        q: "Tại sao cùng là β-lactam nhưng một thuốc gắn vào PBP này chỉ làm tế bào vi khuẩn kéo dài ra, trong khi gắn vào PBP khác lại làm tế bào bị ly giải?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 48)",
        options: [
          "Vì các thụ thể PBPs khác nhau có ái lực khác nhau với từng loại thuốc và đảm nhiệm các khâu khác nhau trong tạo vách (kéo dài thân vs tạo khiếm khuyết ngoại vi gây ly giải)",
          "Vì PBP làm kéo dài tế bào nằm ở nhân nhiễm sắc thể còn PBP ly giải nằm trên plasmid",
          "Vì thuốc gắn PBP thứ nhất ức chế 30S còn gắn PBP thứ hai ức chế RNA polymerase",
          "Vì chỉ vi khuẩn kỵ khí mới có PBP ly giải trong khi vi khuẩn hiếu khí không có PBP"
        ],
        answer: 0,
        explain: "Trang 48 giải thích chính xác: Những thụ thể PBP khác nhau có ái lực khác nhau đối với từng thuốc dẫn đến kết quả khác nhau; VD gắn vào một PBP chỉ làm tế bào kéo dài ra, gắn vào PBP khác gây khiếm khuyết phần ngoại vi vách làm tế bào ly giải."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: An toàn sử dụng",
        q: "Một kỹ thuật viên định dùng dung dịch chất sát khuẩn (antiseptic) nồng độ cao để ngâm rửa vết thương sâu mô hở diện rộng hoặc pha truyền tĩnh mạch nhằm diệt vi khuẩn kháng đa thuốc. Cần tư vấn gì dựa trên bản chất chất sát khuẩn?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 47)",
        options: [
          "Tuyệt đối không dùng toàn thân hay mô sâu vì chất sát khuẩn tác động hóa học ít đặc hiệu, mọi tế bào sống ngấm vào đều nhạy cảm nên liều hiệu lực gây độc hại mô sống",
          "Có thể tiêm tĩnh mạch chậm nếu hòa tan ở nhiệt độ 37°C và tăng thời gian tiếp xúc",
          "Chất sát khuẩn chỉ diệt vi khuẩn mà hoàn toàn không ảnh hưởng tế bào người nên rất an toàn",
          "Chất sát khuẩn hoàn toàn tương đương chất tẩy uế nên chỉ khác ở màu sắc dung dịch"
        ],
        answer: 0,
        explain: "Trang 47: Chất sát khuẩn khác cơ bản kháng sinh ở chỗ tác động hóa học và ít đặc hiệu (tất cả tế bào sống ngấm vào đều nhạy cảm), liều hiệu lực thường gây độc hại mô sống → thường chỉ dùng tại chỗ (bôi ngoài da)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân tích đề kháng",
        q: "Một chủng trực khuẩn Gram âm kháng đồng thời Amikacin, Gentamicin và Tobramycin nhưng vẫn có thụ thể 30S bình thường. Hai cơ chế kháng thuốc hợp lý nhất cần nghĩ tới theo giáo trình là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 49)",
        options: [
          "Sản xuất enzym hủy thuốc trên plasmid (adenylylase, phosphorylase, acetylase) HOẶC khiếm khuyết thấm màng giảm vận chuyển chủ động vào tế bào",
          "Sản xuất β-lactamase mở vòng hoặc mất vách peptidoglycan chuyển thành dạng L",
          "Sản xuất chloramphenicol acetyltransferase hoặc thay đổi tiểu đơn vị A của DNA gyrase",
          "Sử dụng acid folic ngoại bào thay cho PABA hoặc gắn sterol vào màng tế bào"
        ],
        answer: 0,
        explain: "Trang 49 nêu đủ 3 cơ chế đề kháng Aminoglycosides: (1) thiếu thụ thể 30S (NST), (2) sản xuất enzym hủy thuốc adenylylase, phosphorylase, acetylase (plasmid), (3) khiếm khuyết thấm màng giảm vận chuyển chủ động aminoglycoside vào tế bào."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Biện luận đích thuốc",
        q: "Tại sao các tế bào động vật hữu nhũ KHÔNG bị ức chế bởi Sulfonamide và cũng ít bị ảnh hưởng bởi Tetracyclin ở liều điều trị?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 50–51)",
        options: [
          "TB hữu nhũ không tự tổng hợp acid folic từ PABA (lấy từ ngoài) nên không bị sulfonamide ức chế; đồng thời TB hữu nhũ không tập trung chủ động tetracyclin vào trong tế bào",
          "TB hữu nhũ có vách peptidoglycan dày đặc ngăn cả hai thuốc đi qua màng tế bào",
          "TB hữu nhũ tiết enzym penicillinase và acetyltransferase phá hủy hoàn toàn cả hai thuốc",
          "TB hữu nhũ sử dụng sterol trên ribosome 30S thay cho protein P12"
        ],
        answer: 0,
        explain: "Trang 50: 'Các tế bào hữu nhũ không tập trung chủ động được tetracyclin.' Trang 51: 'Tế bào động vật không thể tổng hợp được acid folic mà chỉ dựa vào nguồn cung cấp từ bên ngoài nên không bị ức chế bởi sulfonamides.'"
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân tích phối hợp",
        q: "Trong phối hợp điều trị bệnh nhiễm trùng do đơn bào Toxoplasma, người ta thường phối hợp Sulfonamide với thuốc ức chế DHFR nào thay vì chỉ dùng Trimethoprim?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 51)",
        options: [
          "Pyrimethamine (Daraprim)",
          "Acid clavulanic",
          "Acid p-aminosalicylic (PAS)",
          "Novobiocin"
        ],
        answer: 0,
        explain: "Trang 51: Pyrimethamine (Daraprim) phối hợp với sulfonamide là thuốc chọn lọc hiện nay để điều trị bệnh do Toxoplasma và một số bệnh do nhiễm động vật đơn bào khác."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Biện luận lâm sàng",
        q: "Tại sao một số penicillin (như Cloxacillin) lại không bị hủy bởi penicillinase, còn Acid clavulanic, Sulbactam và Tazobactam bản thân kháng khuẩn yếu nhưng phối hợp với Amoxicillin/Ticarcillin lại tạo hiệu lực cao?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 48)",
        options: [
          "Cloxacillin bền với β-lactamase; còn Clavulanic, Sulbactam, Tazobactam có ái lực cao với β-lactamase, gắn vào enzym mà không bị thủy giải nên bảo vệ penicillin đi kèm (hợp đồng)",
          "Clavulanic trực tiếp ức chế tổng hợp protein trên 50S giúp amoxicillin gắn mạnh hơn vào ribosome",
          "Sulbactam làm vỡ màng chứa sterol của vi khuẩn Gram âm giúp ticarcillin không cần PBPs",
          "Cloxacillin chuyển trực tiếp vi khuẩn Gram âm thành protoplast trong môi trường ưu trương"
        ],
        answer: 0,
        explain: "Trang 48: Clavulanic acid, sulbactam và tazobactam có ái lực cao với β-lactamase, gắn vào enzym nhưng không bị thủy giải nên bảo vệ được ampicillin, amoxicillin, ticarcillin khỏi bị enzym phá hủy."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Đánh giá đặc tính thuốc",
        q: "Một thuốc tác động vào tế bào vi khuẩn Gram dương bằng cách cộng hưởng hai dẫn xuất bán tổng hợp gắn vào các vị trí khác nhau trên tiểu phần 50S để đạt hiệu quả diệt khuẩn là thuốc nào?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 50)",
        options: [
          "Streptogramin (Quinupristin / Dalfopristin)",
          "Glycylcyclin (Tigecyclin)",
          "Oxazolidinone (Linezolid)",
          "Lincosamide (Clindamycin)"
        ],
        answer: 0,
        explain: "Trang 50: Streptogramin (quinupristin/dalfopristin) kết hợp từ hai dẫn xuất pristinamycin có tác dụng hợp đồng diệt khuẩn đối với vi khuẩn Gram dương do gắn vào các vị trí khác nhau ở tiểu phần 50S của ribosome."
      }
    ]
  },

  // ========================================================================
  // BÀI 5: HỌ SULFONAMIDE, β-LACTAM, AMINOGLYCOSIDE & NHÓM ỨC CHẾ PROTEIN
  // Base: L1=3, L2=7, L3=2 | Extra: L1=3, L2=2, L3=7 -> Tổng: L1=6, L2=9, L3=9
  // ========================================================================
  5: {
    baseTags: [
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Tổng hợp)" },
      { level: 1, ksa: "A", ksaLabel: "A1: Nhận biết độc tính" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "S", ksaLabel: "S1: Chỉ định thuốc" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt)" },
      { level: 3, ksa: "S", ksaLabel: "S2: Chọn thuốc TKTW" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Đối chiếu)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 3, ksa: "S", ksaLabel: "S2: Biện luận dược lý" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giới hạn phổ)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt)" },
      { level: 2, ksa: "S", ksaLabel: "S1: Chỉ định lâm sàng" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Nhân hóa học chung của các thuốc Penicillin và của các thuốc Cephalosporin lần lượt là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 52–53)",
        options: [
          "Penicillin: 6-aminopenicillanic acid (6-APA); Cephalosporin: 7-aminocephalosporanic acid (7-ACA)",
          "Penicillin: 7-aminocephalosporanic acid (7-ACA); Cephalosporin: 6-aminopenicillanic acid (6-APA)",
          "Cả hai đều có nhân 4-aminobenzoic acid (PABA)",
          "Penicillin: vòng β-lactam đơn độc; Cephalosporin: vòng lacton 14 nguyên tử"
        ],
        answer: 0,
        explain: "Trang 52–53: Penicillin có nhân chung 6-aminopenicillanic acid (β-lactam + thiazolidine); Cephalosporin bán tổng hợp từ cephalosporin C có nhân 7-aminocephalosporanic acid."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Penicillin G (benzyl-penicillin) được phát minh và đưa vào chữa bệnh gắn liền với tên tuổi các nhà khoa học và loài nấm nào?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 52)",
        options: [
          "Fleming phát minh (1928), Florey và Chain đưa vào điều trị (1941); từ nấm Penicillium notatum hoặc Penicillium chrysogenum",
          "Waksman phát minh (1944) từ nấm Streptomyces griseus",
          "Fleming phát minh (1959) bằng cách dùng enzym amidase phân lập từ nấm Cephalosporium",
          "Stanley Falkow phát minh (1988) từ nấm Streptomyces venezuelae"
        ],
        answer: 0,
        explain: "Trang 52: Penicillin G được Fleming phát minh từ năm 1928, sau đó Florey và Chain đưa vào chữa bệnh năm 1941, hình thành qua lên men nấm Penicillium notatum hoặc Penicillium chrysogenum."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Enzym nào được sử dụng từ năm 1959 để cắt chuỗi bên của Penicillin G lấy phần nhân, tạo tiền đề tổng hợp các Penicillin bán tổng hợp?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 53)",
        options: [
          "Amidase",
          "Penicillinase (β-lactamase)",
          "Dihydropeptidase",
          "Peptidyl transferase"
        ],
        answer: 0,
        explain: "Trang 53: Từ năm 1959, người ta tổng hợp penicillin bán tổng hợp bằng cách dùng amidase phá hủy chuỗi bên của penicillin G để chỉ còn lại nhân, từ đó gắn chuỗi bên mới."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân loại)",
        q: "Trong phân loại lâm sàng Penicillin từ năm 1986 thành 4 nhóm, đặc điểm của nhóm đại diện bởi Nafcillin và nhóm đại diện bởi Ampicillin/Piperacillin khác nhau thế nào?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 53)",
        options: [
          "Nafcillin không bị hủy bởi β-lactamase nhưng không tác động Gram âm; Ampicillin/Piperacillin phổ rộng cả Gram dương lẫn Gram âm nhưng bị hủy bởi β-lactamase",
          "Nafcillin phổ cực rộng trên Pseudomonas; Ampicillin bền hoàn toàn với mọi β-lactamase",
          "Cả hai đều bền acid dạ dày hơn Penicillin V và dùng tốt cho mọi chủng MRSA",
          "Nafcillin chỉ tác dụng trên trực khuẩn đường ruột; Ampicillin chỉ diệt cầu khuẩn Gram dương"
        ],
        answer: 0,
        explain: "Trang 53: Nhóm 2 (Nafcillin) không bị hủy bởi β-lactamase nhưng hoạt tính Gram+ thấp hơn nhóm 1 và không tác động Gram-. Nhóm 3 (Ampicillin, Piperacillin) tác động cao cả Gram+ và Gram- nhưng bị hủy bởi β-lactamase."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân tích)",
        q: "Hai điểm mạnh vượt trội của Cephalosporin thế hệ 2 (và Cephamycin) so với Cephalosporin thế hệ 1 là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 54)",
        options: [
          "Tác động lên cả vi khuẩn Gram dương lẫn Gram âm và kháng được các β-lactamase cổ điển (nhưng vẫn chưa diệt được Pseudomonas và Acinetobacter)",
          "Diệt mạnh Pseudomonas aeruginosa và thấm tốt vào dịch não tủy trị viêm màng não",
          "Diệt hiệu quả tụ cầu kháng methicillin (MRSA) và Enterococci kháng vancomycin (VRE)",
          "Bền vững hoàn toàn với các β-lactamase phổ rộng (ESBL) của trực khuẩn đường ruột"
        ],
        answer: 0,
        explain: "Trang 54 nêu chính xác 'Hai điểm mạnh so với cephalosporins thế hệ 1 là cephalosporins thế hệ 2 có tác động lên cả vi khuẩn Gram dương lẫn Gram âm và kháng được các β-lactamase cổ điển, nhưng không tác động với Pseudomonas và Acinetobacter.'"
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Tránh sai lầm điều trị",
        q: "Tại sao tuyệt đối KHÔNG dùng liên tiếp hai thuốc kháng sinh khác nhau nhưng nằm trong cùng một họ (ví dụ vừa ngưng một thuốc cùng nhóm lại đổi sang thuốc khác cùng nhóm) để điều trị một đợt nhiễm khuẩn?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 51)",
        options: [
          "Vì các thuốc cùng họ có cấu trúc, cơ chế tác động và phổ tương tự nên dùng liên tiếp hai thuốc cùng họ nói chung không có tác dụng (dễ kháng chéo)",
          "Vì dùng hai thuốc cùng họ sẽ luôn gây sốc phản vệ do giải phóng interleukin 1",
          "Vì hai thuốc cùng họ luôn cạnh tranh gắn vào PABA làm tăng tổng hợp acid folic cho vi khuẩn",
          "Vì enzym dihydropeptidase ở ống thận chỉ bất hoạt thuốc thứ hai nếu cùng họ"
        ],
        answer: 0,
        explain: "Trang 51: Xếp loại kháng sinh theo họ và hoạt phổ giúp chọn thuốc chữa bệnh, đồng thời 'giúp ta tránh sử dụng liên tiếp hai thuốc kháng sinh trong cùng một họ, vì dùng như thế nói chung không có tác dụng.'"
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Chọn kháng sinh đúng",
        q: "Bệnh nhân bị nhiễm khuẩn huyết nặng do trực khuẩn Gram âm sinh β-lactamase phổ rộng (ESBL). Nhóm kháng sinh β-lactam hàng đầu nào bền vững với ESBL (trừ khi tác nhân là MRSA)?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 54)",
        options: [
          "Carbapenem (Imipenem, Meropenem, Doripenem, Ertapenem)",
          "Cephalosporin thế hệ 1 (Cefazolin, Cephalexin)",
          "Penicillin phổ rộng không có chất ức chế (Ampicillin, Piperacillin đơn độc)",
          "Penicillin tự nhiên (Penicillin G và Penicillin V)"
        ],
        answer: 0,
        explain: "Trang 54: Carbapenem bền vững với các thế hệ β-lactamase kể cả ESBL (Extended spectrum β-lactamase), là kháng sinh hàng đầu điều trị nhiễm trùng do vi khuẩn sinh ESBL (nhưng không diệt MRSA)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Biện luận lâm sàng",
        q: "Bệnh nhân viêm màng não mủ nghi do trực khuẩn Gram âm được kê Cefazolin (C1G) hoặc Cefoperazone (C3G) đơn độc. Nhận xét đúng nhất về sai sót dược động học của 2 thuốc này?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 53–54)",
        options: [
          "Không có thuốc thế hệ 1 nào thấm vào hệ thần kinh trung ương; còn ở thế hệ 3, nhiều thuốc thấm được TKTW NGOẠI TRỪ Cefoperazone",
          "Cả Cefazolin và Cefoperazone đều là thuốc thấm dịch não tủy tốt nhất trong họ β-lactam",
          "Cefazolin diệt được Pseudomonas ở màng não, còn Cefoperazone diệt được MRSA ở màng não",
          "Sai sót là do cả hai thuốc chỉ dùng đường uống và bị dịch vị dạ dày phá hủy hoàn toàn"
        ],
        answer: 0,
        explain: "Trang 53: 'Không có thuốc nào thuộc thế hệ 1 thấm được vào hệ thần kinh trung ương.' Trang 54: 'Nhiều cephalosporins thế hệ 3 (trừ cefoperazone) có khả năng đến được hệ thần kinh trung ương.'"
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Chọn thuốc an toàn",
        q: "Trong nhóm Carbapenem, thuốc nào là lựa chọn phù hợp hơn Imipenem khi cần hạn chế tác dụng phụ trên thần kinh (co giật) và KHÔNG cần phối hợp thêm Cilastatin?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 55)",
        options: [
          "Meropenem",
          "Ertapenem (vì diệt Pseudomonas mạnh nhất nhóm)",
          "Aztreonam (vì là Carbapenem thế hệ 5)",
          "Cefoxitin (vì là Cephamycin ức chế dipeptidase)"
        ],
        answer: 0,
        explain: "Trang 55: Meropenem tương tự imipenem về dược lý và phổ kháng khuẩn, nhưng không bị bất hoạt bởi dipeptidase ở ống thận và ít gây phản ứng phụ động kinh hơn imipenem. (Doripenem tác dụng đặc biệt với Pseudomonas)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Biện luận sử dụng",
        q: "Tại sao trong thực hành, Neomycin KHÔNG được dùng theo đường hệ thống (tiêm chích) mà chỉ dùng nhỏ mắt, xịt mũi, bôi ngoài da hoặc uống điều trị tiêu chảy; đồng thời với bệnh nhân viêm nội tâm mạc do Streptococcus faecalis cần phối hợp Aminoglycoside với Penicillin?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 55)",
        options: [
          "Neomycin độc tính cao nên chỉ dùng tại chỗ/uống trị nhiễm khuẩn ruột; phối hợp Penicillin với Aminoglycoside giúp tăng khả năng thẩm thấu đưa Aminoglycoside vào bên trong tế bào S. faecalis",
          "Neomycin chỉ tác dụng ở pH acid nên không có hoạt tính trong máu kiềm; Penicillin bảo vệ Aminoglycoside khỏi dihydropeptidase",
          "Neomycin gắn vào sterol hồng cầu gây tan máu; Penicillin biến S. faecalis thành vi khuẩn không điển hình",
          "Neomycin là thuốc kháng nấm nhóm polyene; Penicillin ức chế tổng hợp protein trên 30S"
        ],
        answer: 0,
        explain: "Trang 55: Aminoglycosides độc với dây thính giác và thận; Neomycin không dùng hệ thống mà chỉ nhỏ mắt, xịt mũi, bôi ngoài da hay uống trị tiêu chảy. Trong nhiễm khuẩn huyết/viêm nội tâm mạc S. faecalis, phối hợp với penicillin làm tăng thẩm thấu giúp aminoglycoside vào tế bào dễ dàng."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Chọn lựa kháng sinh",
        q: "Bệnh nhân viêm màng não mủ hoặc áp-xe não cần dùng một kháng sinh thấm rất tốt vào dịch não tủy, hoặc một bệnh nhân bị sốt thương hàn do Salmonella (hoặc H. influenzae sinh β-lactamase). Thuốc nào trong giáo trình là lựa chọn phù hợp nhưng phải cảnh giác biến chứng thiếu máu do suy tủy?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 56)",
        options: [
          "Chloramphenicol",
          "Tetracyclin (hoặc Doxycyclin)",
          "Clindamycin",
          "Neomycin"
        ],
        answer: 0,
        explain: "Trang 56: Chloramphenicol thấm nhanh và rộng mọi mô kể cả TKTW và dịch não tủy; là thuốc chọn lọc cho Salmonella (thương hàn), H. influenzae sinh β-lactamase, áp-xe não (kỵ khí/hỗn hợp), Rickettsia nặng... Lưu ý biến chứng thiếu máu do suy tủy. (Tetracyclin và Clindamycin đều rất khó/không vào TKTW)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Biện luận phổ Macrolide",
        q: "So sánh hai Azialides (Clarithromycin và Azithromycin) và Ketolide (Telithromycin): Nếu một chủng vi khuẩn đã kháng với Erythromycin thì tình hình nhạy cảm với 3 thuốc trên thế nào?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 57)",
        options: [
          "Vi khuẩn kháng erythromycin cũng kháng với clarithromycin và azithromycin; riêng Telithromycin (ketolide) tác dụng tốt hơn trên vi khuẩn kháng macrolide",
          "Chủng kháng erythromycin luôn nhạy cảm 100% với clarithromycin và azithromycin nhưng kháng telithromycin",
          "Cả ba thuốc đều bất hoạt hoàn toàn nếu chưa phối hợp với acid clavulanic",
          "Azithromycin diệt được Pseudomonas nhưng không diệt được Haemophilus influenzae"
        ],
        answer: 0,
        explain: "Trang 57: 'Vi khuẩn kháng erythromycin cũng kháng với clarithromycin và azithromycin.' Còn 'Ketolides (Telithromycin) là dẫn xuất bán tổng hợp của erythromycin, tác dụng tốt hơn macrolides đặc biệt chống vi khuẩn kháng macrolides.'"
      }
    ]
  },

  // ========================================================================
  // BÀI 6: POLYPEPTIDE, GLYCOPEPTIDE, QUINOLONE, NHÓM MỚI & KHÁNG LAO
  // Base: L1=4, L2=6, L3=2 | Extra: L1=2, L2=3, L3=7 -> Tổng: L1=6, L2=9, L3=9
  // ========================================================================
  6: {
    baseTags: [
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giới hạn phổ)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Dược động)" },
      { level: 2, ksa: "S", ksaLabel: "S1: Ứng dụng lâm sàng" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Đối chiếu)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt)" },
      { level: 3, ksa: "S", ksaLabel: "S2: Chỉ định đặc hiệu" },
      { level: 2, ksa: "A", ksaLabel: "A1: Theo dõi tác dụng phụ" },
      { level: 3, ksa: "A", ksaLabel: "A2: Nguyên tắc phối hợp" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 1, ksa: "A", ksaLabel: "A1: Nhận biết độc tính" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Hai kháng sinh Polypeptide nào chỉ có tác dụng đối với vi khuẩn Gram dương và rất độc nên chỉ dùng điều trị tại chỗ?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 57–58)",
        options: [
          "Bacitracin và Tyrothricin",
          "Polymyxin B và Colistin (Polymyxin E)",
          "Vancomycin và Teicoplanin",
          "Daptomycin và Linezolid"
        ],
        answer: 0,
        explain: "Trang 57–58: Bacitracin và Tyrothricin chỉ có tác dụng đối với vi khuẩn Gram dương, rất độc nên chỉ dùng điều trị tại chỗ (thay đổi màng bào tương)."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Kháng sinh nào được hấp thu tốt qua tiêu hóa sau khi uống và thải ra bằng đường tiểu, chủ yếu dùng để điều trị nhiễm khuẩn đường tiểu?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 59)",
        options: [
          "Nitrofurantoin (nhóm Nitrofurans)",
          "Daptomycin (nhóm Lipopeptide vòng)",
          "Tigecyclin (nhóm Glycylcyclin)",
          "Acid fusidic"
        ],
        answer: 0,
        explain: "Trang 59: Nitrofurans (thường dùng là nitrofurantoin) được hấp thu qua đường tiêu hóa sau khi uống và thải ra bằng đường tiểu, dùng để điều trị nhiễm khuẩn đường tiểu."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế kháng)",
        q: "Sự kháng thuốc Fluoroquinolone do đột biến nhiễm sắc thể của vi khuẩn liên quan trực tiếp đến hai cơ chế nào?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 58–59)",
        options: [
          "Thay đổi tiểu đơn vị A của enzym DNA gyrase HOẶC thay đổi tính thấm màng ngoài làm giảm tích tụ thuốc trong vi khuẩn",
          "Sản xuất enzym β-lactamase phổ rộng trên plasmid HOẶC mất vách peptidoglycan chuyển sang dạng L",
          "Thay đổi protein P12 trên tiểu đơn vị 30S HOẶC tiết enzym chloramphenicol acetyltransferase",
          "Thay đổi đường biến dưỡng không cần PABA ngoại bào HOẶC tạo nang polysaccharid"
        ],
        answer: 0,
        explain: "Trang 58–59: Sự kháng Fluoroquinolone do đột biến nhiễm sắc thể liên quan đến 2 cơ chế: hoặc tiểu đơn vị A của men DNA gyrase bị thay đổi, hoặc tính thấm màng ngoài bị thay đổi làm giảm tích tụ thuốc trong vi khuẩn."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Đặc điểm thuốc)",
        q: "Cơ chế tác động của hai thuốc ít dùng / phổ hẹp trên tụ cầu là Novobiocin và Acid fusidic lần lượt là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 59)",
        options: [
          "Novobiocin: ức chế tổng hợp DNA và RNA (cũng như giai đoạn đầu vách); Acid fusidic: ức chế tổng hợp protein",
          "Novobiocin: khử cực màng phụ thuộc calcium; Acid fusidic: ức chế RNA polymerase",
          "Novobiocin: gắn vào tiểu đơn vị 50S; Acid fusidic: phong bế dihydrofolic acid reductase",
          "Cả hai thuốc chỉ có tác dụng diệt trực khuẩn Gram âm hiếu khí đường ruột"
        ],
        answer: 0,
        explain: "Trang 59 (và tr. 49): Novobiocin hoạt tính giới hạn trên Gram+ (đặc biệt tụ cầu) và cầu khuẩn Gram-, ức chế tổng hợp DNA và RNA (tr. 49 cũng ghi ức chế giai đoạn đầu tổng hợp peptidoglycan). Acid fusidic tác dụng Gram+ (trước hết tụ cầu) và cầu khuẩn Gram-, ức chế tổng hợp protein."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân tích thuốc lao)",
        q: "Vì sao thuốc kháng lao Aminosalicylic acid (PAS) hiện nay ít được dùng dù ức chế được trực khuẩn lao ở nồng độ 1–5 μg/mL?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 61)",
        options: [
          "Vì PAS dễ gây ra kháng thuốc nếu dùng đơn độc và thường gây các tác dụng phụ trầm trọng ở đường tiêu hóa",
          "Vì PAS không tan trong nước và hoàn toàn không hấp thu qua đường uống",
          "Vì PAS gây điếc không hồi phục và teo dây thần kinh thị giác ngay từ liều đầu",
          "Vì PAS kích thích trực khuẩn lao nhân lên nhanh hơn khi dùng chung với isoniazid"
        ],
        answer: 0,
        explain: "Trang 61: PAS thường đưa đến chủng M. tuberculosis kháng thuốc và gây những tác dụng phụ trầm trọng ở đường tiêu hóa, nên hiện nay ít dùng."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Chọn thuốc điều trị",
        q: "Bệnh nhân viêm phổi nặng hoặc viêm xương tủy do tụ cầu/Enterococci kháng Vancomycin (kháng glycopeptide). Kháng sinh tổng hợp nào thấm rất tốt vào dịch tiết hô hấp, xương, mỡ và nước tiểu rất phù hợp cho ca này?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 59)",
        options: [
          "Linezolid (nhóm Oxazolidinone)",
          "Polymyxin B (nhóm Polypeptide)",
          "Acid nalidixic (Quinolone thế hệ 1)",
          "Cefazolin (Cephalosporin thế hệ 1)"
        ],
        answer: 0,
        explain: "Trang 59: Linezolid thấm rất tốt vào chất tiết đường hô hấp, khuếch tán tốt vào xương, mỡ và nước tiểu; thường dùng điều trị viêm phổi, nhiễm trùng máu, nhiễm trùng da và mô mềm do Staphylococci và Enterococci kháng glycopeptide."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Biện luận kháng sinh",
        q: "Một bệnh nhân nhiễm trùng da và mô mềm phức tạp do nhiều tác nhân (gồm cả MRSA và Bacteroides fragilis) được cân nhắc dùng Tigecyclin. Nếu sau đó cấy phát hiện đồng nhiễm thêm Pseudomonas aeruginosa, đánh giá nào chính xác?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 60)",
        options: [
          "Phải bổ sung hoặc đổi phác đồ cho Pseudomonas vì Tigecyclin KHÔNG tác dụng tốt với P. aeruginosa (cũng như Stenotrophomonas maltophilia và Burkholderia cepacia)",
          "Tiếp tục đơn trị Tigecyclin là đủ vì đây là thuốc diệt Pseudomonas mạnh nhất nhóm Glycylcyclin",
          "Đổi sang Vancomycin đơn độc vì Vancomycin diệt rất tốt trực khuẩn Gram âm Pseudomonas",
          "Đổi sang Ertapenem đơn độc vì Ertapenem đặc hiệu nhất trên Pseudomonas"
        ],
        answer: 0,
        explain: "Trang 60: Tigecyclin tốt trên MRSA, Enterococci, Shigella, Salmonella, Acinetobacter và B. fragilis, nhưng KHÔNG có tác dụng tốt với P. aeruginosa, Stenotrophomonas maltophilia hay Burkholderia cepacia."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Tránh dùng sai đích",
        q: "Bệnh nhân viêm màng não mủ do Pseudomonas aeruginosa đa kháng, bác sĩ định chỉ định Colistin (Polymyxin E) tiêm tĩnh mạch đơn độc hoặc Daptomycin. Vì sao hai lựa chọn này KHÔNG đạt hiệu quả tại màng não / phổi tương ứng?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 57, 59)",
        options: [
          "Colistin không vào được dịch não tủy (hay khớp xương) dù diệt mạnh Pseudomonas; còn Daptomycin chỉ diệt cầu khuẩn Gram dương ở da và mô mềm",
          "Colistin chỉ diệt vi khuẩn Gram dương; Daptomycin chỉ diệt vi nấm chứa sterol",
          "Colistin bị bất hoạt bởi dihydropeptidase ống thận; Daptomycin bị acid dạ dày phá hủy",
          "Cả Colistin và Daptomycin đều không hấp thu đường tiêm và chỉ có tác dụng tại chỗ"
        ],
        answer: 0,
        explain: "Trang 57: Polymyxin B và Colistin không khuếch tán vào dịch não tủy hoặc khớp xương (dù diệt mạnh Pseudomonas). Trang 59: Daptomycin dùng điều trị nhiễm trùng da và mô mềm do cầu khuẩn Gram dương."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Biện luận phối hợp",
        q: "Trong phác đồ lao gồm Rifampin, Isoniazid, Ethambutol, Pyrazinamide, nếu bệnh nhân xuất hiện đau khớp ngón chân cái cấp tính kèm xét nghiệm tăng acid uric máu và men gan tăng nhẹ (2%), thuốc nào là thủ phạm chính?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 61)",
        options: [
          "Pyrazinamide",
          "Ethambutol",
          "Aminosalicylic acid (PAS)",
          "Streptomycin"
        ],
        answer: 0,
        explain: "Trang 61: Các phản ứng phụ của Pyrazinamide gồm độc gan (1–5%), buồn nôn, ói mửa, phản ứng quá mẫn và tăng acid uric huyết (hyperuricemia)."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Theo dõi độc tính",
        q: "Bệnh nhân đang điều trị lao phổi xuất hiện nhìn mờ, khó phân biệt màu sắc (rối loạn thị giác). Cần nghĩ ngay đến tác dụng phụ của thuốc nào trong phác đồ?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 61)",
        options: [
          "Ethambutol",
          "Rifampin",
          "Pyrazinamide",
          "Isoniazid"
        ],
        answer: 0,
        explain: "Trang 61: Quá mẫn với ethambutol cũng thường xảy ra và tác dụng phụ thường gặp nhất là rối loạn thị giác."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân tích kháng chéo",
        q: "Một chủng Mycobacterium tuberculosis phát triển kháng Isoniazid (INH) do điều trị gián đoạn. Nếu chuyển hoặc phối hợp thêm Pyrazinamide, khả năng kháng chéo giữa hai thuốc này như thế nào?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 61)",
        options: [
          "M. tuberculosis dễ kháng pyrazinamide nếu dùng đơn độc, nhưng Pyrazinamide KHÔNG có phản ứng kháng chéo với isoniazid hay các thuốc kháng lao khác",
          "Kháng isoniazid mặc nhiên dẫn đến kháng chéo 100% với pyrazinamide vì chung đích acid mycolic",
          "Pyrazinamide chỉ tác dụng lên M. leprae và hoàn toàn không diệt được M. tuberculosis",
          "Phải tăng liều isoniazid lên gấp 10 lần vì pyrazinamide làm bất hoạt isoniazid"
        ],
        answer: 0,
        explain: "Trang 61: 'M. tuberculosis dễ dàng trở nên kháng pyrazinamide, nhưng không có phản ứng chéo với isoniazid hay các thuốc kháng lao khác.'"
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân tích chỉ định",
        q: "Một bệnh nhân phẫu thuật đại tràng được dự phòng nhiễm khuẩn kỵ khí trước mổ, hoặc sau đợt dùng kháng sinh phổ rộng xuất hiện tiêu chảy do Clostridium difficile. Thuốc nào vừa dùng dự phòng trước giải phẫu ruột già, vừa trị tiêu chảy do C. difficile?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 60)",
        options: [
          "Metronidazole",
          "Sulfisoxazole",
          "Aztreonam",
          "Polymyxin B"
        ],
        answer: 0,
        explain: "Trang 60: Metronidazole hiệu quả đối với vi khuẩn kỵ khí, dùng phòng ngừa trước khi giải phẫu ruột già, và điều trị tiêu chảy có liên quan đến điều trị kháng sinh của Clostridium difficile."
      }
    ]
  },

  // ========================================================================
  // BÀI 7: SỰ KHÁNG THUỐC & NGUYÊN TẮC SỬ DỤNG KHÁNG SINH HỢP LÝ
  // Base: L1=4, L2=6, L3=2 | Extra: L1=2, L2=3, L3=7 -> Tổng: L1=6, L2=9, L3=9
  // ========================================================================
  7: {
    baseTags: [
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "S", ksaLabel: "S1: Phối hợp thuốc" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "A", ksaLabel: "A1: Chỉ định xét nghiệm" },
      { level: 3, ksa: "S", ksaLabel: "S2: Biện luận phối hợp" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế)" },
      { level: 2, ksa: "S", ksaLabel: "S1: Phối hợp điều trị" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Đối chiếu)" },
      { level: 3, ksa: "A", ksaLabel: "A2: Tránh lạm dụng KS" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Tần số đột biến nhiễm sắc thể ngẫu nhiên gây kháng thuốc thông thường của vi khuẩn là bao nhiêu (so với tần số đặc biệt cao của Rifampin)?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 62)",
        options: [
          "Thông thường khoảng 10⁻⁷ – 10⁻¹²; riêng đột biến kháng Rifampin xảy ra ở tần số cao hơn là 10⁻⁵ (– 10⁻⁶)",
          "Thông thường khoảng 10⁻¹ – 10⁻²; riêng Rifampin rất hiếm gặp ở mức 10⁻¹⁵",
          "Mọi kháng sinh đều có tần số đột biến cố định đúng bằng 10⁻³",
          "Đột biến nhiễm sắc thể chỉ xảy ra khi có plasmid yếu tố R mang phage vào tế bào"
        ],
        answer: 0,
        explain: "Trang 62: Tần số đột biến nhiễm sắc thể khoảng 10⁻⁷ – 10⁻¹². Tuy nhiên, đột biến nhiễm sắc thể kháng rifampin xảy ra với tần số cao hơn (10⁻⁵, và tr. 60 ghi 10⁻⁵ – 10⁻⁶), hậu quả là điều trị đơn thuần bằng rifampin thường thất bại."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Khi cho hai loại kháng sinh đồng thời tác động lên một quần thể vi khuẩn đồng nhất, bốn kết quả tác động có thể xảy ra là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 64)",
        options: [
          "Không đổi, Hợp cộng, Đối kháng và Hợp đồng (Hiệp đồng)",
          "Phát sinh ngoại độc tố, Phát sinh nội độc tố, Chuyển dạng L và Thực bào",
          "Biến nạp, Tải nạp, Giao phối và Chuyển vị",
          "Ngưng kết, Tan máu, Co cục máu và Tiêu sợi huyết"
        ],
        answer: 0,
        explain: "Trang 64: Hai loại kháng sinh đồng thời tác động lên một quần thể vi khuẩn đồng nhất có thể có bốn tác động: Không thay đổi, Hợp cộng, Đối kháng, và Hợp đồng."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt)",
        q: "Vai trò thực chất của thuốc kháng sinh trong cơ chế 'đề kháng do nhiễm sắc thể' là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 62)",
        options: [
          "Kháng sinh đóng vai trò chọn lọc: ức chế vi khuẩn nhạy cảm và tạo thuận lợi cho vi khuẩn đột biến ngẫu nhiên có sẵn phát triển",
          "Kháng sinh trực tiếp cắt và gắn các gen từ plasmid của nấm sang nhiễm sắc thể vi khuẩn",
          "Kháng sinh biến đổi tất cả tế bào người thành dạng L để vi khuẩn ẩn nấp",
          "Kháng sinh làm tăng tốc độ phân chia của vi khuẩn nhạy cảm lên gấp 10 lần"
        ],
        answer: 0,
        explain: "Trang 62: Đột biến xảy ra ngẫu nhiên; sự có mặt của thuốc được xem như là một cơ chế chọn lọc, ức chế vi khuẩn nhạy cảm và tạo thuận lợi cho vi khuẩn đột biến kháng thuốc phát triển."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giải thích)",
        q: "Vì sao trực khuẩn lao nằm im trong mô nhiều năm không đáp ứng điều trị, nhưng khi dùng Corticoid làm chúng bắt đầu nhân lên trở lại thì lại nhạy cảm hoàn toàn với thuốc kháng lao trước đó?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 62)",
        options: [
          "Vì đó là kháng thuốc nguồn gốc KHÔNG do di truyền: sự nhân lên của vi khuẩn là yếu tố cần thiết cho tác động của thuốc kháng sinh",
          "Vì Corticoid phá hủy toàn bộ plasmid mang yếu tố R của trực khuẩn lao",
          "Vì Corticoid chuyển trực khuẩn lao từ vi khuẩn Gram dương sang vi khuẩn dạng L",
          "Vì Corticoid biến đổi enzym RNA polymerase thành DNA gyrase nhạy thuốc"
        ],
        answer: 0,
        explain: "Trang 62: Sự nhân lên của vi khuẩn là yếu tố cần thiết cho tác động của kháng sinh. Vi khuẩn lao không nhân lên tồn tại nhiều năm không đáp ứng điều trị, nhưng khi nhân lên (như sau dùng corticoid) thì lại nhạy hoàn toàn (kháng thuốc không do di truyền)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân tích)",
        q: "Ba biện pháp cơ bản giúp giảm thiểu vấn đề đề kháng kháng sinh trong điều trị được nêu trong giáo trình gồm những biện pháp nào?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 63)",
        options: [
          "Duy trì liều trong mô đủ cao; Dùng đồng thời 2 thuốc không phản ứng chéo; Tránh làm vi khuẩn quen thuốc quý bằng cách hạn chế sử dụng",
          "Luôn dùng liều tối thiểu kết hợp thuốc kìm khuẩn đến trước; Đổi liên tiếp 2 thuốc cùng họ",
          "Dùng kháng sinh liều thấp kéo dài để ngừa bội nhiễm; Phối hợp 4 thuốc bất kỳ cho mọi ca cảm lạnh",
          "Chỉ dùng chất sát khuẩn ngoài da thay thế toàn bộ thuốc uống và tiêm"
        ],
        answer: 0,
        explain: "Trang 63 nêu đúng 3 cách hạn chế kháng thuốc: (1) Duy trì liều lượng trong mô đủ cao ức chế cả vi khuẩn ban đầu lẫn đột biến bước đầu; (2) Dùng đồng thời 2 thuốc không phản ứng chéo (VD rifampicin + isoniazid trị lao); (3) Hạn chế sử dụng thuốc có giá trị đặc biệt."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân tích đề kháng",
        q: "Vi khuẩn nhạy cảm Penicillin trong quá trình điều trị biến đổi thành dạng L (L-form) thiếu phần lớn vách tế bào nên không chết; khi ngừng thuốc chúng tổng hợp lại vách và lại nhạy Penicillin. Trường hợp này xếp vào nhóm kháng thuốc nào?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 62)",
        options: [
          "Kháng thuốc có nguồn gốc KHÔNG do di truyền (do mất điểm gắn đặc biệt dành cho thuốc)",
          "Kháng thuốc ngoài nhiễm sắc thể qua plasmid yếu tố R",
          "Đề kháng do đột biến nhiễm sắc thể thay đổi protein P12",
          "Đề kháng do tiết enzym β-lactamase mã hóa bởi gen giao phối F⁺ → F⁻"
        ],
        answer: 0,
        explain: "Trang 62: Nguồn gốc không di truyền còn do vi khuẩn mất điểm gắn đặc biệt dành cho thuốc; VD vi khuẩn nhạy penicillin biến thành dạng L thiếu phần lớn vách nên kháng penicillin/cephalosporin, khi tổng hợp lại được vách thì nhạy hoàn toàn trở lại."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Chọn thuốc & Xét nghiệm",
        q: "Bệnh nhân sốt cao, mệt lả chưa rõ tác nhân gây bệnh nhưng dấu hiệu lâm sàng gợi ý nhiễm khuẩn nặng đe dọa tính mạng. Thứ tự hành động hợp lý nhất trước khi có kết quả định danh là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 63)",
        options: [
          "Lấy bệnh phẩm làm xét nghiệm định danh & kháng sinh đồ trước, trong khi chờ kết quả thì điều trị thử theo ước đoán tốt nhất dựa vào vị trí nhiễm, tuổi, nguồn nhiễm, dụng cụ y khoa và tiền căn",
          "Chờ đợi đủ 5–7 ngày có kết quả kháng sinh đồ hoàn chỉnh rồi mới khởi trị bất kỳ kháng sinh nào",
          "Cho dùng ngay chất sát khuẩn tiêm tĩnh mạch và không cần lấy bệnh phẩm cấy máu",
          "Chỉ định phối hợp penicillin với tetracyclin liều tối thiểu để che lấp triệu chứng sốt"
        ],
        answer: 0,
        explain: "Trang 63: Nếu liên hệ lâm sàng – tác nhân chưa rõ, phải lấy bệnh phẩm định danh (và chỉ định kháng sinh đồ khi đe dọa tính mạng như viêm màng não, nhiễm khuẩn máu); trong khi chờ kết quả, điều trị thử dựa vào vị trí nhiễm, tuổi, nguồn nhiễm, dụng cụ y khoa và tiền căn."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Thận trọng khi phối hợp",
        q: "Một bác sĩ phối hợp 3 kháng sinh phổ rộng cho bệnh nhân sốt kéo dài chưa rõ nguyên nhân, sau đó thấy bệnh nhân hết sốt nhẹ nên dừng tìm nguyên nhân thực sự. Bất lợi kinh điển nào của phối hợp và lạm dụng kháng sinh đang xảy ra?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 63–64)",
        options: [
          "Thầy thuốc cảm thấy yên tâm không lưu ý đúng mức chẩn đoán phân biệt, và che lấp tình trạng nhiễm khuẩn nặng mà không loại bỏ được vi khuẩn",
          "Giảm được nguy cơ quá mẫn thuốc và giảm chi phí điều trị cho bệnh nhân",
          "Tăng hiệu quả hiệp đồng vượt trội trong mọi trường hợp cảm nhiễm virus",
          "Giúp hệ vi khuẩn thường trú phát triển đa dạng và mạnh khỏe hơn"
        ],
        answer: 0,
        explain: "Trang 63–64: Bất lợi phối hợp đầu tiên là 'thầy thuốc cảm thấy yên tâm và không lưu ý đúng mức việc chẩn đoán phân biệt'; đồng thời nguy hiểm lạm dụng kháng sinh là 'che lấp tình trạng nhiễm khuẩn nặng mà không loại bỏ được vi khuẩn nên quá trình nhiễm khuẩn vẫn tiếp tục'."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Phân tích xét nghiệm",
        q: "Để xác định TRỰC TIẾP xem nồng độ thuốc kháng sinh thực tế trong máu bệnh nhân đã đủ liều để tiêu diệt tác nhân gây bệnh hay chưa (đặc biệt trong nhiễm khuẩn nặng như viêm nội tâm mạc), có thể làm xét nghiệm nào?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 63)",
        options: [
          "Thử nghiệm tác động diệt khuẩn trong huyết tương",
          "Thử nghiệm tìm giải độc tố ngoại bào trong phân",
          "Đo tốc độ di chuyển của bạch cầu qua kẽ tế bào biểu mô",
          "Định lượng nồng độ PABA tự do trong nước bọt"
        ],
        answer: 0,
        explain: "Trang 63 dưới mục Kháng sinh đồ ghi: 'Thử nghiệm tác động diệt khuẩn trong huyết tương: nhằm xác định trực tiếp liều lượng thuốc đủ để loại bỏ tác nhân gây bệnh.'"
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Biện luận phối hợp",
        q: "Trong viêm nội tâm mạc nhiễm khuẩn do Enterococcus faecalis và nhiễm khuẩn nặng do Pseudomonas aeruginosa, hai phác đồ hiệp đồng tương ứng theo cơ chế mở vách tế bào cho aminoglycoside là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 64)",
        options: [
          "Ampicillin + Gentamicin (E. faecalis); Piperacillin + Tobramycin (Pseudomonas)",
          "Chloramphenicol + Tetracyclin (E. faecalis); Erythromycin + Lincomycin (Pseudomonas)",
          "Amphotericin B + Flucytosine (E. faecalis); Aztreonam + Vancomycin (Pseudomonas)",
          "Rifampin + Isoniazid (E. faecalis); Colistin + Polymyxin B (Pseudomonas)"
        ],
        answer: 0,
        explain: "Trang 64 nêu chính xác hai ví dụ hiệp đồng: 'ampicillin phối hợp với gentamicin để loại sạch Enterococcus faecalis đặc biệt trong viêm nội tâm mạc. Tương tự, piperacillin phối hợp với tobramycin để có hợp đồng chống Pseudomonas.'"
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Biện luận phối hợp",
        q: "Phối hợp Sulfonamide + Trimethoprim có hiệu quả hiệp đồng trên những nhóm tác nhân nào được liệt kê trong phần Cơ chế hiệp đồng của sách?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 64)",
        options: [
          "Shigella, Salmonella, Serratia và một số nhiễm khuẩn khác như Pneumocystosis, Malaria",
          "Chỉ duy nhất Clostridium difficile và Bacteroides fragilis",
          "Chỉ duy nhất Mycobacterium tuberculosis và Mycobacterium leprae",
          "Chỉ các chủng nấm Cryptococcus và Candida kháng azole"
        ],
        answer: 0,
        explain: "Trang 64: 'Sulfonamide phối hợp với trimethoprim có hiệu quả trong một số bệnh nhiễm trùng do Shigella, Salmonella, Serratia và một số nhiễm khuẩn khác (Pneumocystosis, Malaria).'"
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Đánh giá rủi ro",
        q: "Một bệnh nhân được dùng kháng sinh bừa bãi trong thời gian dài xuất hiện nổi mẩn đỏ, sốt, rối loạn huyết học, vàng da ứ mật và tiêu chảy nặng do bội nhiễm. Kết luận lâm sàng đúng nhất là gì?",
        source: "Vi khuẩn Y học YDS 2016 – Chương 6 (tr. 64–65)",
        options: [
          "Đây là tổ hợp các nguy hiểm của việc lạm dụng kháng sinh: quá mẫn, xáo trộn máu, viêm gan ứ mật, độc tính trực tiếp và bội nhiễm chủng kháng thuốc do loạn khuẩn thường trú",
          "Đây là đáp ứng miễn dịch đặc hiệu có lợi chứng tỏ bệnh nhân đã đạt miễn dịch vĩnh viễn suốt đời",
          "Đây chỉ là tác dụng phụ nhẹ thoáng qua do thuốc không gắn được vào ribosome 80S",
          "Cần tăng gấp đôi liều kháng sinh đang dùng và bổ sung thêm chất tẩy uế đường uống"
        ],
        answer: 0,
        explain: "Trang 64–65 liệt kê đầy đủ 5 nguy hiểm của lạm dụng kháng sinh: (1) Quá mẫn, sốc phản vệ, nốt đỏ, sốt, xáo trộn máu, viêm gan ứ mật; (2) Thay đổi VSV thường trú gây bội nhiễm; (3) Che lấp nhiễm khuẩn nặng; (4) Độc tính trực tiếp; (5) Phát triển chủng kháng thuốc."
      }
    ]
  }
};

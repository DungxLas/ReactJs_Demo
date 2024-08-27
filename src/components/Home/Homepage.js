import pictureHomepage from "../../assets/picture-homepage.png";

const HomePage = (props) => {
  return (
    <div className="homepage-container">
      <picture>
        <source src={pictureHomepage} type="image/png" />
        <img
          src={pictureHomepage}
          alt="HomePage Background"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </picture>
      <div className="homepage-content">
        <div className="title-content">
          TẠO BÀI THI TRẮC NGHIỆM ONLINE MIỄN PHÍ VÀ DỄ SỬ DỤNG
        </div>
        <div className="content">
          Dễ dàng tạo hoặc upload file câu hỏi trắc nghiệm // Nhiều tùy chọn
          trộn câu hỏi và tự động chấm bài làm // Tạo bài thi lấy ngẫu nhiên từ
          ngân hàng câu hỏi trắc nghiệm của bạn // Tích hợp Chat GPT giúp bạn tự
          động tạo câu hỏi trắc nghiệm // Triển khai thi online hoặc làm bài thi
          online không cần cài đặt ứng dụng
        </div>
        <div className="content-button">
          <button className="button">Đăng ký miễn phí</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

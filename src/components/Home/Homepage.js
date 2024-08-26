import pictureHomepage from "../../assets/picture-homepage.png";

const HomePage = (props) => {
  return (
    <div className="homepage-container">
      Home Here
      <div class="MuiContainer-root MuiContainer-maxWidthLg">
        <div class="MuiGrid-root homepage-banner MuiGrid-container MuiGrid-spacing-xs-5">
          <div class="MuiGrid-root short-description MuiGrid-item">
            <h1>
              TẠO BÀI THI TRẮC NGHIỆM ONLINE
              <br />
              MIỄN PHÍ VÀ DỄ SỬ DỤNG
            </h1>
            <div class="short-description__subtext-box-wrapper">
              <div class="short-description__subtext-box">
                <img src="/images/HomePage/check-icon.svg" alt="check-icon" />
                <p>Dễ dàng tạo hoặc upload file câu hỏi trắc nghiệm</p>
              </div>
              <div class="short-description__subtext-box">
                <img src="/images/HomePage/check-icon.svg" alt="check-icon" />
                <p>Nhiều tùy chọn trộn câu hỏi và tự động chấm bài làm</p>
              </div>
              <div class="short-description__subtext-box">
                <img src="/images/HomePage/check-icon.svg" alt="check-icon" />
                <p>
                  Tạo bài thi lấy ngẫu nhiên từ ngân hàng câu hỏi trắc nghiệm
                  của bạn
                </p>
              </div>
              <div class="short-description__subtext-box">
                <img src="/images/HomePage/check-icon.svg" alt="check-icon" />
                <p>
                  Tích hợp Chat GPT giúp bạn tự động tạo câu hỏi trắc nghiệm
                </p>
              </div>
              <div class="short-description__subtext-box">
                <img src="/images/HomePage/check-icon.svg" alt="check-icon" />
                <p>
                  Triển khai thi online hoặc làm bài thi online không cần cài
                  đặt ứng dụng
                </p>
              </div>
            </div>
            <button
              class="MuiButtonBase-root MuiButton-root MuiButton-contained register-button"
              tabindex="0"
              type="button"
            >
              <span class="MuiButton-label register-button-label">
                <span class="register-button-icon">
                  <img src="/icons/homepage/arrowRight.svg" alt="arrowRight" />
                </span>
                <span class="register-button-text">Đăng ký miễn phí</span>
              </span>
              <span class="MuiTouchRipple-root"></span>
            </button>
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default HomePage;

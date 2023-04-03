import "./ForgotPassword.css";

function Register() {
  

  return (
    <div
      style={{
        display: "flex",
        background: 'url("assets/img/login.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        className="formLogin"
        style={{ border: "1px solid #ccc" }}
      >
        <div className="container">
          <h1 className="title_text">QUÊN MẬT KHẨU</h1>
          <label htmlFor="phone">
            <b>Số điện thoại</b>
          </label>
          <input
            type="tel"
            placeholder="Nhập số điện thoại"
            name="phone"
            required
          />
           <label htmlFor="phone">
            <b>Liên hệ</b>
          </label>
          <textarea
            type="textarea"
            placeholder="Liên hệ"
            name="phone"
            required
          />
          <div className="clearfix">
            <button
              type="submit"
              style={{ marginTop: "40px", marginBottom: "40px" }}
            >
              Gửi
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;

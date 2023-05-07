import "./ForgotPassword.css";

function Register() {
  return (
    <div className="body">
      <div className="mp-pusher" id="mp-pusher">
        <div className="container clearfix">
          <div className="v2-login-area">
            <form className="form-signin" action="" method="post">
              <input
                name="_token"
                type="hidden"
                value="z7s49TnKKUC0fODRHrzTL1gKJuDGGYZskdg5UN3G"
              />
              <div className="form-signin-heading text-center">
                <h1 className="sign-title">Quên mật khẩu</h1>
              </div>
              <div className="v2-login-wrap">
                <input
                  name="email"
                  className="form-control"
                  autofocus=""
                  required=""
                  type="email"
                  placeholder="Nhập Gmail"
                  value=""
                />
                <button className="btn btn-lg btn-login" type="submit">
                  Gửi
                </button>
              </div>
              <div className="v2-login-bottom">
                <span className="v2-left">
                  <span className="v2-hide">Trở về</span>
                  <a className="v2-register-now" href="/login">
                    ( Đăng nhập )
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

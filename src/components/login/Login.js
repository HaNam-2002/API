import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { accountService } from "../../service/account.service";

function Login() {
  const [user, setuser] = useState("");
  const [pass, setpass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    accountService
      .login(user, pass)
      .then((data) => {
        if (data.role.rID === 1) {
          localStorage.setItem("user", JSON.stringify(data));
          localStorage.setItem("authenticated", true);
          alert("Đăng nhập admin thành công!");
          navigate("/manager");
        } else {
          localStorage.setItem("user", JSON.stringify(data));
          localStorage.setItem("authenticated", true);
          alert("Đăng nhập thành công!");
          navigate("/");
        }
      })
      .catch((error) => {
        localStorage.setItem("authenticated", false);
        alert("Đăng nhập không thành công!");
        console.log(error);
      });
  };

  return (
    <div className="body">
      <div className="mp-pusher" id="mp-pusher">
        <div className="container clearfix">
          <div className="v2-login-area">
            <form className="form-signin" onSubmit={handleSubmit} method="post">
              <input
                name="_token"
                type="hidden"
                value="z7s49TnKKUC0fODRHrzTL1gKJuDGGYZskdg5UN3G"
              />
              <div className="form-signin-heading text-center">
                <h1 className="sign-title">LOGIN</h1>
              </div>
              <div className="v2-login-wrap">
                <input
                  className="form-control"
                  id="user"
                  type="text"
                  placeholder="Nhập tên đăng nhâp"
                  name="user"
                  required
                  value={user}
                  onChange={(e) => setuser(e.target.value)}
                />
                <input
                  className="form-control"
                  id="pass"
                  type="password"
                  placeholder="Nhập mật khẩu"
                  name="pass"
                  required
                  onChange={(e) => setpass(e.target.value)}
                />
                <button className="btn btn-lg btn-login" type="submit">
                  Đăng nhập
                </button>
              </div>

              <div className="v2-login-bottom">
                <span className="v2-left">
                  <span className="v2-hide">Chưa có tài khoản</span>
                  <a className="v2-register-now" href="register">
                    {" "}
                    ( Đăng ký ngay )
                  </a>
                </span>
                <span className="v2-right">
                  <a className="v2-remember-password" href="ForgotPassword">
                    {" "}
                    Quên mật khẩu ?
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

export default Login;

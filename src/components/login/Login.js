import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { accountService } from "../../service/account.service";
function Login() {
  //login
  const [user, setuser] = useState("");
  const navigate = useNavigate();
  const [pass, setpass] = useState("");
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    accountService.login(user, pass)
      .then(data => {

        if (data.role.rID === 1) {
          setauthenticated(true)
          localStorage.setItem("authenticated", true);
          localStorage.setItem("user", JSON.stringify(data));
          alert("Đăng nhập admin thành công!")
          navigate("/manager");
        } else {
          setauthenticated(false)
          localStorage.setItem("authenticated", false);
          alert("Đăng nhập  thành công!")
          navigate("/");
        }
      })
      .catch(error => {
        setauthenticated(false)
        localStorage.setItem("authenticated", false);
        alert("Đăng nhập không thành công!")
        console.log(error);
      });
=======
    accountService.login(user, pass).then((data) => {
      if (data) {
        setauthenticated(true);
        localStorage.setItem("authenticated", true);
        localStorage.setItem("user", JSON.stringify(data));
        window.location.href = "http://localhost:3000";
      } else {
        localStorage.setItem("authenticated", false);
        alert("Đăng nhập không thành công!");
      }
    });
>>>>>>> 838d37ad9be36b1ef3daed00475d2de65c8fadde
  };
  
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
      <form className="formLogin" onSubmit={handleSubmit} method="post">
        <div className="textcontainer">
          <h1 className="titleText">ĐĂNG NHẬP</h1>
        </div>

        <div className="container">
          <label for="user">
            <b>Tên đăng nhập</b>
          </label>
          <input
            id="user"
            type="text"
            placeholder="Nhập tên đăng nhâp"
            name="user"
            required
            value={user}
            onChange={(e) => setuser(e.target.value)}
          />

          <label for="pass">
            <b>Mật khẩu</b>
          </label>
          <input
            id="pass"
            type="password"
            placeholder="Nhập mật khẩu"
            name="pass"
            required
            onChange={(e) => setpass(e.target.value)}
          />

          <button className="button_login" type="submit">
            Đăng nhập
          </button>
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label>
        </div>
        <div className="login_mxh">
          <button className="fb button_login" type="button">
            Facebook
          </button>
          <button className="gg button_login" type="button">
            Google
          </button>
        </div>
        <div className="container">
          <span className="psw">
            Quên <a href="ForgotPassword"> Mật khẩu?</a>
          </span>
          <span className="psw">
            <a href="register">Đăng ký </a>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Login;

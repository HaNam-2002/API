import React from "react";
import { useState } from "react";
import "./Login.css";
import { accountService } from "../../service/account.service";
function Login() {
  //login
  const [user, setuser] = useState("");
  const [pass, setpass] = useState("");
  const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    accountService.login(user, pass)
    .then(data => {
      if (data.user === user || data.pass === pass) {
        alert("Tên đăng nhập hoặc mật khẩu không đúng!")
  }
   else {
    setauthenticated(true)
      localStorage.setItem("authenticated", true);
      console.log(data);
      localStorage.setItem("user", data);
      window.location.href = 'http://localhost:3000'
   }
  })
    ;;
  };
  return (
    <div
      style={{
        display:'flex',
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

          <button type="submit">Đăng nhập</button>
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label>
        </div>
        <div className="login_mxh">
          <button className="fb" type="button">Facebook</button>
          <button className="gg" type="button">Google</button>
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

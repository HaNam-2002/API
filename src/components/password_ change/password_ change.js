import React from "react";
import "./password_ change.css";
function passwordChange() {
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
      <form className="formLogin" method="post">
        <div className="textcontainer">
          <h1 className="titleText">Đổi mật khẩu</h1>
        </div>

        <div className="container">
          <label for="pass">
            <b>Mật khẩu cũ</b>
          </label>
          <input
            id="pass"
            type="password"
            placeholder="Mật khẩu cũ"
            name="pass"
            required
          />
          <label for="pass">
            <b>Mật khẩu mới</b>
          </label>
          <input
            id="pass"
            type="password"
            placeholder="Mật khẩu mới"
            name="pass"
            required
          />
           <label for="pass">
            <b>Xác nhận mật khẩu</b>
          </label>
          <input
            id="pass"
            type="password"
            placeholder="Xác nhận mật khẩu"
            name="pass"
            required       
          />
          <button type="submit">Xong</button>
        </div>
      </form>
    </div>
  );
}

export default passwordChange;

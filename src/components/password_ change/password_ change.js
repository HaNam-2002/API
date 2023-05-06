import React, { useState } from "react";
import axios from "axios";
import "./password_ change.css";

function PasswordChange() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Mật khẩu xác nhận không khớp!");
      return;
    }
    axios
      .put(
        "http://localhost:8083/accounts/changePassword/" + JSON.parse(window.localStorage.getItem('user')).uid,
        {
          oldPassword,
          newPassword,
        }
      )
      .then((response) => {
        console.log(response);
        alert("Đổi mật khẩu thành công!");
        window.location.href = 'http://localhost:3000/'
      })
      .catch((error) => {
        console.log(error);
        setError("Đổi mật khẩu thất bại!");
      });
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
      <form className="formLogin" onSubmit={handleSubmit}>
        <div className="textcontainer">
          <h1 className="titleText">Đổi mật khẩu</h1>
        </div>

        <div className="container">
          <label htmlFor="oldPassword">
            <b>Mật khẩu cũ</b>
          </label>
          <input
            id="oldPassword"
            type="password"
            placeholder="Mật khẩu cũ"
            name="oldPassword"
            value={oldPassword}
            onChange={(event) => setOldPassword(event.target.value)}
            required
          />
          <label htmlFor="newPassword">
            <b>Mật khẩu mới</b>
          </label>
          <input
            id="newPassword"
            type="password"
            placeholder="Mật khẩu mới"
            name="newPassword"
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
            required
          />
          <label htmlFor="confirmPassword">
            <b>Xác nhận mật khẩu</b>
          </label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Xác nhận mật khẩu"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          />
          {error && <div className="error">{error}</div>}
          <button type="submit">Xong
          </button>
        </div>
      </form>
    </div>
  );
}
export default PasswordChange;
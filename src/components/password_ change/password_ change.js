import React, { useState } from "react";
import axios from "axios";
import "./password_ change.css";

function PasswordChange() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Kiểm tra mật khẩu mới và mật khẩu xác nhận
    if (newPassword !== confirmPassword) {
      setError("Mật khẩu xác nhận không khớp!");
      return;
    }

    try {
      // Gửi yêu cầu API đến server để thay đổi mật khẩu
      const user = JSON.parse(window.localStorage.getItem("user"));
      const response = await axios.put(
        `http://localhost:8083/accounts/changePassword/${user.uid}`,
        {
          oldPassword,
          newPassword,
        }
      );

      console.log(response);
      alert("Đổi mật khẩu thành công!");
    } catch (error) {
      console.log(error);
      setError("Đổi mật khẩu thất bại!");
    }
  };

  return (
    <div className="body">
      <div className="mp-pusher" id="mp-pusher">
        <div className="container_psn clearfix">
          <div className="v2-profile-user clearfix">
            <div className="v2-row">
              <div className="v2-content">
                <a href="personal">Trở về</a>
                <div className="v2-content__user">
                  <div className="title">
                    <p>Đổi mật khẩu</p>
                  </div>
                  <form className="form-signin" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Mật khẩu cũ</label>
                      <input
                        className="name"
                        id="oldPassword"
                        type="password"
                        placeholder="Mật khẩu cũ"
                        name="oldPassword"
                        value={oldPassword}
                        onChange={(event) => setOldPassword(event.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Mật khẩu mới</label>
                      <input
                        className="name"
                        id="newPassword"
                        type="password"
                        placeholder="Mật khẩu mới"
                        name="newPassword"
                        value={newPassword}
                        onChange={(event) => setNewPassword(event.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Xác nhận mật khẩu</label>
                      <input
                        className="name"
                        id="confirmPassword"
                        type="password"
                        placeholder="Xác nhận mật khẩu"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(event) =>
                          setConfirmPassword(event.target.value)
                        }
                        required
                      />
                    </div>
                    {error && <div className="error">{error}</div>}
                    <div className="form-group">
                      <label></label>
                      <button type="submit">Cập nhật</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordChange;

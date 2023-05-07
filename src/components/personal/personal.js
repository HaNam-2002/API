import React, { useState } from "react";
import "./personal.css";

function Personal() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [name, setName] = useState(user?.name || "");
  const [gmail, setGmail] = useState(user?.gmail || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [address, setAddress] = useState(user?.address || "");

  function updateAccount(e) {
    e.preventDefault();
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, gmail, phone, address }),
    };
    fetch(`http://localhost:8083/accounts/update/${user.uid}`, requestOptions)
      .then((response) => {
        if (response.ok) {
          alert("Cập nhật tài khoản thành công!");
          const updatedUser = {
            ...user,
            name,
            gmail,
            phone,
            address,
          };
          localStorage.setItem("user", JSON.stringify(updatedUser));
        } else {
          alert("Cập nhật tài khoản thất bại!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="body">
      <div className="mp-pusher" id="mp-pusher">
        <div className="container_psn clearfix">
          <div className="v2-profile-user clearfix">
            <div className="v2-row">
              <div className="v2-content">
                <div className="v2-content__user">
                  <div className="title">
                    <p>Thông tin tài khoản</p>
                  </div>
                  <form className="form-signin" onSubmit={updateAccount}>
                    <input name="_token" type="hidden" value="" />

                    <div className="form-group">
                      <label>Họ và tên</label>
                      <input
                        name="name"
                        className="name"
                        type="text"
                        placeholder="Họ và tên..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        name="gmail"
                        className="gmail"
                        type="text"
                        placeholder="Gmail..."
                        value={gmail}
                        onChange={(e) => setGmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Số điện thoại</label>
                      <input
                        name="phone"
                        className="phone"
                        type="text"
                        placeholder="(+84) 987654321"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Địa chỉ</label>
                      <input
                        name="address"
                        className="address"
                        type="text"
                        placeholder="Địa chỉ..."
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
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

export default Personal;

import React, { useState } from "react";
import "./Register.css";

function Register() {
  const [formData, setFormData] = useState({
    user: "",
    pass: "",
    confirmPassword: "",
    name: "",
    phone: "",
    gmail: "",
    address: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation logic
    if (formData.user.length < 8) {
      setErrorMessage("Tên đăng nhập phải chứa ít nhất 8 ký tự");
      return;
    }
    if (formData.pass.length < 8) {
      setErrorMessage("Mật khẩu phải chứa ít nhất 8 ký tự");
      return;
    }
    if (formData.pass !== formData.confirmPassword) {
      setErrorMessage("Mật khẩu xác nhận không khớp");
      return;
    }
    if (
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(
        formData.pass
      )
    ) {
      setErrorMessage(
        "Mật khẩu phải chứa ít nhất 8 ký tự, bao gồm chữ cái viết hoa, chữ cái viết thường và số"
      );
      return;
    }

    fetch("http://localhost:8083/accounts/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok");
      })
      .then((data) => {
        console.log("Success:", data);
        alert("Đăng ký thành công");
        window.location.href = "http://localhost:3000/login";
      })
      .catch((error) => {
        console.error("Error:", error);
        const message = "Tên tài khoản đã tồn tại";
        alert(message);
      });
  };

  return (
    <div className="body">
      <div className="mp-pusher" id="mp-pusher">
        <div className="container clearfix">
          <div className="v2-login-area">
            <form className="form-signin" onSubmit={handleSubmit}>
              <input
                name="_token"
                type="hidden"
                value="z7s49TnKKUC0fODRHrzTL1gKJuDGGYZskdg5UN3G"
              />
              <div className="form-signin-heading text-center">
                <h1 className="sign-title">Đăng ký</h1>
                {errorMessage && (
                  <div style={{ color: "red" }}>{errorMessage}</div>
                )}
              </div>
              <div className="v2-login-wrap">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Nhập tên đăng nhập"
                  name="user"
                  value={formData.user}
                  onChange={handleChange}
                  required
                />
                <input
                  className="form-control"
                  type="text"
                  placeholder="Nhập họ tên"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  className="form-control"
                  type="text"
                  placeholder="Nhập số điện thoại"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <input
                  className="form-control"
                  type="email"
                  placeholder="Nhập địa chỉ Gmail"
                  name="gmail"
                  value={formData.gmail}
                  onChange={handleChange}
                  required
                />
                <input
                  className="form-control"
                  type="text"
                  placeholder="Nhập địa chỉ"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
                <input
                  className="form-control"
                  type="password"
                  placeholder="Nhập mật khẩu"
                  name="pass"
                  value={formData.pass}
                  onChange={handleChange}
                  required
                />
                <input
                  className="form-control"
                  type="password"
                  placeholder="Nhập lại mật khẩu"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <button className="btn btn-lg btn-login" type="submit">
                  Đăng ký
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

import React, { useState } from 'react';
import "./Register.css";

function Register() {
  const [formData, setFormData] = useState({
    user: '',
    pass: '',
    confirmPassword: '',
    phone: '',
    address: '',
  });

  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:8083/accounts/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok');
      })
      .then((data) => {
        console.log('Success:', data);
        alert('Đăng ký thành công')
        window.location.href = 'http://localhost:3000/login'
      })
      .catch((error) => {
        console.error('Error:', error);
       const message = 'Tên tài khoản đã tồn tại';
       alert(message);
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
      <form
        className="formLogin"
        onSubmit={handleSubmit}
        style={{ border: "1px solid #ccc" }}
      >
        <div className="container">
          <h1 className="title_text">ĐĂNG KÝ</h1>
          <label htmlFor="user">
            <b>Tên đăng nhập</b>
          </label>
          <input
            type="text"
            placeholder="Nhập tên đăng nhập"
            name="user"
            value={formData.user}
            onChange={handleChange}
            required
          />
          <label htmlFor="phone">
            <b>Số điện thoại</b>
          </label>
          <input
            type="tel"
            placeholder="Nhập số điện thoại"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <div className="form_repass">
            <div className="pass">
              <label htmlFor="pass">
                <b>Mật khẩu</b>
              </label>
              <input
                type="password"
                placeholder="Nhập mật khẩu"
                name="pass"
                value={formData.pass}
                onChange={handleChange}
                required
              />
            </div>

            <div className="re_pass">
              <label htmlFor="confirmPassword">
                <b>Xác nhận mật khẩu</b>
              </label>
              <input
                type="password"
                placeholder="Xác nhận mật khẩu"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <label htmlFor="address">
            <b>Địa chỉ</b>
          </label>
          <input
            type="text"
            placeholder="Nhập địa chỉ"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <div className="clearfix">
            <button
              type="submit"
              style={{ marginTop: "40px", marginBottom: "40px" }}
            >
              Đăng ký
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;

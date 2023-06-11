import React, { useState } from "react";

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("authenticated") || false
  );

  function logout() {
    localStorage.clear();
    setIsAuthenticated(false);
  }

  return (
    <div className="header-area">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="user-menu">
              <ul>
                <li>
                  <a href="/">
                    <i className="fa fa-home"></i>Trang chủ
                  </a>
                </li>
                <li>
                  <a href="/contact">
                    <i className=""></i>Contact-US
                  </a>
                </li>
                {isAuthenticated && (
                  <li>
                    <a href="/ChangePass">
                      <i className="fa fa-key"></i> Đổi mật khẩu
                    </a>
                  </li>
                )}
                {isAuthenticated && (
                  <li>
                    <a href="personal">
                      <i className="fa fa-user"></i> Thông tin cá nhân
                    </a>
                  </li>
                )}
                <li>
                  {isAuthenticated ? (
                    <a href="/" onClick={logout}>
                      Logout
                    </a>
                  ) : (
                    <a href="login">
                      <i className="fa fa-user"></i> Login
                    </a>
                  )}
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4">
            <div className="header-right">
              <ul className="list-unstyled list-inline">
                <li className="dropdown dropdown-small">
                  <a
                    data-toggle="dropdown"
                    data-hover="dropdown"
                    className="dropdown-toggle"
                    href="a"
                  >
                    <span className="key">currency :</span>
                    <span className="value">USD </span>
                    <b className="caret"></b>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="a">USD</a>
                    </li>
                    <li>
                      <a href="a">INR</a>
                    </li>
                    <li>
                      <a href="a">GBP</a>
                    </li>
                  </ul>
                </li>

                <li className="dropdown dropdown-small">
                  <a
                    data-toggle="dropdown"
                    data-hover="dropdown"
                    className="dropdown-toggle"
                    href="a"n
                  >
                    <span className="key">language :</span>
                    <span className="value">English </span>
                    <b className="caret"></b>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="a">English</a>
                    </li>
                    <li>
                      <a href="a">French</a>
                    </li>
                    <li>
                      <a href="a">German</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

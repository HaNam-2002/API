import React, { useState, useEffect } from "react";
import "./Menu.css";

function Menu(props) {
  const [keyword, setKeyword] = useState("");
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    // Fetch categories from API endpoint
    fetch("http://localhost:8083/categories/all")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error("Error fetching categories: ", error);
      });
  }, []);

  const handleInputChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSearch(keyword);
  };
  return (
    <>
      <div className="site-branding-area">
        <div className="container">
          <div className="row">
            <div className="col-sm-6" style={{ width: "30%" }}>
              <div className="logo">
                <h1>
                  <a href="/home">
                    <img
                      className="logo_img"
                      src="assets/img/logo.png"
                      alt="Lỗi"
                    />
                  </a>
                </h1>
              </div>
            </div>{" "}
            <div className="col-sm-6" style={{ width: "70%" }}>
              <div className="shopping-item">
                <a href="cart.html">
                  Cart - <span className="cart-amunt">$100</span>
                  <i className="fa fa-shopping-cart"></i>
                  <span className="product-count">5</span>
                </a>
              </div>
              <div className="shopping-search">
                <form onSubmit={handleSubmit}>
                  <input
                    type="search"
                    placeholder="Search"
                    value={keyword}
                    onChange={handleInputChange}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mainmenu-area">
        <div className="container">
          <div className="row">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div class="navbar-collapse collapse">
              <ul class="nav navbar-nav">
                <li>
                  <a href="/">Trang chủ</a>
                </li>
                <li class="dropdown">
                  <a
                    class="dropdown-toggle"
                    data-toggle="dropdown"
                    href="/README.md"
                  >
                    Danh mục sản phẩm <span class="caret"></span>
                  </a>
                  <ul class="dropdown-menu">
                    {categories.map((category) => (
                      <li key={category.cID}>
                        <a href="/README.md">{category.cname}</a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
export default Menu;

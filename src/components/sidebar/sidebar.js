import React from "react";
function sidebar() {
  return (
    <div className="col-md-4">
      <div className="single-sidebar">
        <h2 className="sidebar-title">Search Products</h2>
        <form action="">
          <input type="text" placeholder="Search products..." />
          <input type="submit" value="Search" />
        </form>
      </div>

      <div className="single-sidebar">
        <h2 className="sidebar-title">Products</h2>
        <div className="thubmnail-recent">
          <img
            src="./assets/img/product-thumb-1.jpg"
            className="recent-thumb"
            alt=""
          />
          <h2>
            <a href="a">Sony Smart TV - 2015</a>
          </h2>
          <div className="product-sidebar-price">
            <ins>$700.00</ins> <del>$100.00</del>
          </div>
        </div>
        <div className="thubmnail-recent">
          <img
            src="./assets/img/product-thumb-1.jpg"
            className="recent-thumb"
            alt=""
          />
          <h2>
            <a href="a">Sony Smart TV - 2015</a>
          </h2>
          <div className="product-sidebar-price">
            <ins>$700.00</ins> <del>$100.00</del>
          </div>
        </div>
        <div className="thubmnail-recent">
          <img
            src="./assets/img/product-thumb-1.jpg"
            className="recent-thumb"
            alt=""
          />
          <h2>
            <a href="a">Sony Smart TV - 2015</a>
          </h2>
          <div className="product-sidebar-price">
            <ins>$700.00</ins> <del>$100.00</del>
          </div>
        </div>
        <div className="thubmnail-recent">
          <img
            src="./assets/img/product-thumb-1.jpg"
            className="recent-thumb"
            alt=""
          />
          <h2>
            <a href="a">Sony Smart TV - 2015</a>
          </h2>
          <div className="product-sidebar-price">
            <ins>$700.00</ins> <del>$100.00</del>
          </div>
        </div>
      </div>

      <div className="single-sidebar">
        <h2 className="sidebar-title">Recent Posts</h2>
        <ul>
          <li>
            <a href="a">Sony Smart TV - 2015</a>
          </li>
          <li>
            <a href="a">Sony Smart TV - 2015</a>
          </li>
          <li>
            <a href="a">Sony Smart TV - 2015</a>
          </li>
          <li>
            <a href="a">Sony Smart TV - 2015</a>
          </li>
          <li>
            <a href="a">Sony Smart TV - 2015</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default sidebar;

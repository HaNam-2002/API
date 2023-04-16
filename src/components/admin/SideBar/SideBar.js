import React from "react";

function SideBar() {
  return (
    <div
      className="w3-sidebar w3-bar-block w3-blue w3-xxlarge"
      style={{ width: "70px", paddingTop: "57px" }}
    >
      <a href="manager" className="w3-bar-item w3-button">
        <i className="fa fa-home"></i>
      </a>
      <a href="cart_manager" className="w3-bar-item w3-button">
        <i className="fa fa-shopping-cart"></i>
      </a>
      <a href="cate_manager" className="w3-bar-item w3-button">
        <i className="fa fa-trademark"></i>
      </a>
      <a href="/" className="w3-bar-item w3-button">
        <i className="fa fa-sign-out"></i>
      </a>
    </div>
  );
}

export default SideBar;

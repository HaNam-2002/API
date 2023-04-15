import React from "react";
import CartTable from "./CartTable";
import "./CartManager.css";

function CartManager() {
  return (
    <div style={{ marginLeft: "70px" }}>
      <div className="w3-container"></div>
      <h1 className="title">QUẢN LÍ ĐƠN HÀNG</h1>
      <CartTable />
    </div>
  );
}
export default CartManager;

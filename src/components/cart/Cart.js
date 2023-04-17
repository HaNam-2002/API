import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
function Cart() {
  return (
    <>
      <div className="w3-modal-content w3-card-4">
        <div className="top-content">
          <a href="/" className="far fa-arrow-alt-circle-left">
            {"   "}Mua thêm sản phẩm khác
          </a>
        </div>
        <form className="w3-container w3-card-4" action="">
          <ul className="listing-cart">
            <CartItem index={0} />
            <CartItem index={1} />
          </ul>

          <div className="tong_Tien">
            <h5 className="tong_Tien_text">Tạm tính:</h5>
            <h5 className="tong_Tien_price">25.000.000Đ</h5>
          </div>
          <div className="line"></div>
          <label className="w3-text-blue">
            <h4>Thông tin khách hàng</h4>
          </label>
          <p>
            <button className="w3-btn w3-blue">XONG</button>
          </p>
        </form>
      </div>
    </>
  );
}

export default Cart;

import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
function Cart() {
  return (
    <div className="mp-pusher" id="mp-pusher">
      <section className="container clearfix">
        <section className="cart-area">
          <p className="branch-name">
            <a className="cart-location-name" href="/">
              Trở về
            </a>
          </p>
          <div className="cart">
            <div className="cart-product">
              <div className="cart-header">
                <div className="cart-title">Sản phẩm</div>
                <div className="cart-price-title">Đơn giá</div>
                <div className="cart-quantity-title">Số lượng</div>
                <div className="cart-sum-price-title">Thành tiền</div>
                <div className="cart-action-title">Thao tác</div>
              </div>
              <CartItem />
            </div>
            <div className="cart-footer">
              <div className="cart-bottom">
                <div className="text">
                  Tổng tiền hàng ( 1 sản phẩm ):
                  <span className="money total_price">4.600.000 ₫</span>
                </div>
                <div className="select-voucher">
                  <a
                    className="v2-btn"
                    id="v2-checkout"
                    href="https://mobilecity.vn/thanh-toan?location_id=3"
                  >
                    Tiếp tục
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Cart;

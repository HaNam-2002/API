import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
function Cart() {
  return (
    <div class="mp-pusher" id="mp-pusher">
      <section class="container clearfix">
        <section class="cart-area">
          <p class="branch-name">
            <a class="cart-location-name" href="/">
              Trở về
            </a>
          </p>
          <div class="cart">
            <div class="cart-product">
              <div class="cart-header">
                <div class="cart-title">Sản phẩm</div>
                <div class="cart-price-title">Đơn giá</div>
                <div class="cart-quantity-title">Số lượng</div>
                <div class="cart-sum-price-title">Thành tiền</div>
                <div class="cart-action-title">Thao tác</div>
              </div>
              <CartItem />
            </div>
            <div class="cart-footer">
              <div class="cart-bottom">
                <div class="text">
                  Tổng tiền hàng ( 1 sản phẩm ):
                  <span class="money total_price">4.600.000 ₫</span>
                </div>
                <div class="select-voucher">
                  <a
                    class="v2-btn"
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

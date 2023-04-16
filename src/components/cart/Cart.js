import React from "react";
function Cart() {
  return (
    <>
      <div className="w3-modal-content w3-card-4">
        <a href="/" className="far fa-arrow-alt-circle-left">
          {"   "}Mua thêm sản phẩm khác
        </a>
        <form className="w3-container w3-card-4" action="">
          <p>
            <img
              src="https://cdn.mobilecity.vn/mobilecity-vn/images/2022/10/w300/xiaomi-redmi-note-12-xanh.png.webp"
              alt="lỗi"
            />
          </p>
          <p>
            <label className="w3-text-blue">
              <b>Tên danh mục</b>
            </label>
            <input
              className="w3-input w3-border"
              name="name_product"
              type="text"
              required
            />
          </p>
          <p>
            <button className="w3-btn w3-blue">XONG</button>
          </p>
        </form>
      </div>
    </>
  );
}

export default Cart;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function CartItem() {
  const [product, setProduct] = useState({});
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const pID = queryParams.get("id");
    if (pID) {
      fetch(`http://localhost:8083/products/${pID}`)
        .then((response) => response.json())
        .then((data) => setProduct(data));
    }
  }, [location.search]);

  return (
    <div className="cart-body">
      <div className="cart-product-list">
        <div className="cart-product-item">
          <div className="cart-info">
            <div className="cart-product-image">
              <a
                className="product-title"
                href="https://mobilecity.vn/dien-thoai/xiaomi-redmi-note-12.html"
              >
                <div className="image-product lazy">
                  <img
                    src="https://cdn.mobilecity.vn/mobilecity-vn/images/2022/10/w80/xiaomi-redmi-note-12-xanh.png.webp"
                    alt=""
                  />
                </div>
              </a>
            </div>
            <div className="cart-product-info">
              <div className="cart-product-detail">
                <div className="cart-product-title">
                  <a
                    className="product-title"
                    href="https://mobilecity.vn/dien-thoai/xiaomi-redmi-note-12.html"
                  >
                    {product.name}
                  </a>
                </div>
                <div className="cart-product-variant">
                  <a
                    className="btn-choose-variant"
                    href="#"
                    data-id="86442"
                    data-product_type="phone_variants"
                    data-deal_id="0"
                    data-cart="86442"
                    data-location="3"
                    data-service_product_id="2"
                    data-variant_id="11239"
                    data-phone_id="1495"
                    data-target="#popup-variant"
                    data-toggle="popup"
                  >
                    <div className="product-choose-button">
                      Chọn biến thể
                      <div className="arrow-choose-variant"></div>
                    </div>
                    <div className="product-variant">
                      <div className="product-current-variant">
                        6-128GB Trắng
                      </div>
                      <div className="product-warranty">BHV 12 Tháng</div>
                    </div>
                    <div className="arrow-choose-variant"></div>
                  </a>
                </div>
              </div>
              <div className="cart-product-price">
                <span className="cart-old-price">4.950.000 ₫</span>
                <span className="cart-price">4.600.000 ₫</span>
              </div>
              <div className="cart-product-quantity">
                <span className="quantity-product">1</span>
              </div>
              <div className="cart-real-price">
                <span className="real-price">4.600.000 ₫</span>
              </div>
            </div>
          </div>
          <div className="cart-action">
            <a className="cart delete" href="javascript:;" data-id="86442">
              Xóa
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

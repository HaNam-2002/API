import React, { useState, useEffect } from "react";
import SimilarProduct from "../similarProduct/similarProduct";
import "./productContent.css";
function ProductContent(props) {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const pID = queryParams.get("id");
    if (pID) {
      fetch(`http://localhost:8083/products/${pID}`)
        .then((response) => response.json())
        .then((data) => setProduct(data));
    } else {
      window.location.href = "/";
    }
  });
  return (
    <div className="body">
      <div className="mp-pusher" id="mp-pusher">
        <section className="container">
          <div className="product-content-box">
            <div className="product-image-store-list">
              <div className="product-slide-image">
                <div>
                  <ul className="product_image v2-product-image">
                    <li className="active">
                      <img
                        src={product.image}
                        alt="Lỗi"
                        width="250"
                        height="250"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="product-store-list">
                <p className="title-store-list">Danh sách cửa hàng:</p>
                <select className="location" id="location-message">
                  <option value="1">Hà Nội</option>
                  <option value="2">TP. Hồ Chí Minh</option>
                  <option value="3" selected="">
                    Đà Nẵng
                  </option>
                </select>
              </div>
            </div>
            <div className="product-price-box">
              <div className="product-price-content">
                <div className="price-and-color">
                  <div className="price_location" style={{ display: "none" }}>
                    <p>Giá tại:</p>
                    <select className="location" id="location">
                      <option value="1">Hà Nội</option>
                      <option value="2">TP. Hồ Chí Minh</option>
                      <option value="3" selected="">
                        Đà Nẵng
                      </option>
                    </select>
                  </div>
                  <p className="price" style={{ color: "black" }}>
                    {product.name}
                  </p>
                  <div className="price-product">
                    <p className="price">${product.price}</p>
                    <p className="price-old">${product.price * 1.5}</p>
                  </div>

                  <div className="status-box">
                    <i className="fa fa-check-square-o" aria-hidden="true"></i>
                    <span className="status-instock">Còn hàng</span>
                  </div>
                </div>

                <div className="attribute-group">
                  <p className="product-note-buy">
                    Chọn phiên bản để xem giá và chi nhánh còn hàng:
                  </p>
                  <div className="color-list attribute-list">
                    <p className="attribute-title">
                      <span className="title">Màu sắc</span>
                      <span className="color-name-selected"></span>
                    </p>
                    <div className="attribute-value">
                      <div
                        data-color_id="2034"
                        style={{ backgroundColor: "#709fc0" }}
                        data-title="Xanh"
                        className="color-item attribute-item"
                      >
                        <div className="product-variation__tick">
                          <svg
                            enable-background="new 0 0 12 12"
                            viewBox="0 0 12 12"
                            x="0"
                            y="0"
                            className="svg-icon icon-tick-bold"
                          >
                            <g>
                              <path d="m5.2 10.9c-.2 0-.5-.1-.7-.2l-4.2-3.7c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l3.4 3 5.1-7c .3-.4 1-.5 1.4-.2s.5 1 .2 1.4l-5.7 7.9c-.2.2-.4.4-.7.4 0-.1 0-.1-.1-.1z"></path>
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div
                        data-color_id="2035"
                        style={{ backgroundColor: "#252529" }}
                        data-title="Đen"
                        className="color-item attribute-item"
                      >
                        <div className="product-variation__tick">
                          <svg
                            enable-background="new 0 0 12 12"
                            viewBox="0 0 12 12"
                            x="0"
                            y="0"
                            className="svg-icon icon-tick-bold"
                          >
                            <g>
                              <path d="m5.2 10.9c-.2 0-.5-.1-.7-.2l-4.2-3.7c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l3.4 3 5.1-7c .3-.4 1-.5 1.4-.2s.5 1 .2 1.4l-5.7 7.9c-.2.2-.4.4-.7.4 0-.1 0-.1-.1-.1z"></path>
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div
                        data-color_id="2036"
                        style={{ backgroundColor: "#d6d6d7" }}
                        data-title="Trắng"
                        className="color-item attribute-item"
                      >
                        <div className="product-variation__tick">
                          <svg
                            enable-background="new 0 0 12 12"
                            viewBox="0 0 12 12"
                            x="0"
                            y="0"
                            className="svg-icon icon-tick-bold"
                          >
                            <g>
                              <path d="m5.2 10.9c-.2 0-.5-.1-.7-.2l-4.2-3.7c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l3.4 3 5.1-7c .3-.4 1-.5 1.4-.2s.5 1 .2 1.4l-5.7 7.9c-.2.2-.4.4-.7.4 0-.1 0-.1-.1-.1z"></path>
                            </g>
                          </svg>
                        </div>
                      </div>
                      <span
                        style={{ display: "none" }}
                        className="color-name-selected"
                      ></span>
                    </div>
                  </div>
                  <div className="storage-list attribute-list">
                    <p className="attribute-title">Bộ nhớ</p>
                    <div className="attribute-value">
                      <div
                        data-storage_id="807"
                        className="storage-item attribute-item"
                      >
                        4-128GB
                        <div className="product-variation__tick out-stock">
                          <svg
                            enable-background="new 0 0 12 12"
                            viewBox="0 0 12 12"
                            x="0"
                            y="0"
                            className="svg-icon icon-tick-bold out-stock"
                          >
                            <g>
                              <path d="m5.2 10.9c-.2 0-.5-.1-.7-.2l-4.2-3.7c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l3.4 3 5.1-7c .3-.4 1-.5 1.4-.2s.5 1 .2 1.4l-5.7 7.9c-.2.2-.4.4-.7.4 0-.1 0-.1-.1-.1z"></path>
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div
                        data-storage_id="52"
                        className="storage-item attribute-item"
                      >
                        6-128GB
                        <div className="product-variation__tick">
                          <svg
                            enable-background="new 0 0 12 12"
                            viewBox="0 0 12 12"
                            x="0"
                            y="0"
                            className="svg-icon icon-tick-bold"
                          >
                            <g>
                              <path d="m5.2 10.9c-.2 0-.5-.1-.7-.2l-4.2-3.7c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l3.4 3 5.1-7c .3-.4 1-.5 1.4-.2s.5 1 .2 1.4l-5.7 7.9c-.2.2-.4.4-.7.4 0-.1 0-.1-.1-.1z"></path>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-more-info">
                <div
                  className="warranty-default-box"
                  style={{ opacity: "1", visibility: "visible" }}
                >
                  <p className="warranty-text">
                    Thời gian bảo hành:
                    <span className="warranty-content">
                      <span className="warranty-content-default">
                        BH Thường 12 Tháng
                      </span>
                      <span className="warranty-content-selected"></span>
                    </span>
                  </p>
                  <p>Giao hàng tận nơi miễn phí trong 30 phút </p>
                </div>
                <div
                  className="sale-box v2-promotion"
                  style={{ opacity: "1", visibility: "visible" }}
                >
                  <p className="sale-box-title">Thông tin sản phẩm</p>
                  <ul
                    className="promotion-location location_2"
                    style={{ display: "none" }}
                  >
                    <li>
                      Tặng:&nbsp;
                      <span style={{ color: "#d0021c" }}>miễn phí BHV</span>
                      với máy thứ 5.
                    </li>
                  </ul>
                  <ul className="promotion-location location_3">
                    <li>
                      <br />
                      {product.description}
                    </li>
                  </ul>
                </div>
                <div
                  className="product-messsage hidden-promotion"
                  style={{ display: "none" }}
                ></div>
                <div className="product-address">
                  Hotline: 1234556677 | 1234563245 | 09655543425 (ĐN)
                </div>
                <div className="installment">
                  <a href="cart" className="installment-btn">
                    <span className="title">MUA NGAY</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="product_related_box_gird">
              <SimilarProduct />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProductContent;

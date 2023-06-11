import React, { useState, useEffect } from "react";
import "./allProduct.css";
function AllProduct({ searchKeyword, categoryId }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    fetch("https://nhomntm.et.r.appspot.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    const filtered = products.filter((product) => {
      if (categoryId && product.category.cid !== categoryId) {
        return false;
      } 
      return product.name.toLowerCase().includes(searchKeyword.toLowerCase());
    });

    setFilteredProducts(filtered);
  }, [searchKeyword, categoryId, products]);

  return (
    <div className="body">
      <div className="mp-pusher" id="mp-pusher" style={{ marginTop: "10px" }}>
        <section className="container">
          <section className="product-box">
            <div className="product-list">
              {filteredProducts.map((product) => (
                <div className="product-list-item">
                  <div className="product-item-image">
                    <div className="hot-and-new"></div>
                    <img
                      width="212"
                      height="210"
                      className="lazy link_name"
                      alt="Lỗi"
                      src={product.image}
                    />
                    <div className="mask" style={{ display: "none" }}>
                      <a href="#">
                        <div className="mask-title">
                          <div className="icon"></div>
                          <div className="text">MobileCity Care</div>
                        </div>
                        <ul className="mask-list">
                          <li>BH 12 tháng nguồn, màn hình</li>
                          <li>Đổi mới 30 ngày đầu tiên</li>
                          <li>Tặng ốp lưng, dán cường lực</li>
                          <li>Hỗ trợ phần mềm trọn đời máy</li>
                        </ul>
                      </a>
                      <a
                        title="Xem chi tiết chính sách bảo hành tại MobileCity"
                        className="mask-link"
                        href="/page/chinh-sach-bao-hanh.html"
                        target="_blank"
                      >
                        Bảo hành vàng
                      </a>
                    </div>
                  </div>
                  <div className="product-item-info">
                    <div className="product-item-left">
                      <p className="name">
                        <a href={"/detail?id=" + product.pid}>{product.name}</a>
                      </p>
                      <p className="price">{product.price}$</p>
                    </div>
                    <div className="product-item-right">
                      <a href={"/detail?id=" + product.pid}>
                        <span className="buy link_name">Xem</span>
                      </a>
                    </div>
                    <div className="product-item-full-width">
                      <ul style={{ paddingLeft: "0px" }}>
                        <li>
                          Tặng:&nbsp;
                          <span style={{ color: "rgb(208, 2, 28)" }}>
                            miễn phí BHV
                          </span>
                          với máy thứ 5.
                        </li>
                        <li>
                          (Quý khách
                          <strong>
                            <a href="/login" target="_blank" rel="nofollow">
                              <span style={{ color: " rgb(0, 0, 255)" }}>
                                ( Đăng nhập )
                              </span>
                            </a>
                          </strong>
                          để kiểm tra đơn hàng)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}

export default AllProduct;

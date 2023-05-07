import React, { useState, useEffect } from "react";
import "../productContent/productContent.css";
function SimilarProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8083/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="product-related-box phone-related-box w-50">
      <div className="product-related-title" style={{ textAlign: "center" }}>
        Sản phẩm khác
      </div>
      <div className="product-related-list">
        {products.slice(0, 3).map((product) => (
          <div className="product-related-item" style={{ textAlign: "center" }}>
            <div
              className="product-related-image"
              style={{ marginTop: "10px" }}
            >
              <img
                className="link_name"
                loading="lazy"
                src={product.image}
                alt={product.name}
                width="80"
                height="80"
              />
            </div>
            <div
              className="product-related-content"
              style={{ textAlign: "center" }}
            >
              <div className="product-related-name-price">
                <p className="name" style={{ fontWeight: "bold" }}>
                  <a href={"/detail?id=" + product.pid}>{product.name}</a>
                </p>
                <p className="price" style={{ color: "#ac0719" }}>
                  ${product.price}
                </p>
              </div>

              <p style={{ color: "bl" }}>
                <a href={"/detail?id=" + product.pid}>(Xem chi tiết) </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default SimilarProduct;

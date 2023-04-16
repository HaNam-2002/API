import React, { useState } from "react";
import ProductTable from "./ProductTable";
import "./ProductManager.css";

function ProductManager() {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div style={{ marginLeft: "70px" }}>
      <div className="w3-container"></div>
      <h1 className="title">QUẢN LÍ SẢN PHẨM</h1>
      <button
        className="button w3-blue"
        onClick={() =>
          (document.getElementById("id01").style.display = "block")
        }
      >
        Thêm sản phẩm
      </button>
      <ProductTable />
      <div id="id01" className="w3-modal">
        <div className="w3-modal-content w3-card-4 w3-animate-zoom">
          <header className="w3-container w3-blue">
            <span
              onClick={() =>
                (document.getElementById("id01").style.display = "none")
              }
              className="w3-button w3-blue w3-xlarge w3-display-topright"
            >
              &times;
            </span>
            <h2 className="title">THÊM SẢN PHẨM</h2>
          </header>
          <div className="w3-container w3-light-grey w3-padding">
            <form className="w3-container w3-card-4" action="">
              <p>
                <label className="w3-text-blue">
                  <b>Chọn hình ảnh</b>
                </label>
                <input
                  className="w3-input"
                  type="file"
                  id="myFile"
                  name="filename"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                />
              </p>
              {image && (
                <p className="image_edit">
                  <img
                    className="img_product"
                    src={image}
                    alt="Selected image"
                    style={{ maxWidth: "150px" }}
                  />
                </p>
              )}
              <p>
                <label className="w3-text-blue">
                  <b>Tên sản phẩm</b>
                </label>
                <input
                  className="w3-input w3-border"
                  name="name_product"
                  type="text"
                  required
                />
              </p>
              <p>
                <label className="w3-text-blue">
                  <b>Tiêu đề</b>
                </label>
                <input
                  className="w3-input w3-border"
                  name="title"
                  type="text"
                  required
                />
              </p>
              <p>
                <label className="w3-text-blue">
                  <b>Miêu tả</b>
                </label>
                <textarea
                  className="w3-input w3-border"
                  name="description"
                  type="text"
                ></textarea>
              </p>
              <p>
                <label className="w3-text-blue">
                  <b>Giá</b>
                </label>
                <input
                  className="w3-input w3-border"
                  name="price"
                  type="text"
                  required
                />
              </p>
              <p>
                <button className="w3-btn w3-blue">XONG</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductManager;

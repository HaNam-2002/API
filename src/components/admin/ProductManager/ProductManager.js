import React, { useState, useEffect } from "react";
import ProductTable from "./ProductTable";
import "./ProductManager.css";

function ProductManager() {
  const [image, setImage] = useState(null);
  const [categories, setCategories] = useState([]);

  const handleImageChange = (event) => {
    const imgage = event.target.value;
    setImage(imgage);
  };
  useEffect(() => {
    fetch("http://localhost:8083/categories/all")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error("Error fetching categories: ", error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    data.append("imgUrl", image); // Thêm Image URL vào FormData
    fetch(`http://localhost:8083/products/add?cID=${data.get('cID')}`, {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(data)),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {   
          alert("Sản phẩm đã được thêm thành công!");
          window.location.reload();
          form.reset();
          setImage(null);
        } else {
          alert("Có lỗi xảy ra khi thêm sản phẩm.");
        }
      })
      .catch(error => {
        alert("Có lỗi xảy ra khi thêm sản phẩm.");
      });
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
      <ProductTable categories={categories} />
      <div id="id01" className="w3-modal" style={{ paddingTop: "50px" }}>
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
            <form className="w3-container w3-card-4" onSubmit={handleSubmit}>
              <p>
                <label className="w3-text-blue">
                  <b>Image URL</b>
                </label>
                <input
                  className="w3-input"
                  type="text"
                  name="image"
                  required
                  onChange={handleImageChange}
                />
              </p>
              {image && (
                <p className="image_edit">
                  <img
                    className="image"
                    src={image}
                    alt="Selected image"
                    style={{ maxWidth: "150px" }}
                  />
                </p>
              )}
              <p>
                <label className="w3-text-blue">
                  <b>Name</b>
                </label>
                <input
                  className="w3-input"
                  type="text"
                  name="name"
                  required
                />
              </p>
              <p>
                <label className="w3-text-blue">
                  <b>Price</b>
                </label>
                <input
                  className="w3-input"
                  type="number"
                  name="price"
                  required
                />
              </p>
              <p>
                <label className="w3-text-blue">
                  <b>Description</b>
                </label>
                <textarea
                  className="w3-input"
                  type="text"
                  name="description"
                  required
                ></textarea>
              </p>
              <p>
                <label className="w3-text-blue">
                  <b>Title</b>
                </label>
                <input
                  className="w3-input"
                  type="text"
                  name="title"
                  required
                />
              </p>
              <p>
                <label className="w3-text-blue">
                  <b>Loại sản phẩm</b>
                </label>
                <select className="w3-select" name="cID" required>
                  <option value="" disabled selected hidden>
                    Categories
                  </option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.cid}>
                      {category.cname}
                    </option>
                  ))}
                </select>
              </p>
              <p className="w3-center">
                <button className="button w3-blue" type="submit">
                  Thêm sản phẩm
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductManager;  
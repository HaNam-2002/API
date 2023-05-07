import React, { useState, useEffect } from "react";
import CategoryTable from "./CategoryTable";
import "./CategoryManager.css";

function CategoryManager() {
  const [image, setImage] = useState(null);
  const [categories, setCategories] = useState([]);

  const handleImageChange = (event) => {
    const image = event.target.value;
    setImage(image);
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
    fetch("http://localhost:8083/categories/add", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(data)),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Danh mục đã được thêm thành công!");
          window.location.reload();
          form.reset();
          setImage(null);
        } else {
          alert("Có lỗi xảy ra khi thêm danh mục.");
        }
      })
      .catch((error) => {
        alert("Có lỗi xảy ra khi thêm danh mục.");
      });
  };

  return (
    <div style={{ marginLeft: "90px" }}>
      <div className="w3-container"></div>
      <h1 className="title">QUẢN LÝ DANH MỤC</h1>
      <button
        className="button w3-blue button_admin"
        onClick={() =>
          (document.getElementById("id01").style.display = "block")
        }
      >
        Thêm danh mục
      </button>
      <CategoryTable categories={categories} />
      <div id="id01" className="w3-modal" style={{ paddingTop: "50px" }}>
        <div className="w3-modal-content w3-card-4 w3-animate-zoom">
          <header className="w3-container w3-blue">
            <span
              onClick={() =>
                (document.getElementById("id01").style.display = "none")
              }
              className="w3-button w3-blue w3-xlarge w3-display-topright"
            >
              ×
            </span>
            <h2 className="title">THÊM DANH MỤC</h2>
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
                  name="cimage"
                  required
                  onChange={handleImageChange}
                />
              </p>
              {image && (
                <p className="image_edit">
                  <img
                    className="cimage"
                    src={image}
                    alt="Selected image"
                    style={{
                      maxWidth: "150px",
                    }}
                  />
                </p>
              )}
              <p>
                <label className="w3-text-blue">
                  <b>Tên danh mục</b>
                </label>
                <input
                  className="w3-text-grey w3-border w3-padding"
                  type="text"
                  name="cname"
                  required
                />
              </p>
              <p>
                <button className="button w3-blue button_admin" type="submit">
                  Thêm
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryManager;

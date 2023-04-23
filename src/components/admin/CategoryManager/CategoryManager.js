import { useState, useEffect } from "react";
import CategoryTable from "./CategoryTable";

const CategoryManager = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8083/categories/all")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleCategorySubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = { cname: form.cname.value };
    fetch("http://localhost:8083/categories/add", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setShowAddModal(false);
        fetch("http://localhost:8083/categories/all")
          .then((response) => response.json())
          .then((data) => {
            setCategories(data);
            alert("Thêm danh mục thành công");
            window.location.reload();
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div style={{ marginLeft: "70px" }}>
      <div className="w3-container"></div>
      <h1 className="title">QUẢN LÍ DANH MỤC</h1>
      <button
        className="button w3-blue"
        onClick={() => setShowAddModal(true)}
      >
        Thêm danh mục
      </button>
      <div className="table_cate">
        <CategoryTable categories={categories} />
      </div>
      <div
        id="addModal"
        className="w3-modal"
        style={{ display: showAddModal ? "block" : "none" }}
      >
        <div className="w3-modal-content w3-card-4 w3-animate-zoom">
          <header className="w3-container w3-blue">
            <span
              onClick={() => setShowAddModal(false)}
              className="w3-button w3-blue w3-xlarge w3-display-topright"
            >
              ×
            </span>
            <h2 className="title">THÊM DANH MỤC</h2>
          </header>
          <div className="w3-container w3-light-grey w3-padding">
            <form className="w3-container w3-card-4" onSubmit={handleCategorySubmit}>
              <p>
                <label className="w3-text-blue">
                  <b>Tên danh mục</b>
                </label>
                <input
                  className="cname"
                  name="cname"
                  type="text"
                  required
                />
              </p>
              <p>
                <button type="submit" className="w3-btn w3-blue">
                  XONG
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryManager;

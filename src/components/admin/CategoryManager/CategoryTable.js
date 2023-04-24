import React, { useState, useEffect } from "react";
import "./CategoryManager.css";

function CategoryTable({categories}) {
  // const [filteredCategories, setfilteredCategories] = useState([]);
  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch("http://localhost:8083/categories/all");
  //       const data = await response.json();
  //       setCategories(data);
  //       setfilteredCategories(data);
  //     } catch (error) {
  //       console.error("Error fetching categories: ", error);
  //     }
  //   }
  //   fetchData();
  // }, []);
  return (
    <table className="table" style={{width: "100%"}}>
      <thead>
        <tr>
          <th className="cID" style={{ width: "20%" }} >cID</th>
          <th className="cname" style={{ width: "120%" }}>Name</th>
          <th ></th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category, index) => (
          <tr>
            <td>{category.cID}</td>
            <td>{category.cname}</td>
          <td>
            <button className="w3-red">Xoá</button>
            <button 
              className="w3-green"
              onClick={() =>
                (document.getElementById("id03").style.display = "block")
              }
            >
              Sửa
            </button>
          </td>
        </tr>
          // <CategoryRow key={category.id} cID={category.cID} cname={category.cname} />
        ))}
      </tbody>

      <div id="id03" className="w3-modal">
        <div className="w3-modal-content w3-card-4 w3-animate-zoom">
          <header className="w3-container w3-blue">
            <span
              onClick={() =>
                (document.getElementById("id03").style.display = "none")
              }
              className="w3-button w3-blue w3-xlarge w3-display-topright"
            >
              &times;
            </span>
            <h2 className="title">SỬA DANH MỤC</h2>
          </header>
          <div className="w3-container w3-light-grey w3-padding">
            <form className="w3-container w3-card-4" action="">
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
        </div>
      </div>
    </table>
  );
}

export default CategoryTable;

import React, { useState, useEffect } from "react";
import "./CategoryManager.css";

function CategoryTable(category) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [categories, setCategories] = useState([]);
  const [editCName, setEditCName] = useState("");

  useEffect(() => {
    fetch("http://localhost:8083/categories/all")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        console.log(categories);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDeleteCategory = (cID) => {
    fetch(`http://localhost:8083/categories/delete/${cID}`, {
      method: "DELETE",
    })
      .then((response) => {
        alert("Xóa danh mục thành công!");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEditCategory = (index) => {
    const updatedCategory = {
      cname: editCName,
    };

    const cid = categories[index].cid;
    fetch(`http://localhost:8083/categories/update/${cid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCategory),
    })
      .then((response) => {
        if (response.ok) {
          alert("Sửa sản phẩm thành công!");
          window.location.reload();
        } else {
          alert("Có lỗi xảy ra khi sửa sản phẩm.");
        }
      })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

    document.getElementById("id03").style.display = "none";
  };

  return (
    <table className="table" style={{ width: "100%" }}>
      <thead>
        <tr>
          <th className="cID" style={{ width: "20%" }}>
            cID
          </th>
          <th className="cname" style={{ width: "120%" }}>
            Name
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category, index) => (
          <tr key={index}>
            <td>{category.cid}</td>
            <td>{category.cname}</td>
            <td>
              <button
                className="w3-red"
                onClick={() => handleDeleteCategory(category.cid)}
              >
                Xóa
              </button>
              <button
                className="w3-green"
                onClick={() => {
                  document.getElementById("id03").style.display = "block";
                  setSelectedIndex(index);
                  setEditCName(category.cname);
                }}
              >
                Sửa
              </button>
            </td>
          </tr>
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
              ×
            </span>
            <h2 className="title">SỬA DANH MỤC</h2>
          </header>
          <div className="w3-container w3-light-grey w3-padding">
            <form
              className="w3-container w3-card-4"
              onSubmit={() => handleEditCategory(selectedIndex)}
            >
              <p>
                <label className="w3-text-blue">
                  <b>Tên danh mục</b>
                </label>
                <input
                  className="w3-input w3-border"
                  name="cname"
                  type="text"
                  value={editCName}
                  onChange={(e) => setEditCName(e.target.value)}
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

import React, { useState } from "react";
import "./ProductManager.css";
function ProductRow({product, categories, onDeleteProduct}) { 
  const [image, setImage] = useState(null);
  const handleImageChange = (event) => {
    const imgage = event.target.value;
    setImage(imgage);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const pid = data.get('pID')
    console.log(data)
    console.log(product)
    data.append("imgUrl", image); // Thêm Image URL vào FormData
    fetch(`http://localhost:8083/products/update/${product.pid}/${data.get('cID')}`, {
      method: "PUT",
      body: JSON.stringify(Object.fromEntries(data)),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {   
          alert("Sửa sản phẩm thành công!");
          window.location.reload();
          form.reset();
          setImage(null);
        } else {
          alert("Có lỗi xảy ra khi sửa sản phẩm.");
        }
      })
      .catch(error => {
        alert("Có lỗi xảy ra khi thêm sản phẩm.");
      });
  };
  
  return (
    <>
      <tr>
        <td>{product.pid}</td>
        <td>{product.category.cname}</td>
        <td>
          <img className="image_edit" src={product.image} alt="Lỗi" />
        </td>
        <td>{product.name}</td>
        <td>{product.title}</td>
        <td>{product.description}</td>
        <td>{product.price}</td>
        <td>
          <button className="w3-red" onClick={() =>onDeleteProduct(product.pid)}>Xoá</button>
          <button
            className="w3-green"
            onClick={() =>
              (document.getElementById("id02").style.display = "block")
            }
          >
            Sửa
          </button>
        </td>
      </tr>
      <div id="id02" className="w3-modal" style={{ paddingTop: "0px" }}>
        <div className="w3-modal-content w3-card-4 w3-animate-zoom">
          <header className="w3-container w3-blue">
            <span
              onClick={() =>
                (document.getElementById("id02").style.display = "none")
              }
              className="w3-button w3-blue w3-xlarge w3-display-topright"
            >
              &times;
            </span>
            <h2 className="title">SỬA SẢN PHẨM</h2>
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
                  Sửa sản phẩm
                </button>
                
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductRow;
import React, { useState, useEffect } from "react";
import "./ProductManager.css";

function ProductTable({ categories }) {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    title: "",
    description: "",
    image: "",
    cID: 0,
  });
  const [image, setImage] = useState("");

  useEffect(() => {
    fetch("https://nhomntm.et.r.appspot.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => console.error(error));
  }, []);

  function deleteOne(pid) {
    fetch(`https://nhomntm.et.r.appspot.com/products/delete/${pid}`, {
      method: "DELETE",
    })
      .then((response) => {
        window.location.reload();
        alert("Xóa sản phẩm thành công!");
        setProducts(products.filter((product) => product.id !== pid));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const update = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    fetch(
      `https://nhomntm.et.r.appspot.com/products/update/${product.pid}/${data.get("cID")}`,
      {
        method: "PUT",
        body: JSON.stringify(Object.fromEntries(data)),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          alert("Sửa sản phẩm thành công!");
          window.location.reload();
          form.reset();
          // setImageUrl(null);
        } else {
          alert("Có lỗi xảy ra khi sửa sản phẩm.");
        }
      })
      .catch((error) => {
        alert("Có lỗi xảy ra khi thêm sản phẩm.");
      });
  };

  function findProductUpdate(id) {
    const product = products.find((p) => p.pid === id);
    setProduct(product);
    setImage(product.image);
    document.getElementById("update-form").reset();
  }

  const handleImageChange = (event) => {
    const image = event.target.value;
    setImage(image);
  };

  return (
    <div>
      <ul></ul>
      <table>
        <thead>
          <tr>
            <th className="pid">Id</th>
            <th className="category">Categories</th>
            <th className="img">Image</th>
            <th className="name">Name</th>
            <th className="title">Title</th>
            <th className="description">Description</th>
            <th className="price">Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.pid}>
              <td>{p.pid}</td>
              <td>{p.category.cname}</td>
              <td>
                <img className="image_edit" src={p.image} alt="Lỗi" />
              </td>
              <td>{p.name}</td>
              <td>{p.title}</td>
              <td>{p.description}</td>
              <td>{p.price}</td>
              <td>
                <button
                  className="w3-red button_admin"
                  onClick={() => deleteOne(p.pid)}
                >
                  Xoá
                </button>
                <button
                  className="w3-green button_admin"
                  onClick={() => {
                    findProductUpdate(p.pid);
                    document.getElementById("id02").style.display = "block";
                  }}
                >
                  Sửa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>{" "}
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
            <form
              id="update-form"
              className="w3-container w3-card-4"
              onSubmit={update}
            >
              <p>
                <label className="w3-text-blue">
                  <b>Image URL</b>
                </label>
                <input
                  className="w3-input"
                  type="text"
                  name="image"
                  required
                  value={image}
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
                  value={product.name}
                  onChange={(event) =>
                    setProduct({ ...product, name: event.target.value })
                  }
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
                  value={product.price}
                  onChange={(event) =>
                    setProduct({ ...product, price: event.target.value })
                  }
                />
              </p>
              <p>
                <label className="w3-text-blue">
                  <b>Description</b>
                </label>
                <textarea
                  className="w3-input"
                  name="description"
                  required
                  value={product.description}
                  onChange={(event) =>
                    setProduct({ ...product, description: event.target.value })
                  }
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
                  value={product.title}
                  onChange={(event) =>
                    setProduct({ ...product, title: event.target.value })
                  }
                />
              </p>
              <p>
                <label className="w3-text-blue">
                  <b>Loại sản phẩm</b>
                </label>
                <select
                  className="w3-select"
                  name="cID"
                  required
                  value={product.cID}
                  onChange={(event) =>
                    setProduct({ ...product, cID: event.target.value })
                  }
                >
                  <option value="" disabled selected hidden>
                    Categories
                  </option>
                  {categories.map((category) => (
                    <option key={category.cid} value={category.cid}>
                      {category.cname}
                    </option>
                  ))}
                </select>
              </p>
              <p className="w3-center">
                <button className="button w3-blue button_admin" type="submit">
                  Sửa sản phẩm
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductTable;

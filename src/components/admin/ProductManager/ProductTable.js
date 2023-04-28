import React, { useState, useEffect } from "react";
import ProductRow from "./ProductRow";
import "./ProductManager.css";

function ProductTable( {categories}) {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch("http://localhost:8083/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setProducts(data);
      })
      .catch((error) => console.error(error));
  }, []);

  function handleDeleteProduct(pID) {
    fetch(`http://localhost:8083/products/delete/${pID}`, {
      method: "DELETE",
    })
      .then((response) => {
        window.location.reload();
        alert("Xóa sản phẩm thành công!");
        setProducts(products.filter(product => product.id !== pID));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div>
      <ul></ul>
      <table>
        <thead>
          <tr>
            <th className="pid" >pID</th>
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
          {products.map((product) => (
            <ProductRow
            product={product}
            categories={categories} 
            onDeleteProduct={handleDeleteProduct}
            key={product.pid}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;

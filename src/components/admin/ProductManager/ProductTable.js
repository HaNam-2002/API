import React, { useState, useEffect } from "react";
import ProductRow from "./ProductRow";
import "./ProductManager.css";

function ProductTable() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8083/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => console.error(error));
  }, []);

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

  function handleDeleteProduct(pID) {
    fetch(`http://localhost:8083/products/delete/${pID}`, {
      method: "DELETE",
    })
      .then((response) => {
        console.log(response);
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
            <th className="id" >pID</th>
            <th className="categories" >Categories</th>
            <th className="img">Image</th>
            <th className="name">Name</th>
            <th className="title">Title</th>
            <th className="description">Description</th>
            <th className="price">Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <ProductRow
              key={product.id}
              id={product.pID}
              categories={index === 0 ? product.categories : ''}
              imgUrl={product.image}
              name={product.name}
              title={product.title}
              description={product.description}
              price={product.price}
              onDeleteProduct={handleDeleteProduct}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;

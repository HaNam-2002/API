import React, { useState, useEffect } from "react";

function Sidebar() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://nhomntm.et.r.appspot.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="col-md-4">
      <div className="single-sidebar">
        <h2 className="sidebar-title">Search Products</h2>
        <form action="">
          <input type="text" placeholder="Search products..." />
          <input type="submit" value="Search" />
        </form>
      </div>
      <div className="single-sidebar">
        <h2 className="sidebar-title">Products</h2>
        {products.slice(0, 4).map((product) => (
          <div className="thubmnail-recent" key={product.pID}>
            <img
              src={product.image}
              className="recent-thumb"
              alt={product.name}
            />
            <h2>
              <a href={"/detail?id=" + product.pID}>{product.name}</a>
            </h2>
            <div className="product-sidebar-price">
              <ins>${product.price}</ins>
            </div>
          </div>
        ))}
      </div>

      <div className="single-sidebar">
        <h2 className="sidebar-title">Recent Posts</h2>
        <ul>
          <li>
            <a href="#">Sony Smart TV - 2015</a>
          </li>
          <li>
            <a href="#">Sony Smart TV - 2015</a>
          </li>
          <li>
            <a href="#">Sony Smart TV - 2015</a>
          </li>
          <li>
            <a href="#">Sony Smart TV - 2015</a>
          </li>
          <li>
            <a href="#">Sony Smart TV - 2015</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
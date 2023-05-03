import React, { useState, useEffect } from "react";
import "./category.css";

function Category({ onCategoryClick }) {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);

  useEffect(() => {
    // Call API to fetch the list of categories and update state
    fetch("http://localhost:8083/categories/all")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        setFilteredCategories(data); // Initialize the filtered category list with all categories
      })
      .catch((error) => console.error(error));
  }, []);

  const handleCategoryClick = (categoryId) => {
    onCategoryClick(categoryId);
  };

  return (
    <div className="mainmenu-area">
      <div className="container">
        <div className="row">
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              {filteredCategories.map(({ cid, cname }) => (
                <li key={cid}>
                  <button
                    className="cate_item"
                    onClick={() => handleCategoryClick(cid)}
                  >
                    {cname}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;

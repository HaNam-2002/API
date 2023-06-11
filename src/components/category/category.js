import React, { useState, useEffect } from "react";
import "./category.css";

function Category({ onCategoryClick }) {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);

  useEffect(() => {
    // Call API to fetch the list of categories and update state
    fetch("https://nhomntm.et.r.appspot.com/categories/all")
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
    <div className="body">
      <div className="box-filter top-box block-scroll-main cate-42">
        <section>
          <div className="box-quicklink block-scroll-main">
            <div className="lst-quickfilter q-manu">
              {filteredCategories.map(({ cid, cname, cimage }) => (
                <a
                  onClick={() => handleCategoryClick(cid)}
                  className="box-quicklink__item bd-radius quicklink-logo"
                >
                  <img width="30" className="no-text" src={cimage} />
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Category;

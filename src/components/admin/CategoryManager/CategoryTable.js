import React, { useState, useEffect } from "react";
import CategoryRow from "./CategoryRow";
import "./CategoryManager.css";

function CategoryTable() {
  const [filteredCategories, setfilteredCategories] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8083/categories/all");
        const data = await response.json();
        setCategories(data);
        setfilteredCategories(data);
      } catch (error) {
        console.error("Error fetching categories: ", error);
      }
    }
    fetchData();
  }, []);

  return (
    <table style={{ width: "120%" }}>
      <thead>
        <tr>
          <th className="cID" style={{ width: "20%" }} >cID</th>
          <th className="cname" style={{ width: "120%" }}>Name</th>
          <th ></th>
        </tr>
      </thead>
      <tbody>
        {filteredCategories.map((category, index) => (
          <CategoryRow key={category.id} cID={category.cID} cname={category.cname} />
        ))}
      </tbody>
    </table>
  );
}

export default CategoryTable;

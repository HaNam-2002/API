import React from "react";
import CategoryRow from "./CategoryRow";
import "./CategoryManager.css";
function CategoryTable() {
  return (
    <table>
      <tr>
        <th>STT</th>
        <th>TÊN DANH MỤC</th>
        <th></th>
      </tr>
      <CategoryRow stt="01" tdm="XIAOMI" />
      <CategoryRow stt="02" tdm="IPHONE" />
      <CategoryRow stt="03" tdm="NOKIA" />
      <CategoryRow stt="04" tdm="SONY" />
    </table>
  );
}
export default CategoryTable;

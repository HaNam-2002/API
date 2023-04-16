import React from "react";
import CategoryManager from "../../components/admin/CategoryManager/CategoryManager";
import SideBar from "../../components/admin/SideBar/SideBar";
function CategoryManagerPage() {
  return (
    <div style={{ position: "relative" }}>
      <SideBar />
      <CategoryManager />
    </div>
  );
}
export default CategoryManagerPage;

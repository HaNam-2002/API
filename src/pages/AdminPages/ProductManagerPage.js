import React from "react";
import ProductManager from "../../components/admin/ProductManager/ProductManager";
import SideBar from "../../components/admin/SideBar/SideBar";
function ProductManagerPage() {
  return (
    <div style={{ position: "relative" }}>
      <SideBar />
      <ProductManager />
    </div>
  );
}
export default ProductManagerPage;

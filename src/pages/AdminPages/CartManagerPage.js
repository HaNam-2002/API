import React from "react";
import CartManager from "../../components/admin/Cart/CartManager";
import SideBar from "../../components/admin/SideBar/SideBar";
function ProductManagerPage() {
  return (
    <div style={{ position: "relative" }}>
      <SideBar />
      <CartManager />
    </div>
  );
}
export default ProductManagerPage;

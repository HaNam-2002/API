import React from "react";
import Header from "../components/header/Header";
import Cart from "../components/cart/Cart";
import Footer from "../components/footer/Footer";
function CartPage() {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <Cart />
      <Footer />
    </div>
  );
}
export default CartPage;

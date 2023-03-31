import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/Banner/Banner";
import Footer from "../components/footer/Footer";
import Menu from "../components/Menu/Menu";
import AllProduct from "../components/allProduct/allProduct";
function ShopPage() {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <Menu />
      <Banner />
      <AllProduct />
      <Footer />
    </div>
  );
}
export default ShopPage;

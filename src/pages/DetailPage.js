import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Mainmenu from "../components/Menu/Menu";
import Sidebar from "../components/sidebar/sidebar";
import ProductContent from "../components/productContent/productContent";
function DetailPage() {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <Mainmenu />
      <div className="site-branding-area product-detail">
        <div className="container">
          <div className="row">
            <Sidebar />
            <ProductContent />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DetailPage;

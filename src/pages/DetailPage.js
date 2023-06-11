import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ProductContent from "../components/productContent/productContent";
import ProductComment from "../components/productComment/productComment";
function DetailPage() {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <ProductContent />
      <ProductComment />
      <Footer />
    </div>
  );
}

export default DetailPage;


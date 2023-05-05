import React from "react";
import ChangePass from "../components/password_ change/password_ change";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
function ChangePassPage() {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <ChangePass />
      <Footer />
    </div>
  );
}
export default ChangePassPage;

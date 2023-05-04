import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Personal from "../components/personal/personal";

function PersonalPage() {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <Personal />
      <Footer />
    </div>
  );
}

export default PersonalPage;

import React from "react";
import Register from "../components/Register/Register";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
function RegisterPage() {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <Register />
      <Footer />
    </div>
  );
}

export default RegisterPage;

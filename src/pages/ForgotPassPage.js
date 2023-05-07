import React from "react";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
function RegisterPage() {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <ForgotPassword />
      <Footer />
    </div>
  );
}

export default RegisterPage;

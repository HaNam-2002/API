import React from "react";
import Login from "../components/login/Login";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
function LoginPage() {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <Login />
      <Footer />
    </div>
  );
}

export default LoginPage;

import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Contact from "../components/Contact/Contact";
function ContactPage() {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <Contact />
      <Footer />
    </div>
  );
}

export default ContactPage;

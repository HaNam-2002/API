import React, { useState } from "react";
import Header from "../components/header/Header";
import Banner from "../components/Banner/Banner";
import Footer from "../components/footer/Footer";
import Menu from "../components/Menu/Menu";
import AllProduct from "../components/allProduct/allProduct";

function HomePage() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
    setIsSearching(true);
  };

  return (
    <div style={{ position: "relative" }}>
      <Header />
      <Menu onSearch={handleSearch} />
      {isSearching ? null : <Banner />}
      <AllProduct searchKeyword={searchKeyword} />
      <Footer />
    </div>
  );
}
export default HomePage;

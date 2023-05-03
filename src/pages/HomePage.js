import React, { useState } from "react";
import Header from "../components/header/Header";
import Banner from "../components/Banner/Banner";
import Footer from "../components/footer/Footer";
import Menu from "../components/Menu/Menu";
import AllProduct from "../components/allProduct/allProduct";
import Category from "../components/category/category";

function HomePage() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
    setSearchKeyword("");
  };

  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
    setSelectedCategoryId(null);
  };

  return (
    <div style={{ position: "relative" }}>
      <Header />
      <Menu onSearch={handleSearch} />
      {!searchKeyword && !selectedCategoryId && <Banner />}
      <Category onCategoryClick={handleCategoryClick} />
      <AllProduct
        searchKeyword={searchKeyword}
        categoryId={selectedCategoryId}
      />
      <Footer />
    </div>
  );
}

export default HomePage;

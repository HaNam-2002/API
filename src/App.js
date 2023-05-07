import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import DetailPage from "./pages/DetailPage";
import ForgotPassPage from "./pages/ForgotPassPage";
import ChangePass from "./pages/ChangePassPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import ContactPage from "./pages/ContactPage";
import ProductManagerPage from "./pages/AdminPages/ProductManagerPage";
import CartManagerPage from "./pages/AdminPages/CartManagerPage";
import CategoryManagerPage from "./pages/AdminPages/CategoryManagerPage";
import CartPage from "./pages/Cartpage";
import PersonalPage from "./pages/personalPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
        <Routes>
          <Route path="/ForgotPassword" element={<ForgotPassPage />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Routes>
          <Route path="/manager" element={<ProductManagerPage />} />
        </Routes>
        <Routes>
          <Route path="/cart_manager" element={<CartManagerPage />} />
        </Routes>
        <Routes>
          <Route path="/cate_manager" element={<CategoryManagerPage />} />
        </Routes>
        <Routes>
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
        <Routes>
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Routes>
          <Route path="/ChangePass" element={<ChangePass />} />
        </Routes>
        <Routes>
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Routes>
          <Route path="/personal" element={<PersonalPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

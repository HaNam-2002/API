import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import DetailPage from "./pages/DetailPage";
import ForgotPassPage from "./pages/ForgotPassPage"
import ChangePass from "./pages/ChangePassPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";

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
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
        <Routes>
          <Route path="/ChangePass" element={<ChangePass/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;

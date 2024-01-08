import React from "react";
import "../src/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/auth/login";
import Registration from "./pages/auth/registration";
import Product from './pages/product'
import NavBar from "./component/comman/navbar";
import Footer from "./component/comman/footer";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="pt-[65px]">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
};

export default App;

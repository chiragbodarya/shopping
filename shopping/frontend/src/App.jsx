import React from "react";
import "../src/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Extera from "./pages/extera";
import Login from "./pages/auth/login";
import Registration from "./pages/auth/registration";
import ForGotPassword from "./pages/auth/forgotpassword";
import Product from './pages/product'
import Search from "./pages/search";
import NavBar from "./component/comman/navbar";
import Footer from "./component/comman/footer";

const App = () => {
  const product = [
    {
      id: 1,
      product_img: "/img/lengha_1.webp",
      category: "lengha",
      name:'pink moti and colorfull handwork',
      price: 1234,
      retting:4,
      original_price: 3000,
      discount: 30,
      delivery_date: 10,
    },
    {
      id: 2,
      product_img: "/img/lengha_2.jpg",
      category: "lengha",
      name:'pink moti and colorfull handwork',
      price: 1234,
      retting:4,
      original_price: 3000,
      discount: 30,
      delivery_date: 10,
    },
    {
      id: 3,
      product_img: "/img/lengha_1.webp",
      category: "lengha",
      name:'pink moti and colorfull handwork',
      price: 1234,
      retting:4,
      original_price: 3000,
      discount: 30,
      delivery_date: 10,
    },
    {
      id: 4,
      product_img: "/img/lengha_2.jpg",
      category: "lengha",
      name:'pink moti and colorfull handwork',
      price: 1234,
      retting:4,
      original_price: 3000,
      discount: 30,
      delivery_date: 10,
    },
    {
      id: 5,
      product_img: "/img/lengha_1.webp",
      category: "lengha",
      name:'pink moti and colorfull handwork',
      price: 1234,
      retting:4,
      original_price: 3000,
      discount: 30,
      delivery_date: 10,
    },
    {
      id: 6,
      product_img: "/img/lengha_2.jpg",
      category: "lengha",
      name:'pink moti and colorfull handwork',
      price: 1234,
      retting:4,
      original_price: 3000,
      discount: 30,
      delivery_date: 10,
    },
    {
      id: 7,
      product_img: "/img/lengha_1.webp",
      category: "lengha",
      name:'pink moti and colorfull handwork',
      price: 1234,
      retting:4,
      original_price: 3000,
      discount: 30,
      delivery_date: 10,
    },
    {
      id: 8,
      product_img: "/img/lengha_2.jpg",
      category: "lengha",
      name:'pink moti and colorfull handwork',
      price: 1234,
      retting:4,
      original_price: 3000,
      discount: 30,
      delivery_date: 10,
    },
    {
      id: 9,
      product_img: "/img/lengha_1.webp",
      category: "lengha",
      name:'pink moti and colorfull handwork',
      price: 1234,
      retting:4,
      original_price: 3000,
      discount: 30,
      delivery_date: 10,
    },
    {
      id: 10,
      product_img: "/img/lengha_2.jpg",
      category: "lengha",
      name:'pink moti and colorfull handwork',
      price: 1234,
      retting:4,
      original_price: 3000,
      discount: 30,
      delivery_date: 10,
    },
    {
      id: 11,
      product_img: "/img/lengha_1.webp",
      category: "lengha",
      name:'pink moti and colorfull handwork',
      price: 1234,
      retting:4,
      original_price: 3000,
      discount: 30,
      delivery_date: 10,
    },
  ];
  return (
    <>
      <NavBar />
      <div className="pt-[65px]">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/forgotpassword" element={<ForGotPassword />} />
            <Route path="/product" element={<Product />} />
            <Route path="/search" element={<Search />} />
            <Route path="/extera" element={<Extera />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
};

export default App;

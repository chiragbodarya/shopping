import React from "react";
import "../src/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import NavBar from "./component/navbar";
import Footer from "./component/footer";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="pt-[65px]">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
};

export default App;

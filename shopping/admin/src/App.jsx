import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="h-full max-w-100vh">
      <Navbar />
      {/* <div className="flex pt-[60px] " style={{ height: "calc(100vh - 56px)" }}> */}
      <div className="flex pt-[60px] h-[100vh]">
        <Sidebar />
        <main className="p-4 flex flex-col justify-between items-center w-full h-full">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </Router>
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;

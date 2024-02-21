import React from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./NotFound";

function App() {
  return (
    <div>
      {/* {this.state.loading ? (
        <Loader
          type="TailSpin"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} // Optional animation timeout in milliseconds
        />
      ) : ( */}
        <div className="h-full max-w-100vh">
          <Navbar />
          {/* <div className="flex pt-[60px] " style={{ height: "calc(100vh - 56px)" }}> */}
          <div className="flex pt-[60px] h-[100vh]">
            <Sidebar />
            <main className="p-4 flex flex-col justify-between items-center w-full h-full">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
              <Footer />
            </main>
          </div>
        </div>
      {/* )} */}
    </div>
  );
}

export default App;

import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-full max-w-100vh">
      <Navbar />
      <div className="flex pt-[40px] " style={{ height: "calc(100vh - 56px)" }}>
        <Sidebar />
        <main className="p-4 flex-1">Your Main Content Here</main>
      </div>
      <Footer />
    </div>
  );
}

export default App;

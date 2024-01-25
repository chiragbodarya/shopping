import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex h-[100vh]">
        <Sidebar />
        <main className="p-4 flex-1">Your Main Content Here</main>
      </div>
      <Footer />
    </div>
  );
}

export default App;

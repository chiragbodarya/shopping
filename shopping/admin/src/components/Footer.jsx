import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-4 w-full">
      <div className="container mx-auto h-full">
        <div className="h-full flex items-center justify-between">
          <div className="text-[#4d4d4d]">
            <span>© 2023 </span>
            <span className="text-[#0052cc]">Shopping</span>
            <span>. All Rights Reserved.</span>
          </div>
          <div className="flex items-center gap-5">
            <Link to='/'>home</Link>
            <Link to='/'>Shopping</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="bg-[#4F80E1] h-[65px] flex items-center fixed justify-center w-[100%] z-50">
      <div className="flex items-center justify-between px-5 mx-4 max-[1250px]:mx-auto w-[100%] max-w-[1250px]">
        <div className="flex items-center justify-between w-[100%] space-x-4">
          <Link to="/">
            <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-bold">
              <a href="/">Bodary's</a>
            </div>
          </Link>
          <ul className="hidden md:flex items-center space-x-4 md:space-x-6">
            <Link to="">
              <li className="text-white text-[18px] font-semibold">Boy</li>
            </Link>
            <Link to="">
              <li className="text-white text-[18px] font-semibold">Girl</li>
            </Link>
            <Link to="">
              <li className="text-white text-[18px] font-semibold">Kid</li>
            </Link>
            <Link to="">
              <li className="text-white text-[18px] font-semibold">Contact</li>
            </Link>
          </ul>
          <div className="flex items-center space-x-4">
            <button className="text-white">
              <IoSearchOutline className="text-[25px]" />
            </button>
            <button className="text-white">
              <IoBagOutline className="text-[25px]" />
            </button>
            <button className="text-white">
              <IoNotifications className="text-[25px]" />
            </button>
            <button className="text-white">
              <CgProfile className="text-[25px]" />
            </button>
            <button
              className="text-white p-2 focus:outline-none focus:bg-gray-600 md:hidden"
              onClick={toggleSidebar}
            >
              <IoMenu className="text-[25px]" />
            </button>
          </div>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-75"
          onClick={toggleSidebar}
        >
          <div className="fixed inset-y-0 right-0 w-64 bg-white p-4">
            <Link to="" className="block py-2">
              Boy
            </Link>
            <Link to="" className="block py-2">
              Girl
            </Link>
            <Link to="" className="block py-2">
              Kid
            </Link>
            <Link to="" className="block py-2">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default navbar;

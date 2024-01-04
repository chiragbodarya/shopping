import React, { useState } from "react";

const navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="bg-[#4F80E1] h-[65px] flex items-center fixed w-[100%]">
      <div className="flex items-center justify-between mx-auto w-[100%] max-w-[1250px]">
        <div className="flex items-center justify-between w-[100%] space-x-4">
          <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-bold">
            Bodary's
          </div>
          <ul className="hidden md:flex items-center space-x-4">
            <li className="text-white">Boy</li>
            <li className="text-white">Girl</li>
            <li className="text-white">Kid</li>
            <li className="text-white">Contact</li>
          </ul>
          <div className="flex items-center space-x-4">
            <button className="text-white hidden md:block">Search</button>
            <button className="text-white hidden md:block">Bag</button>
            <button className="text-white hidden md:block">Notification</button>
            <button className="text-white">Profile</button>
          </div>
          <button
            className="text-white p-2 focus:outline-none focus:bg-gray-600 md:hidden"
            onClick={toggleSidebar}
          >
            Open Sidebar
          </button>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-75"
          onClick={toggleSidebar}
        >
          <div className="fixed inset-y-0 right-0 w-64 bg-white p-4">
            <a href="#" className="block py-2">
              Boy
            </a>
            <a href="#" className="block py-2">
              Girl
            </a>
            <a href="#" className="block py-2">
              Kid
            </a>
            <a href="#" className="block py-2">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default navbar;

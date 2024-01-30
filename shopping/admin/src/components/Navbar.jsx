import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full h-[60px] bg-gray-800">
      <div className="container mx-auto h-full">
        <div className="flex justify-between items-center px-5 sm:px-10 md:px-14 lg:px-16 xl:px-20 h-full">
          <p className="text-[20px] text-[#fff] font-bold capitalize">
            shopping
          </p>
          <div className="flex items-center gap-5">
            <p className="capitalize text-[#fff] text-[15px] font-swemibold">
              use name
            </p>
            <div className="relative">
              <button
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 focus:outline-none"
                onClick={toggleDropdown}
              >
                <img src="./profile-img.webp" alt="" />
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

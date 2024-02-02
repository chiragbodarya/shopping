import React, { useState } from "react";
import { HiShoppingBag } from "react-icons/hi";

const Dropdown = ({ icon, label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 focus:outline-none"
      >
        <span className="mr-2">{icon}</span>
        <span>{label}</span>
        <svg
          className={`w-4 h-4 ml-auto transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full bg-white border border-gray-200 rounded shadow-lg">
          {children}
        </div>
      )}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="bg-gray-100 p-4">
      <Dropdown icon={<HiShoppingBag />} label="E-commerce">
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
          Products
        </a>
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
          Sales
        </a>
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
          Refunds
        </a>
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
          Shipping
        </a>
      </Dropdown>
    </div>
  );
};

export default Sidebar;

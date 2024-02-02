import React from "react";
import Dropdown from './Dropdown'

const Sidebar = () => {
  return (
    <div className="bg-gray-200 h-full w-64 p-4">
      <div className="h-full flex flex-col justify-between text-gray-800">
        <Dropdown />
      </div>
    </div>
  );
};

export default Sidebar;

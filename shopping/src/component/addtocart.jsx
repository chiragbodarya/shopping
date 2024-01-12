import React from "react";
import { IoClose } from "react-icons/io5";

const addtocart = () => {
  return (
    <div className="w-[100%] max-w-96 bg-[#e8eefa] min-h-[100vh]">
      <div className="flex justify-between items-center mx-4 py-4">
        <div>
          <span className="text-[28px] font-bold capitalize">shopping bag</span>
          <span className="text-[18px] text-[#696969] ml-3">
            (<span>2 items</span>)
          </span>
        </div>
        <p className="text-[#303030] text-[20px]">
          <IoClose />
        </p>
      </div>
      <hr className="bg-gray-900 h-0.5" />
      <div className="p-5 w-[100%]">
        <div className="flex gap-5">
          <img src="/img/lengha_1.webp" alt="" className="w-[30%]" />
          <div>
            <p className="text-[20px] font-bold text-[#000]">
              pink moti and colorfull handwork
            </p>
            <p className="inline-block text-[20px] font-semibold text-[#4F80E1]">
              $123
            </p>
          </div>
        </div>
        <p className="border-t-2 border-[#000] my-4" />
      </div>
    </div>
  );
};

export default addtocart;

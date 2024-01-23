import React from "react";
import { IoClose } from "react-icons/io5";
import Quantitybox from "../component/quantitybox";

const addtocart = () => {
  return (
    <div className="w-[100%] max-w-96 bg-[#e8eefa] min-h-[100vh] flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mx-4 py-4">
          <div>
            <span className="text-[28px] text-[#0f2757] font-bold capitalize">
              shopping bag
            </span>
            <span className="text-[18px] text-[#696969] ml-3">
              (<span>2 items</span>)
            </span>
          </div>
          <p className="text-[#303030] text-[20px]">
            <IoClose />
          </p>
        </div>
        <hr className="bg-gray-900 h-0.5" />
        <div className="overflow-y- h-[80vh]">
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
                <div className="flex justify-between items-center">
                  <Quantitybox />
                  <button className="text-capitalize text-[16px] p-1 border-2 border-[#595959]">
                    romove
                  </button>
                </div>
              </div>
            </div>
            <p className="border-t-2 border-[#000] my-4" />
          </div>
        </div>
      </div>
      <div className="p-5">
        <p className="border-t-2 border-[#000]" />
        <p className="flex justify-between items-center w-[100%] my-4">
          <span className="text-[16px] text-[#505050]">subtotal</span>
          <span className="text-[18px] font-bold text-[#000]">$45.80</span>
        </p>
        <button className="w-[100%] py-2 px-5 text-center text-[16px] sm:text-[17px] md:text-[18px] capitalize text-[#fff] bg-[#4F80E1]">
          process to checkout
        </button>
      </div>
    </div>
  );
};

export default addtocart;

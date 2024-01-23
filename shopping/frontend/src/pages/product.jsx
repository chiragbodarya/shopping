import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import Quantitybox from "../component/quantitybox"

const product = () => {
  const [activeTab, setActiveTab] = useState("description");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className="w-[100%] max-w-[1250px] mx-auto p-5">
      <div className="block md:flex justify-center md:gap-5 lg:gap-7 xl:gap-10">
        <div className="w-[100%] md:w-[50%]">
          <img src="/img/swiper_img_5.jpg" alt="" className="w-[100%]" />
        </div>
        <div className="w-[100%] md:w-[50%]">
          <p className="text-[18px] font-medium text-[#707070] uppercase">
            lengha
          </p>
          <p className="text-[22px] font-bold capitalize pt-2">
            pink gret lengha
          </p>
          <div className="flex justify-between pt-2">
            <div className="gap-3 flex items-end">
              <span className="inline-block text-[20px] font-semibold text-[#000]">
                $1234
              </span>
              <span className="inline-block text-[16px] font-semibold text-[#707070] line-through decoration-red-900 decoration-2">
                $4000
              </span>
              <span className="inline-block text-[20px] font-semibold text-[#000]">
                60%
              </span>
            </div>
            <p>( in stock )</p>
          </div>
          <p className="my-3 border-t-2 border-[#787878]" />
          <div>
            <p className="text-[20px] text-semibold uppercase">color</p>
            <div className="flex items-center gap-5 py-3">
              <p className="bg-red-800 rounded-full w-10 h-10"></p>
              <p className="bg-blue-800 rounded-full w-10 h-10"></p>
              <p className="bg-green-800 rounded-full w-10 h-10"></p>
            </div>
          </div>
          <p className="my-3 border-t-2 border-[#787878]" />
          <div className="flex justify-between items-center">
            <p className="text-[18px] capitalize">quantity</p>
            <Quantitybox />
          </div>
          <button className="w-[100%] bg-[#4F80E1] text-center py-3 mt-3 rounded-[5px] text-[#fff] capitalize font-semibold">
            add to cart
          </button>
          <div className="flex items-center gap-5">
            <p>no return</p>
            <p>online pyment</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex border-b">
          <button
            onClick={() => handleTabClick("description")}
            className={`px-4 py-2 capitalize ${
              activeTab === "description" ? "border-b-2 border-blue-500" : ""
            }`}
          >
            Description
          </button>
          <button
            onClick={() => handleTabClick("policy")}
            className={`px-4 py-2 capitalize ${
              activeTab === "policy" ? "border-b-2 border-blue-500" : ""
            }`}
          >
            Shopping & return
          </button>
        </div>
        <div className="mt-4">
          {activeTab === "description" && (
            <div>
              {/* Content for the Description tab */}
              <p className="text-[18px] py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                eligendi illo neque dignissimos nisi libero laboriosam cum sed
                autem. Officia?
              </p>
              <ul className="list-outside list-disc">
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          )}
          {activeTab === "policy" && (
            <div>
              {/* Content for the Policy tab */}
              <p>Policy content goes here.</p>
            </div>
          )}
        </div>
      </div>
      <p className="my-7 border-t-2 border-[#787878]" />
      <div className="block md:flex justify-between">
        <div className="w-[100%]">
          <p className="text-[24px] capitalize pb-2">over all retting</p>
          <div className="flex items-end pb-8">
            <FaStar className="text-[#FFFF33] h-[25px] w-[25px]" />
            <p className="text-[22px] md:text-[28px] lg:text-[32px] font-bold pl-2">
              4.8
            </p>
            <p className="pl-4">
              <p className="text-[16px] text-[#202020] capitalize font-semibold">
                30 out of 32(98%)
              </p>
              <p className="text-[14px] text-[#383838] font-semibold capitalize">
                customer recommand this propduct
              </p>
            </p>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <FaStar className="text-[#FFFF33] h-[25px] w-[25px]" />
              <p className="text-[16px] text-[#202020] capitalize font-semibold">
                5
              </p>
              <p className="bg-[#C8C8C8] rpunded-[20px] w-[70%] h-1 mx-2"></p>
              <p className="text-[16px] text-[#202020] capitalize font-semibold">
                23
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <FaStar className="text-[#FFFF33] h-[25px] w-[25px]" />
              <p className="text-[16px] text-[#202020] capitalize font-semibold">
                4
              </p>
              <p className="bg-[#C8C8C8] rpunded-[20px] w-[70%] h-1 mx-2"></p>
              <p className="text-[16px] text-[#202020] capitalize font-semibold">
                10
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <FaStar className="text-[#FFFF33] h-[25px] w-[25px]" />
              <p className="text-[16px] text-[#202020] capitalize font-semibold">
                3
              </p>
              <p className="bg-[#C8C8C8] rpunded-[20px] w-[70%] h-1 mx-2"></p>
              <p className="text-[16px] text-[#202020] capitalize font-semibold">
                4
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <FaStar className="text-[#FFFF33] h-[25px] w-[25px]" />
              <p className="text-[16px] text-[#202020] capitalize font-semibold">
                2
              </p>
              <p className="bg-[#C8C8C8] rpunded-[20px] w-[70%] h-1 mx-2"></p>
              <p className="text-[16px] text-[#202020] capitalize font-semibold">
                0
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <FaStar className="text-[#FFFF33] h-[25px] w-[25px]" />
              <p className="text-[16px] text-[#202020] capitalize font-semibold">
                1
              </p>
              <p className="bg-[#C8C8C8] rpunded-[20px] w-[70%] h-1 mx-2"></p>
              <p className="text-[16px] text-[#202020] capitalize font-semibold">
                0
              </p>
            </div>
          </div>
        </div>
        <p className="w-0.5 bg-[#A9A9A9] hidden md:block mx-10"></p>
        <div className="w-[100%] pt-5 md:pt-0">
          <p className="text-[24px] capitalize pb-2">review this product</p>
          <p className="flex gap-2 items-center">
            <FaStar className="text-[#BEBEBE] h-[35px] w-[35px]" />
            <FaStar className="text-[#BEBEBE] h-[35px] w-[35px]" />
            <FaStar className="text-[#BEBEBE] h-[35px] w-[35px]" />
            <FaStar className="text-[#BEBEBE] h-[35px] w-[35px]" />
            <FaStar className="text-[#BEBEBE] h-[35px] w-[35px]" />
          </p>
          <div className="flex flex-col pt-5">
            <label
              htmlFor=""
              className="text-[16px] text-[#202020] capitalize font-semibold"
            >
              best part of this product
            </label>
            <input
              type="text"
              className="border-2 border-[#696969] rounded-[2px] p-1"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor=""
              className="text-[16px] text-[#202020] capitalize font-semibold"
            >
              description
            </label>
            <textarea
              name="description"
              id=""
              cols="10"
              rows="5"
              className="border-2 border-[#696969] rounded-[2px] p-1"
            ></textarea>
          </div>
        </div>
        <div></div>
      </div>
      <p className="my-7 border-t-2 border-[#787878]" />
      <div>
        <p className="text-[22px] md:text-[28px] lg:text-[32px] font-bold capitalize">
          customer reviews
        </p>
        <div>
          <p className="flex gap-2 items-center">
            <FaStar className="text-[#FFFF33] h-[35px] w-[35px]" />
            <FaStar className="text-[#FFFF33] h-[35px] w-[35px]" />
            <FaStar className="text-[#FFFF33] h-[35px] w-[35px]" />
            <FaStar className="text-[#FFFF33] h-[35px] w-[35px]" />
            <FaStar className="text-[#FFFF33] h-[35px] w-[35px]" />
          </p>
          <p className="text-[28px] text-[#181818] capitalize font-semibold">
            review title
          </p>
          <p className="pt-3">
            <span className="text-[22px] text-[#202020] capitalize font-semibold">
              use name
            </span>
            <span className="text-[16px] text-[#383838] font-semibold pl-4">
              30 july 2023
            </span>
          </p>
          <p className="text-[16px] text-[#383838] font-semibold pb-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
            minus eum accusamus nostrum, totam magni aliquid, laudantium ea
            porro reiciendis quae, sint dolorem distinctio velit dicta magnam
            facere id voluptatem quasi error esse eveniet.
          </p>
          <p className="flex items-center">
            <AiFillLike className="text-[#383838] w-[30px] h-[30px]" />
            <span className="text-[16px] text-[#383838] font-semibold pl-4">
              12 person
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default product;

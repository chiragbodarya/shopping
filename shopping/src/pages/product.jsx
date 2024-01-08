import React, { useState } from "react";

const product = () => {
  const [number, setNumber] = useState(1);

  const handleSubtract = () => {
    setNumber((prevNumber) => Math.max(prevNumber - 1, 0));
  };

  const handleAdd = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  const handleChange = (event) => {
    const inputValue = Number(event.target.value);
    setNumber(isNaN(inputValue) ? 0 : Math.max(inputValue, 0));
  };

  const [activeTab, setActiveTab] = useState("description");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <>
      <div className="block md:flex justify-center gap-5 px-5 w-[100%] max-w-[1250px]">
        <div className="">
          <img src="/img/swiper_img_5.jpg" alt="" className="w-[100%]" />
        </div>
        <div>
          <p>lengha</p>
          <p>pink gret lengha</p>
          <div>
            <span className="inline-block text-[20px] font-semibold text-[#000]">
              $1234
            </span>
            <span className="inline-block text-[16px] font-semibold text-[#000] px-2 line-through decoration-red-900 decoration-2">
              $4000
            </span>
            <span className="inline-block text-[20px] font-semibold text-[#000]">
              60%
            </span>
            <span>in stock</span>
          </div>
          <hr />
          <div>
            <p>color</p>
            <div className="flex items-center gap-5">
              <p className="bg-red-800 rounded-full w-6 h-6"></p>
              <p className="bg-blue-800 rounded-full w-6 h-6"></p>
              <p className="bg-green-800 rounded-full w-6 h-6"></p>
            </div>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <p>quantity</p>
            <div className="border-2 borde-[#000] flex items-center">
              <button onClick={handleSubtract} className="border-2">
                -1
              </button>
              <input
                type="number"
                value={number}
                onChange={handleChange}
                pattern="[0-9]{5}"
                className="border-2"
              />
              <button onClick={handleAdd} className="border-2">
                +1
              </button>
            </div>
          </div>
          <div className="">
            <button>add to cart</button>
          </div>
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
            className={`px-4 py-2 ${
              activeTab === "description" ? "border-b-2 border-blue-500" : ""
            }`}
          >
            Description
          </button>
          <button
            onClick={() => handleTabClick("policy")}
            className={`px-4 py-2 ${
              activeTab === "policy" ? "border-b-2 border-blue-500" : ""
            }`}
          >
            Policy
          </button>
        </div>
        <div className="mt-4">
          {activeTab === "description" && (
            <div>
              {/* Content for the Description tab */}
              <p>Description content goes here.</p>
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
      <div></div>
    </>
  );
};

export default product;
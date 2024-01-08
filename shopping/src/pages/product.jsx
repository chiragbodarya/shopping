import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const product = () => {
  const [number, setNumber] = useState(1);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

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
      <div className="block md:flex justify-center md:gap-5 lg:gap-7 xl:gap-10 px-5 w-[100%] max-w-[1250px] mx-auto">
        <div className="w-[100%] md:w-[50%]">
          {/* <img src="/img/swiper_img_5.jpg" alt="" className="w-[100%]" /> */}
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
            </SwiperSlide>
          </Swiper>
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

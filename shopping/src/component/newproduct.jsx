import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FcLike } from "react-icons/fc";
import { IoBagHandleSharp } from "react-icons/io5";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const newproduct = () => {
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const newproduct = [
    {
      id: 1,
      product_img: "/img/lengha_1.webp",
      product_name: "lengha",
      price: 1234,
    },
    {
      id: 2,
      product_img: "/img/lengha_2.jpg",
      product_name: "lengha",
      price: 1234,
    },
    {
      id: 3,
      product_img: "/img/lengha_1.webp",
      product_name: "lengha",
      price: 1234,
    },
    {
      id: 4,
      product_img: "/img/lengha_2.jpg",
      product_name: "lengha",
      price: 1234,
    },
    {
      id: 5,
      product_img: "/img/lengha_1.webp",
      product_name: "lengha",
      price: 1234,
    },
    {
      id: 6,
      product_img: "/img/lengha_2.jpg",
      product_name: "lengha",
      price: 1234,
    },
    {
      id: 7,
      product_img: "/img/lengha_1.webp",
      product_name: "lengha",
      price: 1234,
    },
    {
      id: 8,
      product_img: "/img/lengha_2.jpg",
      product_name: "lengha",
      price: 1234,
    },
    {
      id: 9,
      product_img: "/img/lengha_1.webp",
      product_name: "lengha",
      price: 1234,
    },
    {
      id: 10,
      product_img: "/img/lengha_2.jpg",
      product_name: "lengha",
      price: 1234,
    },
    {
      id: 11,
      product_img: "/img/lengha_1.webp",
      product_name: "lengha",
      price: 1234,
    },
  ];
  return (
    <>
      <Swiper
        navigation={true}
        slidesPerView={2.5}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 3.5,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 4.5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5.5,
            spaceBetween: 20,
          },
          1240: {
            slidesPerView: 6.5,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {newproduct.map((product) => (
          <SwiperSlide key={product.id}>
            <div
              className="max-w-sm rounded overflow-hidden shadow-lg transition-transform transform hover:scale-105 relative"
              onMouseEnter={() => setHoveredProductId(product.id)}
              onMouseLeave={() => setHoveredProductId(null)}
            >
              <img
                src={product.product_img}
                alt={product.product_name}
                className="w-full h-64 object-cover"
              />
              <div className="px-4 py-2">
                <p className="font-bold text-xl pb-2">{product.product_name}</p>
                <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  ${product.price}
                </p>
              </div>

              {hoveredProductId === product.id && (
                <div className="absolute inset-0 flex justify-around items-center bg-gray-100 bg-opacity-75">
                  <button className="text-blue-500 hover:text-blue-700">
                    <FcLike className="text-[#000] border-2 border-[#000]" />
                  </button>
                  <button className="text-green-500 hover:text-green-700">
                    <IoBagHandleSharp />
                  </button>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
        <div class="swiper-button-next">left</div>
        <div class="swiper-button-prev">sd</div>
      </Swiper>
    </>
  );
};

export default newproduct;

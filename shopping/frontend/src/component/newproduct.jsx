import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import ProductBox from "./comman/productbox";

const newproduct = () => {
  const newproduct = [
    {
      id: 1,
      product_img: "/img/lengha_1.webp",
      product_name: "lengha",
      price: 1234,
      original_price: 3000,
      discount: 30,
      delivery_date: 10,
    },
    {
      id: 2,
      product_img: "/img/lengha_2.jpg",
      product_name: "lengha",
      price: 1234,
      original_price: 3000,
      discount: 30,
      delivery_date: 10,
    },
    {
      id: 3,
      product_img: "/img/lengha_1.webp",
      product_name: "lengha",
      price: 1234,
      original_price: 3000,
      discount: 30,
      delivery_date: 10,
    },
    {
      id: 4,
      product_img: "/img/lengha_2.jpg",
      product_name: "lengha",
      price: 1234,
      original_price: 3000,
      discount: 30,
      delivery_date: 10,
    },
    {
      id: 5,
      product_img: "/img/lengha_1.webp",
      product_name: "lengha",
      price: 1234,
      original_price: 3000,
      discount: 30,
      delivery_date: 10,
    },
    {
      id: 6,
      product_img: "/img/lengha_2.jpg",
      product_name: "lengha",
      price: 1234,
      original_price: 3000,
      discount: 30,
      delivery_date: 10,
    },
    {
      id: 7,
      product_img: "/img/lengha_1.webp",
      product_name: "lengha",
      price: 1234,
      original_price: 3000,
      discount: 30,
      delivery_date: 10,
    },
    {
      id: 8,
      product_img: "/img/lengha_2.jpg",
      product_name: "lengha",
      price: 1234,
      original_price: 3000,
      discount: 30,
      delivery_date: 10,
    },
    {
      id: 9,
      product_img: "/img/lengha_1.webp",
      product_name: "lengha",
      price: 1234,
      original_price: 3000,
      discount: 30,
      delivery_date: 10,
    },
    {
      id: 10,
      product_img: "/img/lengha_2.jpg",
      product_name: "lengha",
      price: 1234,
      original_price: 3000,
      discount: 30,
      delivery_date: 10,
    },
    {
      id: 11,
      product_img: "/img/lengha_1.webp",
      product_name: "lengha",
      price: 1234,
      original_price: 3000,
      discount: 30,
      delivery_date: 10,
    },
  ];
  return (
    <>
      <p className="text-center text-[#000] capitalize font-bold text-[32px] pb-5">
        New Product
      </p>
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
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4.5,
            spaceBetween: 20,
          },
          1240: {
            slidesPerView: 5.5,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {newproduct.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductBox product={product} />
          </SwiperSlide>
        ))}
        <SwiperSlide className="">
          <Link to={"/"} className="cursor-pointer h-96">
            <div className="text-[35px] text-center">view all</div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default newproduct;

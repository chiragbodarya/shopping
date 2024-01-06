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
            <ProductBox product={product} />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <Link to={"/"}>view all</Link>
        </SwiperSlide>
        <div className="swiper-button-next">left</div>
        <div className="swiper-button-prev">sd</div>
      </Swiper>
    </>
  );
};

export default newproduct;

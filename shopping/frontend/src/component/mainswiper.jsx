import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper/modules";

const mainswiper = () => {
  const swiper_img = [
    {
      id: 1,
      img: "/img/swiper_img_1.webp",
      title: "title",
      subtitle: "this product is so goods",
    },
    {
      id: 2,
      img: "/img/swiper_img_2.webp",
      title: "title",
      subtitle: "this product is so goods",
    },
    {
      id: 3,
      img: "/img/swiper_img_3.webp",
      title: "title",
      subtitle: "this product is so goods",
    },
    {
      id: 4,
      img: "/img/swiper_img_4.jpg",
      title: "title",
      subtitle: "this product is so goods",
    },
    {
      id: 5,
      img: "/img/swiper_img_5.jpg",
      title: "title",
      subtitle: "this product is so goods",
    },
    {
      id: 6,
      img: "/img/swiper_img_6.webp",
      title: "title",
      subtitle: "this product is so goods",
    },
    {
      id: 7,
      img: "/img/swiper_img_7.jpg",
      title: "title",
      subtitle: "this product is so goods",
    },
  ];
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper w-[100%] h-[50vh] lg:h-[70vh] overflow-hidden"
      >
        {swiper_img.map((swiper) => (
          <SwiperSlide key={swiper.id}>
            <div className="relative w-[100%] h-[100%] bg-no-repeat ">
              <img src={swiper.img} alt="" className="w-[100%] h-[100%]" />
              <div className="absolute bottom-10 md:bottom-14 lg:bottom-28 left-10 md:left-14 lg:left-32">
                <p className="text-[#fff] text-[52px] md:text-[64px]">title</p>
                <p className="text-[#fff] text-[32px] md:text-[52px]">
                  subtitle
                </p>
                <button className="bg-[#fff] px-5 py-2 text-[#000] text-[20px] capitalize">
                  shop now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default mainswiper;

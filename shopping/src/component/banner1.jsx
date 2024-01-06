import React from "react";

const banner1 = () => {
  return (
    <>
      <div className="relative h-[60vh] px-5 md:px-10 lg:px-20">
        <img
          src="/img/swiper_img_5.jpg"
          alt=""
          className="absolute top-0 left-0 w-[100%] h-[100%] -z-10"
        />
        <div className="w-[100%] sm:w-[70%] md:w-[60%] lg:w-[40%] pt-[10%]">
          <p className="text-[#000] text-[32px] uppercase font-bold">
            New collection
          </p>
          <p className="text-[#000] text-[20px] pt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, voluptatibus nesciunt alias qui voluptate eos excepturi
            quas dolor fugit, delectus deleniti? Praesentium dolor sint ipsam,
            voluptatibus ipsa et qui modi?
          </p>
          <button className="bg-[#fff] px-5 py-2 text-[#000] text-[20px] capitalize mt-5">
            shop now
          </button>
        </div>
      </div>
    </>
  );
};

export default banner1;

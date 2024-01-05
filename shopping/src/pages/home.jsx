import React from "react";
import MainSwiper from "../component/mainswiper";
import NewProduct from "../component/newproduct";
import CategoryBox from "../component/categorybox";
import Banner1 from "../component/banner1";

const home = () => {
  return (
    <>
      <MainSwiper />
      <div className="max-w-[1250px] mx-auto mt-7 md:mt-10 lg:mt-14">
        <p className="text-center text-[#000] capitlize font-bold text-[32px] pb-5">
          New Product
        </p>
        <NewProduct />
      </div>
      <div className="max-w-[1250px] mx-auto mt-7 md:mt-10 lg:mt-14">
        <CategoryBox />
      </div>
      <Banner1/>
    </>
  );
};

export default home;

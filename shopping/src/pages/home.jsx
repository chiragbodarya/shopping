import React from "react";
import MainSwiper from "../component/mainswiper";
import NewProduct from "../component/newproduct";
import CategoryBox from "../component/categorybox";
import Banner1 from "../component/banner1";
import TopSelling from "../component/topselling";

const home = () => {
  return (
    <>
      <MainSwiper />
      <div className="max-w-[1250px] mx-auto mt-7 md:mt-10 lg:mt-14">
        <NewProduct />
      </div>
      <div className="max-w-[1250px] mx-auto my-7 md:my-10 lg:my-14">
        <CategoryBox />
      </div>
      <Banner1 />
      <div className="max-w-[1250px] mx-auto my-7 md:my-10 lg:my-14">
        <TopSelling />
      </div>
    </>
  );
};

export default home;

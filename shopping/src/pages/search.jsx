import React from "react";
import { IoSearchOutline } from "react-icons/io5";

import ProductBox from "../component/comman/productbox";

const search = () => {
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
      <div className="px-5 py-5 mx-4 md:mx-auto max-[1250px]:mx-auto w-[100%] max-w-[1250px]">
        <div className="border-2 border-[#000] rounded-full flex items-center gap-5 px-5 py-1">
          <IoSearchOutline className="text-[25px]" />
          <input
            className="text-white focus:outline-none text-red-900"
            placeholder="Search Your Product"
          />
        </div>
        <div className="flex pt-10">
          <div className="w-96">
            
          </div>
          <div className="w-[100%]">
            <div className="grid grid-cols-4 grid-rows-auto gap-3">
              {newproduct.map((product) => (
                <ProductBox key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default search;

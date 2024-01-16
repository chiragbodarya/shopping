import React from "react";
import ProductBox from "./comman/productbox";

const topselling = () => {
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
        top selling
      </p>
      <div className="grid grid-cols-6 grid-rows-2 gap-3">
        {newproduct.map((product) => (
          <ProductBox key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default topselling;

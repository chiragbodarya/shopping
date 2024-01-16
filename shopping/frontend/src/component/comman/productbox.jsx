import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import { IoBagHandleSharp } from "react-icons/io5";

const ProductBox = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="max-w-sm h-96 rounded overflow-hidden transition-transform transform hover:scale-105 relative border cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={product.product_img}
        alt={product.product_name}
        className="w-[100%] h-[80%] object-cover"
      />
      <p className="absolute top-[5%] left-0 bg-green-400 px-2 pl-5 rounded-r-full capitalize font-semibold">
        new
      </p>
      <p className="absolute top-[70%] left-0 bg-orange-500 px-2 pl-5 rounded-r-full capitalize font-semibold">
        delivery in <span>{product.delivery_date}</span> day
      </p>
      <div className="px-4 py-2 h-[20%]">
        <p className="font-bold text-xl pb-1">{product.product_name}</p>
        <span className="inline-block text-[20px] font-semibold text-[#000]">
          ${product.price}
        </span>
        <span className="inline-block text-[16px] font-semibold text-[#000] px-2 line-through decoration-red-900 decoration-2">
          ${product.original_price}
        </span>
        <span className="inline-block text-[20px] font-semibold text-[#000]">
          {product.discount}%
        </span>
      </div>

      {hovered && (
        <div className="absolute inset-0 flex justify-center gap-5 items-center pt-32">
          <button className="text-white hover:text-red-700 bg-gray-300 bg-opacity-80 rounded-full p-3">
            <FcLike className="text-[20px]" />
          </button>
          <button className="text-[#000] hover:text-green-700 bg-gray-300 bg-opacity-80 rounded-full p-3">
            <IoBagHandleSharp className="text-[20px]" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductBox;

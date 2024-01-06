import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import { IoBagHandleSharp } from "react-icons/io5";

const ProductBox = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg transition-transform transform hover:scale-105 relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
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

      {hovered && (
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
  );
};

export default ProductBox;

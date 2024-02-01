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
        <div className="flex pt-10 gap-10">
          <div className="w-80">
            <div class="bg-gray-100 h-[100%] flex justify-center items-start">
              <div class="bg-white p-6 rounded shadow-md w-80">
                <h2 class="text-lg font-semibold mb-4">Filter Products</h2>
                <div class="mb-4">
                  <h3 class="text-gray-700 font-medium mb-2">Price Range</h3>
                  <div class="flex items-center">
                    <span class="text-gray-500 mr-2">Min: $1000</span>
                    <input
                      type="range"
                      min="1000"
                      max="50000"
                      step="1000"
                      class="w-full"
                    />
                    <span class="text-gray-500 ml-2">Max: $50000</span>
                  </div>
                </div>
                <div class="mb-4 flex flex-col items-start">
                  <h3 class="text-gray-700 font-medium mb-2">Delivery Time</h3>
                  <label class="inline-flex items-center">
                    <input
                      type="checkbox"
                      class="form-checkbox h-5 w-5 text-blue-500"
                    />
                    <span class="ml-2">Within 10 days</span>
                  </label>
                  <label class="inline-flex items-center">
                    <input
                      type="checkbox"
                      class="form-checkbox h-5 w-5 text-blue-500"
                    />
                    <span class="ml-2">Within 12 days</span>
                  </label>
                  <label class="inline-flex items-center">
                    <input
                      type="checkbox"
                      class="form-checkbox h-5 w-5 text-blue-500"
                    />
                    <span class="ml-2">Within 20 days</span>
                  </label>
                </div>
                <div class="mb-4 flex flex-col items-start">
                  <h3 class="text-gray-700 font-medium mb-2">Cloth Type</h3>
                  <label class="inline-flex items-center">
                    <input
                      type="checkbox"
                      class="form-checkbox h-5 w-5 text-blue-500"
                    />
                    <span class="ml-2">Cotton</span>
                  </label>
                  <label class="inline-flex items-center">
                    <input
                      type="checkbox"
                      class="form-checkbox h-5 w-5 text-blue-500"
                    />
                    <span class="ml-2">Velvet</span>
                  </label>
                  <label class="inline-flex items-center">
                    <input
                      type="checkbox"
                      class="form-checkbox h-5 w-5 text-blue-500"
                    />
                    <span class="ml-2">Net</span>
                  </label>
                </div>
                <div class="text-center">
                  <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
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

import React from "react";
import { Link } from "react-router-dom";

import "../../App.css";

const forgotpassword = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log("login success");
  };
  return (
    <>
      <div className="relative">
        <div className="absolute top-0 left-0 -z-10">
          <img
            src="/img/bg-img.jpg"
            alt=""
            className="opacity-70 w-[100vw] h-[100vh]"
          />
        </div>
        <div className="flex justify-center items-center w-[100%] h-[100vh]">
          <div className="flex flex-col items-center justify-center 2xl:w-[750px] lg:w-[650px] md:w-[500px] lg:px-20 md:px-10 sm:px-5 px-5 lg:py-12 md:py-7 sm:py-5 backdrop-blur-md border border-black rounded-[20px]">
            <p className="text-[#4F80E1] text-[40px] text-center">Sign In</p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center w-[95%] mt-5"
            >
              <input
                type="text"
                placeholder="Enter email/mobile number"
                className="p-4 mx-4 mb-3 rounded border-none bg-[#1F2937] text-white placeholder-gray-500 w-[100%]"
              />
              <button
                type="submit"
                className="bg-[#4F80E1] text-[#000000] text-[22px] p-3 mt-10 rounded border-none text-white cursor-pointer w-[100%] capitalize"
              >
                sand otp
              </button>
              <Link
                to={"/registration"}
                className="text-[20px] text-[#4F80E1] text-center w-[100%] px-5 mt-10"
              >
                Create New Account
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default forgotpassword;

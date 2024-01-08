import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../App.css";

const registration = () => {
    const [agreed, setAgreed] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!agreed) {
            alert("Please agree to the User Agreement");
            return;
        }
        // Add your form submission logic here
        console.log('Form submitted!');
    };
    return (
      <div>
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
              <p className="text-[#4F80E1] text-[40px] text-center">Sign Up</p>
              <div className="flex flex-col items-center w-[95%] mt-5">
                <form onSubmit={handleSubmit} className="w-[100%]">
                  <div className="w-[100%] flex flex-col items-center gap-3">
                    <input
                      type="text"
                      className=" p-4 mx-4 rounded border-none bg-[#1F2937] text-white placeholder-gray-500 w-[100%]"
                      placeholder="Enter Frist Name"
                    />
                    <input
                      type="text"
                      className=" p-4 mx-4 rounded border-none bg-[#1F2937] text-white placeholder-gray-500 w-[100%]"
                      placeholder="Enter Last Name"
                    />
                    <input
                      type="email"
                      className=" p-4 mx-4 rounded border-none bg-[#1F2937] text-white placeholder-gray-500 w-[100%]"
                      placeholder="Enter Email Address"
                    />
                    <input
                      type="number"
                      className=" p-4 mx-4 rounded border-none bg-[#1F2937] text-white placeholder-gray-500 w-[100%]"
                      placeholder="Enter Mobile number"
                    />
                    <input
                      type="password"
                      className=" p-4 mx-4 rounded border-none bg-[#1F2937] text-white placeholder-gray-500 w-[100%]"
                      placeholder="Enter Password"
                    />
                    <input
                      type="password"
                      className=" p-4 mx-4 rounded border-none bg-[#1F2937] text-white placeholder-gray-500 w-[100%]"
                      placeholder="Re-enter Password"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-[#4F80E1] text-[#000000] text-[22px] p-3 mt-10 rounded border-none text-white cursor-pointer w-[100%]"
                  >
                    Submit
                  </button>
                </form>
              </div>
              <p className="text-[20px] text-[#000000] text-center w-[100%] px-5 mt-10">
                I have Already acoount{" "}
                <Link to={"/login"} className="text-[20px] text-[#4F80E1]">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default registration;
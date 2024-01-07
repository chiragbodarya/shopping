import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../App.css";

const registration = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [agreed, setAgreed] = useState(false);

    const switchTab = (tab) => {
        setActiveTab(tab);
    };

    const handleAgreeChange = () => {
        setAgreed(!agreed);
    };

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
            <div className="">
                <div className="absolute top-0 left-0 -z-10">
                    <img
                        src="/img/bg-img.jpg"
                        alt=""
                        className="opacity-20 w-[100vw] h-[100vh]"
                    />
                </div>
                <div className="absolute top-0 left-0 w-[100vw] h-[100vh] bg-[#464646] -z-20"></div>
                <div className="flex justify-center items-center w-[100%] h-[80vh]">
                    <div className="flex flex-col items-center justify-center 2xl:w-[450px] lg:w-[350px] md:w-[300px]">
                        <p className="text-[#fff] text-[40px] text-center">Sign Up</p>
                        <div className="flex flex-col items-center w-[95%] mt-5">
                            <div className="flex mb-4 w-[100%]">
                                <button
                                    className={`${activeTab === 1 ? "tab1-background" : "tab2-background"
                                        } text-white px-4 py-2 rounded-l cursor-pointer w-[50%]`}
                                    onClick={() => switchTab(1)}
                                >
                                    Email
                                </button>
                                <button
                                    className={`${activeTab === 2 ? "tab1-background" : "tab2-background"
                                        } text-white px-4 py-2 rounded-r cursor-pointer w-[50%]`}
                                    onClick={() => switchTab(2)}
                                >
                                    Mobile
                                </button>
                            </div>
                            <form onSubmit={handleSubmit} className="w-[100%]">
                                {activeTab === 1 && (
                                    <div className="w-[100%] flex flex-col items-center gap-3">
                                        <input
                                            type="email"
                                            className=" p-4 mx-4 rounded border-none bg-[#1F2937] text-white placeholder-gray-500 w-[100%]"
                                            placeholder="Enter email"
                                        />
                                        <input
                                            type="password"
                                            className=" p-4 mx-4 rounded border-none bg-[#1F2937] text-white placeholder-gray-500 w-[100%]"
                                            placeholder="Enter password"
                                        />
                                        <input
                                            type="password"
                                            className=" p-4 mx-4 rounded border-none bg-[#1F2937] text-white placeholder-gray-500 w-[100%]"
                                            placeholder="Re-enter password"
                                        />
                                    </div>
                                )}

                                {activeTab === 2 && (
                                    <div className="w-[100%] flex flex-col items-center gap-3">
                                        <input
                                            type="text"
                                            className=" p-4 mx-4 rounded border-none bg-[#1F2937] text-white placeholder-gray-500 w-[100%]"
                                            placeholder="Enter mobile number"
                                        />
                                        <input
                                            type="password"
                                            className=" p-4 mx-4 rounded border-none bg-[#1F2937] text-white placeholder-gray-500 w-[100%]"
                                            placeholder="Enter password"
                                        />
                                        <input
                                            type="password"
                                            className=" p-4 mx-4 rounded border-none bg-[#1F2937] text-white placeholder-gray-500 w-[100%]"
                                            placeholder="Re-enter password"
                                        />
                                    </div>
                                )}
                                <div className="flex items-center mt-4 gap-2">
                                    <input
                                        type="checkbox"
                                        id="agreeCheckbox"
                                        checked={agreed}
                                        onChange={handleAgreeChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="agreeCheckbox" className="text-white">
                                        I agree to the User Agreement & confirm I am at least 18
                                        years old
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="button-background text-[#000000] text-[22px] p-3 mt-10 rounded border-none text-white cursor-pointer w-[100%]"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                        <p className="text-[20px] text-[#000000] text-center w-[100%] px-5 mt-10">
                            I have Already acoount{" "}
                            <Link to={"/login"} className="text-[20px] text-[#00AB1C]">
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

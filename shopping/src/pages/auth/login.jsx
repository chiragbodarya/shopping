import React from 'react'
import { Link } from "react-router-dom"

import "../../App.css"

const login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your form submission logic here
        console.log("login success");
    };
    return (
        <>
            <div className=''>
                <div className='absolute top-0 left-0 -z-10'><img src="/img/bg-img.jpg" alt="" className='opacity-20 w-[100vw] h-[100vh]' /></div>
                <div className='absolute top-0 left-0 w-[100vw] h-[100vh] bg-[#464646] -z-20'></div>
                <div className='flex justify-center items-center w-[100%] h-[80vh]'>
                    <div className='flex flex-col items-center justify-center 2xl:w-[450px] lg:w-[350px] md:w-[300px]'>
                        <p className='text-[#fff] text-[40px] text-center'>Sign In</p>
                        <form onSubmit={handleSubmit} className='flex flex-col items-center w-[95%] mt-5'>
                            <input
                                type="text"
                                placeholder="Enter email/mobile number"
                                className="p-4 mx-4 mb-3 rounded border-none bg-[#1F2937] text-white placeholder-gray-500 w-[100%]"
                            />
                            <input
                                type="password"
                                placeholder="Enter password"
                                className=" p-4 mx-4 rounded border-none bg-[#1F2937] text-white placeholder-gray-500 w-[100%]"
                            />
                            <p className='text-[20px] text-[#fff] text-right w-[100%] px-5'>Forgot your password</p>
                            <button type="submit" className="button-background text-[#000000] text-[22px] p-3 mt-10 rounded border-none text-white cursor-pointer w-[100%]">
                                Submit
                            </button>
                            <Link to={"/registration"} className='text-[20px] text-[#00AB1C] text-center w-[100%] px-5 mt-10'>Create New Account</Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default login

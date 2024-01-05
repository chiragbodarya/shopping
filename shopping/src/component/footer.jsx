import React from "react";

const footer = () => {
  return (
    <>
      <footer className="bg-[#000] text-white py-8 px-5 md:px-0">
        <div className="container mx-auto max-w-[1250px] flex flex-col md:flex-row justify-between ">
          <div className="md:w-1/4 mb-4">
            <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-bold">
              Bodary's
            </div>
            <p className="mt-4 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex justify-between gap-5">
            <div className="md:w-1/4 mb-4">
              <h3 className="text-lg font-semibold mb-2">Categories</h3>
              <ul>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Boys
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Girls
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Kids
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Others
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:w-1/4 mb-4">
              <h3 className="text-lg font-semibold mb-2">Support</h3>
              <ul>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Payment Options
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/4 mb-4">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="text-gray-400">Shop Address: 123 Main St, City</p>
            <p className="text-gray-400">Email: info@example.com</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;

import React from "react";
import { FaInstagram } from "react-icons/Fa6";
import { FaFacebook } from "react-icons/Fa";
import { FaTwitter } from "react-icons/Fa";

function FooterOn() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full relative">
        <div className="bg-[#273240] w-full flex justify-center items-center py-6 ">
          <div className="max-w-screen-lg text-center text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto sm:justify-start sm:items-start justify-center items-center w-full">
            <div className="">
              <div className=" flex flex-col items-center">
                <div className="text-sm flex justify-start  uppercase text-white font-bold">
                  QUICK LINKS
                </div>
                <a className=" my-1 mt-4 text-sm block text-white" href="/#">
                  Order Free SIM
                  <span className="text-teal-600  text-xs p-1"></span>
                </a>
                <a className=" my-1 block text-white text-sm " href="/#">
                  Port In <span className="text-teal-600 text-xs p-1"></span>
                </a>
                <a className="my-1 block text-white text-sm" href="/#">
                  Why Talk Home{" "}
                </a>
                <a className="my-1 block text-white text-sm" href="/#">
                  Blog
                </a>
              </div>
            </div>
            <div className="">
              <div className=" flex flex-col items-center">
                <div className="text-sm flex justify-start  uppercase text-white font-bold">
                  SHOP
                </div>
                <a className="my-1 block text-white text-sm mt-4" href="/#">
                  Monthly Plans
                  <span className="text-teal-600 text-xs p-1"></span>
                </a>
                <a className="my-1 block text-white text-sm" href="/#">
                  PAYG Plans<span className="text-teal-600 text-xs p-1"></span>
                </a>
                <a className="my-1 block text-white text-sm" href="/#">
                  Bolt-on Data Plans
                </a>
                <a className="my-1 block text-white text-sm" href="/#">
                  International Plans
                </a>
              </div>
            </div>
            <div className="">
              <div className=" flex flex-col items-center">
                <div className="text-sm flex justify-start  uppercase text-white font-bold">
                  MY TALKHOME
                </div>
                <a className="my-1 block text-white text-sm mt-4" href="/#">
                  Login
                </a>
                <a className="my-1 block text-white text-sm" href="/#">
                  Top-up
                </a>
                <a className="my-1 block text-white text-sm" href="/#">
                  My Account
                </a>
                <a className="my-1 block text-white text-sm" href="/#">
                  Usage History
                </a>
              </div>
            </div>
            <div className="">
              <div className=" flex flex-col items-center">
                <div className="text-sm flex justify-start  uppercase text-white font-bold">
                  MY TALKHOME
                </div>
                <a className="my-1 block text-white text-sm mt-4" href="/#">
                  Login
                </a>
                <a className="my-1 block text-white text-sm" href="/#">
                  Top-up
                </a>
                <a className="my-1 block text-white text-sm" href="/#">
                  My Account
                </a>
                <a className="my-1 block text-white text-sm" href="/#">
                  Usage History
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#273240] pt-2 w-full ">
          <div
            className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
          max-w-screen-lg items-center"
          >
            <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-[85%]">
              <div className="flex flex-col md:flex-row justify-start items-center  lg:gap-3 ">
                <p className="text-white">Complaint Procedure</p>
                <p className="text-white">Privacy</p>
                <p className="text-white">Cookies</p>
                <p className="text-white">Acceptable Usage Policy</p>
                <p className="text-white">Terms</p>
              </div>
              <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex gap-3 ">
                <FaTwitter className="text-white" size={24} />

                <FaFacebook className="text-white" size={24} />

                <FaInstagram className="text-white" size={24} />
              </div>
            </div>

            <div className="flex text-white text-center justify-center lg:justify-start items-center w-[85%] ">
              © 2024 Company Name. All Rights Reserved.
            </div>
          </div>
          <div className=" hidden md:flex justify-center cursor-pointer items-center w-12 h-12 rounded-full bg-[#DDE22F] absolute bottom-6 z-20 right-12">
            <img src="/onsoftware/uparrow.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterOn;

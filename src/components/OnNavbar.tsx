import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IconContext } from "react-icons";
import { RiDownload2Line } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

const OnNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = ["Why talk home", "plans", "Rates", "Help"];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const money = [
    {
      title: "2.5",
    },
    {
      title: "5",
    },
    {
      title: "10",
    },
    {
      title: "15",
    },
    {
      title: "20",
    },
    {
      title: "25",
    },
  ];

  const [selected, setSelected] = useState(2);

  const handleSelect = (index: any) => {
    setSelected(index);
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full bg-[#2096D3] relative pb-10 overflow-hidden">
        <img
          src="/onsoftware/rightnav.png"
          className=" hidden  overflow-hidden lg:block absolute  h-[531px] -top-5  w-[531px] -left-52"
          alt=""
        />
        <img
          src="/onsoftware/leftnav.png"
          className=" hidden  lg:block absolute overflow-hidden  h-[301px]   w-[531px]  -right-[300px]"
          alt=""
        />
        <div className="flex justify-between items-center w-[75%] p-4">
          <div className="flex justify-start items-center w-[30%]">
            <img
              src="/onsoftware/logo.png"
              className="w-24 h-9  md:h-16 md:w-32"
              alt="Logo"
            />
          </div>

          {/* Desktop Menu */}
          <div className=" hidden md:flex justify-start items-center w-[70%] space-x-4">
            {navLinks.map((navLink, index) => (
              <div
                key={index}
                className="flex items-center cursor-pointer space-x-1 text-white"
              >
                <span>{navLink}</span>
                {index !== navLinks.length - 1 && (
                  <FaChevronDown size={12} className="mt-1" />
                )}
              </div>
            ))}

            <div className="flex justify-center items-center cursor-pointer gap-1">
              <RiDownload2Line className="text-white -rotate-90" size={14} />
              <p className="flex items-center space-x-1 text-white m-0">
                Sign in
              </p>
            </div>

            <div className="flex justify-center items-center gap-3">
              <button className="flex justify-center items-center font-medium text-black text-sm bg-[#dde22f] w-[90px] h-[35px]">
                TOP UP
              </button>
              <button className="flex justify-center items-center font-medium text-white bg-[#1e4f92] text-sm  w-[90px] h-[35px]">
                FREE SIM
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className=" md:hidden justify-center flex items-center relative">
            <button
              onClick={toggleMobileMenu}
              className="w-[32px] h-[32px] rounded-sm bg-[#dde22f] flex justify-center items-center"
            >
              <GiHamburgerMenu className="text-[#303030]" size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className=" block bg-[#2096D3] p-4 absolute top-16 right-2 rounded-md w-[30%]">
            {navLinks.map((navLink, index) => (
              <div
                key={index}
                className="flex items-center justify-between text-white py-2"
              >
                <span>{navLink}</span>
                {index !== navLinks.length - 1 && (
                  <IconContext.Provider value={{ size: "0.8em" }}>
                    <FaChevronDown />
                  </IconContext.Provider>
                )}
              </div>
            ))}

            <div className="flex justify-start items-center gap-1 py-2">
              <RiDownload2Line className="text-white -rotate-90" size={14} />
              <p className="flex items-center space-x-1 text-white m-0">Test</p>
            </div>

            <div className="flex flex-col  items-start gap-3 py-2">
              <button className="flex justify-center items-center text-black text-sm bg-[#dde22f] w-[90px] h-[35px]">
                Test Button
              </button>
              <button className="flex justify-center items-center text-white bg-[#1e4f92] text-sm  w-[90px] h-[35px]">
                Test Button
              </button>
            </div>
          </div>
        )}
        <div className="flex flex-col justify-center items-center w-[70%] gap-3">
          <div className="flex justify-center gap-5 items-center py-3 px-5 rounded-full bg-[#DCF2FB]">
            <img
              src="/onsoftware/starHeader.png"
              className="w-[140px] h-[16px] md:w-[210px] md:h-[24px]"
              alt=""
            />
            <p className="text-xs md:text-base font-medium">
              4.0 Rated Excellent
            </p>
          </div>
          <p className="text-[#FFFFFF] font-semibold text-center text-xl md:text-4xl">
            Enjoy Blistering-Fast 5G Connectivity
          </p>
          <p className="text-[#FFFFFF]  text-center text-lg">
            Your favourite network, now on 5G. Experience data speeds like never
            before.
          </p>
        </div>
      </div>
      <div className="md:hidden flex justify-center px-6 items-center w-full bg-[#DCF2FB]">
        <div className="flex justify-between items-center w-[70%] py-2">
          <img
            src="/onsoftware/fastmobile.png"
            className="w-[100px] h-[20px]"
            alt=""
          />
          <input
            type="checkbox"
            className="peer sr-only opacity-0"
            id="toggle"
          />
          <label
            //   for="toggle"
            className="relative flex h-5 w-9 cursor-pointer items-center rounded-full bg-gray-400 px-0.5 outline-gray-400 transition-colors before:h-4 before:w-4 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-green-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-green-500"
            //   for="toggle"
          >
            <span className="sr-only">Enable</span>
          </label>
        </div>
      </div>
      <div className="hidden md:flex justify-center items-center w-full gap-6 py-3 bg-[#DCF2FB]">
        <img
          src="/onsoftware/fastmobile.png"
          className="w-[194px] h-[33px]"
          alt=""
        />
        <div className="flex justify-center items-center gap-2 cursor-pointer">
          {money.map((item, index) => {
            return (
              <p
                key={index}
                onClick={() => handleSelect(index)}
                className={`text-black w-[40px] h-[30px] flex justify-center items-center ${
                  selected === index ? "bg-[#064F92] text-white" : "bg-white"
                }`}
              >
                £{item.title}
              </p>
            );
          })}
        </div>
        <div className="flex justify-center items-center gap-2 pl-5 ">
          <input
            type="text"
            className="w-[300px] h-[36px] bg-white outline-none pl-3 text-sm rounded-sm"
          />
          <img
            src="/onsoftware/headerarrow.png"
            className="h-[34px] w-[40px] cursor-pointer"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center items-center w-full gap-2 md:gap-6 bg-[#F5F5F5]">
        <img src="/onsoftware/convocap.png" className="w-6 h-[18px]" alt="" />
        <p className=" text-sm md:text-base tex-[#252525]  flex justify-center items-center">
          Eligible for <strong className="pl-1">special discounts </strong>
          <span className="hidden md:flex pl-1">
            {" "}
            Explore amazing offer for students.
          </span>{" "}
          <span className="cursor-pointer text-blue-600 pl-1 font-medium">
            Learn More
          </span>
        </p>
      </div>
      <div className="mt-12 justify-center gap-2 items-center flex w-full flex-col">
        <p className="text-black text-2xl md:text-3xl  font-semibold">
          No Annual Price Hikes for 2024
        </p>
        <p className="text-[#545454] text-center text-[16px] w-[300px] md:w-full md:text-[18px]">
          Truly unlimited 5G data at fixed UK prices for the whole year.
        </p>
      </div>
    </>
  );
};

export default OnNavbar;

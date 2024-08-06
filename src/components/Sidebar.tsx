import React, { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { LuMailOpen } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/navigation";

const Header = () => {
  const [showIcons, setShowIcons] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const router = useRouter();

  const menu = [
    {
      icon: <IoMdHome />,
      text: "Home",
    },
    {
      icon: <AiOutlineUser />,
      text: "about",
    },
    {
      icon: <PiShoppingBagOpenFill />,
      text: "Portfolio",
    },
    {
      icon: <LuMailOpen />,
      text: "Contact",
    },
  ];

  const handleShowIcons = () => {
    setShowIcons(!showIcons);
  };

  const handleRouting = (page: string) => {
    if (page === "Home") {
      router.push("/");
    } else {
      router.push(`/${page}`);
    }
  };

  // const handleRouting = (page: string) => {
  //   router.push(`/${page}`);
  // };

  return (
    <div className="w-full flex justify-center items-center">
      <div
        className={`${
          !showIcons
            ? "bg-[#333333] flex flex-col px-4 mt-14 rounded-full py-4 "
            : "bg-[#333333] flex flex-col px-4 justify-between  mt-14 rounded-full py-6"
        } relative`}
      >
        <p
          className="text-white hover:text-yellow-500 cursor-pointer"
          onClick={handleShowIcons}
        >
          {showIcons ? <RxCross1 /> : <AiOutlineMenu />}
        </p>
        <div
          className={`${
            !showIcons
              ? "hidden"
              : "flex flex-col justify-between py-6 items-center h-48 z-[9999]"
          }`}
        >
          {menu.map((item, index) => (
            <p
              key={index}
              className={`flex justify-start items-center text-base text-center ${
                hoveredItem === index ? "text-yellow-500" : "text-gray-300"
              } cursor-pointer`}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => handleRouting(item.text)}
            >
              {item.icon}
            </p>
          ))}
        </div>
      </div>
      <div
        className={`${
          !showIcons
            ? "hidden fixed"
            : "bg-transparent flex flex-col px-4 justify-between h-44 mt-[75px] lg:mt-20 py-3.5 lg:py-3 absolute  left-7  md:left-8 lg:left-11 right-0 z-30"
        }`}
      >
        {menu.map((item, index) => (
          <p
            onClick={() => handleRouting(item.text)}
            key={index}
            className={`flex justify-start items-center text-sm lg:text-base text-center ${
              hoveredItem === index ? "text-yellow-500" : "text-gray-300"
            } cursor-pointer`}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {item.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Header;

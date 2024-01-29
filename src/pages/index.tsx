import AboutImage from "@/components/AboutImage";
import Button from "@/components/Button";
import Sidebar from "@/components/Sidebar";
import router from "next/router";
import React from "react";
import { ReactTyped } from "react-typed";

function index() {
  const aboutPage = () => {
    router.push("/about");
  };
  return (
    <div className="flex relative justify-center items-center w-full h-[100vh] bg-[#222222]">
      <div className="absolute top-0 left-5">
        <Sidebar />
      </div>
      <div className="flex justify-between items-center w-[11/12]">
        <div className="flex justify-center items-end w-[50%] mt-24">
          <img src="/myBgImage.png" alt="myImage" />
        </div>
        <div className="flex justify-end flex-col items-center w-[50%]">
          <div className="flex justify-center flex-col items-start w-[75%] gap-3">
            <p className="text-base text-white">HI THERE!</p>
            <p className="text-5xl text-white font-bold ">
              I'M{" "}
              <span className="text-[#ffb400]">
                <ReactTyped
                  strings={["Mohsin Ali", "Web Developer"]}
                  typeSpeed={80}
                  backSpeed={80}
                  loop
                />
              </span>
            </p>
            <p className="text-justify text-white">
              I'm a Freelance UI/UX Designer and Developer based in London,
              England. I strives to build immersive and beautiful web
              applications through carefully crafted code and user-centric
              design.
            </p>
          </div>
          <div className="flex justify-start gap-2 items-center w-[75%] mt-5 ">
            <Button
              varient={"about"}
              className={"w-52 h-[46px]"}
              text={"More About me"}
              onClick={aboutPage}
            />
            <Button
              varient={"portfolio"}
              className={"w-44 h-[46px]"}
              text={"Portfolio"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;

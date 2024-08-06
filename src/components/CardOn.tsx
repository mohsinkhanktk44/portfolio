import React from "react";
import { AiTwotoneExclamationCircle } from "react-icons/ai";

type props = {
  title: string;
  data: string;
  img: string;
  className: string;
};

const CardOn = (props: props) => {
  const { title, data, img, className } = props;
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex items-center justify-center flex-col w-[400px] h-[153px] border border-[#CFCFCF] rounded-md">
        <div className="flex justify-between items-center w-[90%]">
          <div className="flex flex-col  justify-start items-start">
            <p
              className={`flex items-center gap-3 ${className} text-base font-semibold`}
            >
              {title ? title : "Title is missing"}
              <span className="">
                <img src="/Onsoftware/5G.png" className="w-5 h-3" alt="" />
              </span>
              <AiTwotoneExclamationCircle size={16} />
            </p>
            <div className="flex flex-col ">
              <p className="#252525 text-lg md:text-2xl">
                {data ? data : "5GB"}{" "}
                <span className="text-sm md:text-base text-[#545454]">
                  DATA
                </span>
              </p>
              <p className="text-[#545454] text-sm md:text-base">
                Unlimited Mins & SMS
              </p>
            </div>
          </div>
          <div className="flex ">
            <img src={img} className="w-[80px] h-[90px] " alt="" />
          </div>
        </div>
        <div className="flex justify-between items-center w-[90%] mt-4">
          <button className="px-3 py-1 text-sm md:text-base text-[#545454] border font-semibold border-[#545454] rounded-md">
            VIEW DETAILS
          </button>
          <button className="px-6 py-1 font-semibold text-sm md:text-base bg-[#dde22f] text-[#545454] border border-[#545454] rounded-md">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardOn;

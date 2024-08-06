import React from "react";

type props = {
  title: string;
  img2: string;
  img: string;
};

const OnFaqCard = (props: props) => {
  const { title, img, img2 } = props;
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex justify-center items-start w-[500px] py-3 bg-[#f5f5f7]">
        <div className="flex flex-col items-center w-[90%] mt-4">
          <img src={img2} alt="" />
          <p className="flex justify-center items-center text-center text-base mt-[34px]">
            {title}
          </p>
          <img src={img} className="w-[60px] h-[60px]" alt="" />
          <div className="flex justify-center items-center flex-col">
            <p className="text-[#252525] text-lg">Claire Mac</p>
            <p className="text-[#252525] text-sm ">Claire Mac</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnFaqCard;

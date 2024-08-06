import React from "react";

type props = {
  title: string;
  img: string;
  description: string;
};

const OnserviceCard = (props: props) => {
  const { title, img, description } = props;
  return (
    <div className="flex justify-center items-center w-full mt-10 pb-11">
      <div className="flex flex-col justify-center items-center w-[360px] h-[80px]">
        <img src={img} className="w-8 h-8" alt="" />
        <p className="text-[#252525] text-xl font-semibold">{title}</p>
        <p className="text-center flex justify-center items-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default OnserviceCard;

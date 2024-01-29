import React, { MouseEventHandler } from "react";

type props = {
  clasName: string;
  text: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

const Usebtn = (props: props) => {
  const { clasName, text, onClick } = props;
  return (
    <div
      className={`${clasName} flex justify-center items-center px-4 py-2 text-[#00FBF4] border-2 border-[#00FBF4] hover:bg-white cursor-pointer hover:ease-in-out hover:scale-90 duration-300`}
      onClick={onClick}
    >
      <p className="">{text}</p>
    </div>
  );
};

export default Usebtn;

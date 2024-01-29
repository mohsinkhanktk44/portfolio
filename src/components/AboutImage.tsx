import React from "react";

function AboutImage() {
  return (
    <div className="flex justify-center items-center ml-20 mt-16 relative w-[400px] h-[400px]">
      <div className="justify-center items-center z-10 ">
        <img src="/mohsinpic.jpg" alt="ProfilePicture" />
      </div>
      <div className="border-4 border-yellow-500 w-[380px] h-[380px] absolute left-14 top-10 right-0 hidden sm:block"></div>
    </div>
  );
}

export default AboutImage;

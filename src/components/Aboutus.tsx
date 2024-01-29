import React from "react";
type ExperienceItem = {
  title: string;
  date: string;
  description: string;
  icon: React.ReactElement; // Assuming BsCalendar2DateFill is a React component
};

type Props = {
  title?: string;
  className?: string;
  Data?: ExperienceItem[];
  eduData?: ExperienceItem[];
};

function Aboutus(props: Props) {
  const { title, className, Data } = props;

  return (
    <div className="flex w-full justify-center items-center flex-col">
      <div className="w-full flex flex-col gap-3 justify-center items-center mb-5">
        <hr className="text-white w-full " />
        <div className="flex justify-start w-11/12">
          <p className="text-white text-2xl font-semibold">{title}</p>
        </div>
      </div>
      {Data?.map((item, index) => {
        return (
          <div className={`${className} flex w-11/12 gap-5`}>
            <div className="flex flex-col justify-center items-center">
              <div className="flex w-4 h-4 rounded-full border-2 mt-1 border-[#ffb400]"></div>
              <div className="h-48 border-2 border-l-[#ffb400] border-t-0 border-b-0 border-r-0 "></div>
            </div>
            <div className="flex flex-col w-full gap-2">
              <div className="flex items-center gap-3">
                <div className="text-[#cacaca]  ">{item.icon}</div>
                <div>
                  <p className="text-[#cacaca] text-sm font-normal">
                    {item.date}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-white font-semibold text-base">
                  {item.title}
                </p>
              </div>
              <div className="w-11/12">
                <p className="text-[#cacaca] text-sm font-normal  leading-7">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Aboutus;

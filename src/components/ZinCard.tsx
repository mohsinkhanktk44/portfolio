import React from "react";
type props = {
  title: string;
  description: string;
  img: string;
};
const ZinCard = (props: props) => {
  const { title, description, img } = props;
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img src={img} alt="" className="w-9 h-9" />
        <h5 className="mb-2 text-xl font-semibold mt-2 tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>

        <p className="mb-3 text-sm font-normal text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ZinCard;

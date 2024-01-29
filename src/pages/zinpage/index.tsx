import Header from "@/components/Header";
import ZinCard from "@/components/ZinCard";
import React from "react";

const index = () => {
  const carddata = [
    {
      title: "Edit Pdf",
      description:
        "Go to this step by step guideline process on how to certify for your weekly benefits:",
      img: "/pdfedit.png",
    },
    {
      title: "Crop Pdf",
      description:
        "Go to this step by step guideline process on how to certify for your weekly benefits:",
      img: "/pdfcrop.png",
    },
    {
      title: "Replace Text",
      description:
        "Go to this step by step guideline process on how to certify for your weekly benefits:",
      img: "/pdfsearch.png",
    },
    {
      title: "Rotate Pdf",
      description:
        "Go to this step by step guideline process on how to certify for your weekly benefits:",
      img: "/pdfrotate.png",
    },
  ];
  return (
    <div className=" flex flex-col justify-center items-start w-full">
      <Header />
      <div className="flex justify-center items-center w-[90%]">
        <div className="flex justify-start items-center w-[85%] gap-2 mt-3">
          {carddata.map((item, index) => {
            return (
              <ZinCard
                title={item.title}
                description={item.description}
                img={item.img}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default index;

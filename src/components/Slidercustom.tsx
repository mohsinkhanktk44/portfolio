import React from "react";
import ZinCard from "./ZinCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Slidercustom = () => {
  const carddata2 = [
    {
      title: "PDF to Word",
      description: "Easy convert pdf to word document",
      img: "/world.png",
    },
    {
      title: "PDF to PPT",
      description: "Convert pdf to powerpoint online",
      img: "/pdf1.png",
    },
    {
      title: "PDF to Excel",
      description: "Convert pdf to xl for free",
      img: "/xpdf.png",
    },
    {
      title: "PDF to jpeg",
      description: "Convert pdf file to a set of optimized JPG, PNG, BMP, G...",
      img: "/jpeg.png",
    },
    {
      title: "PDF to TXT",
      description: "Convert your pdf to TXT and extract text from your pdf",
      img: "/text.png",
    },
  ];

  return (
    <div className="flex gap-2">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {carddata2.map((item, index) => (
          <div key={index} className=" flex justify-center items-center">
            <ZinCard
              title={item.title}
              description={item.description}
              img={item.img}
              className="w-[265px] h-[202px]"
            />
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default Slidercustom;

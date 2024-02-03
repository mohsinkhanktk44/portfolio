import React from "react";
import Slider from "react-slick";
import ZinCard from "./ZinCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderCustom = () => {
  const carddata2 = [
    {
      title: "PDF to Word",
      description: "Easy convert pdf to word document",
      img: "/world.png",
    },
    {
      title: "PDF to PPT",
      description: "Convert pdf to  powerpiont online",
      img: "/pdf1.png",
    },
    {
      title: "PDF to Excel",
      description: "Convert pdf to xxl for free",
      img: "/xpdf.png",
    },
    {
      title: "PDF to jpeg",
      description: "Convert pdf file to a set of optomized JPG,PNG,BMP,G...",
      img: "/jpeg.png",
    },
    {
      title: "PDF to TXT",
      description: "Convert your pdf TXT and extract text from your pdf",
      img: "/text.png",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="flex justify-center items-center">
      <Slider {...settings}>
        {carddata2.map((item, index) => {
          return (
            <div key={index} className="flex justify-center items-center">
              <ZinCard
                title={item?.title}
                description={item?.description}
                img={item?.img}
                className="w-[265px] h-[202px]"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderCustom;

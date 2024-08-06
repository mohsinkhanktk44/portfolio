import React from "react";
import Slider from "react-slick";
// import ZinCard from "./ZinCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import OnFaqCard from "./OnFaqCard";

const CustomSlider = () => {
  const carddata2 = [
    {
      title:
        "Highly recommend Talk Home as a PAYG Sim. They have some great and  cheap options available to top-up that suit every budget but nopressure to top-up if your not able too! Which happens to us all attimes! So it's a great relief to know your mobile phone won't berestricted or cut off like with some other networks!",
      img: "/onsoftware/faq1.png",
      img2: "/onsoftware/starRating.png",
    },
    {
      title:
        "Highly recommend Talk Home as a PAYG Sim. They have some great and  cheap options available to top-up that suit every budget but nopressure to top-up if your not able too! Which happens to us all attimes! So it's a great relief to know your mobile phone won't berestricted or cut off like with some other networks!",
      img: "/onsoftware/faq1.png",
      img2: "/onsoftware/starRating.png",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(2, carddata2.length),
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(2, carddata2.length),
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="justify-center items-center w-[90%] center  mt-6 pb-10">
      <Slider {...settings}>
        {carddata2.map((item, index) => {
          return (
            <div key={index} className="flex justify-center items-center">
              <OnFaqCard title={item.title} img={item.img} img2={item.img2} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CustomSlider;

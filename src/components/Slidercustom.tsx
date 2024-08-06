import React from "react";
import Slider from "react-slick";
// import ZinCard from "./ZinCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OnserviceCard from "./OnserviceCard";

const SliderCustom = () => {
  const carddata2 = [
    {
      title: "No Price Surprises",
      description:
        "Benefit from locked in term prices, no hidden fees & plans with free EU Roaming",
      img: "/onsoftware/why1.png",
    },
    {
      title: "Truly Unlimited Data",
      description:
        "Enjoy blazing fast data connectivity that comes without throttling or usage caps.",
      img: "/onsoftware/why2.png",
    },
    {
      title: "No Contracts",
      description:
        "No more long-term contracts. Only get what you pay for with our SIM-only deals.",
      img: "/onsoftware/why3.png",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    <div className="justify-center items-center w-[90%] center ">
      <Slider {...settings}>
        {carddata2.map((item, index) => {
          return (
            <div key={index} className="flex justify-center items-center">
              <OnserviceCard
                title={item.title}
                img={item.img}
                description={item.description}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderCustom;

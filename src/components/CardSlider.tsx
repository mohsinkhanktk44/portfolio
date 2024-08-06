// import React, { useState, useRef } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// const CardSlider = ({}) => {
//   const [dotColor, setDotColor] = useState(0);
//   const SliderRef = useRef<Slider>(null);
//   const settings = {
//     infinite: true,
//     speed: 500,
//     dots: false,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 700,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 3,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 1000,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 1800,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//         },
//       },
//     ],
//   };
//   return (
//     <div className="">
//       <div className="flex items-center justify-center w-full ">
//         <div className=" w-full ">
//           <Slider {...settings} ref={SliderRef}>
//             {sliderData?.map(
//               (
//                 {
//                   title,
//                   description,
//                   review_count,
//                   instructor,
//                   total_ratings,
//                   total_enrollments,
//                   price,
//                   // course_id,
//                   rating,
//                   cover_photo,
//                   variant,
//                   completionPercent,
//                   ratingStar,
//                 },
//                 index
//               ) => (
//                 <div
//                   data-cy="cards"
//                   key={title}
//                   className="px-[10px] lg:px-[20px] xl:px-[30px] gap-5"
//                 >
//                   <CoursesCard
//                     // course_id={course_id}
//                     title={title}
//                     description={description}
//                     cover_photo={cover_photo}
//                     variant={variant}
//                     price={price}
//                     instructor={instructor}
//                     total_ratings={total_ratings}
//                     review_count={review_count}
//                     total_enrollments={total_enrollments}
//                     rating={rating}
//                     ratingStar={ratingStar}
//                     completionPercent={completionPercent}
//                   />
//                 </div>
//               )
//             )}
//           </Slider>
//         </div>
//       </div>
//       <div>
//         {/* Dots */}
//         {sliderData?.length && sliderData?.length > 3 && (
//           <div className="flex justify-center mt-10">
//             <ul className="flex space-x-[30px] items-center">
//               {sliderData?.length > 2 &&
//                 sliderData?.slice(2, 6).map((e, index) => (
//                   <div
//                     role="button"
//                     tabIndex={0}
//                     key={index.toString() + 1}
//                     className="cursor-pointer"
//                     onClick={() => {
//                       setDotColor(index);
//                       SliderRef?.current?.slickGoTo(index);
//                     }}
//                     onKeyDown={() => setDotColor(index)}
//                   >
//                     <li
//                       data-cy="dots"
//                       className={`px-[9px] py-[9px] mt-[20px] rounded-md  ${
//                         dotColor === index
//                           ? "bg-[#E2D1F9] border-[3px] border-[#E2D1F9] rotate-45"
//                           : "border-[3px] border-[#E2D1F9]  rotate-45 "
//                       } relative`}
//                     />
//                   </div>
//                 ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
// export default CardSlider;

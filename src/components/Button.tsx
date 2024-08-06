// import React, { MouseEventHandler, useState } from "react";
// import { BiSolidUser } from "react-icons/Bi";
// import { PiShoppingBagOpenFill } from "react-icons/pi";
// import { FaDownload } from "react-icons/Fa";
// import { BsFillSendFill } from "react-icons/Bs";

// type props = {
//   varient: string;
//   className: string;
//   text: string;
//   onClick?: MouseEventHandler<HTMLDivElement>;
// };

// const Button = (props: props) => {
//   const { varient, className, text, onClick } = props;

//   const [hover, sethover] = useState(false);

//   const handleMouseEnter = () => {
//     sethover(true);
//   };

//   const handleMouseLeave = () => {
//     sethover(false);
//   };

//   if (varient === "about" || varient === "portfolio") {
//     return (
//       <div>
//         <div
//           onClick={onClick}
//           className={`${className} ${
//             varient === "about"
//               ? "bg-[#ffb400] slide transition-all hover:bg-gray-600 ease-in-out duration-300"
//               : "bg-black slide2 "
//           } flex justify-center gap-4 rounded-full items-center cursor-pointer`}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <div>
//             {varient === "about" ? (
//               <p className="text-white font-bold text-xl relative">
//                 <BiSolidUser />
//               </p>
//             ) : (
//               <p
//                 className={`${
//                   hover ? "text-white" : " text-[#ffb400]"
//                 } text-lg relative`}
//               >
//                 <PiShoppingBagOpenFill />
//               </p>
//             )}
//           </div>
//           <div>
//             <p
//               className={`${
//                 varient === "about"
//                   ? "text-white"
//                   : `${hover ? "text-white" : "text-[#ffb400]"}`
//               } relative flex justify-center items-center text-lg font-semibold text-center`}
//             >
//               {text}
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   } else if (varient === "downloadcv") {
//     return (
//       <div>
//         <div
//           className={`${className} slide  flex bg-[#ffb400] justify-center gap-4 rounded-full items-center cursor-pointer`}
//           onClick={onClick}
//         >
//           <div className="flex justify-center items-center gap-4 w-full">
//             <div>
//               <p className="text-white text-bold relative">
//                 <FaDownload />
//               </p>
//             </div>
//             <div>
//               <p
//                 className={`flex justify-center items-center relative font-semibold text-center`}
//               >
//                 {text}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   } else if (varient === "sendMessage") {
//     return (
//       <div>
//         <div
//           className={`${className} slide  flex bg-[#ffb400] justify-center gap-4 rounded-full items-center cursor-pointer`}
//           onClick={onClick}
//         >
//           <div className="flex justify-center items-center gap-4 w-full">
//             <div>
//               <p className="text-white text-bold relative">
//                 <BsFillSendFill />
//               </p>
//             </div>
//             <div>
//               <p
//                 className={`flex justify-center items-center relative font-semibold text-center`}
//               >
//                 {text}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   } else return null;
// };

// export default Button;

// import React from "react";

// type Props = {
//   percentage: number;
//   label: string;
// };

// const BarComponent = (props: Props) => {
//   const { percentage, label } = props;
//   return (
//     <div className="flex flex-col items-start gap-4 w-full">
//       <div className="flex justify-center">
//         <span className="font-semibold text-white text-base z-50">{label}</span>
//       </div>
//       <div className="relative w-full h-0.5 bg-gray-300">
//         <div
//           className="absolute h-full bg-[#ffb400]"
//           style={{ width: `${percentage}%` }}
//         ></div>
//         <div
//           className={`absolute bottom-0 transform -translate-y-3 z-30 px-3 py-2  bg-[#ffb400] rounded-md`}
//           style={{ left: `calc(${percentage}% - 25px)` }}
//         >
//           <p className="text-black text-xs font-bold "> {percentage}%</p>
//         </div>
//         <div
//           className="bg-[#ffb400] rotate-45 -translate-y-[26px] w-5 h-5 absolute"
//           style={{ left: `calc(${percentage}% - 10px)` }}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default BarComponent;

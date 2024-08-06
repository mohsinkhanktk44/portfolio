// import CardOn from "@/components/CardOn";

// import Faqs from "@/components/Faqs";
// import FooterOn from "@/components/FooterOn";
// // import Header from "@/components/Header";
// import OnFaqCard from "@/components/OnFaqCard";
// import OnNavbar from "@/components/OnNavbar";
// import OnserviceCard from "@/components/OnserviceCard";
// import SliderCustom from "@/components/Slidercustom";
// import { title } from "process";
// import React, { useState } from "react";

// const software = () => {
//   const shopData = [
//     {
//       title: "STARTER MAX 12",
//       data: "5GB",
//       img: "/onsoftware/bluebag.png",
//       className: "text-[#2096D3]",
//     },
//     {
//       title: "BASIC MAX 12",
//       data: "10GB",
//       img: "/onsoftware/redbag.png",
//       className: "text-[#F9743F]",
//     },
//     {
//       title: "BLUE MAX 12",
//       data: "25GB",
//       img: "/onsoftware/darbag.png",
//       className: "text-[#1F93D1]",
//     },
//     {
//       title: "SILVER MAX 12",
//       data: "60GB",
//       img: "/onsoftware/graybag.png",
//       className: "text-[#767676]",
//     },
//     {
//       title: "GOLD MAX 12",
//       data: "120GB",
//       img: "/onsoftware/yellowbag.png",
//       className: "text-[#B48E32]",
//     },
//   ];
//   const [activeTab, setActiveTab] = useState("monthly");

//   const handleTabClick = (tab: any) => {
//     setActiveTab(tab);
//   };

//   return (
//     <>
//       <div className="flex flex-col justify-start items-center w-full">
//         <div className="w-full">
//           <OnNavbar />
//         </div>
//         {/* this is product card section  */}
//         <div className="flex justify-center items-center mt-5 gap-4 ">
//           <p
//             className={`flex justify-center font-medium items-center py-3 px-2 cursor-pointer ${
//               activeTab === "monthly"
//                 ? "border-b-2 text-blue-500 border-blue-500"
//                 : ""
//             }`}
//             onClick={() => handleTabClick("monthly")}
//           >
//             Monthly rolling
//           </p>
//           <p
//             className={`flex justify-center font-semibold items-center py-3 px-2 cursor-pointer ${
//               activeTab === "12months"
//                 ? "border-b-2 text-blue-500 border-blue-500"
//                 : ""
//             }`}
//             onClick={() => handleTabClick("12months")}
//           >
//             12-months Plans
//             <span className="flex justify-center text-black items-center px-2 bg-[#DDE22F] ml-2">
//               new
//             </span>
//           </p>
//         </div>

//         <div className="flex justify-center items-center w-full mt-8 ">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[80%]">
//             {shopData.map((item, index) => (
//               <CardOn
//                 key={index}
//                 title={item.title}
//                 data={item.data}
//                 img={item.img}
//                 className={item.className}
//               />
//             ))}
//           </div>
//         </div>

//         {/* this is why choose us section  */}

//         <div className="flex justify-center items-center w-full flex-col mt-14 mb-5">
//           <p className="text-[#252525] font-semibold text-2xl md:text-3xl">
//             Why Choose Talk Home?
//           </p>
//           <p className="text-[#545454] text-center md:text-base text-lg w-[370px] md:w-[665px] mt-2">
//             Meet Talk Home Mobile - A friendly, reliable and flexible mobile
//             network that offers you incredible value and the best network
//             coverage in the UK.
//           </p>
//         </div>
//         <SliderCustom />

//         {/* this is first sim card section  */}

//         <div className="flex justify-center items-center w-full mt-24 py-6 bg-[#064F92]">
//           <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-center w-[70%]">
//             <div className="flex flex-col md:flex-row justify-center items-center gap-6">
//               <img src="/onsoftware/simcard.png" className="w-40 h-24" alt="" />
//               <p className="text-xl text-white text-center md:text-left w-[360px]">
//                 Join the
//                 <span className="text-[#dde22f] pl-1">
//                   UK’s widest and fastest network{" "}
//                 </span>{" "}
//                 - order your free PAYG SIM today.
//               </p>
//             </div>
//             <div>
//               <img
//                 src="/onsoftware/cardwtitle.png"
//                 className="w-36 h-10"
//                 alt=""
//               />
//             </div>
//           </div>
//         </div>

//         {/* this is Large Video Image section for large screens  */}

//         <div className=" hidden md:flex flex-col w-full justify-center items-center bg-[#DCF2FB] pb-52 pt-8">
//           <p className=" font-semibold text-2xl">
//             Locked-in UK Prices for 2023*
//           </p>
//           <p className="font-medium md:text-base w-[40%] text-center">
//             Worried about ever-increasing phone bills? Order your free SIM from
//             Talk Home and enjoy fixed prices for 2023.
//           </p>
//         </div>
//         <div className=" hidden md:flex justify-center flex-col items-center relative mt-[-180px]">
//           <img
//             src="/onsoftware/midimage.png"
//             className="w-[50%] h-[40%] "
//             alt=""
//           />
//           <div className="flex justify-center items-center absolute w-16 h-16 cursor-pointer  rounded-full bg-white">
//             <img src="/onsoftware/centerimage.png" className="z-30" alt="" />
//           </div>
//           <p className="text-[#545454] text-xs mt-2">
//             *Applies to PAYG, monthly, data bolt-on, and all UK rates only until
//             December 31, 2023. Excludes international plans, rates & roaming.
//           </p>
//         </div>

//         {/* this is Large Video Image section for small screens screens  */}

//         <div className=" md:hidden flex flex-col w-full justify-center items-center bg-white pb-52 pt-8">
//           <p className=" font-semibold text-2xl">
//             Locked-in UK Prices for 2023*
//           </p>
//           <p className="font-medium md:text-base w-[80%] text-center">
//             Worried about ever-increasing phone bills? Order your free SIM from
//             Talk Home and enjoy fixed prices for 2023.
//           </p>
//         </div>
//         <div className=" flex md:hidden justify-center flex-col items-center relative mt-[-180px]">
//           <img
//             src="/onsoftware/fastRun.png"
//             className="w-[80%] h-[70%]"
//             alt=""
//           />
//           <div className="flex justify-center items-center absolute w-16 h-16 cursor-pointer  rounded-full bg-white">
//             <img src="/onsoftware/centerimage.png" className="z-30" alt="" />
//           </div>
//           <p className="text-[#545454] text-xs text-center mt-2 w-[70%] ">
//             *Applies to PAYG, monthly, data bolt-on, and all UK rates only until
//             December 31, 2023. Excludes international plans, rates & roaming.
//           </p>
//         </div>

//         {/* This is TrsutPilot middle section  */}

//         <div className="flex justify-center items-center w-[50%] md:w-full mt-10">
//           <img
//             src="/onsoftware/trustpilot.png"
//             className="md:w-[30%] md:h-[40px]"
//             alt=""
//           />
//         </div>
//         <div className="flex justify-center items-center flex-col w-full gap-4 mt-6">
//           <p className="md:text-3xl text-base font-semibold text-[#252525]">
//             Trusted by Thousands of Customers in the UK
//           </p>
//           <p className="text-[#545454] text-sm font-medium md:text-base md:font-semibold ">
//             Join the network that helps thousands of customers stay connected.
//           </p>
//         </div>

//         {/* This is review section  */}
//         <div className="flex flex-col md:flex gap-3 justify-center items-center w-[80%] mt-8">
//           <OnFaqCard
//             title="Highly recommend Talk Home as a PAYG Sim. They have some great and  cheap options available to top-up that suit every budget but nopressure to top-up if your not able too! Which happens to us all attimes! So it's a great relief to know your mobile phone won't berestricted or cut off like with some other networks!"
//             img={"/onsoftware/faq1.png"}
//             img2={"/onsoftware/starRating.png"}
//           />
//           <OnFaqCard
//             title="Highly recommend Talk Home as a PAYG Sim. They have some great and  cheap options available to top-up that suit every budget but nopressure to top-up if your not able too! Which happens to us all attimes! So it's a great relief to know your mobile phone won't berestricted or cut off like with some other networks!"
//             img={"/onsoftware/faq1.png"}
//             img2={"/onsoftware/starRating.png"}
//           />
//         </div>

//         {/* This is Faqs sections */}
//         <div className="flex justify-center items-center w-[70%] flex-col mt-12">
//           <p className="text-[#252525] text-2xl md:text-3xl font-semibold">
//             Frequently Asked Questions
//           </p>
//           <p className="text-base text-center font-semibold text-[#545454]">
//             Explore quick answers to some questions about Talk Home Mobile by
//             our customers.
//           </p>
//           <div className="flex justify-center items-center w-full ">
//             <Faqs />
//           </div>
//         </div>

//         {/* This is mobile section  */}

//         {/* this is second simcard section  */}

//         <div className="flex justify-center items-center w-full mt-24 py-6 bg-[#064F92]">
//           <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-center w-[70%]">
//             <div className="flex flex-col md:flex-row justify-center items-center gap-6">
//               <img src="/onsoftware/simcard.png" className="w-40 h-24" alt="" />
//               <p className="text-xl text-white text-center md:text-left w-[360px]">
//                 Join the
//                 <span className="text-[#dde22f] pl-1">
//                   UK’s widest and fastest network{" "}
//                 </span>{" "}
//                 - order your free PAYG SIM today.
//               </p>
//             </div>
//             <div>
//               <img
//                 src="/onsoftware/cardwtitle.png"
//                 className="w-36 h-10"
//                 alt=""
//               />
//             </div>
//           </div>
//         </div>

//         <div className="flex justify-center items-center w-full ">
//           <FooterOn />
//         </div>
//         {/* <OnserviceCard /> */}
//       </div>
//     </>
//   );
// };

// export default software;

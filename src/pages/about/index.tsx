// "use client";
// //@ts-nocheck
// import React, { useState } from "react";
// import Aboutus from "@/components/Aboutus";
// import { BsCalendar2DateFill } from "react-icons/Bs";
// import Skills from "@/components/Skills";
// import BarComponent from "@/components/Skills";
// import Sidebar from "@/components/Sidebar";
// import Button from "@/components/Button";

// function index() {
//   const experienceData = [
//     {
//       title: "Front end Developer - Focus IT Services",
//       date: "01/Dev/2023 - Present",
//       description:
//         "As a Front-End Developer, I played a pivotal role in the projects, utilizing technologies such as React.js, Next.js, and GraphQL. My responsibilities included translating design concepts into responsive and visually compelling user interfaces, ensuring a seamless user experience.Collaborating closely with cross-functional teams, I consistently delivered high-quality",
//       icon: <BsCalendar2DateFill />,
//     },
//     {
//       title: "Front End Developer -ALIMCOSOFT PVT LIMITED",
//       date: "10/2022 - 12/2023",
//       description:
//         "As a Front-End Developer at Alimcosoft pvt Limited, I was instrumental in shaping exceptional user interfaces for various projects. Leveraging React.js and Next.js, I led the design and implementation of visually stunning interfaces that enhanced user engagement. Beyond UI development, my role involved integrating GraphQl APIs to deliver seamless data interactions and improve overall application performance.",
//       icon: <BsCalendar2DateFill />,
//     },
//     {
//       title: "Front End Developer -Rohtas Marketing PVT LIMITED",
//       date: "03/2021 - 09/2022",
//       description:
//         "As a Front-End Developer in my first professional role at Rohtas Marketing pvt limited, I specialized in creating sleek user interfaces using Tailwind CSS. Despite being in the early stages of my career, I quickly gained proficiency in integrating REST APIs for efficient data interaction within applications. This experience not only honed my technical skills but also cultivated a strong commitment to delivering quality results within a collaborative team environment",
//       icon: <BsCalendar2DateFill />,
//     },
//   ];

//   const Education = [
//     {
//       title: "BS Software Engineering",
//       date: "2016 - 2020",
//       description: `Comsats University Islamabad Abbottabad Campus`,
//       icon: <BsCalendar2DateFill />,
//     },
//     {
//       title: "FSC Pre Engineering",
//       date: "2013 - 2016",
//       description: "ICMS Education System Peshawar",
//       icon: <BsCalendar2DateFill />,
//     },
//     {
//       title: "Matric",
//       date: "2011 - 2013",
//       description: "Peace School and Collage Nowshera",
//       icon: <BsCalendar2DateFill />,
//     },
//   ];

//   const data = [
//     {
//       percentage: 90,
//       label: "HTML",
//     },
//     {
//       percentage: 80,
//       label: "JAVASCRIPT",
//     },
//     {
//       percentage: 80,
//       label: "CSS",
//     },
//     {
//       percentage: 80,
//       label: "TAILWIND CSS",
//     },
//     {
//       percentage: 80,
//       label: "REACT",
//     },
//     {
//       percentage: 30,
//       label: "NEXT",
//     },
//     {
//       percentage: 80,
//       label: "GraphQl API",
//     },
//     {
//       percentage: 60,
//       label: "REST API",
//     },
//     {
//       percentage: 50,
//       label: "StoryBook",
//     },
//   ];

//   const Person1 = [
//     {
//       label: "Name",
//       title: "Mohsin Ali",
//     },
//     {
//       label: "Date of Birth",
//       title: "11/jan/1997",
//     },
//     {
//       label: "Nationality",
//       title: "Pakistan",
//     },
//     {
//       label: "Experience",
//       title: "3 Years",
//     },
//     {
//       label: "Address",
//       title: "Islamabad",
//     },
//   ];
//   const person2 = [
//     {
//       label: "Freelance",
//       title: "Avalaible",
//     },
//     {
//       label: "Phone",
//       title: "+92332 0949796",
//     },
//     {
//       label: "Email",
//       title: "mohsinkhanktk44@gmail.com",
//     },
//     {
//       label: "Github",
//       title: "mohsinkhanktk44",
//     },
//     {
//       label: "Languages",
//       title: "English, Urdu, pushto",
//     },
//   ];
//   return (
//     <div className=" flex justify-center flex-col items-center w-full bg-[#222222]">
//       <div className="absolute top-0 left-5">
//         <Sidebar />
//       </div>
//       <div className="flex justify-center items-center gap-6 flex-col w-full">
//         <div className="flex justify-center items-center">
//           <p className="text-5xl font-black text-white">
//             About <span className="text-[#ffb400]">Me</span>
//           </p>
//         </div>
//         <div className="flex justify-center items-center gap-2">
//           <p className="w-6  bg-[#ffb400] h-[2px]"></p>
//           <p className="text-[#b5b5b5]">
//             I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO
//           </p>
//           <p className="w-6  bg-[#ffb400] h-[2px]"></p>
//         </div>
//       </div>

//       <div className="flex justify-center items-center w-full mt-8">
//         <div className="flex justify-between items-center w-11/12">
//           <div className="flex justify-center items-center w-1/2">
//             {/* <p className="text-white">Image Area</p> */}
//             <img
//               src="/myBgImage.png"
//               className="w-[400px] h-[400px]"
//               alt="ProfilePicture"
//             />
//           </div>
//           <div className="flex justify-between flex-col w-1/2">
//             <div className="flex justify-between 1/2">
//               <div className="flex justify-between flex-col items-start w-full">
//                 {Person1.map((item, index) => {
//                   return (
//                     <div className="flex justify-center gap-4 items-center w-2/3">
//                       <div className="w-full flex justify-start">
//                         <p className="text-[#b5b5b5] text-sm font-bold">
//                           {item.label}
//                         </p>
//                       </div>
//                       <div className="w-full flex justify-start">
//                         <p className="text-white text-sm">{item.title}</p>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//               <div className="flex justify-between flex-col items-end gap-8 w-full">
//                 {person2.map((item, index) => {
//                   return (
//                     <div className="flex justify-start items-center w-full">
//                       <div className="w-full flex justify-start">
//                         <p className="text-[#b5b5b5] text-sm font-bold">
//                           {item.label}
//                         </p>
//                       </div>
//                       <div className="w-full flex justify-start">
//                         <p className="text-white text-sm">{item.title}</p>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//             <div className="flex justify-start items-center mt-8">
//               <Button
//                 varient="downloadcv"
//                 className="w-56 h-10 text-white"
//                 text="DOWNLOAD MY CV"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex justify-center items-center w-11/12 mt-8">
//         <div className="flex items-center justify-center w-[70%]">
//           <Aboutus Data={experienceData} title="Experience" />
//         </div>
//         <div className="flex items-center justify-center w-[30%]">
//           <Aboutus Data={Education} title="Education" />
//         </div>
//       </div>
//       <div className="flex w-full flex-col justify-center items-center mt-16 pb-7">
//         <div className="flex justify-start flex-col items-start w-[85%]">
//           <p className="text-white text-2xl font-semibold">Skills</p>
//         </div>
//         <div className="flex w-[90%] mt-5">
//           <div className="flex flex-wrap w-full justify-center gap-5">
//             {data.map((item, index) => (
//               <div key={index.toString()} className="w-[30%]">
//                 <BarComponent percentage={item.percentage} label={item.label} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default index;

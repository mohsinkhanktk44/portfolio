// import React, { useState } from 'react'
// import "../../global.css";

// const NavbarLinks = [
//     "Home",
//     "Services",
//     "About Us",
//     "FAQ'S",
//     "Contact"
// ]
// function Navbar() {
//     const [list, setList] = useState(false);

//     const toggleNavbar =()=>{
//         setList(!list)
//     }

//     return (
//         <div className='flex flex-col justify-center items-center w-full'>
//             <div className='flex w-full h-24 bg-[#010A0A] justify-center'>
//                 <div className='flex w-11/12 justify-between items-center'>
//                     <div className='text-white'><img src="./logo.png" alt="logoImage" className='w-full h-12' /></div>
//                     <div className=' justify-between w-3/5 hidden md:flex lg:w-3/5'>
//                         <div className='flex  justify-between w-full'>
//                             {
//                                 NavbarLinks?.map((item: string, index) => (
//                                     <p key={index.toString()} className='text-white hover:text-[#00FBF4] cursor-pointer'>{item}</p>
//                                 ))
//                             }
//                         </div>
//                     </div>
//                     <div>
//                         <svg onClick={toggleNavbar} className='bg-white flex md:hidden cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 30 20">
//                             <path d="M0 4h30v3H0zm0 6h30v3H0zm0 6h30v3H0z" fill="#000" />
//                         </svg>
//                     </div>
//                 </div>
//             </div>
//             {
//               list &&
//             <div className='flex flex-col w-full md:hidden gap-9'>
//                 <ul className='w-full'>
//                 {NavbarLinks.map((item,index)=>(
//                     <div key={index.toString()} className='flex flex-col w-full bg-black h-10 '>
//                     <li className='flex w-full text-white hover:bg-slate-600 hover:text-[#00FBF4]'>{item}</li>
//                     </div>
//                 ))}
//                 </ul>
//             </div>
//             }
//         </div>
//     )
// }

// export default Navbar

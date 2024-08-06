// //@ts-nocheck

// import Usebtn from "@/components/Usebtn";
// import axios from "axios";
// import React, { useMemo, useState } from "react";
// import Input from "@/components/Input";

// function PracticeApi() {
//   const [posts, setPosts] = useState([]);

//   const callApi = () => {
//     // fetch("https://jsonplaceholder.typicode.com/posts")
//     //   .then(async (res) => {
//     //     const data = await res.json();
//     //     setPosts(data);
//     //   })
//     //   .catch(() => {
//     //     alert("dlfdj");
//     //   });

//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => {
//         if (res.status == 200) {
//           setPosts(res.data);
//         }
//       })
//       .catch((err) => alert("error oooo"));
//   };

//   const deleteButton = (id: any) => {
//     axios
//       .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       .then((res) => {
//         alert("deleted successfully");
//         setPosts(posts.filter((post) => post.id !== id));
//       })
//       .catch((err) => alert("error oooo"));
//   };

//   return (
//     <div className="flex justify-center items-center w-full bg-slate-700 h-100hv">
//       <div className="flex flex-col justify-center items-center mt-8">
//         <div className="flex justify-center items-center">
//           <button
//             className="h-[20px] p-3 bg-slate-600 text-white flex items-center"
//             onClick={callApi}
//           >
//             Click Me
//           </button>
//         </div>

//         <div className="flex flex-wrap justify-center items-center w-[80%]">
//           {posts.map((item, index) => {
//             return (
//               <div className="flex flex-col w-[200px] h-[180px] p-5">
//                 <div className="flex">
//                   <p className="text-base font-bold text-red-800">Title :</p>
//                   <p>{item.title}</p>
//                 </div>
//                 <div className="flex flex-col">
//                   <p className="text-base font-bold text-red-800">UserId : </p>
//                   <p>{item.id}</p>
//                 </div>
//                 <div>
//                   <button onClick={() => deleteButton(item.id)}>delete</button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }
// export default PracticeApi;

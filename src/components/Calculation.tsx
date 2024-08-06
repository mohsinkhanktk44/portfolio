// "use client"
// import React, { useEffect, useState } from 'react'
// import Testing from './Testing';
// import Dropdown from './Dropdown';

// function Calculation() {
//     const [storeData, setStoreData] =useState<number>();
//     const[inputValue , setInputValue] = useState({});

//     const array =["a","b","c","d","f"];

//     useEffect(()=>{
//         const value = Math.random() * 100;
//         const newValue = Math.floor(value)
//         setStoreData(newValue)
//     },[])

//     const changeInput =(event:React.ChangeEvent<HTMLInputElement>)=>{
//         setInputValue({...inputValue, [event.target.name]: event.target.value});
//     }

//   return (
//     <>

//    <div><Testing testing={'Tayyab zaman'} storeData={storeData}/></div>
//    <div>
//     <input type="text" placeholder='Select' className='border border-gray-300' name="input"  onChange={changeInput}/>
//     <input type="text" placeholder='Select' className='border border-gray-300' name="input2"  onChange={changeInput}/>
//    </div>
//    <div>
//     <Dropdown/>
//    </div>
//    </>

//   )
// }

// export default Calculation

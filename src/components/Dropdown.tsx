import React, { useState } from 'react'

function Dropdown() {
    const [option,setOption] = useState("Select");
    const[showList,setShowList] = useState(false);
    const array =["a","b","c","d","f"];
    const handleClick =()=>{
        setShowList(!showList);
    };

    const handleValueByClick=(item:string)=>{
        setOption(item)
        setShowList(!showList);
    }

 
  return (
    <div className=' flex flex-col w-40 border-2 border-black rounded-md justify-between mt-6'>
        <div className='flex w-full' onClick={handleClick}>
        <div>{option}</div>
</div>
        <div className='shadow-xl'>
        {showList && 
        <ul className='flex flex-col'>
            {array.map((item,index)=>(
                <li className='cursor-pointer' key={index} onClick={()=>handleValueByClick(item)}>{item}</li>
            ))}
        </ul>
        }
        </div>
        
    </div>
  )
}

export default Dropdown
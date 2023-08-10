import React, { useState } from 'react'

const SkillCard = (props) => {
    const {img,name,p} = props;
    const [open,setOpen] = useState(false);

  return (
    <div  className=" w-[400px] lg:w-[350px] h-auto flex flex-col gap-3   shadow-xl rounded-2xl dark:bg-[#c9d1d9] p-5">           
           <img src={img} className=' w-14' alt="" />

            <h1 className=' text-xl font-semibold'>{ name }</h1>

            <p>{open ? p : p?.substr(0,75) }{open ? "" : "..."}</p>
            <div className="">
            <button onClick={() => setOpen(!open)}>See More</button>
            </div>
     </div>
  )
}

export default SkillCard
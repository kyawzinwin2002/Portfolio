import React, { useState } from 'react'
import webDev from "../../img/web.png"
import time from "../../img/time.png"
import clean from "../../img/clean.png"
import learn from "../../img/learning.png"
import api from "../../img/api.png"
import exp from "../../img/experience.png"
import SkillCard from './SkillCard'

const Skills = () => {
    const cards = [
        {id:1,img:webDev,name:"Web Development",p:"Can Make Web Development with both Frontend and Backend.Especially Backend."},
        {id:2,img:clean,name:"Clean Code",p:"Write the clean,maintainable and testable codes.Easily can be known by other devs."},
        {id:3,img:api,name:"REST API",p:"Design/develop REST API that adheres to principles of representational state transfer(REST)."},
        {id:4,img:exp,name:"Experience",p:"My Experience Level is Junior. I'm early in my career but eager to learn and grow."},
        {id:5,img:time,name:"Time ManageMent",p:"I consistently demonstrate exceptional time management skills that drive project success."},
        {id:6,img:learn,name:"Learn Rapidly",p:"I  learn rapidly, quickly grasping new concepts and applying them effectively."}
    ];
  return (
    <div id='skills' className=' bg-white dark:bg-[#0d1117] my-10 w-[100%]  p-10  '>
        <div className=" text-center">
            <h1 className='text-[#0d1117] font-bold dark:text-[#c9d1d9] text-4xl'>Skills</h1>
            <span className='text-[#0d1117] dark:text-[#c9d1d9] text-base '>Which Skills do I have?</span>
        </div>

        {/* CARD */}
        <div className=" flex w-[100%] flex-wrap gap-14 mt-5 justify-center">

        {/* CARD-1 */}
        {cards?.map((card) => {
            return(
                <SkillCard key={card?.id} {...card}/>
            )
        })}

        </div>
    </div>
  )
}

export default Skills
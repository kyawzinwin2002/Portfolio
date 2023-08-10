import React from 'react'
import SliderCard from './SliderCard'

const Project = () => {
  return (
    <div id='projects' className=" bg-white dark:bg-[#0d1117] my-32 md:mt-64 lg:my-10 p-10 lg:p-20">
         <div className=" text-center">
            <h1 className='text-[#0d1117] font-bold dark:text-[#c9d1d9] text-3xl lg:text-4xl'>Projects</h1>
            <span className='text-[#0d1117] dark:text-[#c9d1d9] text-base '>Which Projects have I done?</span>
        </div>
        <div className=" my-5 shadow-xl">
        <SliderCard/>
        </div>
    </div>
  )
}

export default Project
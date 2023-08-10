import React from 'react'
import html from "../../img/html.png"
import css from "../../img/css.png"
import js from "../../img/js.png"
import bootstrap from "../../img/bootstrap.png"
import sass from "../../img/sass.png"
import git from "../../img/git.png"
import github from "../../img/code.png"
import tailwind from "../../img/tailwind.svg"
import react from "../../img/react.png"
import vuejs from "../../img/vuejs.svg"
import redux from "../../img/redux.svg"

const Frontend = () => {
  return (
    <div className="my-5 ">
            <h1 className=' text-[#0d1117] dark:text-[#c9d1d9] text-xl lg:text-2xl font-semibold'>Frontend Technology</h1>

            {/* Languages */}
            <div className=" w-[100%] ">
              <h1 className=' text-[#0d1117] dark:text-[#c9d1d9] text-lg lg:text-xl '>Languages </h1>

              <div className="w-[100%] flex flex-wrap gap-5 my-5 ">

                <div className=" w-16 h-16  shadow-xl dark:bg-[#c9d1d9] rounded-2xl justify-center p-2">
                  <img src={html} alt="" />                  
                </div>

                <div className=" w-16 h-16  shadow-xl dark:bg-[#c9d1d9] rounded-2xl justify-center p-2">
                  <img src={css} alt="" />                  
                </div>
                <div className=" w-16 h-16  shadow-xl dark:bg-[#c9d1d9] rounded-2xl justify-center p-2">
                  <img src={js} alt="" />                  
                </div>

              </div>

            </div>

           

            {/* Libraries */}
            <div className=" w-[100%]">
              <h1 className=' text-[#0d1117] dark:text-[#c9d1d9] text-lg lg:text-xl'>Libraries </h1>

              <div className="w-[100%] flex flex-wrap gap-5 my-5 ">

                <div className=" w-16 h-16  shadow-xl dark:bg-[#c9d1d9] rounded-2xl justify-center p-2">
                  <img src={bootstrap} alt="" />                  
                </div>

                <div className=" w-16 h-16  shadow-xl dark:bg-[#c9d1d9] rounded-2xl justify-center p-2">
                  <img src={sass} alt="" />                  
                </div>
                <div className=" w-16 h-16  shadow-xl dark:bg-[#c9d1d9] rounded-2xl justify-center p-2">
                  <img src={tailwind} className='w-14' alt="" />                  
                </div>
                <div className=" w-16 h-16  shadow-xl dark:bg-[#c9d1d9] rounded-2xl justify-center p-2">
                  <img src={react} alt="" />                  
                </div>
                <div className=" w-16 h-16  shadow-xl dark:bg-[#c9d1d9] rounded-2xl justify-center p-2">
                  <img src={redux} className='w-14' alt="" />                  
                </div>

              </div>

            </div>

            {/* Framework */}
            <div className=" w-[100%] flex gap-16">
              <div className=" ">
              <h1 className=' text-[#0d1117] dark:text-[#c9d1d9] text-lg lg:text-xl'>Framework </h1>

              <div className="w-[100%] flex flex-wrap gap-5 my-5 ">
                <div className=" w-16 h-16  shadow-xl dark:bg-[#c9d1d9] rounded-2xl justify-center p-2">
                  <img src={vuejs} className=' w-14' alt="" />                  
                </div>             
              </div>

              </div>

              {/* GIT/GITHUB */}
              <div className=" ">
              <h1 className=' text-[#0d1117] dark:text-[#c9d1d9] text-lg lg:text-xl'>Version Control System</h1>

              <div className="w-[100%] flex flex-wrap gap-5 my-5 ">
                <div className=" w-16 h-16  shadow-xl dark:bg-[#c9d1d9] rounded-2xl justify-center p-2">
                  <img src={git} className=' w-14' alt="" />                  
                </div> 
                <div className=" w-16 h-16  shadow-xl dark:bg-[#c9d1d9] rounded-2xl justify-center p-2">
                  <img src={github} className=' w-14' alt="" />                  
                </div>             
              </div>

              </div>
            </div>
        </div>
  )
}

export default Frontend
import React from 'react'
import php from "../../img/php.png";
import mysql from "../../img/mysql.png"
import postgresql from "../../img/postgresql.svg"
import redis from "../../img/redis.svg"
import laravel from "../../img/laravel.svg"
import sql from "../../img/sql.png"
import linux from "../../img/linux.png"


const Backend = () => {
  return (
    <div className="my-5 ">
            <h1 className=' text-[#0d1117] dark:text-[#c9d1d9] text-xl lg:text-2xl font-semibold'>Backend Technology</h1>

            {/* Languages */}
            <div className=" w-[100%]">
              <h1 className=' text-[#0d1117] dark:text-[#c9d1d9] text-lg lg:text-xl'>Languages</h1>

              <div className="w-[100%] flex flex-wrap gap-5 my-5 ">

                <div className=" w-16 h-16 shadow-xl  dark:bg-[#c9d1d9] rounded-2xl justify-center p-2">
                  <img src={php} alt="" />                  
                </div>   

                <div className=" w-16 h-16 shadow-xl  dark:bg-[#c9d1d9] rounded-2xl justify-center p-2">
                  <img src={sql} alt="" />                  
                </div>               

              </div>

            </div>

            {/* DBMS */}
            <div className=" w-[100%]">
              <h1 className=' text-[#0d1117] dark:text-[#c9d1d9] text-lg lg:text-xl'>Database Management System</h1>

              <div className="w-[100%] flex flex-wrap gap-5 my-5 ">

                <div className=" w-16 h-16 shadow-xl  dark:bg-[#c9d1d9] rounded-2xl justify-center p-2">
                  <img src={mysql} alt="" />                  
                </div>

                <div className=" w-16 h-16 shadow-xl  dark:bg-[#c9d1d9] rounded-2xl justify-center p-2">
                  <img src={postgresql} className=' w-14' alt="" />                  
                </div>
                <div className=" w-16 h-16 shadow-xl  dark:bg-[#c9d1d9] rounded-2xl justify-center p-2">
                  <img src={redis} className='w-14' alt="" />                  
                </div>                

              </div>

            </div>

            {/* Framework */}
            <div className=" w-[100%] flex gap-16">
              <div className=" ">
              <h1 className=' text-[#0d1117] dark:text-[#c9d1d9] text-lg lg:text-xl'>Framework </h1>

              <div className="w-[100%] flex flex-wrap gap-5 my-5 ">
                <div className=" w-16 h-16  shadow-xl dark:bg-[#c9d1d9] rounded-2xl justify-center p-2">
                  <img src={laravel} className=' w-14' alt="" />                  
                </div>             
              </div>

              </div>

              {/* GIT/GITHUB */}
              <div className=" ">
              <h1 className=' text-[#0d1117] dark:text-[#c9d1d9] text-lg lg:text-xl'>Operating System</h1>

              <div className="w-[100%] flex flex-wrap gap-5 my-5 ">
                <div className=" w-16 h-16  shadow-xl dark:bg-[#c9d1d9] rounded-2xl justify-center p-2">
                  <img src={linux} className=' w-14' alt="" />                  
                </div> 
                            
              </div>

              </div>
            </div>
        </div>
  )
}

export default Backend
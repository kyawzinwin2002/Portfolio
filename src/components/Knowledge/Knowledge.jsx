import React from 'react'
import Frontend from './Frontend'
import Backend from './Backend'




const Knowledge = () => {
  return (
    <div id='knowledge' className=' bg-white dark:bg-[#0d1117] my-32 md:mt-64 lg:my-10 p-10 lg:p-20'>
        <div className=" text-center">
            <h1 className='text-[#0d1117] font-bold dark:text-[#c9d1d9] text-3xl lg:text-4xl'>Knowledge</h1>
            <span className='text-[#0d1117] dark:text-[#c9d1d9] text-base '>Which Languages do I know?</span>
        </div>

        <div className="flex flex-col w-[100%] md:gap-10 md:my-5 justify-between md:items-center lg:flex-row">
        {/* Frontend */}
        <Frontend/>

        {/* Backend */}
        <Backend/>
        </div>
    </div>
  )
}

export default Knowledge
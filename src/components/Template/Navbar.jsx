import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    const [darkMode,setDarkMode] = useState(false);
    useEffect(() => {
        if(darkMode){
            document.documentElement.classList.add("dark");
        }else{
            document.documentElement.classList.remove("dark");
        }
    },[darkMode]);
  return (
    <div className=" flex items-center bg-[#284b63]  justify-around p-5">
        {/* LOGO */}

        <div className="">
            <h1 className=' text-3xl text-[#EAE0D5]'>Kyaw</h1>
        </div>
        
        {/* NavLists */}
        <div className="">
            <ul className=' text-[#EAE0D5] flex items-center gap-10'>
                <li>
                    <a href="">Main</a>
                </li>
                <li>
                    <a href="">Skills</a>
                </li>
                <li>
                    <a href="">Projects</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <button onClick={() => setDarkMode(!darkMode)} className=' px-5 py-1 bg-black text-white rounded-md'>Dark Mode</button>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
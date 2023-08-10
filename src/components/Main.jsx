import React, { useEffect, useState } from "react";
import image from "../img/profile.jpg";
import knowledge from "../img/knowledge.png";
import projects from "../img/project.png";
import skills from "../img/programming.png";
import resume from "../img/cv.png";
import sun from "../img/sun.png";
import moon from "../img/moon.png";
import "../css/Main.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Main = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className=" w-screen flex lg:flex-row flex-col md:items-center gap-28 md:gap-36 lg:gap-0 bg-white dark:bg-[#0d1117] h-screen md:h-[100%] lg:h-[600px] p-5 lg:p-10">
      {/* LEFT */}
      <div className=" lg:w-[50%] w-[100%] text-left lg:text-justify  p-5 lg:p-10">
        <div className=" flex flex-col gap-5">
          <h4 className=" text-3xl font-bold text-[#0d1117]  dark:text-[#c9d1d9] mb-3">
            Welcome Sir!
          </h4>

          <div className=" flex gap-5 items-center">
            <img
              src={image}
              className=" w-28 border-black border-2 rounded-[100%]"
              alt=""
            />

            <div className=" flex flex-col gap-2  my-4">
              <p className=" text-xl  text-[#0d1117]  dark:text-[#c9d1d9]">
                My Name is
              </p>
              <h1 className=" text-2xl lg:text-5xl  text-[#0d1117]  dark:text-[#c9d1d9] font-bold">
                Kyaw Zin Win
              </h1>
            </div>
          </div>

          <h1 className=" leading-9 w-[100%] md:w-[600px] lg:w-[500px] text-xl  text-[#0d1117]  dark:text-[#c9d1d9]">
            I am a Web Developer . Learned Special Web Design and Web
            Application Development from MMSIT.Keep going in this industry.
          </h1>

          <div className="flex items-center gap-5">
            <button className=" px-6 py-3 rounded-xl  bg-[#0d1117] dark:bg-[#c9d1d9] text-[#c9d1d9] dark:text-[#0d1117]  ">
              Download Resume
            </button>

            <button className=" px-6 py-3 rounded-xl  bg-[#0d1117] dark:bg-[#c9d1d9] text-[#c9d1d9] dark:text-[#0d1117]  ">
              Hire Me
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className=" h-[100%] w-[50%]   flex justify-center items-center px-5  lg:mb-0 lg:p-10">
        <div className="  relative   h-[50%] w-[50%]">
          <Link
            activeClass="active"
            to="knowledge"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className=" group  NavList top-[-85px] left-20 shadow-xl shadow-[#0d1117] dark:shadow-teal-400 bg-[#0d1117] dark:bg-[#c9d1d9]   rounded-md  text-[#c9d1d9] dark:text-[#0d1117] "
          >
            <div className=" img group-hover:opacity-0  absolute rotate-[316deg] top-7 left-4    ">
              <img src={knowledge} className=" w-14" alt="" />
            </div>

            <h1 className=" caption opacity-0 group-hover:opacity-100  text-[#ffffff] dark:text-[#0d1117]  font-semibold text-lg absolute rotate-[316deg] top-8 right-1 ">
              Knowledge
            </h1>
          </Link>

          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="group NavList shadow-xl shadow-[#0d1117] dark:shadow-teal-400  rounded-md left-44 lg:right-[-20px] top-3  bg-[#0d1117] dark:bg-[#c9d1d9]  text-[#c9d1d9] dark:text-[#0d1117] "
          >
            <div className=" img group-hover:opacity-0  absolute rotate-[316deg] top-5 left-4    ">
              <img src={projects} className=" w-14" alt="" />
            </div>

            <h1 className=" caption  text-[#ffffff] dark:text-[#0d1117]  opacity-0 group-hover:opacity-100 font-semibold text-lg absolute rotate-[316deg] top-8 left-3 ">
              Projects
            </h1>
          </Link>

          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="group NavList shadow-xl shadow-[#0d1117] dark:shadow-teal-400  rounded-md left-20 top-28 bg-[#0d1117] dark:bg-[#c9d1d9]  text-[#c9d1d9] dark:text-[#0d1117] "
          >
            <div className=" img group-hover:opacity-0  absolute rotate-[316deg] top-5 left-4    ">
              <img src={skills} className=" w-14" alt="" />
            </div>

            <h1 className=" caption  text-[#ffffff] dark:text-[#0d1117]  opacity-0 group-hover:opacity-100 font-semibold text-lg absolute rotate-[316deg] top-8 left-5 ">
              Skills
            </h1>
          </Link>
          <Link
            activeClass="active"
            to="resume"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="group NavList shadow-xl shadow-[#0d1117] dark:shadow-teal-400  rounded-md left-[-15px] top-3 bg-[#0d1117] dark:bg-[#c9d1d9]  text-[#c9d1d9] dark:text-[#0d1117] "
          >
            <div className=" img group-hover:opacity-0  absolute rotate-[316deg] top-5 left-4    ">
              <img src={resume} className=" w-14" alt="" />
            </div>

            <h1 className=" caption  text-[#ffffff] dark:text-[#0d1117]  opacity-0 group-hover:opacity-100 font-semibold text-lg absolute rotate-[316deg] top-8 left-3 ">
              Resume
            </h1>
          </Link>
        </div>
      </div>

      <img
        src={darkMode ? sun : moon}
        onClick={() => setDarkMode(!darkMode)}
        className="cursor-pointer w-8 h-8  fixed right-4 top-9  text-[#c9d1d9]"
      />
    </div>
  );
};

export default Main;

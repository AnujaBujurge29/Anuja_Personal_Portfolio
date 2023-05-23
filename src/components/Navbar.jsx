import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaLinkedinIn,
  FaFacebook,
} from "react-icons/fa";
import Logo from "../assets/Anuja_Logo.png";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[90px] flex justify-between items-center px-5  bg-[#051020] text-gray-400">
      <div>
        <img className="w-[200px] h-[120px] hover:w-[340px] hover:h-[240px] hover:mt-[150px] rounded-3xl"
          src={Logo}
          alt="data"
        ></img>
      </div>
      {/* main menu */}

      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Work Experinece</li>
        <li>Skills</li>
        <li>contact</li>
      </ul>

      {/* right Sidebar */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen  bg-[#051020] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl ">Home</li>
        <li className="py-6 text-4xl ">About</li>
        <li className="py-6 text-4xl ">Work Experinece</li>
        <li className="py-6 text-4xl ">Skills</li>
        <li className="py-6 text-4xl ">contact</li>
      </ul>

      {/* social icons`` */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-xl">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/anuja-bujurge/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800 rounded-xl">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/AnujaBujurge29"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-teal-600 rounded-xl">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600 rounded-xl">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

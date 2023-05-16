import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/Anuja_Logo.png";

export default function Navbar() {
  return (
    <div className="fixed w-full h-[90px] flex justify-between items-center px-5 bg-[#0a192f] text-gray-400">
      <div>
        <img
          src={Logo}
          alt="data"
          style={{ width: "180px", height: "100px" }}
        ></img>
      </div>
      {/* menu */}
      <div className="flex">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Work Experinece</li>
          <li>Skills</li>
          <li>contact</li>
        </ul>
      </div>

      {/* hamburger */}
      <div className="hidden">
        <FaBars />
      </div>

      {/* mobile menu */}
      <ul className="hidden">
        <li>Home</li>
        <li>About</li>
        <li>Work Experinece</li>
        <li>Skills</li>
        <li>contact</li>
      </ul>

      {/* social icons`` */}
      <div></div>
    </div>
  );
}

import React from "react";
import Logo from '../assets/g_logo_anuja.gif'

export default function Navbar() {
  return (
    <div >
      <div className="fixed w-full h-[80px] flex-between items-center px-4 bg-[#0a192f] text-gray-400">
        <img src={Logo} alt="data"></img>
      </div>
    </div>
  );
}



// import React from "react"

// importing images
import JavascriptImg from "../images/javascriptImg.png"
import HTMLImg from "../images/html.png"
import CSSImg from "../images/css.png"
import ReactImg from "../images/reactImg.png"
import BootstrapImg from "../images/bootstrap.png"
import TailwingImg from "../images/tailwind.png"
import MongoImg from "../images/mongo.png"
import NodeImg from "../images/node.png"
import MatlabImg from "../images/MATLAB.jpg"
import GitHubImg from "../images/github.png"
import MERN from "../images/Mern1.jpg"
const Skills = () => {
  return (
    <div
      name="skills"
      className="bg-[#08162a]  text-blue-400 w-full h-screen font-bold"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-5xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <br /> <br />
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-8 gap-4 text-center py-8 text-black ">
          <div className="shadow-xl shadow-black hover:scale-110 duration-500 bg-blue-400">
            <p className="my-4">HTML</p>
            <img src={HTMLImg} alt="HTML icon" className="w-20 mx-auto" />
          </div>
          <div className="shadow-xl shadow-black hover:scale-110 duration-500  bg-blue-400">
            <p className="my-4">CSS</p>
            <img src={CSSImg} alt="HTML icon" className="w-20 mx-auto" />
          </div>
          <div className="shadow-xl shadow-black hover:scale-110 duration-500  bg-blue-400">
            <p className="my-4">JavaScript</p>
            <img src={JavascriptImg} alt="HTML icon" className="w-20 mx-auto" />
          </div>
          <div className="shadow-xl shadow-black hover:scale-110 duration-500  bg-blue-400">
            <p className="my-4">ReactJS</p>
            <img src={ReactImg} alt="HTML icon" className="w-20 mx-auto" />
          </div>
          <div className="shadow-xl shadow-black hover:scale-110 duration-500  bg-blue-400">
            <p className="my-4">Bootstrap</p>
            <img src={BootstrapImg} alt="HTML icon" className="w-20 mx-auto" />
          </div>
          <div className="shadow-xl shadow-black hover:scale-110 duration-500  bg-blue-400">
            <p className="my-4">Tailwind</p>
            <img src={TailwingImg} alt="HTML icon" className="w-20 mx-auto" />
          </div>
          <div className="shadow-xl shadow-black hover:scale-110 duration-500  bg-blue-400">
            <p className="my-4">NodeJS</p>
            <img src={NodeImg} alt="HTML icon" className="w-20 mx-auto" />
          </div>
          <div className="shadow-xl shadow-black hover:scale-110 duration-500  bg-blue-400">
            <p className="my-4">MongoDB</p>
            <img src={MongoImg} alt="HTML icon" className="w-20 mx-auto" />
          </div>
          <div className="shadow-xl shadow-black hover:scale-110 duration-500  bg-blue-400">
            <p className="my-4">GitHub</p>
            <img src={GitHubImg} alt="HTML icon" className="w-20 mx-auto" />
          </div>
          <div className="shadow-xl shadow-black hover:scale-110 duration-500  bg-blue-400">
            <p className="my-4">MATLAB</p>
            <img src={MatlabImg} alt="HTML icon" className="w-20 mx-auto" />
          </div>
          <div className="shadow-xl shadow-black hover:scale-110 duration-500 bg-blue-400">
            <p className="my-4">MERN</p>
            <img src={MERN} alt="HTML icon" className="w-20 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills

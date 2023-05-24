import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="bg-[#08162a] w-full h-screen">
      {/* notes */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-xl text-blue-200">
        <p>Hi !! Bonjour !! Hola !! नमस्कार !! </p>
        <p> I am</p>
        <br />
        <h2 className="text-4xl sm:text-6xl font-bold text-pink-400">
          Anuja Bujurge
        </h2>
        <br />
        <h3 className="text-4xl sm:text-3xl font-bold text-blue-400">
          Front End Developer
        </h3>
        <div>
          <div className="py-6 max-w-[700px]">
            <p>
              I am creative and motivated Front-End Developer specializing in
              web development, passionate about creating inetractive applications.
            </p>
            <br />
            {/* <p>
              I am a <span className="text-blue-500 font-bold">
                Front-End Developer </span> 
               
            </p> */}
            {/* <br /> */}
            <p>
              I have completed Full-Time intense traning in
              <span className="text-blue-500 font-bold"> PerScholas</span> in
              SOFTWARE DEVELOPMENT which mainly focused on
              <span className="text-blue-500 font-bold"> MERN</span> Full-Stack
              Development.
            </p>
            <br />
            <p></p>
          </div>
          <br />
          <div>
            <button className="group text-pink-700 font-bold border-2 px-6 py-3 my-2 flex items-center rounded-2xl hover:bg-pink-700 hover:text-black hover:border-[#08162a] hover:shadow-xl hover:shadow-black">
              View PROJECTS &nbsp;&nbsp;
              <HiArrowNarrowRight className="group-hover:animate-ping" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

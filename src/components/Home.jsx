// import React from "react"
import { HiArrowNarrowRight } from "react-icons/hi"

const Home = () => {
  return (
    <div name="home" className="bg-[#08162a] w-full h-screen">
      {/* notes */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-xl text-blue-200">
        <br />
        <br />
        <br />
        <p>
          Hi !! <br />
          Bonjour !! Hola !! नमस्कार !!{" "}
        </p>
        <p> I am</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-pink-400">
          Anuja Bujurge
        </h2>
        <br />
        <h3 className="text-4xl sm:text-3xl font-bold text-blue-400">
          Front End Developer
        </h3>
        <div>
          <div className="py-6 max-w-[700px]">
            <p>
              I am dynamic and driven Front-End Developer, specializing in
              crafting engaging web experiences. My passion lies in developing
              interactive applications that captivate users.
            </p>
            <br />
            <p>
              With extensive training in
              <span className="text-blue-500 font-bold">
                {" "}
                SOFTWARE DEVELOPMENT
              </span>{" "}
              particularly focused on
              <span className="text-blue-500 font-bold"> M-E-R-N</span> Stack
              Development, I bring creativity and innovation to every project.
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
  )
}

export default Home

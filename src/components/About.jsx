import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#08162a] text-blue-400">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-5xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          {/* <div></div> */}
        </div>
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="text-xl">
            <p>
              Hi, I am a <span className="text-2xl font-bold text-green-800" >Front End Developer</span>{" "}
              based in Naperville, Chicago, IL
            </p>
            <br />
            <p>
              I am graduatte in <span className="text-2xl font-bold text-green-800">Electronics and Telecommunication
              Engineering</span> and have completed Masters in <span className="text-2xl font-bold text-green-800">Electronics Engineering.</span>
            </p>
            <br />
            <p>
              When it comes to technology part, I preferred to work with <span className="text-2xl font-bold text-green-800">React, Javascript, HTML, CSS.</span>
              This is fed into <span className="text-2xl font-bold text-green-800">Render or Vercel via GIT</span>{" "}
            </p>
            <br />
            <p>I also have hands on <span className="text-2xl font-bold text-green-800">Bootstrap, Tailwind, MongoDB, MATLAB, VHDL, VLC, C, C++</span></p>
            <p>
              I am adaptable and confident, able to pick up new frameworks, and
              intergrate quickly into new environment.
            </p>
            <br />
            <p>Apart from work, I enjoy reading, listenting soft music, watching sci-fi and disater movies.</p><br/>
            <p>
              Above all, I am privileged to be a Wife and Mother of Twin Boys.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

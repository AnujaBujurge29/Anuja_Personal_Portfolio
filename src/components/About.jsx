import React from "react"

const About = () => {
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#08162a] text-blue-400"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pl-4">
            <br />
            <br />
            <br />
            <p className="text-5xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>
        <br />
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="text-2xl sm:text-left">
            <p>
              Hi, I am a{" "}
              <span className="text-3xl font-bold text-green-800">
                Front End Developer
              </span>{" "}
              based in Naperville, Chicago, IL
            </p>
            <br />
          </div>
          <div className="text-xl">
            <p>
              I hold a degree in{" "}
              <span className="text-xl font-bold text-green-800">
                Electronics and Telecommunication Engineering
              </span>{" "}
              followed by a Master's in{" "}
              <span className="text-xl font-bold text-green-800">
                Electronics Engineering.
              </span>
            </p>
            <br />
            <p>
              My expertise lies in utilizing{" "}
              <span className="text-xl font-bold text-green-800">
                React, Javascript, HTML, CSS,
              </span>{" "}
              with deployment through platforms like{" "}
              <span className="text-xl font-bold text-green-800">
                Render or Vercel via GIT
              </span>{" "}
            </p>
            <br />
            <p>
              Additionally, I am proficient in{" "}
              <span className="text-xl font-bold text-green-800">
                Bootstrap, Tailwind, MongoDB, MATLAB.
              </span>{" "}
              I am highly adaptable, confident, and adept at quickly integrating
              into new environments.
            </p>

            <br />
            <p>
              Outside of work, I indulge in reading, listening to music, and
              watching sci-fi and disaster movies.
            </p>
            <br />
            <p>
              Most importantly, I cherish my role as a wife and mother to twin
              boys.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='bg-[#08162a] w-full h-screen'>
      {/* notes */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-2xl text-blue-200' >
        <p>Hi, I'm</p><br/>
        <h2 className='text-4xl sm:text-6xl font-bold text-pink-400'>Anuja Bujurge</h2><br/>
        <p>I am creative and motivated Software Developer specializing in web development</p><br/>
        <p>I have completed Full-Time intense traning in PerScholas in SOFTWARE DEVELOPMENT which mainly focused on MERN Full Stack Development.</p><br/>
        <p>I have graduated as Electronics and Telecommunication Engineering and Masters as Electronics Engineering.</p><br/>
        <div className='text-pink-700 font-bold'>
            <button>View PROJECTS<br/><br/><HiArrowNarrowRight/></button>
        </div>
      </div>
    </div>
  )
}

export default Home

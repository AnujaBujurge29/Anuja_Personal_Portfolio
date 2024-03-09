// import React from 'react'

import { RxDotFilled } from 'react-icons/rx';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { useState } from 'react'

// Software Developement
import softDev1 from '../Certificates/SoftwareDev.jpg'
// import softDev2 from '../Certificates/HTML.png'
// Cloud Computing
import cloud1 from '../Certificates/WebDevelopementFundamentals.png'
import cloud2 from '../Certificates/IntroductiontoCloudComputing.jpg'
import cloud3 from '../Certificates/CloudComputingFundamentals.png'
//AWS
import AWS1 from '../Certificates/awsPartnerAccreditationTechnical.png'
import AWS2 from '../Certificates/awsPartnerSalesAccreditationBusiness.png'
import AWS3 from '../Certificates/AWSPartnerAccreditationTechincal.png'

const slides = [softDev1, cloud1, cloud2, cloud3, AWS1, AWS2, AWS3]

export default function Certificates() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };
    return (
        <div className="bg-[#08162a] w-full h-screen p-20 text-blue-400 group">
            <div className='flex flex-col justify-center items-center w-full h-full m-20'>
                <div
                    style={{ backgroundImage: `url(${slides[currentIndex]})` }}
                    className='max-w-[700px] w-full h-full rounded-3xl bg-center bg-contain bg-no-repeat duration-500 '
                ></div>
                {/* Left Arrow */}
                <div className='hidden group-hover:block absolute top-[50%]  left-[20%] -translate-x-0 translate-y-[-50%]  text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={60} />
                </div>
                {/* Right Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-[10%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={60} />
                </div>
                <div className='flex top-4 justify-center py-2'>
                    {slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className='text-2xl cursor-pointer'
                        >
                            <RxDotFilled />
                        </div>
                    ))}
                </div></div>
        </div >
    )
}

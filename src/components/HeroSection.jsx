import React from 'react'
import { heroImage } from '../assets'

const HeroSection = () => {
  return (
    <div className='bg-secondary px-[16px] sm:px-[100px] flex sm:flex-row flex-col-reverse justify-center sm:items-center sm:justify-between text-white font-space sm:gap-[100px] h-[100vh]'>
      <div>
        <p className='font-space font-bold sm:text-base text-sm mb-2 sm:mb-0'>WELCOME TO RECUTIO _</p>
        <h1 className='sm:w-[88%] w-[90%] mb-[8px] sm:text-[64px] text-[40px] leading-tight'>
          Unlock Your Next Tech Talent with Us
        </h1>
        <h4 className="font-dmSans mb-[24px] w-[95%] font-light text-base sm:text-xl">
          We match top tech talent to your business needs, using our network and cutting-edge techniques. Choose us as your recruiting partner for the best results."
        </h4>
        <div className="flex items-center gap-[24px] font-dmSans">
          <button className="btn1">Get Started</button>
          <button className="btn2">Learn More</button>
        </div>
      </div>
      <img src={heroImage} alt="" className='sm:w-[40%] sm:block hidden' />
    </div>
  )
}

export default HeroSection
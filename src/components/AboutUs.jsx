import React from 'react'
import { about1, about2, about3, aboutUsImage } from '../assets'

const AboutUs = () => {
  return (
    <div className='sm:px-[100px] px-[16px] font-dmSans text-dimBlack bg-white py-[150px]'>
      <div className='flex sm:flex-row flex-col-reverse justify-between items-center gap-[80px]'>
        <img src={aboutUsImage} alt="" />
        <div>
          <h4 className="text-darkPrimary">About Us</h4>
          <h2 className="font-space mt-[8px] mb-[24px] sm:text-[40px] text-[32px]">
            Helping businesses access talents globally
          </h2>
          <div className="flex gap-4 items-center">
            <div className="btn3 sm:text-[16px] text-[8px]">Fintech</div>
            <div className="btn3 sm:text-[16px] text-[8px]">Healthtech</div>
            <div className="btn3 sm:text-[16px] text-[8px]">Edutech</div>
            <div className="btn3 sm:text-[16px] text-[8px]">Web 3.0</div>
          </div>
          <p className="font-normal text-dimmerBlack mt-[24px] mb-[40px]">
            Welcome to our technology recruitment website! We help companies find top technology talent by connecting them with professionals in our database. Our recruiters use advanced algorithms to match candidates to job openings, and our user-friendly interface allows for easy searching and applying. Browse our database today and start building your dream team.
          </p>
          <div>
            <button className="btn1">Learn More</button>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-center items-center gap-[80px] mt-[150px]">
        <div className="flex flex-col font-dmSans text-dimBlack">
          <img src={about1} alt="" className='w-[60px] h-[60px] sm:self-start self-center ' />
          <h3 className='font-space text-dimmerBlack mb-[16px] mt-[24px] sm:text-start text-center'>
            Access to talent
          </h3>
          <p className='sm:text-start text-center'>
            Get access to as many tech talent
            as possible for the role you want
            to fill in your organization easily
          </p>
        </div>
        <div className="flex flex-col font-dmSans text-dimBlack">
          <img src={about2} alt="" className='w-[60px] h-[60px] sm:self-start self-center' />
          <h3 className='font-space text-dimmerBlack mb-[16px] mt-[24px] sm:text-start text-center'>
            Get Jobs
          </h3>
          <p className='sm:text-start text-center'>
            Access thousands of job opportunities
            through our job boards which we
            update daily
          </p>
        </div>
        <div className="flex flex-col font-dmSans text-dimBlack">
          <img src={about3} alt="" className='w-[60px] h-[60px] sm:self-start self-center' />
          <h3 className='font-space text-dimmerBlack mb-[16px] mt-[24px] sm:text-start text-center'>
            HR Services
          </h3>
          <p className='sm:text-start text-center'>
            We proide other hr services needed
            bu your organization to successfully
            hire and onboard talents
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
import React from 'react'
import { recutioWhiteLogo } from '../assets'

const Footer = () => {
  return (
    <div className='bg-dimBlack py-[40px] px-[100px] flex sm:flex-row flex-col items-center justify-between gap-16 sm:items-start text-white'>
      <img src={recutioWhiteLogo} alt="" />
      <div className="flex items-center gap-[24px]">
        <p className="underline font-medium">About Us</p>
        <p className="underline font-medium">Job Boards</p>
        <p className="underline font-medium">Services</p>
        <p className="underline font-medium">Careers</p>
      </div>
      <div className="flex flex-col gap-[8px]">
        <p>Bruce lee lane, Ibadan, Lagos state</p>
        <p>recutio@gmail.com</p>
        <div className="flex gap-[16px]">
          <p>+2347067543765</p>
          <p>+2348100003765</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
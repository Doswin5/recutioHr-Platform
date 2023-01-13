import React from 'react'
import { quote, dp, leftArrow, rightArrow } from '../assets'

const Clients = () => {
  return (
    <div className='px-[16px] sm:px-[80px] py-[150px] bg-white text-dimBlack'>
      <div className="flex justify-end">
        <img src={quote} alt="" />
      </div>
      <h4 className="text-primary mt-[40px] mb-[16px]">
        What our clients say
      </h4>
      <h2 className='sm:text-[40px] text-[32px]'>
        "Great Customer service and they stay with you till the end of the process, I love them"
      </h2>
      <div className="flex sm:flex-row flex-col gap-12 justify-between items-center py-[40px] sm:py-[24px] mt-[40px] dimBorder">
        <div className="flex items-center gap-[16px]">
          <img src={dp} alt="" />
          <div className="flex flex-col">
            <h3 className='font-dmSans'>Taiye Taiwo</h3>
            <p className='divide-dimmerBlack'>Head of Product, AOC</p>
          </div>
        </div>
        <div className="flex justify-end items-center gap-[40px]">
          <img src={leftArrow} alt="" />
          <img src={rightArrow} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Clients
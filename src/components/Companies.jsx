import React from 'react'
import { company1, company2, company3, company4, company5 } from '../assets'

const Companies = () => {
  return (
    <div className='bg-white flex flex-col justify-center text-dimmestBlack pt-[100px] px-[16px]'>
      <h4 className='text-center mb-[40px]'>
        We have worked with over 100 companies in hiring the best tech talents
      </h4>
      <div className="flex sm:flex-row flex-col items-center justify-center gap-[40px]">
        <img src={company1} alt="" />
        <img src={company2} alt="" />
        <img src={company3} alt="" />
        <img src={company4} alt="" />
        <img src={company5} alt="" />
      </div>
    </div>
  )
}

export default Companies
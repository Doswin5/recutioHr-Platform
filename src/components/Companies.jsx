import React from 'react'
import { company1, company2, company3, company4, company5 } from '../assets'

const Companies = () => {
  return (
    <div className='bg-white flex flex-col justify-center text-dimmestBlack sm:pt-[100px] pt-[80px] px-[16px]'>
      <h4 className='text-center mb-[40px]'>
        We have worked with over 100 companies in hiring the best tech talents
      </h4>
      <div className="flex sm:flex-row flex-col items-center justify-center sm:gap-[80px] gap-10">
        <img src={company1} alt="" className='sm:w-fit w-[25%]' />
        <img src={company2} alt="" className='sm:w-fit w-[25%]' />
        <img src={company3} alt="" className='sm:w-fit w-[25%]' />
        <img src={company4} alt="" className='sm:w-fit w-[25%]' />
        <img src={company5} alt="" className='sm:w-fit w-[25%]' />
      </div>
    </div>
  )
}

export default Companies
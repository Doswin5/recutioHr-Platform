import React from 'react'
import { whoWeAreImage } from '../assets'

const WhoWeAre = () => {
  return (
    <div className='bg-dimBlack px-[16px] sm:px-[100px] py-[150px] text-dimWhite flex sm:flex-row flex-col items-center gap-[80px]'>
      <div>
        <h4 className="text-primary">Who we are</h4>
        <h2 className='text-white mb-[16px]'>
          We treat your needs as ours.
        </h2>
        <p className='mb-[40px]'>
          Best services is guaranteed for you since we see our customers as partners and we you as family, and we won’t do anything against your wish, we listen to you and make sure we bring your dream tea to reality.
        </p>
        <button className="btn1">Get Started</button>
      </div>
      <img src={whoWeAreImage} alt="" className='w-[50%]' />
    </div>
  )
}

export default WhoWeAre
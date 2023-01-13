import React from 'react'

const GetStarted = () => {
  return (
    <div className='mt-[150px] py-[80px] sm:py-[150px] flex justify-center bg-secondary px-[16px] sm:px-[200px]'>
      <div className="flex flex-col items-center p-[16px] sm:p-[60px] border-2 border-white rounded-[16px] text-white">
        <h2 className='text-center sm:text-[40px] text-[20px]'>
          Join our client list from all around the world and start enjoying our services
        </h2>
        <div>
          <button className="btn1 sm:mt-[40px] mt-[24px]">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default GetStarted
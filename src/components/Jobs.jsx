import React from 'react'
import { searchIcon, design, dropdown, location, filter, remote, fulltime, twitterLogo, spotifyLogo, stripeLogo } from '../assets'

const Jobs = () => {
  return (
    <div className='bg-[#f9f9f9] px-[16px] sm:px-[100px] py-[80px]'>
      <h2 className='sm:text-[40px] text-[32px]'>Job Board</h2>
      <div className="flex  items-center rounded-[16px] p-[8px] sm:p-[24px] my-[40px] bg-white gap-[16px]">
        <div className="flex items-center justify-between w-[50%] darkBorder pr-[16px]">
          <div className="flex items-center gap-[8px]">
            <img src={searchIcon} alt="" />
            <img src={design} alt="" className='sm:block hidden' />
          </div>
          <img src={dropdown} alt="" />
        </div>
        <div className="flex items-center justify-between w-[50%]">
          <div className="flex items-center gap-[8px]">
            <img src={location} alt="" />
            <span className="font-dmSans text-[12px]">Location</span>
          </div>
          <div className="flex items-center gap-[16px]">
            <img src={dropdown} alt="" />
            <img src={filter} alt="" className='sm:flex hidden' />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-[24px] gap-x-[40px]">
        <div className="bg-white sm:p-[40px] p-[16px]">
          <div className="flex justify-between">
            <img src={twitterLogo} alt="" />
            <div className="flex items-center gap-[8px]">
              <img src={remote} alt="" />
              <img src={fulltime} alt="" />
            </div>
          </div>
          <div className="flex justify-between items-end text-dimmestBlack mt-[24px]">
            <div>
              <h3 className="text-dimBlack font-dmSans">
                Junior UI/UX Designer
              </h3>
              <p className='mt-[8px] mb-[16px] font-medium'>Twitter</p>
              <p className='font-medium'>$120 - $160k / Month</p>
            </div>
            <button className="btn1">
              Apply Now
            </button>
          </div>
        </div>
        <div className="bg-white sm:p-[40px] p-[16px]">
          <div className="flex justify-between">
            <img src={twitterLogo} alt="" />
            <div className="flex items-center gap-[8px]">
              <img src={remote} alt="" />
              <img src={fulltime} alt="" />
            </div>
          </div>
          <div className="flex justify-between items-end text-dimmestBlack mt-[24px]">
            <div>
              <h3 className="text-dimBlack font-dmSans">
                Backend Developer
              </h3>
              <p className='mt-[8px] mb-[16px] font-medium'>Twitter</p>
              <p className='font-medium'>$180 - $200k / Month</p>
            </div>
            <button className="btn1">
              Apply Now
            </button>
          </div>
        </div>
        <div className="bg-white sm:p-[40px] p-[16px]">
          <div className="flex justify-between">
            <img src={spotifyLogo} alt="" />
            <div className="flex items-center gap-[8px]">
              <img src={remote} alt="" />
              <img src={fulltime} alt="" />
            </div>
          </div>
          <div className="flex justify-between items-end text-dimmestBlack mt-[24px]">
            <div>
              <h3 className="text-dimBlack font-dmSans">
                Frontend Developer
              </h3>
              <p className='mt-[8px] mb-[16px] font-medium'>Spotify</p>
              <p className='font-medium'>$300 - $460k / Month</p>
            </div>
            <button className="btn1">
              Apply Now
            </button>
          </div>
        </div>
        <div className="bg-white sm:p-[40px] p-[16px]">
          <div className="flex justify-between">
            <img src={stripeLogo} alt="" />
            <div className="flex items-center gap-[8px]">
              <img src={remote} alt="" />
              <img src={fulltime} alt="" />
            </div>
          </div>
          <div className="flex justify-between items-end text-dimmestBlack mt-[24px]">
            <div>
              <h3 className="text-dimBlack font-dmSans">
                Product Designer
              </h3>
              <p className='mt-[8px] mb-[16px] font-medium'>Stripe</p>
              <p className='font-medium'>$160 - $180k / Month</p>
            </div>
            <button className="btn1">
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <p className='underline text-primary mt-[40px] font-medium'>See More</p>
    </div>
  )
}

export default Jobs
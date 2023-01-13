import React from 'react'
import { Link } from 'react-router-dom'
import { recutioLogo } from '../assets'

const Navbar = () => {
  return (
    <div className='flex bg-secondary justify-between items-center fixed left-0 right-0 sm:px-[100px] px-[16px] py-[24px] text-white font-dmSans font-medium'>
      <Link to='/'>
        <img src={recutioLogo} alt="recutio logo" className='w-[100px]' />
      </Link>
      <div className="flex items-center gap-[40px]">
        <Link>About</Link>
        <Link>Job Boards</Link>
        <Link>Testimonial</Link>
      </div>
      <button className="btn2">Register Now</button>
    </div>
  )
}

export default Navbar
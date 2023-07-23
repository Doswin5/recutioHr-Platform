import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { recutioLogo, menu, close } from '../assets'


const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className='flex bg-secondary justify-between items-center fixed top-0 left-0 right-0 sm:px-[100px] px-[16px] py-[16px] text-white font-dmSans font-medium'>
      <Link to='/'>
        <img src={recutioLogo} alt="recutio logo" className='w-[100px]' />
      </Link>
      <div className="hidden sm:flex items-center gap-[40px]">
        <Link>About</Link>
        <Link>Job Boards</Link>
        <Link>Testimonial</Link>
      </div>
      <button className="hidden sm:block btn2">
        Register Now
      </button>
      {/* <div className="hidden sm:flex justify-between w-[65%]">
      </div> */}

      <div className="flex sm:hidden items-center" >
        <img
          src={toggle ? close : menu}
          alt="menu"
          className='w-[24px] h-[24px] cursor-pointer object-cover'
          onClick={() => setToggle(prev => !prev)}
        />
        <div
          className={`${toggle ? 'flex' : 'hidden'} justify-center pt-6 px-6 bg-black text-white absolute top-20 right-0 mx-4 my-2 min-w-[60px] rounded-xl sidebar`}
        >
          <ul
            className="list-none items-center flex flex-col gap-[24px] pb-[24px]"
          >
            <div className="flex flex-col items-center gap-[40px]">
              <Link>About</Link>
              <Link>Job Boards</Link>
              <Link>Testimonial</Link>
            </div>
            <button className="btn2">
              Register Now
            </button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
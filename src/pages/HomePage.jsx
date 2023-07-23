import React from 'react'
import { AboutUs, Clients, Companies, GetStarted, HeroSection, WhoWeAre, Jobs } from '../components'
// import { heroBg } from '../assets'

const HomePage = () => {
  return (
    <div
      // style={{backgroundImage: `url(${heroBg})`, backgroundSize: 'cover'}}
      className='bg-white font-dmSans'
    >
      <HeroSection />
      <Companies />
      <AboutUs />
      <WhoWeAre />
      <Clients />
      <Jobs />
      <GetStarted />
    </div>
  )
}

export default HomePage
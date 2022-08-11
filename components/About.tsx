import React from 'react'
import { AboutHeader, AboutInfo } from '../utils/AboutData'

const About = () => {
  return (
    <div className=" space-y-6">
        <div className="text-center flex font-raleway text-6xl text-[#a1806b] flex-col">
            <span>ABOUT OUR</span>
            <span className='pl-[20%]'>MUSEUM</span>
        </div>
        <div className='text-5xl first-letter:pl-[30%]'>
            <AboutHeader />
        </div>
        <div className='text-center'>
        <AboutInfo/>
        </div>
        
    </div>
  )
}

export default About
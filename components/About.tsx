import Image from 'next/image'
import React from 'react'
import image from '../public/images/image1.jpg';
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
        
        <div className='flex justify-around items-center'>
          <span className='pt-10 text-[#fafafa]'>Visitors</span>
          <span className='text-6xl font-raleway font-thin'>706,060</span>
          <span>(2020)</span>
        </div>

        <div className='flex justify-around items-center'>
          <span className='pt-10 text-[#fafafa]'>Established</span>
          <span className='text-6xl font-raleway font-thin'>1929</span>
          <span>November 7</span>
        </div>

        <div className='relative h-[600px] w-full '>
          <Image src={image} layout="fill" objectFit='cover' alt="" />
        </div>
    </div>


  )
}

export default About
import React from 'react'
import image1 from '../public/img1.jpg';
import "@fontsource/open-sans"
import "@fontsource/montserrat"
import Image from 'next/image';

function Banner() {
  return (
    <div 
    style={{ fontFamily: "Montserrat" }} 
     className='text-5xl md:text-8xl w-full h-screen relative flex flex-col py-4 font-'>
      <span className="md:font-bold bg-black text-white p-3 font-black">DEVELOPER</span>
      <span className='ml-48 text-orange-500'>WITH USERS</span>
      <span className='text-center'>IN <span className="font-bold">MIND</span></span>
      <div style={{ fontFamily: "Open Sans"}} className="text-lg text-gray-600 text-center md:mx-auto">
        <span>Aspiring movie content creator turned develoer, now based in Lagos Nigeria.</span>
      </div>
      
      </div>
  )
}

export default Banner
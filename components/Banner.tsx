import React from 'react'
import image1 from '../public/img1.jpg';
import "@fontsource/open-sans"
import "@fontsource/montserrat"
import Image from 'next/image';

function Banner() {
  return (
    <div 
    style={{ fontFamily: "Montserrat" }} 
     className='text-8xl w-full h-screen relative flex flex-col py-4 font-'>
      <span className="font-bold">DEVELOPER</span>
      <Image src={image1} className="rounded-2xl mx-auto" width={3200} height={3200} objectFit="cover" alt="" />
      <span className='ml-48'>WITH USERS</span>
      <span className='text-center'>IN <span className="font-bold">MIND</span></span>
      <div style={{ fontFamily: "Open Sans"}} className="text-lg mx-auto">
        <span>Aspiring movie content creator turned develoer, now based in Lagos Nigeria.</span>
      </div>
      
      </div>
  )
}

export default Banner
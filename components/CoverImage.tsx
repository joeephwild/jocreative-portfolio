import React from 'react'
import Image from 'next/image';
import cover from '../public/images/cover.jpg';

function CoverImage() {
  return (
    <div className='w-[100%] relative mt-5 h-[100vh]'>
        <Image className="w-screen h-[600px]" priority src={cover}  layout="fill" objectFit='cover' alt=""/>
    </div>
  )
}

export default CoverImage
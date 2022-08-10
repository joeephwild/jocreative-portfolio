import React from 'react'
import Image from 'next/image';
import cover from '../public/images/cover.jpg';

function CoverImage() {
  return (
    <div className='w-[100%] mt-10 h-[100vh]'>
        <Image priority src={cover} layout="intrinsic" objectFit='cover' alt=""/>
    </div>
  )
}

export default CoverImage
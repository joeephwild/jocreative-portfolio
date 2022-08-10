import React from 'react'
import Image from 'next/image';
import cover from '../public/images/coverimage.jpg';

function CoverImage() {
  return (
    <div className='md:w-[100%] mt-10 h-[600px]'>
        <Image src={cover} layout="responsive" objectFit='cover' alt=""/>
    </div>
  )
}

export default CoverImage
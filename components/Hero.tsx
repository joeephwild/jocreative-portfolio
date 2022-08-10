import React from 'react'
import CoverImage from './CoverImage'

function Hero() {
  return (
    <div className='flex flex-col w-[100%] h-[700%]'>
      <div className='relative'>
      <div className='justify-between items-center flex'>
            <span className=' flex'>
                <h1 className='text-[80px] ml-[60%] md:ml-[0%] md:text-[90px] lg:text-[160px]  font-thin  font-raleway text-[#fad6a5] '>THE</h1>
            </span>
            <span >
              <p className='text-[#fafafa] hidden md:block text-xs w-44'>One of the largest and most influential museums of modern art in the world</p>
            </span>
            <span >
              <p className='text-[#fafafa] hidden md:block text-xs mr-5 w-36'>New york city 53rd street</p>
            </span>
        </div>
          <span className="flex  flex-col">
          <h1 className='md:text-center ml-[0%] lg:ml-[20%] xl:ml-[40%] mb-[10%] text-[90px] md:text-[160px] font-thin font-raleway absolute top-[20%] text-[#fad6a5]'>MUSEUM</h1>
          </span>
          <div>
          <span className='absolute top-[28%]'>
          <h1 className=' text-[90px] ml-[40%] md:ml-[0%] lg:mt-[30%] lg:space-y-4 mt-[25%] md:text-[160px] font-thin  md:top-[55%] font-raleway  text-[#fad6a5]'>OF</h1>
          </span>
          </div>
           {/* last letter content */}
          <div className="flex text-center ml-[3%] mt-[13%]  md:ml-2 justify-center items-center">
          <div className='mr-6'>
          <h1 className='text-xs hidden md:block mt-[106%] items-center text-[#fafafa]'>Since 1929</h1>
          </div>
          <div className="flex">
          <h1 className='text-[90px] md:text-[160px] font-thin font-raleway text-[#fad6a5]'>MORDERN</h1>
           <h1 className=' text-[90px] md:text-[160px] font-thin font-raleway text-[#fad6a5]'>ART</h1>
          </div>
          </div>
      </div>
      <span className='mx-auto '>
              <p className='text-[#fafafa] w-80 md:hidden block  text-2xl'>One of the largest and most influential museums of modern art in the world</p>
            </span>
    </div>
  )
}

export default Hero
import React from "react";
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

function Banner() {
  return <div className="relative justify-center items-center mt-6 w-[100vw] h-[600px] ">
  <div  className="md:w-96  absolute top-0 left-[25%] animate-blob w-60 h-60 blur-xl z-[50] md:h-96 bg-purple-500 rounded-full"/>
    <div className="absolute top-0 right-[20%]  md:w-96 md:h-96  w-60 h-60 blur-xl animate-blob animation-delay-2000 z-50 bg-red-700 rounded-full"/>
    <div className="absolute bottom-[8rem]  left-[40%] md:w-96  w-60 h-60  blur-xl animate-blob animation-delay-2000 md:h-96 z-10 bg-yellow-500 rounded-full"/>
    <div className="font-bold text-6xl md:text-9xl flex-col  ">
      <div className="mx-auto justify-center items-center flex flex-col space-y-4">
        <span className="text-gray-300 z-50 absolute top-[10%] ">Let's</span>
        <span className="text-gray-300 z-50 top-[25%] absolute text-center">Build</span>
        <span className="text-gray-300 z-50 top-[35%] absolute text-center">Something Amazing</span>
      </div> 
    </div>
      <div className="flex absolute bottom-0">
        <span className="text-gray-500 flex font-bold text-3xl">
        Front-End web, blockchain developer, Based in lagos, Nigeria
        </span>
      </div>
         
  </div>;
}

export default Banner;

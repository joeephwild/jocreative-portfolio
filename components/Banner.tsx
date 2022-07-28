import React from "react";
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

function Banner() {
  return <div className="relative w-[100vw] h-[300px] md:h-[500px] px-6">
    <div className="absolute top-0 left-[25%] w-72 mix-blend-multiply  h-72 bg-purple-500 rounded-full"/>
    <div className="absolute top-0 right-[20%] w-72 h-72 mix-blend-multiply bg-pink-500 rounded-full"/>
    <div className="absolute bottom-[8rem] left-[40%] w-72 mix-blend-multiply h-72 bg-yellow-500 rounded-full"/>
    <div className="font-bold hidden text-6xl md:text-8xl flex-col flex">
      <div className="w-full  flex flex-col space-y-4">
        <span className="text-gray-500 hover:text-orange-600">FRONT <span className="border-b-4 border-dashed border-white"/> END</span>
        <span className="md:ml-16 text-center text-gray-500 hover:text-orange-600 pt-[15%] md:pt-[2%]">
        <Typewriter 
        onInit={(typewriter) => {
          typewriter
          .pauseFor(2000)
          .start();
        }}
            options = {{
              strings: ["WEB", "BLOCKCHAIN"],
              autoStart: true,
              loop: true,
            }}
             />
        </span>
        <span className="md:ml-[20%] text-gray-500 hover:text-orange-600 text-center">DEVELOPER</span>
      </div> 
    </div>
         
  </div>;
}

export default Banner;

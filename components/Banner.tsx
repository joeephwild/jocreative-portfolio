import React from "react";
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

function Banner() {
  return <div className="relative w-[100vw] h-[300px] md:h-[500px] px-6">
  <div  className="md:w-72 mix-blend-multiply absolute top-0 left-[25%] animate-blob w-60 h-60 filter blur-xl opacity-70 z-[10] md:h-72 bg-purple-500 rounded-full"/>
    <div className="absolute top-0 right-[20%] md:w-72 md:h-72 mix-blend-multiply filter w-60 h-60 blur-xl opacity-70 animate-blob animation-delay-2000 z-10 bg-pink-500 rounded-full"/>
    <div className="absolute bottom-[8rem] left-[40%] md:w-72 mix-blend-multiply filter w-60 h-60 blur-xl opacity-70 animate-blob animation-delay-2000 md:h-72 z-10 bg-yellow-500 rounded-full"/>
    <div className="font-bold  text-6xl md:text-8xl flex-col ">
      <div className="w-full z-50 flex flex-col space-y-4">
        <span className="text-black ">FRONT <span className="border-b border-3 border-dashed border-white"/> END</span>
        <span className="md:ml-16 text-center text-black  pt-[15%] md:pt-[2%]">
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
        <span className="md:ml-[20%] text-black  text-center">DEVELOPER</span>
      </div> 
    </div>
         
  </div>;
}

export default Banner;

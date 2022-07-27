import React from "react";
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

function Banner() {
  return <div className="relative w-[100vw] h-[100vh] px-6">
    <div className="pt-12 font-bold text-6xl md:text-8xl flex-col flex">
      <p className="text-2xl ml-12">I'm Joseph Omotade, A</p>
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
        <span className="absolute text-gray-500 hover:text-orange-600 right-6 bottom-0 top--[45%] lg:top-[72%]">DEVELOPER</span>
      </div> 
    </div>
          <button className="bg-transparenttext-gray-400 text-xl px-4 py-2 border-gray-500 border-4 border-solid rounded-full" type="submit">Next Page</button>
  </div>;
}

export default Banner;

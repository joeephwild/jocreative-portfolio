import React from "react";
import { SiSolidity, SiTailwindcss, SiFirebase, SiTypescript } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import Marquee from 'react-fast-marquee';
import { FaReact } from 'react-icons/fa';


export default function Skills() {
  return <div className="my-3 w-full ">
    <p className="text-gray-500 text-center text-3xl">MY DREAM TECH</p>
    <div >
        <Marquee 
        className="grid grid-cols-12 bg-black gap-18 items-center w-full"
         play 
          speed={100}
          delay={5}
          >
        <FaReact size={65}/>
        <TbBrandNextjs size={65}/>
        <SiTypescript size={65}/>
        <SiTailwindcss size={65}/>
        <SiTailwindcss size={65}/>
        <SiTailwindcss size={65}/>
       <SiFirebase size={65}/>
        <SiSolidity size={65}/>
        <SiSolidity size={65}/>
        <SiSolidity size={65}/>
        </Marquee>
    </div>
  </div>;
}

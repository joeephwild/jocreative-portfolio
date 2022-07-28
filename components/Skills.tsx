import React from "react";
import { SiSolidity, SiTailwindcss, SiFirebase, SiTypescript } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaReact } from 'react-icons/fa';


export default function Skills() {
  return <div className="w-full ">
    <p className="text-gray-500 text-center text-3xl">MY DREAM TECH</p>
    <div className="ml-6 md:justify-center grid grid-cols-12 gap-8">
        <FaReact size={30}/>
        <TbBrandNextjs size={30}/>
        <SiTypescript size={30}/>
        <SiTailwindcss size={30}/>
        <SiTailwindcss size={30}/>
        <SiTailwindcss size={30}/>
       <SiFirebase size={30}/>
        <SiSolidity size={30}/>
        <SiSolidity size={30}/>
        <SiSolidity size={30}/>
    </div>
  </div>;
}

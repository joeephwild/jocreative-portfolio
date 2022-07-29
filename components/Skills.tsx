import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';
import html from "../public/skills/html.png";
import css from "../public/skills/css.png";
import javascript from '../public/skills/javascript.png';
import react from '../public/skills/react.png';
import tailwind from '../public/skills/tailwind.png';
import firebase from '../public/skills/firebase.png';
import github from '../public/skills/github1.png';
import solidity from '../public/skills/solidity.png';



export default function Skills() {
  return <div className="w-full mt-3 ">
    <p className="text-gray-500 text-center font-bold text-3xl">MY DREAM TECHSTACK</p>
    <div className="md:justify-between animate-marquee animation-delay-20000 mt-3 flex space-x-6 overflow-x-hidden">
        <div className=" flex flex-col items-center">
          <Image src={html} width="64px" height="64px" alt="" />
          <h3 className="text-gray-500 font-bold">HTML5</h3>
        </div>
        <div className=" flex flex-col items-center">
          <Image src={css} width="64px" height="64px" alt="" />
          <h3 className="text-gray-500 font-bold">CSS3</h3>
        </div>
        <div className=" flex flex-col items-center">
          <Image src={javascript} width="64px" height="64px" alt="" />
          <h3 className="text-gray-500 font-bold">JAVASCRIPT</h3>
        </div>
        <div className=" flex flex-col items-center">
          <Image src={react} width="64px" height="64px" alt="" />
          <h3 className="text-gray-500 font-bold">REACT</h3>
        </div>
        <div className=" flex flex-col items-center">
          <Image src={tailwind} width="64px" height="64px" alt="" />
          <h3 className="text-gray-500 font-bold">TAILWINDCSS</h3>
        </div>
        <div className=" flex flex-col items-center">
          <Image src={firebase} width="64px" height="64px" alt="" />
          <h3 className="text-gray-500 font-bold">FIREBASE</h3>
        </div>
        <div className=" flex flex-col items-center">
          <Image src={github} width="64px" height="64px" alt="" />
          <h3 className="text-gray-500 font-bold">GITHUB</h3>
        </div>
        <div className=" flex flex-col items-center">
          <Image src={solidity} width="64px" height="64px" alt="" />
          <h3 className="text-gray-500 font-bold">SOLIDITY</h3>
        </div>
    </div>
  </div>;
}

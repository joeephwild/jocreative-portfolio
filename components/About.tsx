import React from "react";
import Image from 'next/image';
import { BiRadioCircle } from 'react-icons/bi'
import image1 from '../public/img1.jpg'

export default function About() {
    const techStack: any = [
        {
            name: 'React.js/Next.js',
        },
        {
            name: 'Tailwindcss',
        },
        {
            name: 'Sanity/Headless Cms',
        },
        {
            name: 'Framer Motion',
        },
        {
            name: 'Javascript/Typescript',
        },
        {
            name: 'Firebase/Ethers.js'
        }
    ]
  return <div>
    <div className="w-full md:h-screen  p-2 flex items-center py-16">
        <div className="max-w-[1240px] m-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="w-full h-auto flex item-center justify-center p-4 hover:scale-105 ease-in duration-300">
       <Image src={image1} width={1150} height={1550} className="drop-shadow-lg shadow-gray-600 rounded-lg"  />
    </div>
    <div className="col-span-2">
    <h1 className="text-gray-500 text-6xl font-bold m-6 hover:text-orange-600 text-center">HELLO, I AM JOSEPH</h1>
    <span className="text-gray-500 py-6 tracking-widest text-sm">An aspiring movie content creator turned Developer. After some few days with code,it was love at first sight.
        I am presently based in Lagos, Nigeria.</span>
        <span className="text-gray-500 py-6 tracking-widest text-sm"> An aspiring movie content creator turned Developer. After some few days with code,it was love at first sight.
        I am presently based in Lagos, Nigeria</span>
        <p className="text-center py-6 text-gray-500 text-3xl">My tech stack of choice</p>
        <div className="grid grid-cols-3 place-content-center gap-8 py-3">
            {techStack.map((tech: any) => {
                return <span className="flex text-gray-500 items-center">
                    <BiRadioCircle/>
                    {tech?.name}
                </span>
            })}
        </div>
    </div>
  </div>
        </div>
  </div>;
}

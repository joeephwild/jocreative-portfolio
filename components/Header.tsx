import React from 'react'
import Image from 'next/image';
import ukr from '../public/images/ukr.png';
import { FaBars } from 'react-icons/fa'

function Header() {
  return (
    <div className="flex w-full flex-col">
        <div className='w-full bg-[#fafafa] flex justify-center'>
            <span>#Stop the war</span>
            <span>Save the children</span>
        </div>
        {/* bottom navigation */}
       <div className='w-full flex justify-between items-center p-4 text-[#fafafa]'>
        <span className="text-2xl font-bold">MoMA</span>
        {/* middle section */}
            <ul  className='cursor-pointer hidden lg:inline-flex text-[#fafafa] space-x-6'>
                <li>Architecture</li>
                <li>Design</li>
                <li>Drawing</li>
                <li>Painting</li>
                <li>Sculpture</li>
                <li>Photography</li>
            </ul>
               <div className="lg:inline-flex hidden space-x-3">
                <button className='border-b-2 border-[#a1806b]'>Buy a ticket</button>
                <button className='border-b-2 border-[#a1806b]'>Buy a ticket</button>
               </div>
       </div>
    </div>
  )
}

export default Header
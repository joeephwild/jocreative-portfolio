import React from 'react'
import Image from 'next/image';
import ukr from '../public/images/ukr.png';
import { FaBars } from 'react-icons/fa'

function Header() {
  return (
    <div className="flex w-full h-10 flex-col">
        <div className="bg-white text-xl text-[#1e1e1e] font-bold text-center capitalize">
            <span>#stop war in ukraine </span>
                 <span>Save the children</span>
        </div>
        <div className="flex justify-between items-center px-8">
            <span className='text-[#fafafa] text-2xl font-bold'>MoMA</span>
            <div className="md:flex hidden  space-x-5 capitalize text-sm font-bold items-center text-[#fafafa]">
                <span>Architecture</span>
                <span>Design</span>
                <span>photography</span>
                <span>drawing</span>
                <span>painting</span>
                <span>sculpture</span>
            </div>
            <div className="md:flex hidden space-x-3 text-lg text-[#fafafa] items-center">
                <button className='border-b-2 border-[#a1806b] border-bold'>Buy a ticket</button>
                <button className='border-b-2 border-[#a1806b] border-bold'>Become a member</button>
            </div>
             {/* mobile menu layout */}
        <div className='text-[#fafafa] mt-3 border-[#a1806b] border-2 border-bold p-5 md:hidden block'>
            <FaBars size={35} />
        </div>
        </div>
       
    </div>
  )
}

export default Header
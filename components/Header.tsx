import React from 'react'

function Header() {
  return (
    <div className="flex flex-col">
        <div className="bg-white text-xs text-[#1e1e1e] font-bold text-center capitalize">
            <span>#stop war in ukraine  save the children</span>
        </div>
        <div className="flex justify-between items-center px-8">
            <span className='text-[#fafafa] font-bold'>MoMA</span>
            <div className="md:flex hidden  space-x-5 capitalize text-sm font-bold items-center text-[#fafafa]">
                <span>Architecture</span>
                <span>Design</span>
                <span>photography</span>
                <span>drawing</span>
                <span>painting</span>
                <span>sculpture</span>
            </div>
            <div className="md:flex hidden space-x-3 text-[#fafafa] items-center">
                <button className='border-b-2 border-[#a1806b] border-bold'>Buy a ticket</button>
                <button className='border-b-2 border-[#a1806b] border-bold'>Become a member</button>
            </div>
        </div>
    </div>
  )
}

export default Header
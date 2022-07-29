import { useState } from "react";
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'

function Header() {
    const current = new Date();
    const date = `${current.getDate()+1}/${current.getMonth()}/${current.getFullYear()}`;
   
  return <div className="w-full bg-transparent top-0 cursor-pointer justify-between flex items-center p-4">
    <h1 className="bg-white text-black font-bold p-2 text-4xl">JO</h1>
    <div className="space-x-3 text-white">
       
    </div>
    <span className="text-gray-500 text-xl">I'm available for work 
      {date}
    </span>
    <button className="bg-transparent text-gray-400 text-xl px-4 py-2 border-gray-500 border-4 border-solid rounded-full" type="submit">Contact</button>
    </div>;
}

export default Header;

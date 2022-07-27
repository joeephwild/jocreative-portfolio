import { useState } from "react";
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'

function Header() {
    const [open, setOpen] = useState(true);
    
  return <div className="w-full bg-transparent border-gray-500 border-dashed border-b top-0 cursor-pointer justify-between flex items-center p-4">
    <h1 className="bg-white text-black font-bold p-2 text-xl">JO</h1>
    <div className="space-x-3 text-white">
        <span>Home</span><span>About</span><span>Portfolio</span><span>Blog</span> 
    </div>
    <div>
     {open ? <AiOutlineClose size={30} /> : <FiMenu size={30} /> } 
    </div>
    </div>;
}

export default Header;

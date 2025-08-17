import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-zinc-950 text-white w-full shadow-md z-50">
            <div className="container mx-auto flex justify-between items-center px-5 py-5">
                {/* Logo */}
                <h1 className="text-xl font-bold">MyLogo</h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-10">
                    <li className="relative transition-colors duration-300 hover:text-gray-300 cursor-pointer after:content-[''] after:w-0 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all after:duration-300 hover:after:w-full after:bg-gray-300">Home</li>
                    <li className="relative transition-colors duration-300 hover:text-gray-300 cursor-pointer after:content-[''] after:w-0 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all after:duration-300 hover:after:w-full after:bg-gray-300">About</li>
                    <li className="relative transition-colors duration-300 hover:text-gray-300 cursor-pointer after:content-[''] after:w-0 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all after:duration-300 hover:after:w-full after:bg-gray-300">Contact</li>
                </ul>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden block"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
                </button>
            </div>

            {/* Mobile Menu*/}
            <div
                className={`overflow-hidden absolute w-full transition-all duration-500 ease-in-out md:hidden ${isOpen ? "max-h-60" : "max-h-0"
                    }`}
            >
                <ul className="flex flex-col items-center gap-6 bg-zinc-800 py-6">
                    <li className="cursor-pointer hover:text-gray-300">Home</li>
                    <li className="cursor-pointer hover:text-gray-300">About</li>
                    <li className="cursor-pointer hover:text-gray-300">Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

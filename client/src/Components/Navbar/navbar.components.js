import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { AiFillCaretDown, AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarSm = () => {
    return (
        <>
        <nav className="flex justify-between shadow-md items-center w-full py-3 px-2">
            <div>
                <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="logo" 
                className="ml-4 w-24 h-5" />   
            </div>
            <div className="flex gap-3 mr-2">
                <button className="relative text-white bg-navcolor-400 text-sm rounded-full px-2 py-1"> <p> Use app </p> </button>
                <button> <FaRegUserCircle className="relative text-navcolor-400 w-6 h-6 " /> </button>
            </div>
        </nav>
        </>
    )
};

const NavbarLg = () => {
    return (
        <>
        <nav className="flex justify-between py-6 ">
            <div className="flex gap-3 w-10/12">
                <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="logo" 
                className="w-32 h-7 mr-3" />
                <div className="flex gap-2 border-1 border-gray-300 border-opacity-50 shadow-md p-3 rounded-lg relative -top-2 ">
                    <IoLocationSharp className="text-red-400 w-5 h-5" />
                    <p className=" text-gray-500 text-tiny"> Simmakkal, Madurai Main </p>
                    <AiFillCaretDown className="relative top-1 text-gray-600" />
                    <p className="text-gray-400"> | </p>
                    <AiOutlineSearch className="relative top-1 text-gray-500 w-5 h-5" />
                    <input type="search" placeholder="Search for restaurants, cuisine or a dish" className="w-96 text-gray-700 focus:outline-none " />
                </div>   
            </div>
            <div className="flex gap-12 text-gray-400 text-xl">
                <a href="#" className="hover:text-gray-700 transition duration-500"> Log in </a>
                <a href="#" className="hover:text-gray-700 transition duration-500"> Sign up </a>
            </div>
        </nav>
        </>
    )
}; 

const NavbarMd = () => {
    return (
        <>
        <div className="flex justify-between p-6">
            <GiHamburgerMenu className="w-6 h-6" />
            <div>
                <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="logo" 
                className="w-32 h-7 mr-3" />
            </div>
        </div>
        </>
    )
};

const Navbar = () => {
    return (
        <>
        <nav className="container mx-auto lg:px-20">
            <div className="md:hidden"> {
                // Mobile Screens
                <NavbarSm />
            } </div>
            <div className="hidden lg:block"> {
                //Desktop Screens
                <div>
                    <NavbarLg /> 
                </div>
            } </div>
            <div className="hidden md:block lg:hidden"> {
                //Tablet Screens
                <NavbarMd />
            } </div>
        </nav>
        </>
    )
}

export default Navbar;
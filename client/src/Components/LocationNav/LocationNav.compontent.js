import React from "react";

import { IoLocationSharp } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";

const LocationNav = () => {
    return (
        <>
        <nav className="lg:hidden flex justify-between mx-6 my-4 ">
            <div className="flex relative top-2 md:top-1">
                <IoLocationSharp className="text-red-500 w-5 h-5 mr-1 md:w-7 md:h-7 " />
                <p className="text-sm md:text-lg"> Simmakkal, Madurai Main </p>
            </div>
            <div>
                <button className="border rounded-full bg-gray-100 p-2 "> <BsSearch className="w-4 h-4" /> </button>
            </div>
        </nav>
        </>
    )
};

export default LocationNav;
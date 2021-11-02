import React from "react";

import { AiFillCaretRight } from "react-icons/ai";

const RestaurantMenu = (props) => {
    return (
        <>
        <div className="mx-32">
            <div className="flex justify-between"> 
                <h3 className="text-xl font-semibold"> Menu </h3>
                <span className="flex gap-1 items-center text-red-500"> <p> See all menus </p> <AiFillCaretRight className="relative top-0.5" /> </span>
            </div>
            <div>
                <div className="border absolute h-12 mt-4 w-40 z-10 ml-6 rounded-lg"></div>
                <div className="border absolute h-12 mt-6 w-48 z-20 ml-2 rounded-lg bg-white"></div>
                <div className="absolute z-30"><img src={props.src} alt="menu" className="relative top-8 rounded-lg shadow-lg w-52" /></div>
                <div className="relative top-60">
                    <p className="pt-2 text-gray-700"> Menu </p>
                    <p className="text-xs text-gray-500"> {props.pages} pages </p>
                </div>
            </div>
        </div>
        </>
    )
};

export default RestaurantMenu;
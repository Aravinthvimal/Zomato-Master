import React from "react";
import RestaurantPage from "../../Pages/Restaurant.page";

import { MdOutlineAddAPhoto } from "react-icons/md";
import { IoCameraOutline } from "react-icons/io5";

const RestaurantHero = (props) => {
    return (
        <>
        <div className="container mx-auto py-2 ">
            <div className="lg:hidden w-full ">
                <div className="w-full h-full relative">
                    <img src={props.HeroImages[0]} 
                    alt="restaurant-hero"
                    className="w-full md:h-64 object-center object-cover " />
                    <span className="absolute flex items-center gap-2 bottom-2 right-2 text-white bg-black bg-opacity-60 px-2 py-1 rounded-full text-sm "> <IoCameraOutline className="inline w-4 h-4" /> View Gallery </span>
                </div>
            </div>
            <div className="hidden w-11/12 h-96 lg:flex gap-2 mx-16">
                <div className="W-full h-full overflow-hidden ">
                    <img src={props.HeroImages[1]} 
                    alt="restaurant-hero"
                    className="brightImage w-full h-full object-cover transform transition duration-500 hover:scale-105 " />
                </div>
                <div className="w-1/4 h-96 flex flex-col gap-2">
                    <div className="w-full h-full overflow-hidden">
                        <img src={props.HeroImages[2]} 
                            alt="restaurant-hero"
                            className="brightImage w-full h-full object-cover transform transition duration-500 hover:scale-105" />
                    </div>
                    <div className="w-full h-full overflow-hidden">
                        <img src={props.HeroImages[3]} 
                            alt="restaurant-hero"
                            className="brightImage w-full h-full object-cover transform transition duration-500 hover:scale-105" />
                    </div>
                </div>
                <div className="w-1/4 h-96 flex flex-col gap-2">
                    <div className="w-full h-1/2 relative ">
                        <img src={props.HeroImages[4]} 
                            alt="restaurant-hero"
                            className="w-full h-full object-cover " />
                        <div className="absolute inset-0 bg-opacity-50 bg-black w-full h-full " />
                        <h4 className="absolute z-20 w-full h-full text-center text-white text-lg font-semibold inset-y-2/4"> View Gallery </h4>
                    </div>
                    <div className="w-full h-full relative ">
                    <img src={props.HeroImages[5]} 
                            alt="restaurant-hero"
                            className="w-full h-full object-cover " />
                        <div className="absolute inset-0 w-full h-full " />
                        <div className="absolute flex flex-col items-center inset-y-1/3 z-20 w-full h-full text-center text-white text-lg font-semibold">
                            <div className="bg-gray-500 p-3 rounded-full"><MdOutlineAddAPhoto className="w-5 h-5" /></div>
                            <h4 className=""> Add Photos </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default RestaurantHero;
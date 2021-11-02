import React from "react";

const RestaurantAbout = (props) => {
    return (
        <>
        <div className="flex items-center border lg:mx-0 rounded-lg p-2">
            <div className="flex gap-2 w-64 md:w-72 lg:w-56 md:min-w-full md:pr-4">
                <img src={props.src} alt="about" className="w-12 h-12" />
                <div className="relative top-2">
                    <p className="text-2xs text-gray-400"> RESTAURANT SAFETY MEASURE </p>
                    <p className="text-sm text-gray-700"> {props.about} </p>
                </div>
            </div>
        </div>
        </>
    )
};

export default RestaurantAbout;
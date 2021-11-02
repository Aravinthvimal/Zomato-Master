import React from "react";

const DeliveryBrands = (props) => {
    return (
        <>
        <div className="">
            <div className="w-36 md:w-52 min-w-full h-44 md:h-52 text-center pr-4 ">
                <img src={props.src} alt={props.title} className="border-2 rounded-lg shadow-md h-32 w-32 md:h-44 md:w-44 " />
                <p className="text-gray-700 md:text-lg md:pt-2 font-semibold"> {props.time} minutes </p>
            </div>
        </div>
        </>
    )
};

export default DeliveryBrands;
import React from "react";

import { AiFillStar } from "react-icons/ai";

const Sponsors = (props) => {
    return (
        <>
        <div className=" w-full ml-4 md:mx-12 lg:mx-28">
            <div className={`float-left mr-6 mb-4 flex flex-col rounded-lg flex ${props.isLarge ? "w-96" : "w-72"} `}>
                <div className="p-2">
                    <img src={props.src} alt={props.name} className="w-full h-60 object-center object-cover rounded-xl" />
                </div>
                <div> <p className="md:text-lg text-md text-gray-600 font-semibold ml-2 "> {props.name} </p> </div>
                <div className="ml-2 mt-2 text-white flex gap-3 items-center ">
                    <div className={`flex items-center gap-1 px-2 py-0.5 rounded-lg ${props.diningRatings > 0 ? "bg-ratingscolor-600" : "bg-gray-500"}`}>
                        <p className="text-sm"> {`${props.diningRatings === 0 ? "-" : props.diningRatings}`} </p>
                        <AiFillStar />
                    </div>
                    <p className="text-gray-700 text-sm"> DINING </p>
                    <p className="text-gray-700"> | </p>
                    <div className={`flex items-center gap-1 px-2 py-0.5 rounded-lg ${props.deliveryRatings > 0 ? "bg-ratingscolor-600" : "bg-gray-500"}`}>
                        <p className="text-sm"> {`${props.deliveryRatings === 0 ? "-" : props.deliveryRatings}`} </p>
                        <AiFillStar />
                    </div>
                    <p className="text-gray-700 text-sm"> DELIVERY </p>
                </div>
                <p className="mt-2 ml-2 w-44 text-gray-500 truncate "> {props.types} </p>
            </div>
        </div>
        </>
    )
};

export default Sponsors;
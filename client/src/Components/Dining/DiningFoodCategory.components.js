import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";

const DiningFoodCategory = (props) => {
    return (
        <>
        <div className="container px-2 ">
            <div className="relative w-full h-80">
                <img className="w-full h-full rounded-lg shadow-md object-center object-cover" src={props.src} alt={props.name} />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-gray-900 to-transparent w-full h-1/3 rounded-lg"> </div>
            </div>
            <h3 className="relative -top-20 left-3 text-xl text-white font-semibold mt-2"> {props.title} </h3>
            <div>
                <span className="flex relative -top-20 left-3 text-lg text-white "> {props.places} places <AiOutlineCaretRight className="relative top-2 left-2" /> </span>
            </div>
        </div>
        </>
    )
};

export default DiningFoodCategory;
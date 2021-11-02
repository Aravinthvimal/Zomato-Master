import React from "react";
import { AiOutlineCheckCircle, AiFillCaretRight } from "react-icons/ai";

const OverviewInfo = (props) => {
    return (
        <>
        <h3 className="text-xl font-semibold my-3 "> Cuisines </h3>
        <div className="flex gap-4 pb-4 text-cuisinecolor-500 ">
            <button className="py-1 px-3 border border-gray-300 rounded-full text-lg"> {props.cuisines[0]} </button>
            <button className="py-1 px-3 border border-gray-300 rounded-full text-lg"> {props.cuisines[1]} </button>
            <button className="py-1 px-3 border border-gray-300 rounded-full text-lg"> {props.cuisines[2]} </button>
            <button className="py-1 px-3 border border-gray-300 rounded-full text-lg"> {props.cuisines[3]} </button>
        </div>
        <h3 className="text-xl font-semibold mt-3 "> People Say This Place Is Known For </h3>
        <p className="text-lg pb-4 text-gray-500"> {props.knownFor} </p>
        <h3 className="text-xl font-semibold mt-3 "> Average Cost </h3>
        <p className="text-lg text-gray-600"> ₹{props.avgCost} for two people (approx.) </p>
        <p className="text-tiny text-gray-400 pb-2"> Exclusive of applicable taxes and charges, if any </p>
        <p className="text-xs text-gray-400 pb-1 border-b-1 border-dashed w-1/4 text-opacity-60 "> How do we calculate cost for two? </p>
        <p className={`${props.digital ? "block" : "hidden"} pt-4 text-gray-700 text-lg`}> Cash and Cards accepted Digital payments accepted </p>  
        <h3 className="text-xl font-semibold mt-8 mb-4"> More Info </h3>
        <table className="">
            <tr>
                <td className="w-96"> <p className="flex gap-1 items-center "> <AiOutlineCheckCircle className="text-green-700 w-5 h-5 " /> {props.moreInfo[0]} </p> </td>
                <td className="w-96"><p className="flex gap-1 items-center"> <AiOutlineCheckCircle className="text-green-700 w-5 h-5 " /> {props.moreInfo[1]} </p> </td>
            </tr>
            <tr>
               <td> <p className="flex gap-1 items-center"> <AiOutlineCheckCircle className="text-green-700 w-5 h-5 " /> {props.moreInfo[2]} </p> </td> 
               <td> <p className="flex gap-1 items-center"> <AiOutlineCheckCircle className="text-green-700 w-5 h-5 " /> {props.moreInfo[3]} </p> </td> 
            </tr>
        </table>
        <h3 className="text-xl font-semibold mt-8 mb-4"> Featured in </h3>
        <div className="relative w-60 h-80 shadow-lg">
            <img src={props.featured} alt="featured" className="w-full h-full rounded-lg shadow-md object-center object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-gray-900 to-transparent w-full h-1/3 rounded-lg"> </div>
        </div>
        <div className="relative -top-14 left-2 text-white font-semibold ">
            <p className="text-lg"> {props.featuredTitle} </p>
            <p className="text-sm flex items-center gap-1"> {props.featuredPlaces} places <AiFillCaretRight className="relative top-0.5" /> </p>
        </div>
        </>
    )
};

export default OverviewInfo;
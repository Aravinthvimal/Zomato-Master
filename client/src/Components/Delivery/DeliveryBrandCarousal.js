import React from "react";

const BrandCarousal = (props) => {
    return (
        <>
        <div className="container px-2 text-center">
            <img src={props.src} alt={props.title} 
            className="w-40 h-40 rounded-lg shadow-lg object-center object-cover border-2 border-gray-100" />
            <p className="pt-2 text-gray-600"> {props.time} min </p>
        </div>
        </>
    )
};

export default BrandCarousal;
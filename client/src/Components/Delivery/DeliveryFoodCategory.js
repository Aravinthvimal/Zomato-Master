import React from "react";

const DeliveryFoodCategory = (props) => {
    return (
        <>
        <div className="container px-2 ">
            <img className="w-full h-52 rounded-lg shadow-md object-center object-cover" src={props.src} alt={props.name} />
            <h3 className="text-xl text-gray-800 font-semibold mt-2"> {props.title} </h3>
        </div>
        </>
    );
};

export default DeliveryFoodCategory;
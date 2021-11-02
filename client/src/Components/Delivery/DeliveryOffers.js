import React from "react";

const DeliveryOffers = (props) => {
    return (
        <>
        <div className="flex items-center mb-4">
            <img src={props.src} alt={props.title} className={`mx-2 ${props.isLong ? "w-12" : "w-5"}`} />
            <p className="text-xs mx-2 ml-4 text-gray-500"> {props.orders} {props.offer} </p> 
        </div>
        </>
    )
};

export default DeliveryOffers;
import React from "react";

const FoodTab = (props) => {
    return (
        <>
        <div className="lg:hidden w-full ml-6 md:ml-10">
            <div className="float-left w-1/4 md:w-52 mr-6 mb-4 flex flex-col border-1 border-gray-300 shadow-md rounded-lg flex items-center ">
                <div className="border-b-2 border-gray-400">
                    <img src={props.src} alt={props.title} className="w-28 md:w-60 h-24 md:h-52 object-center object-cover" />
                </div>
                <div className="my-1 mb-2">
                    <p className="md:text-xl text-sm text-gray-600 md:font-semibold"> {props.title} </p>
                </div>
            </div>
        </div>
        </>
    )
};

export default FoodTab;
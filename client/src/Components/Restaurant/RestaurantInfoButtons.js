import React from "react";
import classnames from "classnames";

const InfoButtons = (props) => {
    return (
        <>
        <button className = {classnames("hidden lg:flex items-center gap-2 border border-gray-400 rounded-lg py-2 px-3", {"text-white bg-red-500 border-none" : props.isActive,})}> 
            {props.children}
        </button>
        </>
    )
};

export default InfoButtons;
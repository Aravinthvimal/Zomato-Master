import React from "react";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";


export function NextArrow(props) {
    const {className, style, onClick} = props
    return (
        <div
            className="slick-arrow"
            style={{...style, float:"right", paddingRight:"2%", position:"relative", top:"-13.5em"}}
            onClick={onClick}
        >
            <button className="absolute z-10 rounded-full text-2xl md:text-3xl lg:text-4xl bg-white shadow-lg focus:ring-4 focus:ring-navcolor-300 focus:ring-inset focus:ring-opacity-50" type="button"> <HiChevronRight /> </button>
        </div>
    );
}

export function PrevArrow(props) {
    const {className, style, onClick} = props
    return (
        <div
            className="slick-arrow"
            style={{...style, zIndex:"1", position:"relative", top:"9.5em", right:"10px"}}
            onClick={onClick}
        >
            <button className="absolute z-10 rounded-full text-2xl md:text-3xl lg:text-4xl bg-white shadow-lg focus:ring-4 focus:ring-navcolor-300 focus:ring-inset focus:ring-opacity-50" type="button" > < HiChevronLeft/> </button>
        </div>
    );
}
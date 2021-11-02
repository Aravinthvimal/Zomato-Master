import React from "react";

// Icons
import { AiFillStar } from "react-icons/ai";
import { MdOutlineStarOutline, MdOutlineDirections } from "react-icons/md";
import { BsBookmarkPlus } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";
import { IoInformationCircleOutline } from "react-icons/io5";
import InfoButtons from "./RestaurantInfoButtons";

const RestaurantInfo = (props) => {
    return (
        <>
        <div className="mx-2 lg:mx-32">
            <div className="flex flex-col lg:justify-between lg:flex-row-reverse ">
                <div className="flex gap-12 ">
                    <div className="flex items-center gap-2 ">
                        <div className="bg-ratingscolor-700 px-1 lg:px-1.5 flex items-center gap-1 rounded-md text-white font-semibold text-lg">
                            <p className="text-sm md:text-base"> {props.dining_rating} </p>
                            <AiFillStar className="w-3 h-3" />
                        </div>
                        <div className="flex gap-2 lg:gap-0 items-center lg:items-start lg:flex-col border-b-1 border-gray-500 border-dashed lg:border-none ">
                            <p className="text-base font-semibold "> {props.dining_review} </p>
                            <p className="hidden lg:block text-xs pb-1 border-b-1 border-gray-500 border-dashed"> Dining Reviews </p>
                            <p className="lg:hidden text-xs md:text-tiny md:font-semibold "> DINING </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 ">
                        <div className="bg-ratingscolor-700 px-1.5 flex items-center gap-1 rounded-md text-white font-semibold text-lg">
                            <p className="text-sm md:text-base"> {props.delivery_rating} </p>
                            <AiFillStar className="w-3 h-3" /> 
                        </div>
                        <div className="flex gap-2 lg:gap-0 items-center lg:items-start lg:flex-col border-b-1 border-gray-500 border-dashed lg:border-none">
                            <p className="text-base font-semibold "> {props.delivery_review} </p>
                            <p className="hidden lg:block text-xs pb-1 border-b-1 border-gray-500 border-dashed"> Delivery Reviews </p>
                            <p className="lg:hidden text-xs md:text-tiny md:font-semibold "> DELIVERY </p>
                        </div>
                    </div>
                </div>
                <p className="text-2xl pt-2 lg:py-0 md:text-3xl lg:text-4xl font-semibold"> {props.name} </p>
            </div>
            <div className="cursor-pointer mb-4 ">
                <p className="text-base md:text-lg text-gray-500 hover:text-gray-700"> {props.type} </p>
                <p className="text-base lg:text-lg text-gray-500 hover:text-gray-700"> {props.location} </p>
                <div className="cursor-default">
                    <p className="text-sm md:text-tiny lg:text-base inline text-red-400 "> {props.isOpen ? "Open now" : "Closed" } &ensp; </p>
                    <p className={` text-sm md:text-tiny lg:text-base inline text-gray-500 ${props.isOpen ? "hidden" : "block"}`}> - &ensp; Opens tomorrow at {props.openTime}am </p>
                    <p className={` text-sm md:text-tiny lg:text-base inline text-gray-500 ${props.isOpen ? "block" : "hidden"}`}> - &ensp; {props.openTime}am - {props.closeTime}pm (Today) <IoInformationCircleOutline className="inline w-4 h-4" /> </p>
                </div>
            </div>
            <div className="flex gap-3">
                <InfoButtons isActive>
                    <MdOutlineStarOutline /> Add Review
                </InfoButtons>

                <InfoButtons >
                    <MdOutlineDirections className="text-red-500" /> Direction
                </InfoButtons>

                <InfoButtons >
                    <BsBookmarkPlus className="text-red-500" /> Bookmark
                </InfoButtons>

                <InfoButtons>
                    <RiShareForwardLine className="text-red-500" /> Share
                </InfoButtons>
            </div>
        </div>
        </> 
    )
};

export default RestaurantInfo;
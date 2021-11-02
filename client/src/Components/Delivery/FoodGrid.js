import React from "react";
import Slider from "react-slick";

import DeliveryOffers from "./DeliveryOffers";
import { AiFillStar } from "react-icons/ai";

const FoodGrid = (props) => {

    const setitngs = {
        infinite: true,
        autoplay: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const FoodGridOffers = [
        {
            src:"https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            isLong: true,
            title:"max-food-safety",
            offer:"Follows all Max Safety measures to ensure your food is safe"  
        },
        {
            src:"https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
            title:"order-placed",
            isLong: false,
            offer: "1000+ orders placed from here recently"
        },
    ];

    return (
        <>
        <div className=" w-full ml-4 md:mx-12 lg:mx-28">
            <div className="float-left w-11/12 lg:w-1/4 md:w-80 mr-6 mb-4 flex flex-col hover:shadow-lg shadow-lg lg:shadow-none rounded-lg flex ">
                <div className="p-2">
                    <img src={props.src} alt={props.title} className={`w-full lg:w-full md:w-80 h-40 md:h-40 object-center object-cover rounded-xl ${props.isOpen ? "filter grayscale-0" : "filter grayscale"}`} />
                </div>
                <div className="mb-2 flex justify-between">
                    <div> <p className="md:text-lg text-md text-gray-600 font-semibold ml-2 "> {props.title} </p> </div>
                    <div> <p className="flex items-center gap-1 mr-2 text-sm bg-ratingscolor-600 text-white font-semibold py-0.5 px-1 rounded-md"> {props.ratings} <AiFillStar /> </p> </div>
                </div>
                <div className="mb-2 flex justify-between">
                    <div> <p className="truncate w-11/12 ml-2 text-sm text-gray-500"> {props.type} </p> </div>
                    <div> <p className="text-gray-500 text-sm mr-2"> ₹{props.price} for one </p> </div>
                </div>
                <div className={`relative text-xs ml-2 -top-1 text-red-500 `}>
                    <p className={`${props.isOpen ? "hidden" : "block"}`}> Opens tomorrow at {props.openTime}am </p>
                </div>
                <hr className="mx-3 mt-1 mb-2" />
                <Slider {...setitngs}>
                    {
                        FoodGridOffers.map((data) => (
                            <DeliveryOffers {...data} />
                        ))
                    }
                </Slider>
            </div>
        </div>
        </>
    )
};

export default FoodGrid;
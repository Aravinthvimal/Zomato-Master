import React from "react";

import { GoArrowRight } from "react-icons/go";

const RestaurantOffer = () => {
    return (
        <>
        <div className="lg:hidden flex justify-between items-center p-2 bg-offercolor-100 bg-opacity-50">
            <div className="flex items-center gap-3 ">
                <img src="https://b.zmtcdn.com/data/web_assets/b023b039102c25ce5d3f1e531eed94be1573803886.png"
                alt="order-online" className="w-10 h-10 md:w-12 md:h-12 " />
                <div>
                    <p className="font-semibold md:text-lg text-gray-700"> Order Online </p>
                    <button className="text-xs bg-blue-500 px-1 py-0.5 text-white font-semibold rounded-lg"> 20% OFF </button>
                </div>
            </div>
            <div>
                <GoArrowRight className="w-5 h-5 md:w-7 md:h-7" />
            </div>
        </div>
        </>
    )
};

export default RestaurantOffer;
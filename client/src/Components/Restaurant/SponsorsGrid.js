import React from "react";
import Sponsors from "./Sponsors.restaurant";

const SponsorsGrid = () => {

    const SponsorsData = [
        {
            src: "https://b.zmtcdn.com/data/pictures/chains/4/18694334/e6f015717497a0f8f60bf3e509214e5f_featured_v2.jpg",
            name: "Dindigul Thalappakatti",
            diningRatings: 0,
            deliveryRatings: 3.5,
            types: "Briyaani, South Indian, North Indian",
            isLarge: true
        },
        {
            src: "https://images.unsplash.com/photo-1562059390-a761a084768e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=819&q=80",
            name: "P.K.G. Chappathi Corner",
            diningRatings: 3.1,
            deliveryRatings: 3.7,
            types: "North Indian, South Indian",
            isLarge: true
        },
    ];

    return (
        <>
        <div className="">
        <div className="mx-32 mb-2"> <h3 className="text-lg text-gray-500 font-semibold tracking-extra-wide"> OUR SPONSORS </h3> </div>
            {
                SponsorsData.map((data) => (
                    <Sponsors {...data} />
                ))
            }
        </div>
        </>
    )
};

export default SponsorsGrid;
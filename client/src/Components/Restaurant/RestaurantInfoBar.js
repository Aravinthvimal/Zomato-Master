import React from "react";
import RestaurantInfo from "./RestaurantInfo";

const InfoBar = () => {

    const InfoData = [
        {
            name: "KFC",
            dining_rating: "4.1",
            dining_review: "308",
            delivery_rating: "3.9",
            delivery_review: "6,372",
            type: "Burger, Fast Food, Beverages, Desserts",
            location: "Peelamedu, Coimbatore",
            isOpen: true,
            openTime: "10",
            closeTime: "10:45"
        }
    ];

    return (
        <>
        <div>
            {
                InfoData.map((data) => (
                    <RestaurantInfo {...data} />
                ))
            }
        </div>
        </>
    )
};

export default InfoBar;
import React from "react";

// Components
import NightLifeCarousal from "./NightLifeCarousal.components";
import FoodGridComponent from "../Delivery/FoodGrid.component";
import EndOfSearch from "../Delivery/DeliveryEndSearch";

const NightLife = () => {
    return (
        <>
        <div>
            <NightLifeCarousal />
            <img src="https://b.zmtcdn.com/web/assets/9e8b4ba905cf4d49ae163a95866403a51620045323.png?output-format=webp" alt="browse-menus-with-ease" className="lg:hidden" />
        </div>
        <FoodGridComponent />
        <EndOfSearch />
        <div className="py-20" />
        </>
    )
};

export default NightLife;
import React from "react";

// Components
import DiningCarousal from "./DiningCarousal.components";
import FoodGridComponent from "../Delivery/FoodGrid.component";
import EndOfSearch from "../Delivery/DeliveryEndSearch";

const Dining = () => {
    return (
        <>
        <DiningCarousal />
        <img src="https://b.zmtcdn.com/web/assets/e80201cf2e86a49ce4722e9b5ddfab551620045350.png" alt="track-order-to-your-door" className="lg:hidden" />
        <FoodGridComponent />
        <EndOfSearch />
        <div className="py-20" />
        </>
    )
};

export default Dining;
 
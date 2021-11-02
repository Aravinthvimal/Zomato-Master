import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// Components
import DeliveryCarousal from "./deliveryCarousal.components";
import FoodTabGrid from "./DeliveryFoodTabGrid";
import BrandSlider from "./DeliveryBrandsSlider";
import FoodGridComponent from "./FoodGrid.component";
import EndOfSearch from "./DeliveryEndSearch";

const Delivery = () => {
const [restaurantList, setRestaurantList] = useState([]);

const reduxState = useSelector(
    (globalStore) => globalStore.restaurant.restaurants
);

useEffect(() => {
    setRestaurantList(reduxState.restaurants);
}, [reduxState.restaurants]);

    return (
        <>
        <DeliveryCarousal />
        <FoodTabGrid />
        <div className="lg:hidden">
            <img src="https://b.zmtcdn.com/web/assets/8d13109e07c5d49d54427f044d7b7d281620042855.png" alt="offer" className="object-center object-cover w-full py-4 " />
        </div>
        <BrandSlider />
        <FoodGridComponent />
        <EndOfSearch />
        <div className="pb-20" />
        </>
    )
};

export default Delivery;
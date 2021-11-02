import React from "react";

// Components
import Navbar from "../Components/Navbar/navbar.components";
import Menu from "../Components/Restaurant/Menu.restaurant";
import OverviewGrid from "../Components/Restaurant/OverviewInfoGrid";
import AboutSlider from "../Components/Restaurant/RestaurantAboutSlider";
import SimilarRestaurants from "../Components/Restaurant/SimilarRestaurants";
import SponsorsGrid from "../Components/Restaurant/SponsorsGrid";
import RestaurantTab from "../Components/SecNavbar/RestaurantSecNavbar";

const RestaurantLayout = (props) => {
    return (
        <>
        <div>
            <Navbar />
            {props.children}
        </div>
        <RestaurantTab />
        <div className="w-3/4">
            <AboutSlider />
            <Menu />
            <OverviewGrid />
            <SponsorsGrid />
            <SimilarRestaurants />
        </div>
        <div className="my-4" ></div>
        </>
    )
};

export default RestaurantLayout;
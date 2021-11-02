import React, { useEffect } from "react";
import { useParams } from "react-router-dom";


// Components
import Navbar from "../Components/Navbar/navbar.components";
import SecNavbar from "../Components/SecNavbar/secNavbar.components";
import LocationNav from "../Components/LocationNav/LocationNav.compontent";

// Redux actions
import { getRestaurant } from "../Redux/Reducer/Restaurant/Restraurant.action";

const HomeLayout = (props) => {

    return (
        <>
        <div className="overflow-x-hidden">
            <Navbar />
            <SecNavbar />
            <LocationNav />
            {props.children}
        </div>
        </>
    )
};

export default HomeLayout;
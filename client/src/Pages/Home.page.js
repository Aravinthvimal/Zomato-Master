import React from "react";
import { useParams } from "react-router-dom";

// Components'
import Delivery from "../Components/Delivery/index.Delivery";
import Dining from "../Components/Dining/index.Dining";
import NightLife from "../Components/NightLife/index.NightLife";

const HomePage = () => {
    const { type } = useParams();

    return (
        <>
        <div className="">
            { type === "delivery" && <Delivery /> }
        </div>
        <div>
            { type === "dining" && <Dining /> }
        </div>
        <div>
            { type === "night" && <NightLife /> }
        </div>
        </>
    )
};

export default HomePage;
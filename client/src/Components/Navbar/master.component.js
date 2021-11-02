import React from "react";
import { useParams } from "react-router-dom";

// Components'
import Delivery from "../Delivery/index.Delivery";
import Dining from "../Dining/index.Dining";
import NightLife from "../NightLife/index.NightLife";

const Master = () => {
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

export default Master;
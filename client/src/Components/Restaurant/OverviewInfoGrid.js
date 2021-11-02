import React from "react";
import OverviewInfo from "./OverviewInfo";

const OverviewGrid = () => {

    const OverviewData = [
        {
            "cuisines": ["Burger", "Fast Food", "Beverages", "Desserts"],
            "knownFor": "Amazing Food, Service, Value for Money, Quality",
            "avgCost": "450",
            "moreInfo": ["Home Delivery", "Takeaway Available", "Free Parking", "Indoor Seating"],
            "digital": true,
            "featured": "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
            "featuredTitle": "Best of Madurai",
            "featuredPlaces": "5",
        },
    ];

    return (
        <>
        <div className="relavite pt-60 mx-32 ">
            {
                OverviewData.map((data) => (
                    <OverviewInfo {...data} />
                ))
            }
        </div>
        </>
    )
};

export default OverviewGrid;
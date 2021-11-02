import React from "react";
import RestaurantMenu from "./RestaurantMenu";

import { AiFillCaretRight } from "react-icons/ai";

const Menu = (props) => {

    const MenuImages = [
        {
            "src": "https://b.zmtcdn.com/data/menus/278/18694278/6b977f8ccbda02a1797ef92b999f309f.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "pages": "4",
        },
    ];

    return (
        <>
        <div className="static my-8">
        {
            MenuImages.map((data) => (
                <RestaurantMenu {...data} />
            ))
        }
        </div>
        </>
    )
};

export default Menu;

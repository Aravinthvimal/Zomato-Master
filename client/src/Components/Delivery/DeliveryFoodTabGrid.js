import React from "react";
import FoodTab from "./DeliveryFoodTabs";
import { BsChevronDown } from "react-icons/bs";

const FoodTabGrid = () => {

    const FoodTabImages = [
        {
            src:"https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80",
            title:"Burger",
        },
        {
            src:"https://b.zmtcdn.com/data/o2_assets/adbe5236974520ecba7cb9f47e4c92011632716658.png",
            title:"Chicken",
        },
        {
            src:"https://b.zmtcdn.com/data/o2_assets/7e83ad932f340bacd71bd7e891ede6541632716696.png",
            title:"Briyaani",
        },
        {
            src:"https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png",
            title:"Sandwich",
        },
        {
            src:"https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
            title:"Paratha",
        },
        {
            src:"https://b.zmtcdn.com/data/o2_assets/13bdf0d4c96d44e6ddb21fedde0fe4081632716661.png",
            title:"Fries",
        },
    ];

    return (
        <>
        <div className="py-4">
            {
                FoodTabImages.map((data) => (
                    <FoodTab {...data} />
                ))
            }
        </div>
        <div className="pl-7 lg:hidden ">
            <button className="pl-32 items-center flex border-1 w-11/12 py-1 text-sm text-gray-500 rounded-md"> <p className="flex items-center relative -left-3 md:left-40 md:font-bold md:text-lg "> Show more <BsChevronDown className="ml-2 text-black" /> </p> </button>
        </div>
        </>
    )
};
 
export default FoodTabGrid; 
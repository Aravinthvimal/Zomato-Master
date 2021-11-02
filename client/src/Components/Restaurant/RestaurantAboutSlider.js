import React from "react";
import RestaurantAbout from "./RestaurantAbout";

const AboutSlider = () => {
    
    const AboutImages = [
        {
            src:"https://b.zmtcdn.com/data/o2_assets/ebd42529c3342bdaf8b624a63a571fcc1585754330.png",
            about:"Well Sanitized Kitchen"
        },
        {
            src:"https://b.zmtcdn.com/data/o2_assets/fa7443fb81df3ff2c54186672599c3db1585754076.png",
            about:"Rider Hand Wash"
        },
        {
            src:"https://b.zmtcdn.com/data/o2_assets/8ecc61badb80ea685f0afc71a4d721671585754288.png",
            about:"Daily Temp Checks"
        },
    ];
    
    return (
        <>
        <div> <h3 className="text-2xl font-semibold mx-32 my-2 mt-8"> About this place </h3> </div>
        <div className="hidden lg:flex gap-5 mx-32 my-4">
            {
                AboutImages.map((data) => (
                    <RestaurantAbout {...data} />
                ))
            }
        </div>
        <div className="no-scroll max-h-20 flex overflow-x-auto lg:hidden my-4">
            {
                AboutImages.map((data) => (
                    <RestaurantAbout {...data} />
                ))
            }
        </div>
        </>
    )
};

export default AboutSlider;
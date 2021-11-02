import React from "react";
import Slider from "react-slick";

// Components
import DiningFoodCategory from "../Dining/DiningFoodCategory.components";
import { NextArrow, PrevArrow } from "../Dining/DiningArrows";

const NightLifeCarousal = () => {

    const settings = {
        infinite: true,
        autoplay: false,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1,
        InitialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

    const NightLifeImages = [
        {
            src: "https://images.unsplash.com/photo-1583898350903-99fa829dad3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJldmVyYWdlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
            title: "Best Bars & Pubs",
            places: "11"
        },
        {
            src: "https://images.unsplash.com/photo-1587385789097-0197a7fbd179?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=560&q=80",
            title: "Live Sport Screening",
            places: "11"
        },
        {
            src: "https://images.unsplash.com/photo-1613066697301-d7dccfc86bb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            title: "Rooftops",
            places: "7"
        },
        {
            src: "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
            title: "Pocket Friendly",
            places: "7"
        }
    ];
    
    return (
        <>
        <div className="hidden lg:block bg-gray-100 my-2 py-6">
            <div className="container mx-auto px-20">
                <p className="my-4 mb-6 text-3xl font-semibold "> Collections </p>
                <p className="my-4 text-xl font-light "> Explore curated lists of top restaurants, cafes, pubs, and bars in Madurai, based on trends </p>
                <Slider {...settings}>
                    {
                        NightLifeImages.map((data) => (
                            <DiningFoodCategory {...data} />
                        ))
                    }
                </Slider>
            </div>
        </div>
        </>
    )
};

export default NightLifeCarousal;
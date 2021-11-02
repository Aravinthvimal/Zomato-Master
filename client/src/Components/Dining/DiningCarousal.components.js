import React from "react";
import Slider from "react-slick";

// Components
import DiningFoodCategory from "./DiningFoodCategory.components";
import { NextArrow, PrevArrow } from "./DiningArrows";

const DiningCarousal = (props) => {

    const settings = {
        infinite: true,
        autoplay: false,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 2,
        InitialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

    const DiningImages = [
        {
            src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
            title: "Best of Madurai",
            places: "5"
        },
        {
            src: "https://images.unsplash.com/photo-1596350351228-e47e93fdb992?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFjYXJvb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
            title: "Trending This Week",
            places: "21"
        },
        {
            src: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmlyeWFuaXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
            title: "Brilliant Briyaanis",
            places: "8"
        },
        {
            src: "https://images.unsplash.com/photo-1621873495868-6c5774cf6012?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80",
            title: "Luxury Dining",
            places: "6"
        },
        {
            src: "https://images.unsplash.com/photo-1500315331616-db4f707c24d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
            title: "Great Breakfasts",
            places: "6"
        },
        {
            src: "https://images.unsplash.com/photo-1591663829338-2f6d59d93b7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVtcGxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
            title: "Must-visit Restaurants in",
            places: "15"
        },
        {
            src: "https://images.unsplash.com/photo-1623428188474-b1d532c5e560?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHZlZ2FuJTIwZm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
            title: "Veggie Friendly",
            places: "6"
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
                        DiningImages.map((data) => (
                            <DiningFoodCategory {...data} />
                        ))
                    }
                </Slider>
            </div>
        </div>
        </>
    )
};

export default DiningCarousal;
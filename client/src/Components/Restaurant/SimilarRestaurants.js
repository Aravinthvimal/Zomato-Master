import React from "react";
import Slider from "react-slick";

import { NextArrow, PrevArrow } from "../Delivery/DeliveryArrows";
import Sponsors from "./Sponsors.restaurant";

const SimilarRestaurants = () => {

    const settings = {
        infinite: false,
        autoplay: false,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 3,
        InitialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

    const SimilarRestaurantsData = [
        {
            src: "https://b.zmtcdn.com/data/pictures/8/3000378/93f0ba995d6eddf1eede9592b02dcd9c.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            name: "Meat And Eat",
            diningRatings: 4.0,
            deliveryRatings: 4.0,
            types: "Burger, Fast Food, Desserts, Beverages",
            isLarge: false
        },
        {
            src: "https://www.sparrowsph.my/image/cache/data/theme/blog/marrybrown--new_260820202448-1200x800_0.jpg",
            name: "MarryBrown",
            diningRatings: 3.7,
            deliveryRatings: 3.5,
            types: "Burger, Sandwich, Desserts, Fast Foods",
            isLarge: false
        },
        {
            src: "https://lh3.googleusercontent.com/Cz-5NXqKWxzPofzrXZQj7z2U1w2KHGLeTWJvL-dl3lHskzdvoyuKVaDJ9t_y09qga9xjDh_ist99JdFUTb1bc6LNFdwj=w256",
            name: "Heaven's Park",
            diningRatings: 4.1,
            deliveryRatings: 3.9,
            types: "Fast Foods, Burger, Pizza, Wraps",
            isLarge: false
        },
    ];

    return (
        <>
        <div className="w-11/12">
            <div className="mx-32"> <h3> SIMILAR RESTAURANTS </h3> </div>
            <Slider {...settings}>
                {
                    SimilarRestaurantsData.map((data) => (
                        <Sponsors {...data} />
                    ))
                }
            </Slider>
        </div>
        </>
    )
};

export default SimilarRestaurants;
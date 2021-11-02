import React from "react";
import Slider from "react-slick";
import DeliveryFoodCategory from "./DeliveryFoodCategory";

import { NextArrow, PrevArrow } from "./DeliveryArrows";

const DeliveryCarousal = (props) => {

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

    const FoodImages = [
        {
            src: "https://b.zmtcdn.com/data/dish_images/53b0142d35999f3a1c266cacceb052971634401537.png",
            title: "Burger"
        },
        {
            src: "https://b.zmtcdn.com/data/o2_assets/adbe5236974520ecba7cb9f47e4c92011632716658.png",
            title: "Chicken"
        },
        {
            src: "https://b.zmtcdn.com/data/o2_assets/7e83ad932f340bacd71bd7e891ede6541632716696.png",
            title: "Briyaani"
        },
        {
            src: "https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png",
            title: "Sandwich"
        },
        {
            src: "https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
            title: "Paratha"
        },
        {
            src: "https://b.zmtcdn.com/data/o2_assets/13bdf0d4c96d44e6ddb21fedde0fe4081632716661.png",
            title: "Fries"
        },
        {
            src: "https://b.zmtcdn.com/data/dish_images/d72e1fdf0588a089e0cb2653427ccae71634401609.png",
            title: "Rolls"
        },
        {
            src: "https://b.zmtcdn.com/data/o2_assets/1251357e34c4293f762072ecdd7816a31632716606.png",
            title: "Noodle"
        },
        {
            src: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
            title: "Pizza"
        },
        {
            src: "https://b.zmtcdn.com/data/homepage_dish_data/4/aa9f3975e1ac31d104905da5d2fa2d79.png",
            title: "Wings"
        },
        {
            src: "https://b.zmtcdn.com/data/o2_assets/9428a39fba2a97f7470b8f3f26af86af1632716606.png",
            title: "Paneer"
        },
        {
            src: "https://b.zmtcdn.com/data/o2_assets/321b60398716edcf1f0ee4ed3b3e9fbb1632716602.png",
            title: "Keema"
        },
    ];
    return (
        <>
        <div className="hidden lg:block bg-gray-100 my-2 py-6">
            <div className="container mx-auto px-20">
                <p className="my-4 mb-8 text-3xl font-semibold "> Eat what makes you happy </p>
                <Slider {...settings}>
                    {
                        FoodImages.map((data) => (
                            <DeliveryFoodCategory {...data} />
                        ))
                    }
                </Slider>
            </div>
        </div>
        </>
    )
};

export default DeliveryCarousal;
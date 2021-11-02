import React from "react";
import Slider from "react-slick";

import DeliveryBrands from "./DeliveryBrands";
import { NextArrow, PrevArrow } from "./BrandsArrows";
import BrandCarousal from "./DeliveryBrandCarousal";

const BrandSlider = () => {

    const settings = {
        infinite: true,
        autoplay: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    const BrandImages = [
        {
            src: "https://b.zmtcdn.com/data/brand_creatives/logos/381f5d7481d4cf08b35a063b8787070b_1617918168.png?output-format=webp",
            title: "Annapoorna",
            time:"36"
        },
        {
            src: "https://b.zmtcdn.com/data/brand_creatives/logos/9da52e2b69f19bb603227a750e788d33_1613214750.png?output-format=webp",
            title: "KFC",
            time:"36"
        },
        {
            src: "https://b.zmtcdn.com/data/brand_creatives/logos/e5b584c45976692fd36159ec21a35981_1597745602.png?output-format=webp",
            title: "Hari-Bhavanam",
            time:"29"
        },
        {
            src: "https://b.zmtcdn.com/data/brand_creatives/logos/0956194de2534812e820317cd4b0ccd3_1630505737.png?output-format=webp",
            title: "Dindugul-Thalapakatti",
            time:"41"
        },
        {
            src: "https://b.zmtcdn.com/data/brand_creatives/logos/5caf38856d23347b351bb7abf97134d3_1545223343.png?output-format=webp",
            title: "Dominos",
            time:"35"
        },
        {
            src: "https://b.zmtcdn.com/data/brand_creatives/logos/b051f1685674a04b1dae2ef38e9425d0_1507345943.png?output-format=webp",
            title: "Meet-n-eat",
            time:"33"
        },
        {
            src: "https://b.zmtcdn.com/data/brand_creatives/logos/29ba9d19096d3d116909a4363082089c_1555935481.png?output-format=webp",
            title: "Ibaco",
            time:"11"
        },
    ];

    return (
        <>
        <h3 className=" mx-4 pb-3 md:mb-8 lg:mb-0 lg:px-24 lg:text-black text-xl md:text-3xl text-gray-700 font-semibold "> Top Brands for you </h3>
        <div className="no-scroll max-h-80 flex overflow-x-auto lg:hidden ml-4">
            {
                BrandImages.map((data) => (
                    <DeliveryBrands {...data} />
                ))
            }
        </div>
        <div className="hidden lg:block my-2 py-6 w-5/6">
            <div className="container mx-auto px-28">
                <Slider {...settings} >
                    {
                        BrandImages.map((data) => (
                            <BrandCarousal {...data} />
                        ))
                    }
                </Slider>
            </div>
            
        </div>
        </>
    )
};

export default BrandSlider;
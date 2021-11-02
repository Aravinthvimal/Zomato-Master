import React from "react";

// Components
import RestaurantHero from "./RestaurantHero";
import InfoBar from "./RestaurantInfoBar";
import RestaurantOffer from "./RestaurantOffer";
import AboutSlider from "./RestaurantAboutSlider";
import TabContainer from "../SecNavbar/RestaurantSecNavbar";

const Restaurant = () => {
    return (
        <>
        <div>
        <RestaurantHero 
            HeroImages = {[
                "https://b.zmtcdn.com/data/pictures/0/3000040/9410759d611db9c62c3acc23c1f27e06.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                "https://b.zmtcdn.com/data/pictures/0/3000040/9410759d611db9c62c3acc23c1f27e06.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                "https://b.zmtcdn.com/data/pictures/chains/8/18694278/0e79614ea14113b8b3d4b48574293d00.jpg?fit=around|300:273&crop=300:273;*,*",
                "https://b.zmtcdn.com/data/pictures/chains/8/18694278/1b882dcd1619f59feca4c34f9fe37709.jpg?fit=around|300:273&crop=300:273;*,*",
                "https://b.zmtcdn.com/data/pictures/3/18763223/d090a20f26f69d9dbeb0b5f88dd5b216.jpg?fit=around|300:273&crop=300:273;*,*",
                "https://b.zmtcdn.com/data/zomaland/a6750d1975cd3139cb91535088efb0c71578913426.jpeg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
            ]}
            />
            <InfoBar />
            <RestaurantOffer />
        </div>
        </>
    )
};

export default Restaurant;
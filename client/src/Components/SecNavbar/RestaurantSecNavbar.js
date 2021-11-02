import React, { useState } from "react";
import classnames from "classnames";
import { useLocation, Link, useParams } from "react-router-dom";

// Icons
import { AiOutlineStar } from "react-icons/ai";
import { MdOutlineDirections } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";

function Tab(props) {
  const { id } = useParams();
  return (
    <Link to={`/restaurant/${id}/${props.route}`}>

        <div
            className={classnames("text-gray-500 relative font-light ", {
            "text-red-500 font-semibold": props.isActive,
            })}
        >
        <h3 className="text-lg relative md:text-xl">{props.title}</h3>
        </div>
    </Link>
  );
};

function RestaurantSecNav(props) {
  const location = useLocation();

  const currentPath = location.pathname;

  const tabs = [
    {
      title: "Overview",
      route: "overview",
      isActive: currentPath.includes("overview"),
    },
    {
      title: "Order Online",
      route: "order-online",
      isActive: currentPath.includes("order-online"),
    },
    {
      title: "Reviews",
      route: "reviews",
      isActive: currentPath.includes("reviews"),
    },
    {
      title: "Menu",
      route: "menu",
      isActive: currentPath.includes("menu"),
    },
    {
      title: "Photos",
      route: "photos",
      isActive: currentPath.includes("photos"),
    },
  ];

  return (
    <>
    <div className="">
      <div className="no-scroll hidden lg:flex relative items-center pt-10 pb-3 gap-20 overflow-x-scroll border-b-2 mx-32">
        {tabs.map((tab) => (
          <Tab {...tab} key={`123${tab.route}`} />
        ))}
      </div>
    </div>
    </>
  );
};

function MobileTab(props) {
  const { id } = useParams();
  return (
    <Link to={`/restaurant/${id}/${props.route}`} className="w-1/4">

      <div className={classnames("flex justify-center items-center flex-col py-3 border-t-2 border-white", {
        "flex justify-center items-center flex-col w-full py-3 border-t-2 border-navcolor-400" : props.isActive,
      })}
      >

      {props.icon}
      <h5 className="text-xs md:text-base">{props.title}</h5>
      </div>
    </Link>
  );
};

function MobileSecNav (props) {
  
  const location = useLocation();
  const currentPath = location.pathname;
  
  const items = [
    {
      title: "Review",
      route: "reviews",
      icon: <AiOutlineStar />,
      isActive: currentPath.includes("reviews"),
    },
    {
      title: "Direction",
      route: "direction",
      icon: <MdOutlineDirections />,
      isActive: currentPath.includes("direction"),
    },
    {
      title: "Call",
      route: "call",
      icon: <BiPhoneCall />,
      isActive: currentPath.includes("call"),
    },
  ];

  return (
    <>
    <div className="lg:hidden bg-white shadow-lg px-3 fixed bottom-0 z-10 w-full flex items-center justify-between md:justify-evenly text-gray-500 border">
      {
        items.map((data) => (
          <MobileTab {...data} key={`123${data.route}`} />
        ))
      }
    </div>
    </>
  )
}

function RestaurantTab() {
  return (
    <>
    <div>
      <RestaurantSecNav />
      <MobileSecNav />
    </div>
    </>
  )
}

export default RestaurantTab;
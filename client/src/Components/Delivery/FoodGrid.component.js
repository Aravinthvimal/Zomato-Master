import React from "react";
import FoodGrid from "./FoodGrid";

const FoodGridComponent = () => {

    const FoodGridImages = [
        {
            src: "https://images.unsplash.com/photo-1627662056598-dcfc5000f769?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            title: "Aagaram",
            ratings: "3.7",
            type: "North Indian Chettinad, Briyaani",
            price: "100",
            openTime: "9",
            isOpen: true
        },
        {
            src: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
            title: "Home Made Samayal",
            ratings: "4.0",
            type: "South Indian, Chineese, Briyaani",
            price: "100",
            openTime: "10",
            isOpen: true
        },
        {
            src: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=888&q=80",
            title: "Thoopu Kari Virundhu",
            ratings: "3.8",
            type: "South Indian, Chineese, Biriyaani",
            price: "100",
            openTime: "11",
            isOpen: true
        },
        {
            src: "https://images.unsplash.com/photo-1615557960916-5f4791effe9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            title: "Haribhavanam",
            ratings: "4.0",
            type: "Chettinad, North Indian",
            price: "100",
            openTime: "12",
            isOpen: true
        },
        {
            src: "https://images.unsplash.com/photo-1562059390-a761a084768e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=819&q=80",
            title: "Taco Bell",
            ratings: "3.8",
            type: "Mexican, Fast Food, Wraps",
            price: "100",
            openTime: "12",
            isOpen: true
        },
        {
            src: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80",
            title: "City Restaurant",
            ratings: "3.8",
            type: "Chettinad, Chineese, North Indian",
            price: "100",
            openTime: "11",
            isOpen: true
        },
        {
            src: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-32775-0.jpg?ver=1.10",
            title: "KFC",
            ratings: "3.9",
            type: "Burger, Fast Food, Beverages",
            price: "150",
            openTime: "10",
            isOpen: true
        },
        {
            src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
            title: "MSR Briyaani Hotel",
            ratings: "3.9",
            type: "Briyaani, South Indian, North Indian",
            price: "100",
            openTime: "9",
            isOpen: false
        },
        {
            src: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            title: "Dindigul Venu Briyaani",
            ratings: "3.8",
            type: "Briyaani, South Indian, North Indian",
            price: "100",
            openTime: "12",
            isOpen: false
        },
    ];

    return (
        <>
        <h3 className="hidden lg:block text-3xl mx-28 font-semibold my-4 "> Delivery Restaurants in Madurai </h3>
        <div className="py-4">
            {
                FoodGridImages.map((data) => (
                    <FoodGrid {...data} />
                ))
            }
        </div>
        </>
    )

};

export default FoodGridComponent;
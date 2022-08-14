// Libraries
import express from "express";
import passport from "passport";

// Database model
import { FoodModel } from "../../database/allModels";

// Validation 
import { ValidateRestaurantId, ValidateCategory } from "../../validation/food";

const Router = express.Router();

/*
Route            /new
Des              Add new foods to a particular restaurant
Access           Public
Method           POST
*/

Router.post("/new", passport.authenticate("jwt"), async(req, res) => {

    try {
        const { foodData } = req.body;
        const newFood = await FoodModel.create(foodData);
        return res.json({ food: newFood });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route            /
Des              Get all Food details on particular Restaurant
Params           _id
Access           Public
Method           GET
*/

Router.get("/id/:_id", async(req, res) => {
    try {
        await ValidateRestaurantId(req.params);

        const {_id} = req.params;
        const foods = await FoodModel.find({restaurant : _id });

        return res.json({ foods });
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

/*
Route            /r
Des              Get all Food details on particular category
Params           category
Access           Public
Method           GET
*/

Router.get("/category", async(req, res) => {
    try {
        await ValidateCategory(req.body);
        
        const { category } = req.body;
        const foods = await FoodModel.find({ 
            category: { $regex: category, $options: "i" }
        });

        return res.json({ foods });
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

export default Router;
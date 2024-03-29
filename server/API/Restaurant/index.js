// Libraries
import express from "express";
import passport from "passport";

//Database
import {RestaurantModel} from "../../database/allModels.js";

// Validation
import { ValidateRestaurantId } from "../../validation/food.js";
import { ValidateRestaurantCity, ValidateRestaurantSearchString } from "../../validation/restaurant.js";

const Router = express.Router();

/*
Route            /new
Des              Add new Restaurant to the database
Access           Private
Method           POST
*/

Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
  try {
    const newRetaurant = await RestaurantModel.create(req.body.retaurantData);
    return res.json({ restaurants: newRetaurant });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route            /
Des              Get all Restaurants details
Params           None
Access           Public
Method           GET
*/

Router.get("/city/:city", async(req,res) => {
  try{
    await ValidateRestaurantCity(req.params);

    const {city} = req.params;
    const restaurants = await RestaurantModel.find({city});

    return res.json({restaurants});

  } catch(error) {
    return res.status(500).json({error: error.message});
  }
});

/*
Route            /
Des              Get particular Restaurant details on id
Params           _id
Access           Public
Method           GET
*/

Router.get("/id/:_id", async(req,res) => {
  try {
    await ValidateRestaurantId(req.params);

    const { _id } = req.params;
    const restaurant = await RestaurantModel.findOne({_id});

    if(!restaurant)
    return res.status(404).json({error: "Restaurant not found"});

    return res.json({restaurant});
  } catch(error) {
        return res.status(500).json({ error: error.message});
  }
});

/*
Route            /search
Des              Get Restaurant details search
Params           none
Body             searchString
Access           Public
Method           GET
*/


Router.get("/search", async(req,res)=> {
  try {

    await ValidateRestaurantSearchString(req.body);

    const {searchString} = req.body;

    const restaurants = await RestaurantModel.find({
      name: {$regex: searchString, $options: "i"},
    });

    return res.json({ restaurants });
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
});


export default Router;
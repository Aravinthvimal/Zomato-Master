// Libraries
import express from "express";
import passport from "passport";

// Database
import { MenuModel, ImageModel  } from "../../database/allModels.js";

// Validation
import { ValidateRestaurantId } from "../../validation/food.js";

const Router = express.Router();

/*
Route            /new
Des              Get list of Menus of a particular restaurant
Params           _id
Access           Public
Method           POST
*/

Router.post("/new", passport.authenticate("jwt"), async(req,res) => {

    try {
        const addNewmenu = await MenuModel.create(req.body.menuDetails);
        return res.json({menus : addNewmenu});
        
    } catch (error) {
        return res.status(500).json({error : error.message});
    }
})

/*
Route            /list
Des              Get list of Menus of a particular restaurant
Params           _id
Access           Public
Method           GET
*/

Router.get("/list/:_id", async(req, res) => {
    try {
        await ValidateRestaurantId(req.params);

        const {_id} = req.params;
        const menus = await MenuModel.findOne({ restaurant :  _id });

        return res.json({ menus });
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

/*
Route            /image
Des              Get Menu image based on a id
Params           _id
Access           Public
Method           GET
*/

Router.get("/image/:_id", async(req, res) => {
    try {
        await ValidateRestaurantId(req.params);
        
        const {_id} = req.params;
        const menus = await ImageModel.findOne({ restaurant : _id });

        return res.json(menus.image);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

export default Router;
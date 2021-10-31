// Libraries
import express from "express";

// Database
import { MenuModel, ImageModel  } from "../../database/allModels";

// Validation
import { ValidateRestaurantId } from "../../validation/food";

const Router = express.Router();

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
        const menus = await MenuModel.findOne(_id);

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
        const menus = await ImageModel.findOne(_id);

        return res.json({menus});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

export default Router;
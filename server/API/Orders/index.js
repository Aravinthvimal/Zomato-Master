// Libraries
import express from "express";
import passport from "passport";

// Database 
import { OrderModel } from "../../database/allModels";

// Validation
import { ValidateRestaurantId } from "../../validation/food";
import { ValidateOrderId } from "../../validation/food";

const Router = express.Router();

/*
Route         /
Descrip       Get all orders based on id
Params        _id
Access        Public
Method        GET
*/

Router.get("/:_id", passport.authenticate("jwt") ,async(req, res) => {
    try {

        await ValidateRestaurantId(req.params);

        const { _id } = req.params;
        const getOrders = await OrderModel.findOne({ user: _id });
        
        if(!getOrders) {
            return res.status(404).json( {error: "User not found"} );
        }
        
        return res.json({ orders : getOrders });
        
    } catch(error) {
        return res.status(500).json({error: error.message});
    }
});

/*
Route         /new
Descrip       Add new order
Params        _id
Access        Public
Method        POST
*/

Router.post("/new", passport.authenticate("jwt"), async(req, res) => {
    try {
        const addNewOrder = await OrderModel.create(req.body.orderDetails);
        return res.json({order: addNewOrder}); 
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

export default Router;
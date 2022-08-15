// Libraries
import express from "express";
import passport from "passport";

// Database 
import { ReviewModel } from "../../database/allModels";

const Router = express.Router();

/*
Route         /new
Descrip       Add new review
Params        None
Access        Public
Body          Review Object
Method        POST
*/

Router.post("/new", passport.authenticate("jwt"), async(req, res) => {
    try {
        const { ReviewData } = req.body;
        await ReviewModel.create(ReviewData);
        return res.json({ review: "Review added Successfully! Thank you for your review!" });
    } catch(error) {
        return res.status(500).json({error: error.message});
    }
});

/*
Route         /delete
Descrip       Delete review
Params        _id
Access        Public
Method        DELETE
*/

Router.delete("/delete/:_id", async(req, res) => {
    try {
        const { _id } = req.params;
        await ReviewModel.findByIdAndDelete(_id);
        return res.json({review: "Review deleted Successfull"});
    } catch(error) {
        return res.status(500).json({error: error.message});
    }
});


export default Router;
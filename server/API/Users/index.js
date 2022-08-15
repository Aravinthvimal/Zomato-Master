// Libraries
import express from "express";

// Database
import { UserModel } from "../../database/allModels";

const Router = express.Router();

/*
Route         /
Descrip       Get user profile
Params        _id
Access        Public
Method        GET
*/

Router.get("/:_id", async(req, res) => {
    try {
        const { _id } = req.params;
        const getUser = await UserModel.findById(_id);
        return res.json({user: getUser});
    } catch(error) {
        return res.status(500).json({error: error.message});
    }
});

/*
Route         /update
Descrip       Update existing user
Params        _userId
Body          user data
Access        Public
Method        PUT
*/

Router.put("/update/:userId", async(req, res) => {
    try {

        const { userId } = req.params;
        const { userData } = req.body;
        
        const updatedUserProfile = await UserModel.findOneAndUpdate( userId,
            {
                $set : userData,
            },
            {
                new : true
            }
        )

        return res.json({ user : updatedUserProfile });
    } catch(error) {
        return res.status(500).json({error: error.message});
    }
});

export default Router;
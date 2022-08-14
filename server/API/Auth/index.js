import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";

const Router = express.Router();

//Models
import { UserModel } from "../../database/user";

// Validation
import { ValidateSignup, ValidateSignin } from "../../validation/auth";

/*
Route         /signup
Descrip       Signup with email and password
Params        None
Access        Public
Method        POST
*/

let refreshTokens = []

Router.post("/signup", async(req,res) => {
  try {

    await ValidateSignup(req.body.credentials);
    await UserModel.findEmailAndPhone(req.body.credentials);

    //DB
    const newUser = await UserModel.create(req.body.credentials);
    const user = { email : newUser }

   //JWT Auth Token
   const token = generateAccessToken(user)
   const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
   refreshTokens.push(refreshToken);

   return res.status(200).json({token, refreshToken});

  } catch (error) {
    return res.status(500).json({error: error.message});
  }
});

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn : '7d'} ) 
}

/*
Route         /token
Descrip       Generate Access token with refresh token
Params        None
Access        Public
Method        POST
*/

Router.post("/token", async(req, res) => {

  try {

    const refreshToken = req.body.token

    if(refreshToken == null)  return res.sendStatus(401)
    if(!refreshTokens.includes(refreshToken)) return res.sendStatus(403)

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if(err) return res.sendStatus(403)
      const accessToken = generateAccessToken({ email : user })
      res.json({ accessToken : accessToken })
    })

  } catch (error) {
    return res.status(500).json({error: error.message});
  }

})


/*
Route         /signin
Descrip       Signin with email and password
Params        None
Access        Public
Method        POST
*/

Router.post("/signin", async(req,res) => {
  try {
    
    await ValidateSignin(req.body.credentials);
    const new_user = await UserModel.findByEmailAndPassword(req.body.credentials);
    const user = { email : new_user }

    //JWT Auth Token
    const token = generateAccessToken(user)
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
    refreshTokens.push(refreshToken);

    return res.status(200).json({token, refreshToken, status: "Success"});

  } catch (error) {
    return res.status(500).json({error: error.message});
  }
});

/*
Route         /signout
Descrip       Signout with email and password
Params        None
Access        Public
Method        POST
*/

Router.delete("/signout", async(req, res) => {
  try {
    const refreshToken = req.body.token

    refreshTokens = refreshTokens.filter(token => token !== refreshToken)
    res.status(204).json({ status : "logged out" })

  } catch (error) {
    return res.status(500).json({ error : error.message })
  }
})

/*
Route         /google
Descrip       Google Signin
Params        None
Access        Public
Method        GET
*/

Router.get("/google", passport.authenticate("google",{
scope: [
  "https://www.googleapis.com/auth/userinfo.profile",
  "https://www.googleapis.com/auth/userinfo.email"
],
}));

/*
Route         /google/callback
Descrip       Google Signin callback
Params        None
Access        Public
Method        GET
*/

Router.get("/google/callback", passport.authenticate("google",{failureRedirect: "/"}),
(req,res) => {
  return res.json({token: req.session.passport.user.token});
});

export default Router;

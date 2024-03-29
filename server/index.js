//env variable
import dotenv from "dotenv";
dotenv.config({ silent: process.env.NODE_ENV === 'production' });

import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

//config
import googleAuthConfig from "./config/google.config.js";
import routeConfig from "./config/route.config.js";

//API
import Auth from "./API/Auth/index.js";
import Restaurant from "./API/Restaurant/index.js";
import Food from "./API/Food/index.js";
import Menu from "./API/Menu/index.js";
import Image from "./API/Image/index.js";
import Order from "./API/Orders/index.js";
import Review from "./API/Reviews/index.js";
import Users from "./API/Users/index.js";

//Database connection
import ConnectDB from "./database/connection.js";

const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({extended: false}));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());


//passport configuration
googleAuthConfig(passport);
routeConfig(passport);

console.log(process.env.GOOGLE_CLIENT_ID);

//For application routes
//localhost:4000/auth/signup
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/menu", Menu);
zomato.use("/image", Image);
zomato.use("/order", Order);
zomato.use("/reviews", Review);
zomato.use("/users", Users);

zomato.get("/", (req,res) => res.json({message: "SetUp Success Yay!!"}));

zomato.listen(4000, () =>
ConnectDB().then(() => console.log("Server is up and running"))
.catch((e) => console.log(e.message)));
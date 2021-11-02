import { createStore, applyMiddleware } from "redux";
import rootReducer from "./Reducer/rootReducer";
import thunk from "redux-thunk";

// Middleware
const middlewares = [thunk];

if(process.env.NODE_ENV === "development") {
    const { logger } = require("redux-logger");
    middlewares.push(logger);
}

const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));

export default store;


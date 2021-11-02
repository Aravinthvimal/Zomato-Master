import { combineReducers } from "redux";

// Reducers
import restaurant from "./Restaurant/Restaurant.reducer";

const rootReducer = combineReducers({restaurant});

export default rootReducer;
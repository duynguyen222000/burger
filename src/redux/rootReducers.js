import { combineReducers } from "redux";
import burgerReducers from "./burgerReducers";
const rootReducer = combineReducers({
  burgerReducers,
});

export default rootReducer;

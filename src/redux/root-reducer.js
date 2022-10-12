import {combineReducers} from "redux";
import colorReducer from "./colorReducer";
import authReducer from "./auth-reducer";

const rootReducer = combineReducers({
  colorReducer,
  authReducer
})

export default rootReducer;
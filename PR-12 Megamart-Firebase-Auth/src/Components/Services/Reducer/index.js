import { combineReducers } from "redux";
import MenReducer from "./Reducer";
import { authReducer } from "./authReducer";

export const rootReducer = combineReducers({
    menReducer: MenReducer,
    authReducer: authReducer
});
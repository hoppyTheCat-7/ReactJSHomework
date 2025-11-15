import { createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk"
import weatherReducer from "./weather_app/reducers/weatherReducer";

export const store = createStore(weatherReducer, applyMiddleware(thunk));
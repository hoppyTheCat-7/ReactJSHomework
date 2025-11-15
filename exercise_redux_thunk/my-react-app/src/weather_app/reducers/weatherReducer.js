import { FETCH_WEATHER_FAILURE, FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS } from "../actions/fetchWeatherAction";

// 1. initial state
const initialState = {
    data: null,
    loading: false,
    error: "",
};

// 2.reducer function
const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_WEATHER_REQUEST:
            return {
                ...state,
                loading: true,
                error: "",
            };
        case FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: "",
            };
        case FETCH_WEATHER_FAILURE:
            return {
                ...state,
                data: null,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default weatherReducer
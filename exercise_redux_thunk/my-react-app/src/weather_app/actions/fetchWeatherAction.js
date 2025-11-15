// action types
export const FETCH_WEATHER_REQUEST = "FETCH_WEATHER_REQUEST"
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS"
export const FETCH_WEATHER_FAILURE = "FETCH_WEATHER_FAILURE"

// action creators
export const fetchWeatherRequest = () => ({
    type: FETCH_WEATHER_REQUEST,
});

export const fetchWeatherSuccess = (weatherData) => ({
    type: FETCH_WEATHER_SUCCESS,
    payload: weatherData,
});

export const fetchWeatherFailure = (error) => ({
    type: FETCH_WEATHER_FAILURE,
    payload: error,
});

// action creator --> middleware
export const fetchWeather = (city) => {
    return (dispatch) => {
        dispatch(fetchWeatherRequest())

        const API_KEY = "bdac58b6481a8b85217c8cd5cd1ce33d";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                dispatch(fetchWeatherSuccess(data));
            })
            .catch(err => {
                dispatch(fetchWeatherFailure(err.message));
            })
    };
};
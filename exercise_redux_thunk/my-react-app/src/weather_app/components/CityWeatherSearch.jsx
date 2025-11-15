import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchWeather } from "../actions/fetchWeatherAction";

function CityWeatherSearch() {
    const [city, setCity] = useState("");
    const { data, loading, error } = useSelector(state => state);
    const dispatch = useDispatch();

    console.log(error);
    console.log(loading);

    const handleClick = () => {
        if (city.trim().toLowerCase() === "") return;
        dispatch(fetchWeather(city));
        setCity("");
    };

    return (
        <section style={{ width: "500px", height: "40vh", margin: "20px auto", textAlign: "left", backgroundColor: "#323232", padding: "20px", borderRadius: "8px" }}>
            <h1>Weather Forecast for {data ? data.name : city}</h1>
            <div>
                <label htmlFor="city">Enter a city name:{" "}</label>
                <input
                    style={{ padding: "8px 10px", borderRadius: "8px" }}
                    type="text"
                    id="city"
                    name="city"
                    placeholder="e.g. Skopje"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button
                    style={{ padding: "8px 10px", borderRadius: "8px" }}
                    type="submit"
                    onClick={handleClick}
                >
                    Submit
                </button>
            </div>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {data && (
                <table style={{ marginTop: "20px" }}>
                    <tbody>
                        <tr>
                            <th>Temperature:</th>
                            <td>{`${parseInt(data.main.temp)}℃`}</td>
                        </tr>
                        <tr>
                            <th>Humidity:</th>
                            <td>{`${data.main.humidity}%`}</td>
                        </tr>
                        <tr>
                            <th>Description:</th>
                            <td>{data.weather[0].description}</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </section>
    );
}

export default CityWeatherSearch
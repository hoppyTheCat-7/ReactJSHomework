import { useEffect, useState } from "react";
import CountryCard from "./CountryCard"

function Home() {
    const [countries, setCountries] = useState([]);
    const [countryName, setCountryName] = useState("");

    const fetchAllCountries = () => {
        fetch("https://restcountries.com/v3.1/all?fields=name,flags,region,population")
            .then((res) => {
                console.log("Response object:", res);
                return res.json();
            })
            .then((data) => {
                console.log("Data returned from the API:", data);
                return setCountries(data);
            })
            .catch((err) => console.log("Error fetching countries:", err));
    };

    useEffect(() => {
        fetchAllCountries()
    }, []);

    const filteredCountries = countries.filter(country => {
        return (country.name.common.toLowerCase().includes(countryName.toLowerCase()) ||
            country.name.official.toLowerCase().includes(countryName.toLowerCase()))
    });

    return (
        <main className="main-container">
            <form onSubmit={(e) => e.preventDefault()} className="search-box">
                <label htmlFor="search">
                    <span>Search a country:</span>
                    <input
                        type="search"
                        id="search"
                        value={countryName}
                        placeholder="e.g. United States or America"
                        onChange={(e) => setCountryName(e.target.value)}
                    />
                </label>
            </form>

            <CountryCard countries={filteredCountries} />
        </main>
    );
}

export default Home
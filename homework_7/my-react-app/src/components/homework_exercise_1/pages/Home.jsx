import { useEffect, useState } from "react";
import Countries from "../components/Countries";

function Home() {
    const [countries, setCountries] = useState([]);
    const [countryName, setCountryName] = useState("");
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchAllCountries = async () => {
        try {
            const res = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,region,population");
            const data = await res.json();
            setCountries(data);
            setFilteredCountries(data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllCountries()
    }, []);

    const handleSearch = () => {
        const filteringCountries = countries.filter(country => {
            return (country.name.common.toLowerCase().includes(countryName.toLowerCase()) ||
                country.name.official.toLowerCase().includes(countryName.toLowerCase()))
        });
        setFilteredCountries(filteringCountries);
        setCountryName("");
    };

    return (
        <main className="main-container">
            <div className="search-box">
                <label htmlFor="search">Search a country:</label>
                <input
                    type="search"
                    id="search"
                    value={countryName}
                    placeholder="e.g. united, states or america"
                    onChange={(e) => setCountryName(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>

            {loading && <p>Loading countries...</p>}
            {error && <p style={{color: "red"}}>{error}</p>}
            {!loading && !error && <Countries countries={filteredCountries} />}
        </main>
    );
}

export default Home
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

function CountryDetail() {
    const [singleCountry, setSingleCountry] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { name } = useParams();
    console.log(name);

    const fetchSingleCountry = async (name) => {
        try {
            const res = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
            const data = await res.json();
            setSingleCountry(data[0]);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSingleCountry(name);
    }, [name])

    return (
        <>
            {loading && <p>Loading country details...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {!loading && !error && singleCountry && (
                <section className="country-details">
                    <h1>{singleCountry.name.common}</h1>
                    <img
                        src={singleCountry.flags.png}
                        alt={singleCountry.flags.alt}
                    />
                    <table className="country-table">
                        <tr>
                            <th>Official Name:</th>
                            <td>{singleCountry.name.official}</td>
                        </tr>
                        <tr>
                            <th>Capital City:</th>
                            <td>{singleCountry.capital.join(", ")}</td>
                        </tr>
                        <tr>
                            <th>Currency:</th>
                            <td>{Object.values(singleCountry.currencies)[0].name}</td>
                        </tr>
                        <tr>
                            <th>Google Maps:</th>
                            <td>
                                <a
                                    href={singleCountry.maps.googleMaps}
                                    target="_blank"
                                >View on Google Maps
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <th>Continent:</th>
                            <td>{singleCountry.continents.join(", ")}</td>
                        </tr>
                        <tr>
                            <th>Language:</th>
                            <td>{Object.values(singleCountry.languages).join(", ")}</td>
                        </tr>
                        <tr>
                            <th>Time Zone:</th>
                            <td>{singleCountry.timezones.join(", ")}</td>
                        </tr>
                    </table>
                </section>
            )}
        </>
    );
}

export default CountryDetail
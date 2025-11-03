import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

function CountryDetail() {
    const [singleCountry, setSingleCountry] = useState(null);
    const { name } = useParams();
    console.log(name);

    const fetchSingleCountry = (name) => {
        fetch(`https://restcountries.com/v3.1/name/${name}`)
            .then((res) => {
                console.log("Response object:", res);
                return res.json();
            })
            .then((data) => {
                console.log("Data returned from the API:", data);
                return setSingleCountry(data[0]);
            })
            .catch((err) => console.error("Error fetching country:", err));
    };

    useEffect(() => {
        fetchSingleCountry(name);
    }, [name])

    return (
        <>
            {singleCountry && (
                <section className="country-details">
                    <h1>{singleCountry.name.common}</h1>
                    <img
                        src={singleCountry.flags.png}
                        alt={singleCountry.flags.alt}
                    />
                    <p><strong>Official Name:{" "}</strong>{singleCountry.name.official}</p>
                    <p><strong>Capital City:{" "}</strong> {singleCountry.capital.join(", ")}</p>
                    <p><strong>Currency:{" "}</strong>{Object.values(singleCountry.currencies)[0].name}</p>
                    <p><strong>Google Maps:{" "}</strong>
                        <a
                            href={singleCountry.maps.googleMaps}
                            target="_blank"
                        >
                            {singleCountry.maps.googleMaps}
                        </a>
                    </p>
                    <p><strong>Continent:{" "}</strong>{singleCountry.continents.join(", ")}</p>
                    <p><strong>Language:{" "}</strong>{Object.values(singleCountry.languages).join(", ")}</p>
                    <p><strong>Time Zone:{" "}</strong>{singleCountry.timezones.join(", ")}</p>
                </section>
            )}
        </>
    );
}

export default CountryDetail
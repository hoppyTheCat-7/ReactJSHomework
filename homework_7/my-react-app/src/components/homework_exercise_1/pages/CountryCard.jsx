import { Link } from "react-router-dom";

function CountryCard({ countries }) {

    return (
        <section>
            <h1 style={{ fontSize: "1.7rem" }}>Countries of the World</h1>
            {countries.length > 0 && (
                <div className="countries-container">
                    {countries.map(country => {
                        return (
                            <Link
                                key={country.name.common}
                                to={`/country/${country.name.common}`}
                                className="country-link"
                            >
                                <div className="country-card">
                                    <img
                                        src={country.flags.png}
                                        alt={country.flags.alt}
                                        width="60px"
                                        height="40px"
                                    />
                                    <h3>{country.name.common}</h3>
                                    <p><strong>Region: {" "}</strong>{country.region}</p>
                                    <p><strong>Population: {" "}</strong>{country.population}</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            )}
            {countries.length === 0 && <p>No countries found!</p>}
        </section>

    );
}

export default CountryCard
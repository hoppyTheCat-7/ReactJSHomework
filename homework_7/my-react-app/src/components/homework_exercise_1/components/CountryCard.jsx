import { Link } from "react-router-dom";

function CountryCard({ country }) {

    return (
        <Link
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
}

export default CountryCard
import CountryCard from "./CountryCard";

function Countries({ countries }) {

    return (
        <section>
            <h1 style={{ fontSize: "1.7rem", margin: "20px" }}>Countries of the World</h1>
            {countries.length === 0 ? (
                <p style={{ textAlign: "center", marginTop: "1rem", color: "red", fontSize: "1rem" }}>
                    No countries found!<br/> Try a different search keyword!
                </p>
            ) : (
                <div className="countries-container">
                    {countries.map(country => {
                        return <CountryCard key={country.name.common} country={country} />
                    })}
                </div>
            )}
        </section>
    );
}

export default Countries
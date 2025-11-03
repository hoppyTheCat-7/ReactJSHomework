import { useState } from "react"
import "./multi-input.css"

function MultiInputForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [interests, setInterests] = useState([]);
    const [country, setCountry] = useState("");

    const [errors, setErrors] = useState({});
    const [submittedData, setSubmittedData] = useState({});

    const handleCheckboxChange = (e) => {
        if (e.target.checked) {
            setInterests([...interests, e.target.value])
        } else {
            setInterests(interests.filter(interest => interest !== e.target.value))
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let newErrors = {};

        if (name.trim() === "") {
            newErrors.name = "Name is required!";
        } else if (name.trim().length < 3) {
            newErrors.name = "The name should be at least 3 characters long!";
        }

        if (email.trim() === "") {
            newErrors.email = "Email is required!";
        } else if (!/^[a-zA-Z#$%!_+@*?&\-\d\.]+[@][a-z]+\.[a-z]{2,3}$/.test(email)) {
            newErrors.email = "Please, enter a valid email address!";
        }

        if (!gender) {
            newErrors.gender = "Please, select from the options!";
        }

        if (interests.length === 0) {
            newErrors.interests = "You must have at least one option selected!";
        }

        if (!country) {
            newErrors.country = "You must select a country!"
        }

        console.log("Country:", country);

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setSubmittedData({});
        } else {
            setErrors({});
            setSubmittedData({ name, email, gender, interests, country });
            setName("");
            setEmail("");
            setGender("");
            setInterests([]);
            setCountry("");
        }
    };

    return (
        <div className="multi-input-holder">
            <h1>Multi-Input Form</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    <span>Name:</span>
                    <input
                        placeholder="Your name..."
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
                </label>
                <br />
                <label>
                    <span>Email:</span>
                    <input
                        placeholder="Your email..."
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
                </label>
                <br />
                <hr />
                <label>
                    <span>Gender:</span>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={gender === "male"}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    <span>Male</span>
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={gender === "female"}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    <span>Female</span>
                </label>
                {errors.gender && <span style={{ color: "red" }}>{errors.gender}</span>}
                <br />
                <hr />
                <label>
                    <span>Interests:</span>
                    <input
                        type="checkbox"
                        value="reading"
                        checked={interests.includes("reading")}
                        onChange={handleCheckboxChange}
                    />
                    <span>Reading</span>
                </label>
                <label>
                    <input
                        type="checkbox"
                        value="sports"
                        checked={interests.includes("sports")}
                        onChange={handleCheckboxChange}
                    />
                    <span>Sports</span>
                </label>
                <label>
                    <input
                        type="checkbox"
                        value="music"
                        checked={interests.includes("music")}
                        onChange={handleCheckboxChange}
                    />
                    <span>Music</span>
                </label>
                <label>
                    <input
                        type="checkbox"
                        value="cooking"
                        checked={interests.includes("cooking")}
                        onChange={handleCheckboxChange}
                    />
                    <span>Cooking</span>
                </label>
                <label>
                    <input
                        type="checkbox"
                        value="travelling"
                        checked={interests.includes("travelling")}
                        onChange={handleCheckboxChange}
                    />
                    <span>Travelling</span>
                </label>
                {errors.interests && <span style={{ color: "red" }}>{errors.interests}</span>}
                <br />
                <hr />
                <label htmlFor="countrySelect"><span>Country:</span></label>
                <select
                    id="countrySelect"
                    name="countries"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                >
                    <option value="">-- Select a country --</option>
                    <option value="macedonia">Macedonia</option>
                    <option value="serbia">Serbia</option>
                    <option value="croatia">Croatia</option>
                    <option value="italy">Italy</option>
                    <option value="spain">Spain</option>
                </select>
                {errors.country && <span style={{ color: "red" }}>{errors.country}</span>}
                <br />
                <button type="submit">Submit</button>
            </form>

            {Object.keys(submittedData).length > 0 && (
                <div className="data-box">
                    <h2>User Details:</h2>
                    {submittedData.name && (
                        <p>
                            <strong>Name: {" "}</strong>
                            {submittedData.name}
                        </p>
                    )}
                    {submittedData.email && (
                        <p>
                            <strong>Email: {" "}</strong>
                            {submittedData.email}
                        </p>
                    )}
                    {submittedData.gender && (
                        <p>
                            <strong>Gender: {" "}</strong>
                            {submittedData.gender}
                        </p>
                    )}
                    {submittedData.interests && (
                        <p>
                            <strong>Interests: {" "}</strong>
                            {submittedData.interests.join(", ")}
                        </p>
                    )}
                    {submittedData.country && (
                        <p>
                            <strong>Country: {" "}</strong>
                            {submittedData.country.charAt(0).toUpperCase() + submittedData.country.slice(1)}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}

export default MultiInputForm
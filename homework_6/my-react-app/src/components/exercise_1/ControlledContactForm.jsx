import { useState } from "react";
import "./contact-form.css"
import SubmittedData from "./SubmittedData";

function ControlledContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});
    const [submittedData, setSubmittedData] = useState({});

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

        if (message.trim() === "") {
            newErrors.message = "Please, enter your message!";
        } else if (message.trim().length < 10) {
            newErrors.message = "Your message should be at least 10 characters long!";
        }

        console.log("Error object:", newErrors);

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setSubmittedData({});
        } else {
            setErrors({});
            setSubmittedData({ name, email, message });
            setName("");
            setEmail("");
            setMessage("");
        }
    };

    return (
        <div className="wrapper">
            <h1>Contact Form</h1>
            <form onSubmit={handleSubmit} className="user-fields">
                <label>
                    <span>Name:</span>
                    <input
                        placeholder="Your name..."
                        type="text"
                        name="name"
                        value={name}
                        // required={true}
                        // min={3}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <span>{errors.name}</span>}
                </label>
                <label>
                    <span>Email:</span>
                    <input
                        placeholder="Your email..."
                        type="email"
                        name="email"
                        value={email}
                        // required={true}
                        // pattern="/^[a-zA-Z#$%!_+@*?&\-\d\.]+[@][a-z]+\.[a-z]{2,3}$/"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <span>{errors.email}</span>}
                </label>
                <label>
                    <span>Message:</span>
                    <textarea
                        placeholder="Your message..."
                        rows={5}
                        cols={30}
                        // min={10}
                        name="message"
                        value={message}
                        // required={true}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    {errors.message && <span>{errors.message}</span>}
                </label>
                <button type="submit">Submit</button>
            </form>

            <SubmittedData data={submittedData} />
        </div>
    );
}

export default ControlledContactForm
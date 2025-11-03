import { useRef, useState } from "react"

function UncontrolledContactForm() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);
    const [errors, setErrors] = useState({});
    const [submittedData, setSubmittedData] = useState({});

    const handleSubmit = () => {
        console.log(nameRef.current);
        console.log(`Text value: ${nameRef.current.value}`);
        console.log(`Email value: ${emailRef.current.value}`);
        console.log(`Message value: ${messageRef.current.value}`);

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const message = messageRef.current.value;

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
            newErrors.message = "Please, enter your message!"
        } else if (message.trim().length < 10) {
            newErrors.message = "Your message should be at least 10 characters long!"
        }

        console.log("Error object:", newErrors);

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setSubmittedData({});
        } else {
            setErrors({});
            setSubmittedData({ name, email, message });
            nameRef.current.value = "";
            emailRef.current.value = "";
            messageRef.current.value = "";
        }

    }
    return (
        <div className="wrapper">
            <h1>Contact Form</h1>

            <div className="user-fields">
                <label>
                    <span>Name:</span>
                    <input
                        type="text"
                        name="name"
                        ref={nameRef}
                        placeholder="Your name..."
                    />
                    {errors.name && <span>{errors.name}</span>}
                </label>
                <label>
                    <span>Email:</span>
                    <input
                        type="email"
                        name="email"
                        ref={emailRef}
                        placeholder="Your email..."
                    />
                    {errors.email && <span>{errors.email}</span>}
                </label>
                <label>
                    <span>Message:</span>
                    <textarea
                        name="message"
                        ref={messageRef}
                        placeholder="Your message..."
                        rows={5}
                        cols={30}
                    >
                    </textarea>
                    {errors.message && <span>{errors.message}</span>}
                </label>
                <button onClick={handleSubmit}>Submit</button>
            </div>

            {Object.keys(submittedData).length > 0 && (
                <div className="submitted-data">
                    <h2>User Details:</h2>
                    {submittedData.name && (
                        <p><strong>Name:{" "}</strong>{submittedData.name}</p>
                    )}
                    {submittedData.email && (
                        <p><strong>Email:{" "}</strong>{submittedData.email}</p>
                    )}
                    {submittedData.message && (
                        <p><strong>Message:{" "}</strong>{submittedData.message}</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default UncontrolledContactForm
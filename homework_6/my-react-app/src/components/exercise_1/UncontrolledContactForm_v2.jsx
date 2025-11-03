import { useRef, useState } from "react";
import "./contact-form.css"
import SubmittedData from "./SubmittedData";

function UncontrolledContactFormV2() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);

    console.log(nameRef);

    const nameErrorRef = useRef(null);
    const emailErrorRef = useRef(null);
    const messageErrorRef = useRef(null);

    const [submittedData, setSubmittedData] = useState({});

    const handleSubmit = () => {
        let isValid = true;

        if (nameRef.current.value.trim() === "") {
            nameErrorRef.current.innerText = "Name is required!";
            nameErrorRef.current.style.display = "inline";
            isValid = false;
        } else if (nameRef.current.value.trim().length < 3) {
            nameErrorRef.current.innerText = "The name should be at least 3 characters long!";
            nameErrorRef.current.style.display = "inline";
            isValid = false;
        }
        else {
            nameErrorRef.current.style.display = "none";
        }

        if (emailRef.current.value.trim() === "") {
            emailErrorRef.current.innerText = "Email is required!";
            emailErrorRef.current.style.display = "inline";
            isValid = false;
        } else if (!/^[a-zA-Z#$%!_+@*?&\-\d\.]+[@][a-z]+\.[a-z]{2,3}$/.test(emailRef.current.value)) {
            emailErrorRef.current.innerText = "Please, enter a valid email address!";
            emailErrorRef.current.style.display = "inline";
            isValid = false;
        } else {
            emailErrorRef.current.style.display = "none";
        }

        if (messageRef.current.value.trim() === "") {
            messageErrorRef.current.innerText = "Please, enter your message!";
            messageErrorRef.current.style.display = "inline";
            isValid = false;
        } else if (messageRef.current.value.trim().length < 10) {
            messageErrorRef.current.innerText = "Your message should be at least 10 characters long!";
            messageErrorRef.current.style.display = "inline";
            isValid = false;
        } else {
            messageErrorRef.current.style.display = "none";
        }

        console.log(nameRef.current.value, emailRef.current.value, messageRef.current.value);

        if (isValid) {
            setSubmittedData({
                name: nameRef.current.value,
                email: emailRef.current.value,
                message: messageRef.current.value,
            });
            nameRef.current.value = "";
            emailRef.current.value = "";
            messageRef.current.value = "";
        } else {
            setSubmittedData({});
        }
    };

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
                    <span ref={nameErrorRef}></span>
                </label>
                <label>
                    <span>Email:</span>
                    <input
                        type="email"
                        name="email"
                        ref={emailRef}
                        placeholder="Your email..."
                    />
                    <span ref={emailErrorRef}></span>
                </label>
                <label>
                    <span>Message:</span>
                    <textarea
                        name="message"
                        ref={messageRef}
                        placeholder="Your message..."
                        rows={5}
                        cols={30}
                    />
                    <span ref={messageErrorRef}></span>
                </label>
                <button onClick={handleSubmit}>Submit</button>
            </div>

            <SubmittedData data={submittedData} />
        </div>
    );
}

export default UncontrolledContactFormV2
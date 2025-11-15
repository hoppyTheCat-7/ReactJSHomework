import { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import "./userForm.css"

function UserForm() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        state: "",
    });
    const [storedUsers, setStoredUsers] = useLocalStorage("users", []);
    const [errors, setErrors] = useState({});
    const [newUser, setNewUser] = useState(null);

    useEffect(() => {
        if (storedUsers.length > 0) {
            setFormData(storedUsers[storedUsers.length - 1]);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        let newErrors = {};

        if (formData.username.trim() === "") {
            newErrors.username = "This field is required!";
        } else if (formData.username.trim().length < 3) {
            newErrors.username = "The username must be at least 3 characters long!"
        }

        if (formData.email.trim() === "") {
            newErrors.email = "This field is required!";
        } else if (!/^[a-zA-Z#$%!_+@*?&\-\d\.]+[@][a-z]+\.[a-z]{2,3}$/.test(formData.email)) {
            newErrors.email = "Invalid email format!";
        }

        if (formData.password.trim() === "") {
            newErrors.password = "This field is required!";
        } else if (formData.password.trim().length < 6) {
            newErrors.password = "The password must be at least 6 characters long!";
        }

        if (!formData.state) {
            newErrors.state = "This field is required!"
        }

        let emailFound = storedUsers.find(user => user.email.trim().toLowerCase() === formData.email.trim().toLowerCase());

        if (emailFound) {
            newErrors.email = "That email already exists!";
        }

        console.log(formData);
        console.log(storedUsers);
        console.log(errors);

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            setStoredUsers(prev => ([...prev, formData]));
            setNewUser(formData);
            setFormData({ username: "", email: "", password: "", state: "" });
        }
    };

    const handleReset = () => {
        setErrors({});
        setFormData({ username: "", email: "", password: "", state: "" });
        setStoredUsers([]);
    };

    return (
        <section className="main-container">
            <h1>User Form</h1>
            <form className="form-container" onSubmit={handleSubmit}>
                <label>
                    <span>Username:</span>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
                        placeholder="Enter your username, please!"
                    />
                    {errors.username && <span>{errors.username}</span>}
                </label>
                <label>
                    <span>Email:</span>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="Enter your email, please!"
                    />
                    {errors.email && <span>{errors.email}</span>}
                </label>
                <label>
                    <span>Password:</span>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                        placeholder="Enter your password, please!"
                    />
                    {errors.password && <span>{errors.password}</span>}
                </label>
                <label>
                    <span>State:</span>
                    <select
                        name="state"
                        value={formData.state}
                        onChange={(e) => setFormData(prev => ({ ...prev, state: e.target.value }))}
                    >
                        <option value="">-- Select a state --</option>
                        <option value="New York">New York</option>
                        <option value="California">California</option>
                        <option value="Washington">Washington</option>
                        <option value="Illinois">Illinois</option>
                        <option value="Ohio">Ohio</option>
                    </select>
                    {errors.state && <span>{errors.state}</span>}
                </label>
                <div className="btn-container">
                    <button type="submit">Submit</button>
                    <button type="reset" onClick={handleReset}>Clear Form</button>
                </div>
            </form>

            {newUser && (
                <div className="user-data">
                    <h2>New User Data</h2>
                    <p><strong>Username: {" "}</strong>{newUser.username}</p>
                    <p><strong>Email: {" "}</strong>{newUser.email}</p>
                    <p><strong>Password: {" "}</strong>{newUser.password}</p>
                    <p><strong>State: {" "}</strong>{newUser.state}</p>
                </div>
            )}
        </section>
    );
}
export default UserForm
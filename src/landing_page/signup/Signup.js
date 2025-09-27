import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "./Signup.css";
import { handleError, handleSuccess } from "../../util";
import { BACKEND_URL } from "../../config";

function SignupPage() {
    const [signupInfo, setSignupInfo] = useState({
        name: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const newSignupInfo = { ...signupInfo, [name]: value };
        setSignupInfo(newSignupInfo);
    };

    // Handle signup form submission
    const handleSignup = async (e) => {
        e.preventDefault();
        const { name, email, password } = signupInfo;

        if (!name || !email || !password) {
            handleError("All fields are required");
            return;
        }
        try {
            const url = `${BACKEND_URL}/auth/signup`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(signupInfo),
            });

            const result = await response.json();
            const { success, message } = result;

            if (success) {
                handleSuccess(message || "Signup successful");
                setTimeout(() => {
                    navigate("/login");
                }, 1000);
            } else {
                handleError(message || "Signup failed");
            }
            console.log(result);
        } catch (err) {
            console.error(err);
            handleError("Server error! Please try again.");
        }
    };

    return (
        <div className="container-signup">
            <h1>Signup </h1>
            <form onSubmit={handleSignup}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        id="name"
                        name="name"
                        autoFocus
                        placeholder="Enter your Name"
                        value={signupInfo.name}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        onChange={handleChange}
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={signupInfo.email}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        onChange={handleChange}
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        value={signupInfo.password}
                    />
                </div>
                <button type="submit">Signup</button>
                <span>
                    Already have an account ? <Link to="/login">Login</Link>
                </span>
            </form>
            <ToastContainer />
        </div>
    );
}

export default SignupPage;

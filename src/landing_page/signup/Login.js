// import { Link, useNavigate } from "react-router-dom";
// import React, { useState } from "react";
// import { handleError, handleSuccess } from "../../util.js";
// import { ToastContainer } from "react-toastify";
// import "./Signup.css";
// import { BACKEND_URL, DASHBOARD_URL } from "../../config";

// function LoginPage() {
//     const [loginInfo, setLoginInfo] = useState({
//         email: "",
//         password: "",
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         console.log(name, value);
//         const newLoginInfo = { ...loginInfo, [name]: value };
//         setLoginInfo(newLoginInfo);
//     };

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         const { email, password } = loginInfo;

//         if (!email || !password) {
//             handleError("Email and password are required");
//             return;
//         }
//         try {
//             const url = `${BACKEND_URL}/auth/login`;
//             const response = await fetch(url, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(loginInfo),
//                 credentials: "include", // include cookies in the request
//             });

//             const result = await response.json();
//             const { success, message } = result;

//             if (success) {
//                 handleSuccess(message || "Login successful");

//                 // Redirect to the seperate dashboard app
//                 setTimeout(() => {
//                     window.location.href = DASHBOARD_URL;
//                 }, 1000);
//             } else {
//                 handleError(message || "Invalid Credentials");
//             }
//             // console.log(result);
//         } catch (err) {
//             console.error(err);
//             handleError("Server error, please try again");
//         }
//     };

//     return (
//         <div className="container-signup">
//             <h1>Login</h1>
//             <form onSubmit={handleLogin}>
//                 <div>
//                     <label htmlFor="email">Email</label>
//                     <input
//                         onChange={handleChange}
//                         type="email"
//                         id="email"
//                         name="email"
//                         placeholder="Enter your email"
//                         value={loginInfo.email}
//                         autoFocus
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="password">Password</label>
//                     <input
//                         onChange={handleChange}
//                         type="password"
//                         id="password"
//                         name="password"
//                         placeholder="Enter your password"
//                         value={loginInfo.password}
//                     />
//                 </div>
//                 <button type="submit">Login</button>
//                 <span>
//                     Dont have an account ? <Link to="/signup">Signup</Link>
//                 </span>
//             </form>
//             <ToastContainer position="top-right" />
//         </div>
//     );
// }

// export default LoginPage;

//----------------------------------------------------------------------------//
//Changes made from claude's version:--------------------------------------------//

import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { handleError, handleSuccess } from "../../util.js";
import { ToastContainer } from "react-toastify";
import "./Signup.css";
import { BACKEND_URL, DASHBOARD_URL } from "../../config";

function LoginPage() {
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const newLoginInfo = { ...loginInfo, [name]: value };
        setLoginInfo(newLoginInfo);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        // console.log("Form submitted"); // Add this line for debugging
        const { email, password } = loginInfo;
        // console.log("Login data:", { email, password }); // Add this line for debugging

        if (!email || !password) {
            handleError("Email and password are required");
            return;
        }
        try {
            // console.log("Making API call to:", `${BACKEND_URL}/auth/login`); // Add this line for debugging
            const url = `${BACKEND_URL}/auth/login`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginInfo),
                credentials: "include", // include cookies in the request
            });
            // console.log("Response received:", response.status); // Add this line for debugging

            const result = await response.json();
            // console.log("Result:", result); // Add this line for debugging
            const {
                success,
                message,
                jwtToken,
                email: userEmail,
                name,
            } = result;

            if (success) {
                // FIXED: Store JWT token and user info in localStorage
                localStorage.setItem("authToken", jwtToken);
                localStorage.setItem("userEmail", userEmail);
                localStorage.setItem("userName", name);

                handleSuccess(message || "Login successful");

                // Redirect to the separate dashboard app
                // Pass token to dashboard via URL parameter
                setTimeout(() => {
                    window.location.href = `${DASHBOARD_URL}?token=${jwtToken}&email=${userEmail}&name=${name}`;
                }, 1000);
            } else {
                handleError(message || "Invalid Credentials");
            }
            // console.log(result);
        } catch (err) {
            console.error(err);
            handleError("Server error, please try again");
        }
    };

    return (
        <div className="container-signup">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        onChange={handleChange}
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={loginInfo.email}
                        autoFocus
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
                        value={loginInfo.password}
                    />
                </div>
                <button type="submit">Login</button>
                <span>
                    Dont have an account ? <Link to="/signup">Signup</Link>
                </span>
            </form>
            <ToastContainer position="top-right" />
        </div>
    );
}

export default LoginPage;

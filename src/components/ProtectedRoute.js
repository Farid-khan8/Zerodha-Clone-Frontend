import React from "react";
import { Navigate } from "react-router-dom";

// This component wraps any route that requires authentication
const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token"); // Check if user is logged in

    if (!token) {
        // If not logged in, redirect to login page
        return <Navigate to="/login" replace />;
    }

    // If logged in, render the protected component
    return children;
};

export default ProtectedRoute;

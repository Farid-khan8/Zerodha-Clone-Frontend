import React from "react";
import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    Outlet,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

// Landing page components
import HomePage from "./landing_page/home/HomePage";
import SignupPage from "./landing_page/signup/Signup";
import LoginPage from "./landing_page/signup/Login";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";

import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";

// ProtectedRoute for frontend (optional, for frontend-protected pages)
import ProtectedRoute from "./components/ProtectedRoute";

const PublicLayout = () => (
    <>
        <Navbar />
        <Outlet /> {/* Nested route content goes here */}
        <Footer />
    </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                {/* Public routes wrapped in PublicLayout */}
                <Route element={<PublicLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/product" element={<ProductPage />} />
                    <Route path="/pricing" element={<PricingPage />} />
                    <Route path="/support" element={<SupportPage />} />
                </Route>

                {/* Catch all unmatched routes */}
                <Route path="*" element={<NotFound />} />
            </Routes>
            <ToastContainer position="top-right" />
        </BrowserRouter>
    </React.StrictMode>
);

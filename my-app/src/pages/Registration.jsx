import React from "react";
import { Link } from "react-router-dom";
import "../styles/registration.css"

export default function Registration() {
    return (
        <div className="register">
            <div className="register-container">
                <h1>Welcome onboard!</h1>
                <input type="text" name="name" id="name" placeholder="Enter your name" />
                <input type="text" name="org-name" id="org-name" placeholder="Enter organization name" />
                <input type="email" name="email" id="email" placeholder="Enter email" />
                <input type="password" name="password" id="password" placeholder="Enter password" />
                <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm password" />
                
                <Link to="/dashboard">
                        <button>REGISTER</button>
                </Link>
                <p>Have an account? <a href="/register">Sign in</a></p>
            </div>
        </div>
    )
}
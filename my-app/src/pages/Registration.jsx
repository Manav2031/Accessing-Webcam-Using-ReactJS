import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as PoweredBy} from "../static/Component 11.svg"
import "../styles/registration.css"

export default function Registration() {
    return (
        <>
        <div className="register">
            <div className="register-container">
                <h1>Welcome onboard!</h1>
                <input type="text" name="name" id="name" placeholder="Enter your name" />
                <input type="text" name="org-name" id="org-name" placeholder="Enter organization name" />
                <input type="email" name="email" id="email" placeholder="Enter email" />
                <input type="password" name="password" id="password" placeholder="Enter password" />
                <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm password" />
                
                <Link to="/login">
                        <button>REGISTER</button>
                </Link>
                <p>Have an account? <Link to="/login">Sign in</Link></p>
            </div>
        </div>
        <PoweredBy className="poweredby"/>
        </>
    )
}
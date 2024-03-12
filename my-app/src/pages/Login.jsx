import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LoginScreen } from "../static/undraw_login_re_4vu2 1login_screen_clipart.svg"
import '../styles/login.css'

export default function Login() {

  return (
    <div className="login">
      <div className="login-container">
        <h1>Welcome back!</h1>
        <LoginScreen />
        <input type="email" name="email" id="email" placeholder="Enter email" />
        <input type="password" name="password" id="password" placeholder="Enter password" />
        <Link to="/">Forgot Password?</Link>
        <Link to="/dashboard">
                <button>LOGIN</button>
        </Link>
        <p>Don't have an account? <Link to="/register">Sign up</Link></p>
      </div>
    </div>
  )
}
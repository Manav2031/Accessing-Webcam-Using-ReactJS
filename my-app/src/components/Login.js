import React from "react";
import {Link} from "react-router-dom";
import '../styles/login.css'

export default function Login() {



  return (
    <div className="login">
      <div className="login-container">
        <h2>Login</h2>
        <label>Email : </label>
        <input type="email" placeholder="Email" name="email" /> <br/><br/>
        <label>Password : </label>
        <input type="password" placeholder="Password" name="password" /> <br/><br/>
        <Link to="/menu"> <button value='Login' name="login"> Login </button> </Link>
      </div>
    </div>
  )
}
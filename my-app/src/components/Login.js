import React from "react";
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
          <button value='Login' name="login"> <a href="/menu"> Login </a> </button>
      </div>
    </div>
  )
}
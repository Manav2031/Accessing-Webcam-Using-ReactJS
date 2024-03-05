import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/login.css'
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
    const { loginWithRedirect , isAuthenticated } = useAuth0();
    const navigate = useNavigate()

    if(isAuthenticated)
    {
        navigate("/success")
    }

  return (
    <div className="login">
    <div className="login-container">
    <h1>Login</h1>
      <button onClick={() => loginWithRedirect() }>
        Login
      </button>
  </div>
  </div>
  )
}

export default Login
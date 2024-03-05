import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
     domain="dev-ovlz46pzx7j8dgbd.us.auth0.com"
     clientId="R4UZybGpkM17z2wxG4R7EppAWxuFBVSE"
     authorizationParams={{
       redirect_uri: window.location.origin
     }}
     >
    <App />
    </Auth0Provider>
);

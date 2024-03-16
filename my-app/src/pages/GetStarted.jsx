import React from "react";
import { ReactComponent as WelcomeScreen } from "../static/undraw_web_search_re_efla 1welcome_screen_clipart.svg"
import {ReactComponent as PoweredBy} from "../static/Component 11.svg"
import "../styles/getstarted.css"
import { Link } from "react-router-dom";

export default function GetStarted() {
    

    return (
        <>
        <div className="component9">
                <WelcomeScreen />
            <h1>ManuScan</h1>
            <p>Convert images to text within seconds.</p>
            <Link to="/login">
                <button>GET STARTED</button>
            </Link>
        </div>
        <PoweredBy className="poweredby"/>
        </>
    )
}
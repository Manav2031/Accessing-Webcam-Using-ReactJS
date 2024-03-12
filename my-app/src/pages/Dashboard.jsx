import React from "react";
import "../styles/dashboard.css"
import { Link } from "react-router-dom";
import {ReactComponent as Circle} from "../static/Component 1.svg"
import userImg from "../static/Ellipse 3.png"

export default function Dashboard() {
    return (
        <>
            <Circle style={{ position: 'absolute' }}/>
            <div className="user-container">
                <img src={userImg} alt="User Image"/>
                <h1>User</h1>
            </div>

            <div className="container">
            <Link to="/ocr">
                    <button>OCR ASSET RECOGNITION</button>
            </Link>
            <Link to="/invoice">
                    <button>INVOICE TO EXCEL CONVERTER</button>
            </Link>
            </div>
        </>
    )
}
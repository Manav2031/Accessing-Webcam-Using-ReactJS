import React from "react";
import {Link} from "react-router-dom";
import "../styles/success.css"

export default function Success() {
    
    
    return (
        <div className="success">
            <div className="container">
                <Link to="/ocr">
                    <button>Asset Tracking</button>
                </Link>
                <br/><br/>
                <Link to="/invoice">
                    <button>Invoice Extraction</button>
                </Link>
            </div>
        </div>
    )
}
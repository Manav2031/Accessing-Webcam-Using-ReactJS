import React from "react";
import "../styles/success.css"

export default function Success() {
    
    
    return (
        <div className="success">
            <div className="container">
                <a href="/ocr">
                    <button>Asset Tracking</button>
                </a>
                <br/><br/>
                <a href="/invoice">
                    <button>Invoice Extraction</button>
                </a>
            </div>
        </div>
    )
}
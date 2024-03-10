import { Link } from "react-router-dom"
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Optical Character Recognition</h1>
                </Link>
                {/* <nav>
                    <div>
                        <Link to="/ocr">Asset Tracking</Link>
                        <Link to="/invoice">Invoice Extraction</Link>
                    </div>
                </nav> */}
            </div>
        </header>
    )
}

export default Navbar
import { Link } from "react-router-dom";
import "./Header.css"

export default function Header( ) {
    return (
        <div id="header-bar" className="row">
            <Link to="/"><img src="public/assets/perfectpup.png" alt="Perfect Pup Logo" id="header-logo"/></Link>
            <div id="header-links" className="row">
                <Link to="/"><h4>Home</h4></Link>
                <Link to="/introform"><h4>Find My Perfect Pup</h4></Link>
                <Link><h4>About</h4></Link>
            </div>
        </div>
    )
}
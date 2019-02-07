import React from "react";
import "./style.css";
import { Link } from "react-router-dom";


function Footer() {
    return (
        <div id="myFooter">
            <strong>The Denver Window Cleaning Company LLC<br />
            2230 S. Knox Ct. Denver, CO 80219<br />                
            303-531-5729<br />                    
            jeremy@denverwindowcleaningpro.com</strong><br />
            Copyright&copy; 2019 Jeremy Parra<br />                 
            <Link to="/login"><a>Admin Login</a></Link>
        </div>
    );
}

export default Footer;
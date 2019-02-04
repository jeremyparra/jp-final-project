import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
    return (
        <div id="myNav">
            <ul class="nav">
                <li class="nav-item">
                    <Link
                        to="/"
                        className={
                            window.location.pathname === "/" || window.location.pathname === "/home" || window.location.pathname === "/#"
                                ? "nav-link active"
                                : "nav-link"
                        }
                    >
                        Home
                </Link>
                </li>
                <li class="nav-item">
                    <Link
                        to="/residential"
                        className={
                            window.location.pathname === "/residential"
                                ? "nav-link active"
                                : "nav-link"
                        }
                    >
                        Residential
                </Link>
                </li>
                <li class="nav-item">
                    <Link
                        to="/commercial"
                        className={
                            window.location.pathname === "/commercial"
                                ? "nav-link active"
                                : "nav-link"
                        }
                    >
                        Commercial
                </Link>
                </li>
                <li class="nav-item">
                    <Link
                        to="/other"
                        className={
                            window.location.pathname === "/other"
                                ? "nav-link active"
                                : "nav-link"
                        }
                    >
                        Other Services
                </Link>
                </li>
                <li class="nav-item">
                    <Link
                        to="/contact"
                        className={
                            window.location.pathname === "/contact"
                                ? "nav-link active"
                                : "nav-link"
                        }
                    >
                        Contact
                </Link>
                </li>
            </ul>
        </div>
    );
}

export default Nav;



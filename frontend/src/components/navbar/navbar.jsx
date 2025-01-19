import React, { useState, useContext } from "react";
import "./navbar.css";
import { assets } from "../../assets/frontend_assets/assets";
import { Link } from "react-router-dom";
import { storeContext } from "../../context/storeContext";

const navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home"); // State variable for active menu
    const { getTotalCartAmount } = useContext(storeContext); // Context API for cart amount

    return (
        <div className="navbar">
            <Link to="/">
                <img src={assets.logo} alt="Logo" className="logo" />
            </Link>
            <ul className="navbar-menu">
                <li>
                    <Link
                        to="/"
                        onClick={() => setMenu("home")}
                        className={menu === "home" ? "active" : ""}
                    >
                        home
                    </Link>
                </li>
                <li>
                    <a
                        href="#explore-menu"
                        onClick={() => setMenu("menu")}
                        className={menu === "menu" ? "active" : ""}
                    >
                        menu
                    </a>
                </li>
                <li>
                    <a
                        href="#app-download"
                        onClick={() => setMenu("mobile-app")}
                        className={menu === "mobile-app" ? "active" : ""}
                    >
                        mobile-app
                    </a>
                </li>
                <li>
                    <a
                        href="#footer"
                        onClick={() => setMenu("contact us")}
                        className={menu === "contact us" ? "active" : ""}
                    >
                        contact us
                    </a>
                </li>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="Search Icon" />
                <div className="navbar-search-icon">
                    <Link to="/cart">
                        <img src={assets.basket_icon} alt="Cart Icon" />
                    </Link>
                    {getTotalCartAmount() > 0 && <div className="dot"></div>}
                </div>
                <button onClick={() => setShowLogin(true)}>sign in</button>
            </div>
        </div>
    );
};

export default navbar;

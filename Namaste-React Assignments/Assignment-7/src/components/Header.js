import { LOGO_LINK } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {

    let [loginBtn, setLoginBtn] = useState("Login");

    return (
        <div className="header">
            <div className="logo">
                <img className="logo-img" alt="logo" src={LOGO_LINK} />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link className="nav-link" to="/">Home</Link></li>
                    <li><Link className="nav-link" to="/about">About Us</Link></li>
                    <li><Link className="nav-link" to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {
                        setLoginBtn(loginBtn === "Logout" ? "Login" : "Logout")
                    }}>{loginBtn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
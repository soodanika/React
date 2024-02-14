import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
    let [btn, setBtn] = useState("Login");
    return (
        <div className="header">
            <div className="logo">
                <img className="logo-img" alt="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {
                        setBtn(btn === "Login" ? "Logout" : "Login")
                    }}>{btn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
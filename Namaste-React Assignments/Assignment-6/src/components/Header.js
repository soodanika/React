import { LOGO_LINK } from "../utils/constants";
import { useState } from "react";

const Header = () => {

    let [loginBtn, setLoginBtn] = useState("Login");

    return (
        <div className="header">
            <div className="logo">
                <img className="logo-img" alt="logo" src={LOGO_LINK} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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
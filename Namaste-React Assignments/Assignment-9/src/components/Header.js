import { LOGO_LINK } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {

    let [loginBtn, setLoginBtn] = useState("Login");

    const onlineStatus = useOnlineStatus();

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
                    <li><Link className="nav-link" to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <li className="online-status">Online {onlineStatus ? "🟢" : "🔴"}</li>
                    <button className="login-btn" onClick={() => {
                        setLoginBtn(loginBtn === "Logout" ? "Login" : "Logout")
                    }}>{loginBtn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
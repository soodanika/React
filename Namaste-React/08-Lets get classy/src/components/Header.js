import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    let [btn, setBtn] = useState("Login");

    // console.log("Header rendered")

    //If no dependency array = useEffect called on every render of the component
    //If empty dependency array = useEffect is called on once after initial render
    //If dependency array is [btn] = useEffect will be called on update of btn   
    // useEffect(() => {
    //     console.log('useEffect called')
    // }, [btn])


    return (
        <div className="header">
            <div className="logo">
                <img className="logo-img" alt="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
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
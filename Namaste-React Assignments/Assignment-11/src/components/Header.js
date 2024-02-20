import { LOGO_LINK } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";

const Header = () => {

    let [loginBtn, setLoginBtn] = useState("Login");

    // const user = useContext(UserContext);

    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between border-2 border-solid border-my-yellow shadow-lg">
            <div className="logo">
                <img className="w-[150px] h-[100px]" alt="logo" src={LOGO_LINK} />
            </div>
            <div className="p-[10px]">
                <ul className="flex text-my-brown">
                    <li className="p-[20px] text-[20px] list-none cursor-default">Online {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="p-[20px] text-[20px] list-none hover:text-my-yellow"><Link className="nav-link" to="/">Home</Link></li>
                    <li className="p-[20px] text-[20px] list-none hover:text-my-yellow"><Link className="nav-link" to="/about">About Us</Link></li>
                    <li className="p-[20px] text-[20px] list-none hover:text-my-yellow"><Link className="nav-link" to="/contact">Contact Us</Link></li>
                    <li className="p-[20px] text-[20px] list-none hover:text-my-yellow"><Link className="nav-link" to="/grocery">Grocery</Link></li>
                    <li className="p-[20px] text-[20px] list-none hover:text-my-yellow">Cart</li>
                    <button className="p-[20px] text-[20px] list-none hover:text-my-yellow" onClick={() => {
                        setLoginBtn(loginBtn === "Logout" ? "Login" : "Logout")
                    }}>{loginBtn}</button>
                    {/* <li className="p-[20px] text-[20px] list-none cursor-default">{user.loggedInUser}</li> */}
                </ul>
            </div>
        </div>
    )
}

export default Header;
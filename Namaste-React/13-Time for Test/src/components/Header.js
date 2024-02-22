import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";

const Header = () => {
    let [btn, setBtn] = useState("Login");

    const items = useSelector((store) => store.cart.items)


    return (
        <div className="flex justify-between border-2 border-solid border-custom-yellow shadow-lg">
            <div className="logo">
                <img className="w-[150px] h-[100px]" alt="logo" src={LOGO_URL} />
            </div>
            <div className="p-[10px]">
                <ul className="flex">
                    <li className="p-[20px] list-none text-lg text-custom-brown hover:text-custom-yellow"><Link to="/">Home</Link></li>
                    <li className="p-[20px] list-none text-lg  text-custom-brown hover:text-custom-yellow"><Link to="/about">About Us</Link></li>
                    <li className="p-[20px] list-none text-lg  text-custom-brown hover:text-custom-yellow"><Link to="/contact">Contact Us</Link></li>
                    <li className="p-[20px] list-none text-lg  text-custom-brown hover:text-custom-yellow"><Link to="/grocery">Grocery Store</Link></li>
                    <li className="p-[20px] list-none text-lg  text-custom-brown hover:text-custom-yellow"><Link to="/cart">Cart ({items.length} items)</Link></li>
                    <button className="px-[15px] cursor-pointer text-lg  text-custom-brown hover:text-custom-yellow" onClick={() => {
                        setBtn(btn === "Login" ? "Logout" : "Login")
                    }}>{btn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
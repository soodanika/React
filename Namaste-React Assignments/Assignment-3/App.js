import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <>
            <div id="header">
                <div id="logo">
                    <img className="logo-img" src="https://png.pngtree.com/template/20191024/ourmid/pngtree-food-delivery-logo-design-fast-delivery-service-sign-image_323015.jpg" alt="Logo" />
                </div>
                <div id="search-bar"><input className="search-field" type="text"></input>
                    <input className="submit-btn" type="submit" value="Go!"></input></div>
                <div id="user"><img className="user-img" src="https://www.shutterstock.com/image-vector/user-icon-trendy-flat-style-600nw-418179856.jpg" /></div>
            </div>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />)
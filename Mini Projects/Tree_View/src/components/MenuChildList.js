import { useState } from "react";
import MenuList from "./MenuList";

const MenuChildList = ({ item = {} }) => {

    let [display, setDisplay] = useState(false);

    const handleClick = () => {
        setDisplay(!display);
    }

    return (
        <li>
            <div>
                <p>{item.label} <span style={{ cursor: "pointer" }} onClick={handleClick}>{item.children && item.children.length > 0 ? (display ? "-" : "+") : null}</span></p>
            </div>

            {item.children && item.children.length && display ? (
                <MenuList list={item.children} />
            ) : null}
        </li>
    )
}

export default MenuChildList;

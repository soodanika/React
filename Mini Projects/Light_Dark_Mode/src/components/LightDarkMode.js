import { useState } from "react";
import useTheme from "./useTheme";

const LightDarkMode = () => {
    let [theme, setTheme] = useTheme("theme", "dark");

    const handleClick = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <div className="main-container" data-theme={theme}>
            <div className="container">
                <p>Hello World!</p>
                <button onClick={handleClick}>Change Theme</button>
            </div>

        </div>
    )
}

export default LightDarkMode;
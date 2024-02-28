import { useState } from "react";


const ColorGenerator = () => {

    let [hexColor, setHexColor] = useState("");
    let [rgbColor, setRgbColor] = useState("")
    let [color, setColor] = useState("#000000")


    const randomColor = (length) => {
        const random = Math.floor(Math.random() * length)
        return random;
    }

    const handleHex = () => {
        let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hColor = "#"

        for (let i = 0; i < 6; i++) {
            //console.log(hColor)
            hColor += hex[randomColor(hex.length)]
        }
        setColor(hColor)
    }

    const handleRgb = () => {
        const r = randomColor(256);
        const g = randomColor(256);
        const b = randomColor(256);
        setColor(`rgb(${r},${g},${b})`)
    }

    return (
        <div style={{ width: "100vw", height: "100vh", backgroundColor: color }}>
            <div className="btn-container">
                <button className="btn" onClick={handleHex}>Generate HEX color</button>
                <button className="btn" onClick={handleRgb}>Generate RGB color</button>
                {/* <button className="btn" onClick={handleHex}>Generate Random color</button> */}
            </div>
            <div>
                <p style={{ fontSize: "50px", color: "white", height: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}>COLOR</p>
                <p style={{ fontSize: "40px", color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>{color}</p>
            </div>

        </div>
    )
}

export default ColorGenerator;
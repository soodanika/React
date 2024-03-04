import { useState } from "react";
import QRCode from "react-qr-code";

const QRGenerator = () => {
    let [text, setText] = useState("")
    let [qrValue, setQRValue] = useState("");

    const handleClick = () => {
        setQRValue(text);
        setText("")
    }

    return (
        <div >
            <h1>QR Code Generator</h1>
            <div>
                <input type="text" value={text} name="qr-code" placeholder="Enter the text..." onChange={(e) => setText(e.target.value)} />
                <button onClick={handleClick}>Generate</button>
            </div>
            <div>
                <QRCode id="qr-code-value" value={qrValue} size={400} />
            </div>

        </div >
    )
}

export default QRGenerator;
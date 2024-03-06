import ReactDOM from "react-dom/client";
import LightDarkMode from "./components/LightDarkMode";

const Applayout = () => {
    return (
        <LightDarkMode />
    )
}


const rootEle = document.getElementById("root");
const root = ReactDOM.createRoot(rootEle);

root.render(<Applayout />)
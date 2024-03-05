import ReactDOM from "react-dom/client";
import Tabs from "./components/Tabs";

const Applayout = () => {
    return (
        <Tabs />
    )
}


const rootEle = document.getElementById("root");
const root = ReactDOM.createRoot(rootEle);

root.render(<Tabs />)
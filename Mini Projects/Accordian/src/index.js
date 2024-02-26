import ReactDOM from "react-dom/client";
import Accordian from "./components/Accordian"

const AppLayout = () => {
    return (
        <Accordian />
    )
}

const rootEle = document.getElementById("root");
const root = ReactDOM.createRoot(rootEle);

root.render(<AppLayout />)
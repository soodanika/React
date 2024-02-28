import ReactDOM from "react-dom/client";
import ColorGenerator from "./components/ColorGenerator"

const AppLayout = () => {
    return (
        <ColorGenerator />
    )
}

const rootEle = document.getElementById("root");
const root = ReactDOM.createRoot(rootEle);

root.render(<AppLayout />)
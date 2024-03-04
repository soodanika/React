import ReactDOM from "react-dom/client";
import QRGenerator from "./components/QRGenerator";

const AppLayout = () => {
    return (<QRGenerator />)
}


const rootEle = document.getElementById("root");
const root = ReactDOM.createRoot(rootEle);

root.render(<AppLayout />);
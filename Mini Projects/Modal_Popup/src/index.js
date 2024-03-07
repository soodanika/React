import ReactDOM from "react-dom/client";
import ModalPopup from "./components/ModalPopup";

const AppLayout = () => {
    return (<ModalPopup />)
}


const rootEle = document.getElementById("root");
const root = ReactDOM.createRoot(rootEle);

root.render(<AppLayout />);
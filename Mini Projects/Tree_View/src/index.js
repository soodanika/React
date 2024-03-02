import ReactDOM from "react-dom/client";
import TreeView from "./components/TreeView";

const AppLayout = () => {
    return (<TreeView />)
}


const rootEle = document.getElementById("root");
const root = ReactDOM.createRoot(rootEle);

root.render(<AppLayout />);
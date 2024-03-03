import ReactDOM from "react-dom/client";
import LoadMore from "./components/LoadMore";

const Applayout = () => {
    return (
        <LoadMore />
    )
}


const rootEle = document.getElementById("root");
const root = ReactDOM.createRoot(rootEle);

root.render(<Applayout />)
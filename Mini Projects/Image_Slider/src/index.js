import ReactDOM from "react-dom/client";
import ImageSlider from "./components/ImageSlider";

const AppLayout = () => {
    return (<ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"4"}
    />)
}


const rootEle = document.getElementById("root");
const root = ReactDOM.createRoot(rootEle);

root.render(<AppLayout />)
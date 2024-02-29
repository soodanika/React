import ReactDOM from "react-dom/client";
import StarRating from "./components/StarRating";


const AppLayout = () => {
    return (
        <StarRating circleLength="5" />
    )
}


const rootEle = document.getElementById("root");
const root = ReactDOM.createRoot(rootEle);

root.render(<AppLayout />)
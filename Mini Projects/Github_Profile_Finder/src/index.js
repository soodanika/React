import ReactDOM from "react-dom/client";
import GithubProfile from "./components/GithubProfile";

const AppLayout = () => {
    return (<GithubProfile />)
}


const rootEle = document.getElementById("root");
const root = ReactDOM.createRoot(rootEle);

root.render(<AppLayout />);
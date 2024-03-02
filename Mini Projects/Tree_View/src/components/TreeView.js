import MenuList from "./MenuList";
import data from "../utils/data";

const TreeView = () => {
    return (
        <div>
            <MenuList list={data} />
        </div>
    )
}

export default TreeView;
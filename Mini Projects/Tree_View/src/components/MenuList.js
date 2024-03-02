import MenuChildList from "./MenuChildList";

const MenuList = ({ list = [] }) => {
    return (
        <ul className="menu-list-container">
            {list && list.length
                ? list.map((listItem, index) => {
                    return (<MenuChildList key={index} item={listItem} />)
                })
                : null}
        </ul>
    )
}

export default MenuList;

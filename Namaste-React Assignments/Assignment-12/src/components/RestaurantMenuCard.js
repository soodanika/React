import RestaurantMenuItems from "./RestaurantMenuItems";

const RestaurantMenuCard = ({ index, category, showItems, setShowIndex }) => {
    console.log(index)
    const handleClick = () => {
        setShowIndex();
    }
    return (
        <div>
            <div className="m-5 p-2 bg-my-light-yellow rounded-md shadow-md cursor-pointer" onClick={handleClick}>
                <div className="flex justify-between m-2">
                    <span className="font-bold text-lg">{category?.title} ({category?.itemCards?.length})</span><span>{showItems ? "🔼" : "🔽"}</span>
                </div>
                {showItems && <RestaurantMenuItems data={category?.itemCards} />}
            </div>
        </div>
    )
}

export default RestaurantMenuCard;
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenuData from "../utils/useRestaurantMenuData";
import RestaurantMenuCard from "./RestaurantMenuCard";
import { useState } from "react";

const RestaurantMenu = () => {

    let [showIndex, setShowIndex] = useState(null);

    let itemCards;
    let { resId } = useParams();

    let resList = useRestaurantMenuData(resId);

    if (resList === null) {
        return <Shimmer />
    }

    if (resList === "An error occured ☹") {
        return <h1 className="error">An error occured ☹</h1>
    }

    const { name, cuisines, costForTwoMessage } = resList.data.cards[0].card.card.info;

    let list = resList.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;

    for (let i = 1; i < list.length; i++) {
        const title = String(list[i].card.card.title);
        if (title.toLowerCase().includes("recommended")) {
            itemCards = list[i].card.card.itemCards;
        }
    }

    const categories = list.filter((category) => category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")


    return (
        <div className="text-my-brown m-10">
            <div className="text-center font-bold text-[30px] m-3">{name}</div>
            <div className="text-center font-semibold">{cuisines.join(", ")}</div>
            <div className="text-center font-semibold">{costForTwoMessage}</div>

            <div className="w-[50%] m-[auto]">
                {categories.map((category, index) =>
                    <RestaurantMenuCard key={category?.card?.card?.title} category={category?.card?.card} showItems={index === showIndex ? true : false} setShowIndex={() => setShowIndex(index)} />
                )}
            </div>
        </div>
    )


}

export default RestaurantMenu;
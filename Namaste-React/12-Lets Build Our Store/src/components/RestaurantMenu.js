import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantData from "../utils/useRestaurantData";
import RestaurantMenuCard from "./RestaurantMenuCard";
import { useState } from "react";

const RestaurantMenu = () => {

    let [showIndex, setShowIndex] = useState(null);

    const { resId } = useParams();

    const resList = useRestaurantData(resId);

    if (resList === null) {

        return (<Shimmer />)
    }

    const { name, cuisines, costForTwoMessage } = resList?.data?.cards[2]?.card?.card?.info;

    const categories = resList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category) => category.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    return (
        <div className="text-center text-custom-brown">
            <p className="text-2xl my-6 font-bold">{name}</p>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {categories.map((category, index) =>
                <RestaurantMenuCard key={category?.card?.card?.title} data={category?.card?.card} showItems={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex((previndex) => previndex === index ? null : index)} />
            )}
        </div>
    )
}

export default RestaurantMenu;
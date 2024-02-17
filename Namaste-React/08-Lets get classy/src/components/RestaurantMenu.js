import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

    const { resId } = useParams();

    let [resList, setResList] = useState(null);

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResList(json);
    }

    useEffect(() => {

        fetchData();
    }, [])


    if (resList === null) {

        return (<Shimmer />)
    }

    const { name, cuisines, costForTwoMessage } = resList?.data?.cards[0]?.card?.card?.info;

    const resInfo = resList?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

    return (<div className="restaurant-menu">
        <h1>{name}</h1>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwoMessage}</h4>
        <h3>Menu</h3>
        <ul>
            {resInfo.map((res) => <li key={res.card.info.id}>{res.card.info.name} - ₹{res.card.info.price / 100}</li>)}
        </ul>

    </div>)
}

export default RestaurantMenu;
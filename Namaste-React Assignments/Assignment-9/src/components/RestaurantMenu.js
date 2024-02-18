import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";


const RestaurantMenu = () => {

    let itemCards;
    let [resList, setResList] = useState(null);
    let [error, setError] = useState("");
    let { resId } = useParams();

    const fetchData = async () => {
        try {
            const data = await fetch(MENU_API + resId);
            const json = await data.json();
            console.log("fetch called")
            setResList(json)
        }
        catch (err) {
            setError("An error occured ☹")
        }
    }

    useEffect(() => {
        console.log("use effect called")
        fetchData();
    }, [])


    if (resList === null) {
        return <Shimmer />
    }

    const { name, cuisines, costForTwoMessage } = resList.data.cards[0].card.card.info;

    console.log(resList.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards);

    let list = resList.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;

    for (let i = 1; i < list.length; i++) {
        const title = String(list[i].card.card.title);
        if (title.toLowerCase().includes("recommended")) {
            itemCards = list[i].card.card.itemCards;
        }
    }

    console.log(itemCards)



    return error ? <h1>{error}</h1> : (
        <div className="restaurant-menu-container">
            <div className="restaurant-menu-heading">
                <h1>{name}</h1>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{costForTwoMessage}</h4>
                <h3>Menu</h3>
            </div>
            <div className="restaurant-menu-subheading">
                <ul>
                    {itemCards.map((res) =>
                        <li key={res.card.info.id}>
                            {res.card.info.name} - ₹{res.card.info.price / 100 || res.card.info.defaultPrice / 100}
                        </li>
                    )}
                </ul>
            </div>
        </div>)
}

export default RestaurantMenu;
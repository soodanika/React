import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenuData from "../utils/useRestaurantMenuData";


const RestaurantMenu = () => {

    let itemCards;
    let { resId } = useParams();

    let resList = useRestaurantMenuData(resId);
    console.log(resList);

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



    return (
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
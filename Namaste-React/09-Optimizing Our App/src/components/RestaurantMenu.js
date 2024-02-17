import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantData from "../utils/useRestaurantData";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const resList = useRestaurantData(resId);

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
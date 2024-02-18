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

    return (<div className="bg-custom-light-yellow w-[50%] absolute top-[50%] translate-x-[50%] translate-y-[-20%] text-custom-brown border-2 border-solid border-custom-yellow shadow-lg">
        <h1 className="font-medium text-4xl text-center my-4">{name}</h1>
        <h4 className=" font-medium text-center">{cuisines.join(", ")}</h4>
        <h4 className=" font-medium text-center">{costForTwoMessage}</h4>
        <h3 className="font-medium text-xl px-5">Menu</h3>
        <ul className="px-5 py-4">
            {resInfo.map((res) => <li key={res.card.info.id}>{res.card.info.name} - ₹{res.card.info.price / 100}</li>)}
        </ul>

    </div>)
}

export default RestaurantMenu;
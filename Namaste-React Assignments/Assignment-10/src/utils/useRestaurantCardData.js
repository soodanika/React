import { useState, useEffect } from "react";
import { RES_CARD_API } from "./constants";

const useRestaurantCardData = () => {
    let [resList, setResList] = useState([]);
    let [error, setError] = useState("");

    const fetchData = async () => {
        try {
            let data = await fetch(RES_CARD_API);
            let json = await data.json();
            const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            setResList(restaurants)
        }
        catch (err) {
            setError("An error occured ☹")
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return error ? error : resList;
}

export default useRestaurantCardData;
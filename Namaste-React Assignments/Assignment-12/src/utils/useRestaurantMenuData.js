import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenuData = (resId) => {
    let [resList, setResList] = useState(null);
    let [error, setError] = useState("");

    const fetchData = async () => {
        try {
            const data = await fetch(MENU_API + resId);
            const json = await data.json();
            setResList(json)
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

export default useRestaurantMenuData;
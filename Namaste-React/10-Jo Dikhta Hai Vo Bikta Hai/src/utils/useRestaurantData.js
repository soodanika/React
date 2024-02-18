import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantData = (resId) => {

    let [resList, setResList] = useState(null);

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResList(json);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return resList;
}
export default useRestaurantData;
import RestaurantCard, { RestaurantCardPromoted } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantCardData from "../utils/useRestaurantCardData";

const Body = () => {
    let [filteredList, setFilteredList] = useState([])
    let [searchText, setSearchText] = useState("");

    const resList = useRestaurantCardData();

    useEffect(() => {
        setFilteredList(resList);
    }, [resList]);

    if (resList === "An error occured ☹") {
        return <h1 className="error">An error occured ☹</h1>
    }

    const search = () => {
        let filteredResList = resList.filter((res) => {
            return res.info.name.toLowerCase().includes(searchText.toLowerCase())
        })
        setFilteredList(filteredResList);
    }

    const RestaurantPromoted = RestaurantCardPromoted(RestaurantCard);

    return (filteredList.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="m-[20px] flex flex-row justify-center">
                <input className="w-[200px] h-[30px] p-[10px] mx-[15px] border-2 border-solid border-my-yellow rounded text-my-brown focus:border-2 focus:border-solid focus:border-my-yellow" type="text" placeholder="Search..." value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }} />
                <input className="cursor-pointer px-[10px] py-[5px]] w-[60px] bg-my-light-yellow border-solid border-2 border-my-light-yellow rounded font-medium text-my-brown hover:bg-my-yellow hover:text-my-light-yellow hover:border-my-yellow" type="submit" value="Go" onClick={search} />
            </div>
            <div className="m-[10px] flex flex-row flex-wrap gap-[3px]">
                {
                    filteredList.map((res) => <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
                        {res.info.aggregatedDiscountInfoV3 ? <RestaurantPromoted data={res} /> : <RestaurantCard data={res} />}
                    </Link>)
                }
            </div>
        </div>
    ))
}

export default Body;
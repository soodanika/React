import ResturandCard from "./RestaurantCard";
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

    return (filteredList.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="search-container">
                <input className="search-box" type="text" placeholder="Search..." value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }} />
                <input className="search-btn" type="submit" value="Go" onClick={search} />
            </div>
            <div className="res-container">
                {
                    filteredList.map((res) => <Link style={{ textDecoration: 'none !important' }} key={res.info.id} to={"/restaurants/" + res.info.id}><ResturandCard data={res} /></Link>)
                }
            </div>
        </div>
    ))
}

export default Body;
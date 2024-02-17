import ResturandCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RES_LIST } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    let [resList, setResList] = useState([]);
    let [filteredResList, setFilteredResList] = useState([]);
    let [searchText, setSearchText] = useState("");
    let [error, setError] = useState("");

    const fetchData = async () => {
        try {
            const data = await fetch(RES_LIST);
            const jsonData = await data.json();
            setResList(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilteredResList(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
        catch (err) {
            setError("An Error Occured ☹")
        }
    }

    // 2 arguments - callback function & dependency array
    useEffect(() => {
        fetchData();
    }, [])

    const topRatedRes = () => {
        let filteredResList = resList.filter((res) => res.info.avgRating > 4.4)
        console.log("Clicked", filteredResList)
        setFilteredResList(filteredResList)
    }

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return (
            <div>
                <h1>🔴 You are offline!</h1>
                <h3>Please try after sometime.</h3>
            </div>
        )
    }

    return error ? <h1 className="error">{error}</h1> : (filteredResList.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="quick-access">
                <div className="search-container">
                    <input type="text" placeholder="Search..." className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />
                    <button className="search-btn" onClick={() => {
                        let searchRes = resList.filter((res) => {
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        })
                        setFilteredResList(searchRes);
                    }}>Search</button>
                </div>
                <div className="top-rated-filter">
                    <button className="top-rated-btn" onClick={topRatedRes}>Top Rated Restaurants</button>
                </div>
            </div>
            <div className="res-container">
                {
                    filteredResList.map((res) => <Link key={res.info.id} to={"restaurants/" + res.info.id}><ResturandCard data={res} /></Link>)
                }
            </div>
        </div>
    ))
}

export default Body;
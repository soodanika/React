import ResturandCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    let [resList, setResList] = useState([]);
    let [filteredResList, setFilteredResList] = useState([]);
    let [searchText, setSearchText] = useState("");
    let [error, setError] = useState("");

    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
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
        setResList(filteredResList)
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
                    filteredResList.map((res) => <ResturandCard key={res.info.id} data={res} />)
                }
            </div>
        </div>
    ))
}

export default Body;
//import resData from "../utils/mockData";
import ResturandCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    let [resList, setResList] = useState([]);
    let [filteredList, setFilteredList] = useState([])
    let [searchText, setSearchText] = useState("");
    let [error, setError] = useState("")

    const fetchData = async () => {
        try {
            let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            let json = await data.json();
            //console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
            setResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
        catch (err) {
            //console.log("Error in API", err);
            setError("An error occured in the API ☹")
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    //console.log("Body rendered")


    const search = (e) => {
        let filteredResList = resList.filter((res) => {
            return res.info.name.toLowerCase().includes(searchText.toLowerCase())
        })
        setFilteredList(filteredResList);
    }

    console.log(useState())

    return error ? <h1 className="error">{error}</h1> : (filteredList.length === 0 ? <Shimmer /> : (
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
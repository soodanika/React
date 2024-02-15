import resData from "../utils/mockData";
import ResturandCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
    let [resList, setResList] = useState(resData[0].card.card.gridElements.infoWithStyle.restaurants);
    let [filteredList, setFilteredList] = useState(resData[0].card.card.gridElements.infoWithStyle.restaurants)
    let [searchText, setSearchText] = useState("");


    const search = (e) => {
        let filteredResList = resList.filter((res) => {
            return res.info.name.toLowerCase().includes(searchText.toLowerCase())
        })
        setFilteredList(filteredResList);
    }

    return (
        <div className="body">
            <div className="search-container">
                <input className="search-box" type="text" placeholder="Search..." value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }} />
                <input className="search-btn" type="submit" value="Go" onClick={search} />
            </div>
            <div className="res-container">
                {
                    filteredList.map((res) => <ResturandCard key={res.info.id} data={res} />)
                }
            </div>
        </div>
    )
}

export default Body;
import resData from "../utils/mockData";
import ResturandCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {

    //Normal JS variable
    //let resList = resData[0].card.card.gridElements.infoWithStyle.restaurants;

    //Normal State variable
    let [resList, setListRes] = useState(resData[0].card.card.gridElements.infoWithStyle.restaurants);

    const topRatedRes = () => {
        let filteredResList = resList.filter((res) => res.info.avgRating > 4.4)
        setListRes(filteredResList)
        //console.log(resList)
    }

    console.log(resList)

    return (
        <div className="body">
            <div className="search-container">Search</div>
            <div className="top-rated-filter">
                <button className="top-rated-btn" onClick={topRatedRes}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    resList.map((res) => <ResturandCard key={res.info.id} data={res} />)
                }
            </div>
        </div>
    )
}

export default Body;
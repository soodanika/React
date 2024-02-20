import ResturandCard, { withPrmomotedLabel } from "./RestaurantCard";
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

    const ResturandCardPromoted = withPrmomotedLabel(ResturandCard);

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

    useEffect(() => {
        fetchData();
    }, [])

    const topRatedRes = () => {
        let filteredResList = resList.filter((res) => res.info.avgRating > 4.4)
        // console.log("Clicked", filteredResList)
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
    //console.log("resList", resList)
    return error ? <h1 className="error">{error}</h1> : (filteredResList.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="quick-access">
                <div className="m-[10px] flex justify-center">
                    <input type="text" placeholder="Search..." className="w-lg h-[10px] px-1 py-3 my-[15px] border-2 border-solid border-custom-yellow rounded-lg" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />
                    <button className="cursor-pointer px-1.5 bg-custom-light-yellow border border-solid border-custom-light-yellow rounded-lg h-8.5 m-3 hover:border-2 hover:border-solid hover:border-custom-yellow hover:rounded  text-custom-brown hover:text-custom-yellow" onClick={() => {
                        let searchRes = resList.filter((res) => {
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        })
                        setFilteredResList(searchRes);
                    }}>Search</button>
                </div>
                <div className=" m-[10px] flex justify-center">
                    <button className="cursor-pointer border border-solid border-custom-light-yellow rounded-md p-2 bg-custom-light-yellow hover:border-2 hover:border-solid hover:border-custom-yellow  text-custom-brown hover:text-custom-yellow" onClick={topRatedRes}>Top Rated Restaurants</button>
                </div>
            </div>
            <div className="my-10 mx-20 gap-10 flex flex-row flex-wrap">
                {
                    filteredResList.map((res) => <Link key={res.info.id} to={"restaurants/" + res.info.id}>
                        {/* if res is promoted add discount label */}
                        {res.info.aggregatedDiscountInfoV3 ? <ResturandCardPromoted data={res} s /> : <ResturandCard data={res} />}
                        {/* <ResturandCard data={res} /> */}
                    </Link>)
                }
            </div>
        </div>
    ))
}

export default Body;
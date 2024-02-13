import resData from "../utils/mockData";
import ResturandCard from "./RestaurantCard";

const Body = () => {
    return (
        <div className="body">
            <div className="search-container">Search</div>
            <div className="res-container">
                {
                    resData[0].card.card.gridElements.infoWithStyle.restaurants.map((res) => <ResturandCard key={res.info.id} data={res} />)
                }
            </div>
        </div>
    )
}

export default Body;
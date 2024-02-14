import resData from "../utils/mockData";
import ResturandCard from "./RestaurantCard";

const Body = () => {

    const search = (e) => {
        console.log("clicked", e)
    }

    return (
        <div className="body">
            <div className="search-container">
                <input className="search-box" type="text" placeholder="Search..." />
                <input className="search-btn" type="submit" value="Go" onClick={search} />
            </div>
            <div className="res-container">
                {
                    resData[0].card.card.gridElements.infoWithStyle.restaurants.map((res) => <ResturandCard key={res.info.id} data={res} />)
                }
            </div>
        </div>
    )
}

export default Body;
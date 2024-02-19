import { useState } from "react";
import RestaurantMenuItems from "./RestaurantMenuItems";

const RestaurantMenuCard = ({ data, showItems, setShowIndex }) => {

    const handleClick = () => {
        setShowIndex();
    }

    return (<div>

        {/* Header */}
        <div className="cursor-pointer w-6/12 shadow-lg p-4 mx-auto my-9 bg-custom-light-yellow text-custom-brown  rounded-md" onClick={handleClick}>
            <div className="flex justify-between">
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span><span>{showItems ? "🔼" : "🔽"}</span>
            </div>
            {/* Body */}
            {showItems && <RestaurantMenuItems items={data.itemCards} />}
        </div>
    </div>)
}

export default RestaurantMenuCard;
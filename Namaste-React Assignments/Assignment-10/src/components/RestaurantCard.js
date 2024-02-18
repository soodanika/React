import { CDN_LINK } from "../utils/constants";

const ResturandCard = (props) => {
    const { data } = props;
    const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } = data?.info;
    return (
        <div className="w-[200px] p-[5px] m-[15px] h-[90%] bg-my-light-yellow text-my-brown shadow-lg rounded-lg hover:border-2 hover:border-solid hover:border-my-yellow hover:cursor-pointer">
            <img className="w-[100%] h-[150px] rounded-lg" alt="res-logo" src={CDN_LINK + cloudinaryImageId} />
            <h3 className="font-bold text-center m-2">{name}</h3>
            <h4 className="p-2">{cuisines.join(", ")}</h4>
            <h4 className="p-2">{avgRating} ⭐</h4>
            <h4 className="p-2">{sla.slaString}</h4>
            <h4 className="p-2 mb-3">{costForTwo}</h4>
        </div>
    )
}

export default ResturandCard;
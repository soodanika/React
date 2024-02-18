import { CDN_URL } from "../utils/constants";

const ResturandCard = (props) => {
    const { data } = props;
    const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } = data?.info;
    return (
        <div className="w-[300px] p-1.5 m-3 bg-custom-light-yellow hover:cursor-pointer hover:border-2 hover:border-solid hover:border-custom-yellow rounded-md h-[95%] text-custom-brown shadow-lg">
            <img className="w-[100%] h-36 rounded-md" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
            <h3 className="font-medium text-center my-3">{name}</h3>
            <h4 className="my-3">{cuisines.join(", ")}</h4>
            <h4 className="my-3">{avgRating} stars</h4>
            <h4 className="my-3">{sla.slaString}</h4>
            <h4 className="my-3">{costForTwo}</h4>
        </div>
    )
}

export default ResturandCard;
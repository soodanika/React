import { CDN_URL } from "../utils/constants";

const ResturandCard = (props) => {
    const { data } = props;
    const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } = data?.info;
    return (
        <div className="res-card">
            <img className="res-image" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.slaString}</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default ResturandCard;
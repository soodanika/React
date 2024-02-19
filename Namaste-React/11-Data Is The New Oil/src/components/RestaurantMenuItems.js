import { CDN_URL } from "../utils/constants";

const RestaurantMenuItems = ({ items }) => {
    return (<div>

        {items.map((item) =>
            <div className="p-2 m-2 border-b-custom-width border-custom-brown text-left" key={item?.card?.info?.id}>
                <div>
                    <div className="font-semibold">{item?.card?.info?.name}</div>
                    <div className="">₹{item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice}</div>
                </div>
                <div className="flex justify-between">
                    <p className="text-xs my-2 text-justify">{item?.card?.info?.description}</p>
                    <img className="w-[118px] h-[100px] mx-3 rounded-md" src={CDN_URL + item.card.info.imageId}></img>
                </div>
                <button className="p-1 px-4 bg-custom-light-yellow shadow-lg mt-[-28px] absolute right-[23rem] rounded font-semibold hover:border-2 hover:border-custom-yellow">Add +</button>
            </div>
        )}

    </div>)
}

export default RestaurantMenuItems;
import { CDN_LINK } from "../utils/constants";

const RestaurantMenuItems = ({ data }) => {

    return (
        <div>
            {data.map((item) =>
                <div key={item.card.info.id} className="px-4 mt-3 border-b-my-width border-my-brown">
                    <div className="font-semibold">
                        {item.card.info.name}
                    </div>

                    <div className="mt-1">
                        ₹{item.card.info.defaultPrice ? item.card.info.defaultPrice / 100 : item.card.info.price / 100}
                    </div>

                    <div className="flex flex-row justify-between align-middle">
                        <div className="text-xs mt-3 mb-10 text-justify">{item.card.info.description}
                        </div>

                        <img className="w-3/12 h-[100px] rounded-md mb-5 ml-6" src={CDN_LINK + item.card.info.imageId}></img>
                        <button className="flex flex-row justify-end rounded-md bg-my-yellow text-white px-2 border-2 border-solid border-my-yellow hover:bg-my-yellow hover:text-my-brown mt-[72px] font-semibold shadow-sm absolute right-[410px]">Add +</button>
                    </div>

                </div>
            )}
        </div>
    )

}

export default RestaurantMenuItems;
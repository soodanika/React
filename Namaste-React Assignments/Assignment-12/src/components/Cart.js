import { useSelector } from "react-redux"
import { CDN_LINK } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addItem, clearCart, removeItem } from "../utils/cartSlice";


const Cart = () => {

    const cartItem = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    const handleRemoveItem = () => {
        dispatch(removeItem())
    }

    return (
        <>
            <div className="text-my-brown font-bold text-3xl m-4 text-center ">Cart</div>
            {cartItem.length !== 0 ?
                <div><button className="text-my-brown p-1 px-2 ml-[42%] bg-my-light-yellow shadow-lg rounded font-semibold hover:border-2 hover:border-my-yellow cursor-pointer" onClick={handleClearCart}> Clear Cart</button>
                    <button className="text-my-brown p-1 px-2 bg-my-light-yellow shadow-lg rounded font-semibold hover:border-2 hover:border-my-yellow cursor-pointer m-4" onClick={handleRemoveItem}> Remove Item</button></div> : null}
            <div className="w-6/12 shadow-lg p-4 mx-auto my-9 bg-my-light-yellow text-my-brown  rounded-md">
                {cartItem.length === 0 ? <h2 className="m-2 font-bold text-center">Cart is Empty! Add Something to the cart.</h2> : cartItem.map((item) => (
                    <div key={item.card.info.id} className="p-2 m-2 border-b-my-width border-my-brown text-left">
                        <div className="font-semibold">{item.card.info.name}</div>
                        <div>{item.card.info.defaultPrice ? item.card.info.defaultPrice / 100 : item.card.info.price / 100}</div>
                        <div className="flex justify-between">
                            <p className="text-xs my-2 text-justify">{item.card.info.description}</p>
                            <img className="w-[118px] h-[100px] mx-3 rounded-md" src={CDN_LINK + item.card.info.imageId}></img>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Cart;
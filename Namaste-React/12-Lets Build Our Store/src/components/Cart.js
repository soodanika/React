import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItem = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();



    const handleClearCart = () => {
        dispatch(clearCart())
    }


    return (
        <>
            <div className="text-custom-brown font-bold text-3xl m-4 text-center ">Cart</div>
            {cartItem.length !== 0 ?
                <button className="text-custom-brown p-1 ml-[47%] bg-custom-light-yellow shadow-lg rounded font-semibold hover:border-2 hover:border-custom-yellow cursor-pointer" onClick={handleClearCart}> Clear Cart</button> : null}
            <div className="w-6/12 shadow-lg p-4 mx-auto my-9 bg-custom-light-yellow text-custom-brown  rounded-md">
                {cartItem.length === 0 ? <h2 className="m-2 font-bold text-center">Cart is Empty! Add Something to the cart.</h2> : cartItem.map((item) => (
                    <div key={item.card.info.id} className="p-2 m-2 border-b-custom-width border-custom-brown text-left">
                        <div className="font-semibold">{item.card.info.name}</div>
                        <div>{item.card.info.defaultPrice ? item.card.info.defaultPrice / 100 : item.card.info.price / 100}</div>
                        <div className="flex justify-between">
                            <p className="text-xs my-2 text-justify">{item.card.info.description}</p>
                            <img className="w-[118px] h-[100px] mx-3 rounded-md" src={CDN_URL + item.card.info.imageId}></img>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Cart;
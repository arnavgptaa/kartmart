import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider"

function CheckoutProduct({ id, title, price, rating, image }) {
    const [{ Cart }, dispatch] = useStateValue();

    const removeFromCart = () => {
        //Removing an item form the Cart
        dispatch({
            type:"REMOVE_FROM_CART",
            id: id,
        })
    }

  return (
    <div className="checkoutProduct">
        <img className="checkoutProduct__image" src={image} alt="" />

        <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>

            <p className="checkoutProduct__price">
                <small>₹</small>
                <strong>{price}</strong>
            </p>

            <div className="checkoutProduct__rating">
            {Array(rating) //Make an array of the item
            .fill()        //Fill it with empty values()
            .map((_, i)=>(    //Map through it and insert the star
                <p>⭐</p>
            ))}
        </div>

        <button onClick={removeFromCart}>Remove from Cart</button>
        </div>
    </div>
  )
}

export default CheckoutProduct
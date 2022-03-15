import React from 'react';
import './Product.css';
import { useStateValue } from "./StateProvider";

function Product({id, title, price, rating, image}) {
  const [{}, dispatch] = useStateValue();

  const addToCart = () => {
    //Adding items to the Cart
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        title: title,
        image: image,
        rating: rating,
        price: price,
      }      
    })
  };

  return (
    <div className="product">
        <p>{title}</p>
        <p className="product__price">
            <small>₹</small>
            <strong>{price}</strong>
        </p>
        <div className="product__rating">
            {Array(rating) //Make an array of the item
            .fill()        //Fill it with empty values()
            .map((_)=>(    //Map through it and insert the star
                <p>⭐</p>
            ))
            }
        </div>
        <img src={image} alt="" />
        <button onClick={addToCart}>Add to Cart</button>
    </div>
  )
}

export default Product
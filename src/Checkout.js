import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal.js'
import CurrencyFormat from "react-currency-format"

function Checkout() {
    const [{ Cart }] = useStateValue();

  return (
    <div className="checkout">
        <div className="checkout__left">
            <img  className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />     

            {Cart?.length === 0 ? (
                <div>
                <h2>Your Cart is Empty😥</h2>
                <p>
                    You have no items in your cart.
                    To buy one or more items, 
                    click "Add to Cart" next to the item. 
                </p>
                </div>
            ) : (
                <div>
                    <h2 className="checkout__title">Your Cart😎</h2>
                    
                    {/* Listing all the added products */}
                    {Cart?.map (item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            )}
        </div>
        {Cart.length > 0 && (
            <div className="checkout__right">
                <Subtotal />
            </div>
        )}
    </div>
  )
}

export default Checkout
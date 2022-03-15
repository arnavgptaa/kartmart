import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './Subtotal.css'
import { useStateValue } from './StateProvider'
import { getCartTotal } from './reducer';



function Subtotal() {
  const [{ Cart }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
        {/* Price */}
        <CurrencyFormat 
          renderText={(value) => (
            <>
              <p>
                Subtotal ({Cart.length} items) :
                <strong>
                  {value}
                </strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" />
                This order contains a gift🎁.
              </small>
            </>
          )}
          decimalScale={2}
          value={getCartTotal(Cart)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹"}
        />

        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
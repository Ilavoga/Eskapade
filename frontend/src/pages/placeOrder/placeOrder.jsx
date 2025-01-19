import React from 'react';
import './placeOrder.css'
import { useContext } from 'react';
import { storeContext } from '../../context/storeContext';

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(storeContext)

  return (
    <div>
       <form className="place-order">
           <div className="place-order-left">
             <p className="title">Delivery Information</p>
              <div className="multi-fields">
                <input type="text" placeholder="First Name"/>
                <input type="text"placeholder="Last Name"/>
              </div>
                <input type="text" placeholder="Email address"/>
                <input type="text"placeholder="Street"/>
                <div className="multi-fields">
                <input type="text" placeholder="City"/>
                <input type="text"placeholder="State"/>
              </div>
              <div className="multi-fields">
                <input type="text" placeholder="Zip Code"/>
                <input type="text"placeholder="Country"/>
              </div>
              <input type="text" placeholder="Phone"/>
           </div>
           <div className="place-order-right">
           <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${2}</p> 
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button>PROCEED TO PAY</button>
        </div>
            </div>
       </form>

       <div>
      
       </div>
    </div>
  );
};

export default PlaceOrder;

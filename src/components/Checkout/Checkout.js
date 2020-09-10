import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal/Subtotal';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
                />
                <div>
                    <h2 className="checkout___title">
                        Your Shopping Basket
                    </h2>
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
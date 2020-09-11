import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal/Subtotal';
import CheckoutProduct from './CheckoutProduct/CheckoutProduct';
import { useStateValue } from '../../utilities/StateProvider';
import FlipMove from 'react-flip-move';

function Checkout() {

    const [{ basket, user }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
                />
                <div>
                    <h3>{user &&`Hello, ${user.email}`}</h3>
                    <h2 className="checkout___title">
                        Your Shopping Basket
                    </h2>
                    <FlipMove
                        duration={300}
                        appearAnimation="accordionHorizontal"
                        enterAnimation="accordionHorizontal"
                        leaveAnimation="accordionHorizontal"
                    >
                        <div key={basket}>
                            {basket.map((item) => (
                                <CheckoutProduct
                                id={item.id}
                                price={item.price}
                                title={item.title}
                                image={item.image}
                                rating={item.rating}
                                />
                            ))}
                        </div>
                    </FlipMove>
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;

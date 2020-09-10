import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../../utilities/StateProvider';

function Subtotal() {

    const [{ basket }] = useStateValue();

    const getBasketPrice = (basket) => {
        const prices = basket.map((item) => item.price);

        return prices.reduce((prev, curr) => prev + curr, 0);
    }

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items):
                            <strong>{`${value}`}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketPrice(basket)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal;

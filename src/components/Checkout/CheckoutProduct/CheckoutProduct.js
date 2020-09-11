import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from '../../../utilities/StateProvider';
import StarRatings from 'react-star-ratings';

function CheckoutProduct({ id, image, title, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();

    const handleRemove = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id
        })
    }

    return (
        <div className="checkoutProduct">
            <img
                className="checkoutProduct__image"
                src={image}
            />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div>
                    <StarRatings
                        starSpacing="5px"
                        starDimension="20px"
                        rating={rating}
                        starRatedColor="#f0f00e"
                        numberOfStars={5}
                    />
                </div>
                <button onClick={handleRemove}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;

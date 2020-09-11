import React from 'react'
import './Product.css'
import { useStateValue } from '../../../utilities/StateProvider'
import StarRatings from 'react-star-ratings';

function Product({ id, title, image, price, rating}) {

    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                image,
                price,
                rating
            }
        });
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
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
            </div>
            <img src={image} />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product;

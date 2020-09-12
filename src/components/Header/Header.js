import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../utilities/StateProvider';
import { auth } from '../../utilities/firebase'
import LocationOn from '@material-ui/icons/LocationOn';

function Header() {

    const [{ basket, user }] = useStateValue();

    const handleAuth = () => {
        if (user) {
            auth.signOut()
        }
    }

    return (
        <div className='header'>
            <div className='header__containter'>
                <Link to="/">
                    <img
                        className='header__logo'
                        src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                    />
                </Link>
                <div className="header__search">
                    <input
                        className="header__searchInput"
                        type="text"
                    />
                    <SearchIcon className="header__searchIcon" />
                </div>
                <div className="header__nav">
                    <Link to={!user && "/login"}>
                        <div onClick={handleAuth} className="header__option">
                            <span className="header__optionLineOne">
                                Hello {user ? user.email : 'Guest'}
                            </span>
                            <span className="header__optionLineTwo">{
                                user ? 'Sign Out' : 'Sign In'
                            }</span>
                        </div>
                    </Link>
                    <Link to="/orders">
                        <div className="header__option">
                            <span className="header__optionLineOne">Returns</span>
                            <span className="header__optionLineTwo">& Orders</span>
                        </div>
                    </Link>
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
            <div className="header__secHead">
                <div className="header__deliver">
                    <LocationOn /> 
                    <div>
                        Deliver to <br />
                        <strong>Poland</strong>
                    </div>
                </div>
                <div className="header__secInfo">
                    <span>Today's Deals</span>
                    <span>Customer Service</span>
                    <span>Gift Cards</span>
                    <span>Registry</span>
                    <span>Sell</span>
                </div>
            </div>
        </div>
    )
}

export default Header;

import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <button onClick={() => window.scrollTo({top: 0, behavior:'smooth'})}>
                Back to top
            </button>
            <div className="footer__container">
                <div className="footer__row">
                    <ul>
                        <strong className="footer__title">Get to know Us</strong>
                        <li>Careers</li>
                        <li>Blog</li>
                        <li>About Amazon</li>
                        <li>Investor Relations</li>
                        <li>Amazon devices</li>
                        <li>Amazon Tours</li>
                    </ul>
                </div>
                <div className="footer__row">
                    <ul>
                        <strong className="footer__title">Make money with Us</strong>
                        <li>Sell on Amazon</li>
                        <li>Sell on Amazon Business</li>
                        <li>Sell Your Apps on Amazon</li>
                        <li>Become an Affiliate</li>
                        <li>Advertise Your Products</li>
                        <li>Self-Publish with Us</li>
                        <li>Host on Amazon Hub</li>
                    </ul>
                </div>
                <div className="footer__row">
                    <ul>
                        <strong className="footer__title">Amazon Payment Products</strong>
                        <li>Amazon Business Card</li>
                        <li>Shop with Points</li>
                        <li>Reload Your Balance</li>
                        <li>Amazon Currency Convereter</li>
                    </ul>
                </div>
                <div className="footer__row">
                    <ul>
                        <strong className="footer__title">Let Us Help You</strong>
                        <li>Amazon and COVID-19</li>
                        <li>Your Account</li>
                        <li>Your Orders</li>
                        <li>Returns & <br />Replacements</li>
                        <li>Manage Your Content<br />Devices</li>
                        <li>Shipping Rates & <br />Policies</li>
                        <li>Amazon Assistant</li>
                        <li>Help</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;

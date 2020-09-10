import React from 'react'
import './Home.css'
import Product from './Product/Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                />
                <div className="home__row">
                    <Product
                        id="7546745"
                        title="Call of Duty 2 - PC"
                        price={74.99}
                        image={"https://images-na.ssl-images-amazon.com/images/I/51H4XNCEEDL.jpg"}
                        rating={5}
                    />
                    <Product
                        id="523543"
                        title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
                        price={376.95}
                        image={"https://images-na.ssl-images-amazon.com/images/I/61JnrafZ7zL._AC_SX522_.jpg"}
                        rating={5}
                    />
                </div>


                <div className="home__row">
                    <Product
                        id="6436486"
                        title="Skytech Chronos Gaming PC Desktop - AMD Ryzen 7 2700X, NVIDIA RTX 2070 Super 8GB,
                        16GB DDR4 {`(2X 8GB)`}, 1TB SSD, B450M Motherboard, 650 Watt Gold {`(2700X | 2070 Super)`}"
                        price={1499.99}
                        image={"https://images-na.ssl-images-amazon.com/images/I/71DDQIRPLJL._AC_SL1200_.jpg"}
                        rating={4}
                    />
                    <Product
                        id="8563675"
                        title="Apple iPhone 11 Pro Max (512GB, Space Gray)"
                        price={1449}
                        image={"https://m.media-amazon.com/images/I/81bsgUsPM-L.jpg"}
                        rating={5}
                    />
                    <Product
                        id="185645"
                        title="Steve Jobs Hardcover – October 24, 2011 by Walter Isaacson"
                        price={19.95}
                        image={"https://images-na.ssl-images-amazon.com/images/I/81VStYnDGrL.jpg"}
                        rating={5}
                    />
                </div>


                <div className="home__row">
                    <Product
                        id="754367"
                        title='Samsung C49J890DKU 49" LED Curved Black Computer Monitor'
                        price={1863}
                        image={"https://images-na.ssl-images-amazon.com/images/I/71RC3o90shL._AC_SX679_.jpg"}
                        rating={4}
                    />
                </div>
                </div>
        </div>
    )
}

export default Home;

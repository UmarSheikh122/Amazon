import React, {useState} from 'react'
import './Home.css'
import Product from './Product'
function Home() {
   

    const [counter, setCounter] = useState(0)
    const incrementCounter = ()=>{
        console.log("clicked");
        setCounter(counter+1);
        console.log(counter)
    }
    return (
        <div className="home">
            <img
            className="home__img" 
            src="https://images-eu.ssl-images-amazon.com/images/G/30/digital/video/magellan/country/spain/EvergreenRefresh/fromDec19/ES_Evergreen_Refresh_FT_XSite_HeroTALL_1500x600._CB410675382_.jpg"
            // src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSITE_1500x600_PV_en-GB._CB428684220_.jpg"
            />

        <div className="product__row">
        <Product
            id="121321"
            title="The learn Startup"
            price={11.5}
            rating={5}
            image="https://source.unsplash.com/random/pens"
            clickAdd={incrementCounter}
        />
           <Product
            id="121321"
            title="The learn Startup"
            price={11.5}
            rating={5}
            image="https://source.unsplash.com/random/chairs"
        />
        </div>
        <div className="product__row">
        <Product
            id="121321"
            title="The learn Startup"
            price={11.5}
            rating={5}
            image="https://source.unsplash.com/random/computers"
        />
           <Product
            id="121321"
            title="The learn Startup: This is a random picture from unsplash.com"
            price={11.5}
            rating={5}
            image="https://source.unsplash.com/random/books"
        />
        <Product
            id="121321"
            title="This is a random picture from unsplash.com: The learn Startup"
            price={11.5}
            rating={5}
            image="https://source.unsplash.com/random"
        />
        </div>
        <div className="product__row">
        <Product
            id="121321"
            title="This is a random picture from unsplash.com"
            price={11.5}
            rating={5}
            image="https://source.unsplash.com/random/laptops"
        />
        </div>
        </div>
    )
}

export default Home

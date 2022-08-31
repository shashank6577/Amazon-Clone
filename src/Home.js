import React from 'react'
import "./Home.css";
import Product from './Product';

export default function Home(props) {
  return (
    <div className='Home'>
        <div className='Home_container'>
        <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/Aug/Apay/GW-PC-Deals-Unrec-3000._CB629506848_.jpg' className='HomeImage'/>
        <div className='Home_row'>
            <Product
            title="Karma: A Yogi's Guide to Crafting Your Destiny | Spirituality, Self-improvement & Self help books by Sadhguru | Penguin"
            price={20.99}
            image="https://m.media-amazon.com/images/I/91xafByFlLL._AC_UY436_QL65_.jpg"
            rating={5}
                    />
             <Product
            title="V-Guard MG 503 Pro Yellow-White Colour 500 Watt Mixer Grinder with 3 Stainless Steel Jars (1 Wet Jar, 1 Dry Jar, and 1 Chutney Jar) | 1 Year Product Warranty | 1 Year Motor Warranty"
            price={120.99}
            image="https://m.media-amazon.com/images/I/61Ce34B5tsL._AC_UY436_QL65_.jpg"
            rating={5}
                    />
        </div>
        <div className='Home_row'>
       
        <Product
            title="LG Gram 17 Intel Evo 11th Gen i5 Thin & Light Laptop 2K+ IPS 16:10 Display [8 GB RAM/ 512 GB SSD/ Windows 10 / Iris Xe Graphics/ Thunderbolt 4/ USC C x 2 / 1.35 kg, Black/ 3Yr Warranty] 17Z90P"
            price={320.99}
            image="https://m.media-amazon.com/images/I/31qexTs9HkL._AC_SR320,320_.jpg"
            rating={5}
                    />
                     <Product
            title="Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)"
            price={20.99}
            image="https://m.media-amazon.com/images/I/61MbLLagiVL._AC_UY436_QL65_.jpg"
            rating={5}
                    /> 
                     <Product
            title="Apple iPhone 12 Pro (128GB) - Silver"
            price={520.99}
            image="https://m.media-amazon.com/images/I/71xkMA+gvYL._AC_UY436_QL65_.jpg"
            rating={5}
                    />
        </div>
        <div className='Home_row'>
        <Product
            title="DEAL
            AmazonBasics 109 cm (43 inches) Full HD Smart LED Fire TV AB43E10DS (Black)"
            price={220.99}
            image="https://m.media-amazon.com/images/I/61S+ZtblluL._AC_CR0%2C0%2C0%2C0_SX960_SY720_.jpg"
            rating={5}
                    />
        </div>

        </div>
    </div>
  )
}

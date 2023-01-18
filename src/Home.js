import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className="home">
        <img className="home__image" src="./banner.png" alt="banner" />
        <div className="home__row">
        <Product 
                id="12321341"
                title="Bose Noise Cancelling Headphones 700"
                price= {23499}
                rating= {4}
                image= "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/noise_cancelling_headphones_700/product_silo_images/Silo_jpg/noise_cancelling_headphones_700_blk_EC_hero.psd/jcr:content/renditions/cq5dam.web.1000.1000.png"
            />

            <Product 
                id="12321341"
                title="MacBook Air M1 with 8-Core CPU and 7-Core GPU 256 GB Storage"
                price= {92900}
                rating= {5}
                image= "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1633027804000"
            />
        </div>
        <div className="home__row">
            <Product 
                id="12321341"
                title="Casio Edifice Grey Dial Men's Watch -EX494"
                price= {11999}
                rating= {5}
                image= "https://cdn.shopify.com/s/files/1/0046/3454/2129/products/EX494_1_8dd70b24-7922-4115-a279-2826d05a5754_large.jpg?v=1594055319"
            />

            <Product 
                id="12321341"
                title="Apple iPhone 13 Pro (128 GB) - Graphite"
                price= {119999}
                rating= {4}
                image= "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-max-graphite-select?wid=940&hei=1112&fmt=png-alpha&.v=1631652956000"
            />
            <Product 
                id="12321341"
                title="LG C1 121cm (48 Inch) Ultra HD 4K OLED Smart TV (FreeSync Technology, OLED48C1XTZ, Black)"
                price= {104999}
                rating= {3}
                image= "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1627539943/Croma%20Assets/Entertainment/Television/Images/239048_nczuta.png/mxw_2048,f_auto"
            />
        </div>
        <div className="home__row">
            <Product
                id= "12112121"
                title= "2021 Apple 11-inch iPad Pro (Wi-Fi, 1TB) 12.9-inch iPad Pro - Space Gray"
                price= {79999}
                rating= {5}
                image= "https://i0.wp.com/maplestore.in/wp-content/uploads/2021/04/iPad_Pro_11-in_Cellular_Silver_2-up_Screen__USEN.jpg?fit=2048%2C2048&ssl=1"
            />

            <Product
                id= "12112121"
                title= "Siemens 45 Ltr Built In Oven Microwave Oven"
                price= {185000}
                rating= {4}
                image= "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1605183184/Croma%20Assets/Small%20Appliances/Microwave%20or%20OTG/Images/8989928652830.png/mxw_2256,f_auto"
            />
            
        </div>
    </div>
    
  )
}

export default Home
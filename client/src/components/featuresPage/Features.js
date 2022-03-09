import Vesterhavet1 from "../../imgs/vesterhavet1.png";
import Snowboard from "../../imgs/snowboard.png";
import Vesterhavet3 from "../../imgs/vesterhavet3.png";
import Surf4 from "../../imgs/surf4.png";
import "../../features.css";
import Header from "../header/Header"
import Footer from "../footer/Footer"

const Features = () => {
    return (
        <div>
            <Header />
                <div className="container-features">
                    <img alt="water" className="img" src={Vesterhavet1} />
                    <h1 className="bottom-left">Product Features</h1>
                </div>
                <div id="product-features-container">
                    <div className="product-features">
                        <img alt="snowboard" src={Snowboard} className="product-img" />
                    </div>

                    <div className="product-features product-features-text">
                            <h1>We Make It Easy For You...</h1>
                            <p>
                                To book and live in cozy vans. We have made a product 
                                where you can book vans on demand and thereby impovering 
                                remote first employees and modern explorers. Wether you 
                                want a curated experience or adventure on your own, we got 
                                the product for you.
                            </p>
                    </div>


                    <div className="product-features product-features-text">
                        <h1 className="text-features-right">With A Platform For Booking...</h1>
                        <p className="text-paragraph-right">
                            Whereever you might find yourself in our operating contries 
                            we have a van ready for you with needed appliances such as 
                            a bed, kitchen and in some cases surfboards or other desired 
                            adventure products. Oh and ofcourse a coffee brewer.
                        </p>
                    </div>

                    <div className="product-features">
                        <img alt="snowboard" src={Vesterhavet3} className="product-img" />
                    </div>

                    <div className="product-features">
                        <img alt="snowboard" src={Surf4} className="product-img" />
                    </div>

                    <div className="product-features product-features-text">
                        <h1 className="text-features">And A Currated User Experience</h1>
                        <p className="text-paragraph">
                            Our product is not only a great booking system, but we have 
                            picked some of the most extraordinary places and routes in 
                            Denmark and integrated them into our app. All you hvae to do 
                            is download the app and start exploring. 
                        </p>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Features

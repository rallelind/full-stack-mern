import Vesterhavet1 from "../../imgs/vesterhavet1.png";
import Snowboard from "../../imgs/snowboard.png";
import Vesterhavet3 from "../../imgs/vesterhavet3.png";
import Surf4 from "../../imgs/surf4.png";
import "../../features.css";
import Button from "../utils/Button";
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
            <div className="product-features">
                <img alt="snowboard" src={Snowboard} className="product-img" />
                <h1 className="text-features">We Make It Easy For You...</h1>
                <p className="text-paragraph">
                    To book and live in cozy vans. We have made a product <br/>
                    where you can book vans on demand and thereby impovering <br />
                    remote first employees and modern explorers. Wether you <br />
                    want a curated experience or adventure on your own, we got <br />
                    the product for you.
                </p>
            </div>
            <div className="product-features">
                <img alt="snowboard" src={Vesterhavet3} className="product-img-left" />
                <h1 className="text-features-right">With A Platform For Booking...</h1>
                <p className="text-paragraph-right">
                    Whereever you might find yourself in our operating contries <br/>
                    we have a van ready for you with needed appliances such as <br />
                    a bed, kitchen and in some cases surfboards or other desired <br />
                    adventure products. Oh and ofcourse a coffee brewer.
                </p>
            </div>
            <div className="product-features">
                <img alt="snowboard" src={Surf4} className="product-img img2" />
                <h1 className="text-features">And A Currated User Experience</h1>
                <p className="text-paragraph">
                    Our product is not only a great booking system, but we have <br/>
                    picked some of the most extraordinary places and routes in <br />
                    Denmark and integrated them into our app. All you hvae to do <br />
                    is download the app and start exploring. <br />
                    <div className="features-button">
                        <Button 
                            text="Get Started"
                            className="btn"
                        />
                    </div>
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default Features

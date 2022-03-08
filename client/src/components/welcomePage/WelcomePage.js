import Jens from "../../imgs/jens.png"
import JensSurf from "../../imgs/jens surf.png"
import { Button } from '@mantine/core';import Vans from "./Vans"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import { useNavigate } from "react-router-dom";



const WelcomePage = () => {

    let navigate = useNavigate();
    const routeChange = () => {
        let path = "/dashboard";
        navigate(path)
    }   


    return (
        <div>
            <Header />
            <div className="img-container-welcomepage">
                <img alt="jens" src={Jens} className="img-welcomepage" />
                <img alt="jens surf" src={JensSurf} className="img-welcomepage" />
            </div>
            <div id="firstText">
                <h3>Tired of everyday life?</h3>
                <p className="welcomeText">
                    Do like Jens and live out of a van. We make it easy for you to rent a 
                    livable van. You might ask "but for how long?". To that we say as long
                    as you wish. For a week, a day, or a month. You decide. <br/>
                    Sign up today and view when you can have a great experience.  
                </p>
                    <Button 
                        text="Start Living"
                        onClick={routeChange}
                        color="grape" 
                        size="md"
                        className="welcome-page-btn"
                    >
                        Start Living
                    </Button>
                </div>
            <Vans />
            <Footer />
        </div>
    )
}

export default WelcomePage

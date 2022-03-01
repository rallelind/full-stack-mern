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
            <div className="column2">
                <img alt="jens" src={Jens} className="jensImg" />
            </div>
            <img alt="jens surf" src={JensSurf} className="jensSurf" />
            <div className="column2">
                <div id="firstText">
                <h1 className="welcomeText">Tired of everyday life?</h1>
                <p className="welcomeText">
                    Do like Jens and live out of a van. We make it easy for you to rent a 
                    <br/>
                    livable van. You might ask "but for how long?". To that we say as long
                    <br/>
                    as you wish. For a week, a day, or a month. You decide.
                    <br/> 
                    Sign up today and view when you can have a great experience. 
                    <br/>
                    <br/>
                    <Button 
                        text="Start Living"
                        onClick={routeChange}
                        color="grape" 
                        size="md"
                    >
                        Start Living
                    </Button>
                </p>
                </div>
            </div>
            <Vans />
            <Footer />
        </div>
    )
}

export default WelcomePage

import "../../about.css"
import Surf1 from "../../imgs/surf1.png";
import Van2 from "../../imgs/van2.png";
import Van1 from "../../imgs/van1.png";
import Van3 from "../../imgs/van3.png";
import Surf2 from "../../imgs/surf2.png";
import Vesterhavet from "../../imgs/vesterhavet.png";
import Header from "../header/Header"
import Footer from "../footer/Footer"

const About = () => {

    const images = [
        {id: 1, img: Surf1, alt: "surf", text: "About Us"},
        {id: 2, img: Van2, alt: "van"},
        {id: 3, img: Vesterhavet, alt: "vesterhavet"},
    ]

    
    return (
        <div>
        <Header />
        <div className="container">
            <div className="row">
                {
                images.map((ele, i) =>
                <div key={i} className="column">
                    <img src={ele.img} alt={ele.alt} className="about-img" />
                    <h1 className="bottom-left">{ele.text}</h1>
                </div>
                )}
            </div>
            <div className="what-we-do">
                <h1>What We Do</h1>
                <p> 
                    We make it easy for you to fullfill your remote dreams or explore the mesmorizing danish nature. <br />
                    Do you want to explore for a day, weekend, week? We most definetely got the right package for you. <br />
                    Maybe you are part of the great resignation and are working remotely. Dont worry we will hook you up.
                </p>
            </div>
            <div className="container-about">
                <div className="image-about">
                    <img src={Van1} alt="van" className="about-imgs"/>
                </div>
                <div className="about-text">
                    <h1>Our Goal Is To Fascilitate Remote</h1>
                    <p>
                        We want to let you go remote and explore. We have made a currated experience
                        where we allow you to explore while working from a cozy van. And if work isn't
                        your jam. Well we have mapped out the greatest surf spots in west jutland and
                        some of the most scenery places in Denmark.
                    </p>
                </div>
            </div>  
            <div className="container-about">
                <div className="image-about">
                    <img src={Surf2} alt="van" className="about-imgs"/>
                </div>
                <div className="about-text">
                    <h1>Our Goal Is To Fascilitate Remote</h1>
                    <p>
                        We want to let you go remote and explore. We have made a currated experience
                        where we allow you to explore while working from a cozy van. And if work isn't
                        your jam. Well we have mapped out the greatest surf spots in west jutland and
                        some of the most scenery places in Denmark.
                    </p>
                </div>
            </div>
            <div className="container-about">
                <div className="image-about">
                    <img src={Van3} alt="van" className="about-imgs"/>
                </div>
                <div className="about-text">
                    <h1>Our Goal Is To Fascilitate Remote</h1>
                    <p>
                        We want to let you go remote and explore. We have made a currated experience
                        where we allow you to explore while working from a cozy van. And if work isn't
                        your jam. Well we have mapped out the greatest surf spots in west jutland and
                        some of the most scenery places in Denmark.
                    </p>
                </div>
            </div>    
        </div>
        <Footer />
        </div>
    )
}

export default About

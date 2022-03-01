import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImageSlider = (props) => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    
      function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", right: "0px" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", left: "0px" }}
            onClick={onClick}
          />
        );
      }

    return (
        <div>
            <Slider {...settings}>
                {props.images.map((image, i) => ( 
                    <div key={i}>
                        <img className={props.className} src={`http://localhost:4000/${image}`} alt="productImage" /><br/>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default ImageSlider

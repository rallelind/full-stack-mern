import React from 'react'

const ImageGallery = (props) => {
    return (
        <div className="image-grid">
            <img className="image-grid-col-2 image-grid-row-2" src={`http://localhost:4000/${props.image[0]}`} alt="van"/>
            <img src={`http://localhost:4000/${props.image[1]}`} alt="architecture" />
            <img src={`http://localhost:4000/${props.image[2]}`} alt="architecture" />
            <img src={`http://localhost:4000/${props.image[3]}`} alt="architecture" />
            <img src={`http://localhost:4000/${props.image[4]}`} alt="architecture" />
        </div>
        
    )
}

export default ImageGallery

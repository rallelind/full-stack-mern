import React from 'react'
import "../skeleton-upload.css"

const SkeletonUploadProduct = () => {
    return (
        <div>
            <div className="skeleton-title"></div>
            <div className="image-grid-skeleton">
                <div className="skeleton-image-grid-col-2 skeleton-image-grid-row-2 img"></div>
                <div className="img"></div>
                <div className="img"></div>
                <div className="img"></div>
                <div className="img"></div>
            </div>
        </div>
    )
}

export default SkeletonUploadProduct

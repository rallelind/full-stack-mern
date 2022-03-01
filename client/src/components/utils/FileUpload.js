import React from 'react'
import Dropzone from "react-dropzone"
import { FaPlus } from "react-icons/fa";
import Axios from "axios"
import { useState } from 'react';


const FileUpload = (props) => {

    const [Images, setImages] = useState([]);

    const onDrop = (files) => {

        let formData = new FormData();
        const config = {
            header: {
                "content-type": "multipart/form-data"
            }
        }
        formData.append("file", files[0]);

        Axios.post("http://localhost:4000/api/product/uploadImage", formData, config)
        .then(res => {
            if(res.data.success) {
                setImages([...Images, res.data.image])
                props.refreshFunction([...Images, res.data.image])
            } else {
                alert("Failed to save the image in server")
            }
        })

    }

    const onDelete = (image) => {
        const currentIndex = Images.indexOf(image);

        let newImages = [...Images]
        newImages.splice(currentIndex, 1)

        setImages(newImages)
        props.refreshFunction(newImages)
    }

    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Dropzone 
                onDrop={onDrop}
                multiple={false}
                maxSize={80000000000}
            >
                {({ getRootProps, getInputProps }) => (
                    <div style={{
                        width: '300px', height: '240px', border: '1px solid lightgray',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}
                        {...getRootProps()}
                    >
                        {console.log('getRootProps', { ...getRootProps() })}
                        {console.log('getInputProps', { ...getInputProps() })}
                        <input {...getInputProps()} />
                        <FaPlus  type="plus" style={{ fontSize: '3rem' }} />

                    </div>
                )}
            </Dropzone>
            

            <div style={{ display: 'flex', width: '350px', height: '240px', overflowX: 'scroll', border: '1px solid lightgray'}}>

                {Images.map((image, index) => (
                    <div key={index} onClick={() => onDelete(image)}>
                        <img style={{ minWidth: '300px', width: '300px', height: '240px'}} src={`http://localhost:4000/${image}`} alt={`productImg-${index}`} />
                    </div>
                ))}


            </div>


        </div>
    )
}

export default FileUpload

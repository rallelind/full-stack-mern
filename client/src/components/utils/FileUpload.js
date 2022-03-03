import React from 'react'
import Dropzone from "react-dropzone"
import { FaPlus } from "react-icons/fa";
import Axios from "axios"
import { useState } from 'react';
import { FcAddImage } from "react-icons/fc"
import { Text } from '@mantine/core';


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
                        width: '300px', height: '240px', border: '3px dotted lightgray',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}
                        {...getRootProps()}
                    >
                        <input {...getInputProps()} />
                        <FcAddImage  type="plus" style={{ fontSize: '4rem' }} />

                    </div>
                )}
            </Dropzone>
            

            <div style={{ display: 'flex', width: '350px', height: '240px', overflowX: 'scroll', border: '3px dotted lightgray'}}>
                <div style={{height: "auto", margin: "0 auto", padding: "10px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    {Images.length === 0 && <Text color="dimmed" style={{textAlign: "center"}}>View images here. <br/> Click them to delete.</Text>}
                </div>
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

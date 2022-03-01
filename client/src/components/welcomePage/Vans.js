import { useState, useEffect } from "react"
import Axios from "axios"
import ImageSlider from "../dashboard/ImageSlider"
import { Button } from '@mantine/core';
import { useNavigate } from "react-router-dom";


const Vans = () => {

    const [randomVan, setRandomVan] = useState([])


    useEffect(() => {
        Axios.post("http://localhost:4000/api/product/getProducts")
            .then(res => {
                if(res.data.success) {
                    setRandomVan(res.data.products.sort(() => Math.random() - Math.random()).slice(0, 3))
                } else {
                    alert("Failed to fetch data")
                }
            })            
    },[])

    let navigate = useNavigate();
 

    return (
        <div id="container">
            {randomVan.map((product, i) => (
            <div key={i} className="card">
                <ImageSlider className="vansSlider" images={product.images} />
                <h2>{product.title}</h2>
                <p>{product.description.length > 100 ? `${product.description.substring(0, 100)}...`: <p>{product.description}</p>}</p>
                <Button 
                    color="grape" 
                    radius="md" 
                    size="md"
                    onClick={() => {
                        let path = `/productpage/${product._id}`;
                        navigate(path)
                    }}
                >
                    Check Availability
                </Button>
            </div>
            ))}
        </div>
    )
}

export default Vans



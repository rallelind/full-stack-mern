import React from 'react'
import Header from '../header/Header';
import { Link } from "react-router-dom";
import "../../dashboard.css";
import { useEffect, useState } from 'react';
import Axios from 'axios';
import ImageSlider from './ImageSlider';
import vanLoad from "../../imgs/vanlife.gif"
import { Chips, Chip } from '@mantine/core';
import { MdOutlineSurfing } from "react-icons/md"
import { FaShower } from "react-icons/fa"
import { GiGasStove } from "react-icons/gi"
import { MdKitchen } from "react-icons/md"




const Dashboard = () => {
   
    const [Products, setProducts] = useState([])
    const [features, setFeatures] = useState([]);


    useEffect(() => {
         Axios.post("http://localhost:4000/api/product/getProducts")
            .then(res => {
                if(res.data.success) {
                    setProducts(res.data.products)
                    console.log(res.data.products)
                } else {
                    alert("Failed to fetch data")
                }
            })
    },[])

    return (
        <div>
            <Header />
            <div>   
                <div className="filterByFeatures">
                    <h3>Filter Vans By Features</h3>
                    <Chips  
                        multiple
                        color="grape" 
                        variant="filled" 
                        size="md" 
                        radius="lg"
                        style={{padding: "15px"}}
                        value={features} 
                        onChange={setFeatures}
                    >
                            <Chip value="surf"><MdOutlineSurfing size={20} style={{marginRight: "5px"}} />Surf Gear</Chip>
                            <Chip value="shower"><FaShower size={20} style={{marginRight: "5px"}}/>Shower</Chip>
                            <Chip value="stove"><GiGasStove size={20} style={{marginRight: "5px"}}/>Stove</Chip>
                            <Chip value="kitchen"><MdKitchen size={20} style={{marginRight: "5px"}}/>Kitchen</Chip>
                    </Chips> 
                </div>

                {Products.map((product, i) => (
                    features.length === 0 ?
                    <div className="containerD" key={i}>
                        <Link to={`/productpage/${product._id}`}>
                            <div key={i} className="cardD">
                                <ImageSlider className="IMGD" images={product.images} />
                                <h6>{product.price} DKK / nat</h6>
                            </div>
                        </Link>
                    </div>
                    :
                    (
                    features.includes("shower") && product.shower === true ||
                    features.includes("stove") && product.stove === true ||
                    features.includes("kitchen") && product.stove === true ||
                    features.includes("surf") && product.stove === true
                    )
                    &&            
                    <div className="containerD" key={i}>
                        <Link to={`/productpage/${product._id}`}>
                            <div key={i} className="cardD">
                                <ImageSlider className="IMGD" images={product.images} />
                                <h6>{product.price} DKK / nat</h6>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            {Products.length === 0 && <div style={{textAlign: "center", marginTop: "12%"}}><img style={{height: "150px", borderRadius: "30px"}} src={vanLoad} alt="loading skeleton" /></div>}
        </div>
    )
}

export default Dashboard

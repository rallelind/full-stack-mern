import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Header from "../header/Header"
import Axios from "axios";
import "../../imageGallery.css"
import { BiFridge } from 'react-icons/bi'
import { GiGasStove } from "react-icons/gi";
import { MdKitchen } from "react-icons/md";
import { FaShower } from "react-icons/fa";
import { GiWaterGallon } from "react-icons/gi";
import { GiKitchenTap } from "react-icons/gi";
import "../../product-page.css"
import Footer from "../footer/Footer";
import { Button } from '@mantine/core';
import { RangeCalendar, DateRangePicker } from '@mantine/dates';
import Modal from 'react-bootstrap/Modal';
import dayjs from "dayjs";
import SkeletonUploadProduct from '../../skeletons/SkeletonUploadProduct';


export const ProductPage = () => {

    const [product, setProduct] = useState([])
    const [show, setShow] = useState(false);
    const [value, setValue] = useState([null])

    let navigate = useNavigate();

    const routeChange = () => {
        navigate("/bookingpage", { 
            state: {
                value: value,
                product: product
            }
        })
    } 

        const amountOfDays = () => {
            let timeDiff = Math.abs(value[0].getTime() - value[1].getTime())
            let price = product.map(product => product.price)
            return Math.ceil(timeDiff / (1000 * 3600 * 24)) * price
        }

    const params = useParams()

    useEffect(() => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: `http://localhost:4000/api/product/getproduct/${params.id.toString()}`,
        })
        .then((res) => {
            setProduct([res.data.result])
            console.log([res.data.result])
        })
    }, [params.id])

    

    return (
        <div>
            <Header />
            {product.length === 0 && <SkeletonUploadProduct />}
            {console.log(value)}
            {product.map((product, i) => (
            <div key={i}>
                <h1 className="title">{product.title}</h1>
                <div className="image-grid">
                    <img className="image-grid-col-2 image-grid-row-2" src={`http://localhost:4000/${product.images[0]}`} alt="van"/>
                    <img src={`http://localhost:4000/${product.images[1]}`} alt="architecture" />
                    <img src={`http://localhost:4000/${product.images[2]}`} alt="architecture" />
                    <img src={`http://localhost:4000/${product.images[3]}`} alt="architecture" />
                    <img src={`http://localhost:4000/${product.images[4]}`} alt="architecture" />
                </div>
                <div className="containerBook">
                    {value ? <><h3>{product.price} kr / nat</h3></> : <><h3>Pick Dates To See Price</h3></>}
                    <div className="bookFeatures">
                        <div className="center">
                                <DateRangePicker 
                                    label="Book Your Trip"
                                    placeholder="Pick dates for exploring"
                                    value={value}
                                    onChange={setValue}
                                    amountOfMonths={2} 
                                    className="booking"
                                    minDate={dayjs(product.startdate).toDate()}
                                    maxDate={dayjs(product.enddate).toDate()}
                                    initialMonth={dayjs(product.startdate).toDate()}
                                    />
                            {value[0] === null ? <></> : 
                            <>
                            <Button 
                                color="grape" 
                                radius="lg"
                                style={{width: "80%"}}
                                className="booking"
                                onClick={routeChange}
                            >
                                Book Your Next Adventure
                            </Button>
                            <div className="bg-light p-3 mt-2 price" >
                                <div className="d-flex justify-content-between">
                                    <div>Stay Cost</div>
                                    <div>{value[1] === null ? <>hello</> : amountOfDays()}</div>
                                </div>
                                <div className="bg-light d-flex justify-content-between">
                                    <div>Service Cost</div>
                                    <div>{value[1] === null ? <>hello</> : amountOfDays()*0.1}</div>
                                </div>
                                <div className="bg-light d-flex justify-content-between mt-1 border-top border-info">
                                    <div>Total Cost</div>
                                    <div>{value[1] === null ? <>hello</> : amountOfDays()*0.1+amountOfDays()}</div>
                                </div>
                            </div>
                            </>
                            }
                        </div>
                    </div>
                </div>
                <div className="containerDescription">
                    <h3>Description Of The Vehicle</h3>
                    <p>{product.description.length > 200 ? `${product.description.substring(0, 200)}...`: <p>{product.description}</p>}</p>                  
                    <Button id="readMoreBtn" onClick={()=> setShow(true)} color="grape" radius="lg">
                        Read More
                    </Button>
                    <Modal
                        show={show}
                        onHide={() => setShow(false)}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Description of the vehicle
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <p>
                            {product.description}
                        </p>
                        </Modal.Body>
                    </Modal>
                </div>
                <div className="containerFeatures">
                    <h3>Included Features</h3>
                    <div className="includedFeatures">
                        {product.fridge ? <div><h5>Fridge</h5><BiFridge size={40}/></div> : null }
                        {product.stove ? <div><h5>Stove</h5> <GiGasStove size={40}/></div> : null }
                        {product.kitchen ? <div><h5>Kitchen</h5> <MdKitchen size={40}/></div> : null }
                        {product.shower ? <div><h5>Shower</h5> <FaShower size={40}/></div> : null }
                        {product.waterTanks ? <div><h5>Water Tanks</h5> <GiWaterGallon size={40}/></div> : null }
                        {product.waterSystem ? <div><h5>Water System</h5> <GiKitchenTap size={40}/></div> : null }
                    </div>
                </div>
                <div className="containerCalendar">
                    <div className="productCalendar">
                        <RangeCalendar 
                            amountOfMonths={2} 
                            value={value}
                            onChange={setValue} 
                            minDate={dayjs(product.startdate).toDate()}
                            maxDate={dayjs(product.enddate).toDate()}
                            initialMonth={dayjs(product.startdate).toDate()}
                            allowLevelChange={false}
                            />
                    </div>
                </div>
            </div>          
    ))}
        <Footer />
    </div>
    )
}


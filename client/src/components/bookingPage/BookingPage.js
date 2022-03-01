import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import Axios from 'axios'
import "../../booking-page.css"
import { IoIosArrowBack } from "react-icons/io"
import { Input, Button } from '@mantine/core'
import { MdMail } from 'react-icons/md'
import { RiLockPasswordFill } from "react-icons/ri"
import { Link } from 'react-router-dom'
import HeaderBook from './HeaderBook'
import { FaApplePay, FaGooglePay, FaPaypal } from "react-icons/fa"
import { RiVisaLine, RiMastercardFill } from "react-icons/ri"
import StripePayment from "./StripePayment"


const BookingPage = () => {
    const location = useLocation();

    const [data, setData] = useState(null)
    const [loginUsername, setLoginUsername] = useState();
    const [loginPassword, setLoginPassword] = useState();
    const [priceForStay, setPriceForStay] = useState();

    useEffect(() => {
        let timeDiff = Math.abs(location.state.value[0].getTime() - location.state.value[1].getTime())
        let price = location.state.product.map(product => product.price)
        setPriceForStay(Math.ceil(timeDiff / (1000 * 3600 * 24)) * price)
    })


    
    useEffect(() => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:4000/user",
        })
        .then((res) => {
            setData(res.data)
            console.log(res.data)
        })
    }, [])

    const login = () => {
        Axios({
            method: "POST",
            data: {
                username: loginUsername,
                password: loginPassword,
            },
            withCredentials: true,
            url: "http://localhost:4000/login",
        }).then((res) => {
            setData(res.data)
        })
    }

    return (
        <div>
            <HeaderBook />
            <div className="containerBooking">
                    <div style={{display: "flex"}}>
                        <IoIosArrowBack size={40} className="arrowBack" /> 
                        <h2>Confirm and pay</h2>
                    </div>
                </div>
            <div className="productBook">
                {location.state.product.map((product, i) => (
                <>
                    <div className="productBookInfo">
                        <img className="productBookImg" src={`http://localhost:4000/${product.images[0]}`} />
                        <div>
                            <h5>{product.title}</h5>
                            <h6>{product.price} dkk / nat</h6>
                        </div>
                    </div>
                    <div className="priceInfoBook">
                        <h5 className="mb-3">Price Information</h5>
                        <div className="priceInfo">
                            <p>Price X days</p>
                            <p>{priceForStay}</p>
                        </div>
                        <div className="priceInfo">
                            <p>Service Price</p>
                            <p>{priceForStay*0.1}</p>
                        </div>
                        <div className="priceInfo">
                            <p>Final Cost</p>
                            <p>{priceForStay + priceForStay*0.1}</p>
                        </div>
                    </div>
                </>
                ))}
            </div>
            <div className="bookingInfo">
                <h4>Your Adventure</h4>
                <div className="bookingDates">
                    <h5>Dates</h5>
                    <div className="datesInfo">
                        {!location.state ? <p>No Date</p> : <p>{String(location.state.value[0].toLocaleDateString())} - {String(location.state.value[1].toLocaleDateString())}</p>}
                        <p>Edit Dates</p>
                    </div>
                </div>
                    {!data 
                        ? 
                        <div>
                            <h5 className="mb-4">Log In or Register to book </h5> 
                            <Input
                                icon={<MdMail />}
                                placeholder="Your email"
                                radius="xs"
                                radius="lg"
                                size="md"
                                onChange={e => setLoginUsername(e.target.value)}
                            />
                            <br />                            
                            <Input
                                icon={<RiLockPasswordFill />}
                                placeholder="Your password"
                                radius="xs"
                                radius="lg"
                                size="md"
                                onChange={e => setLoginPassword(e.target.value)}
                            />
                            <Link to="" style={{fontSize: "12px", color: "#6F2DA8"}}>Haven't got an account? Register here</Link>
                            <br />
                            <Button onClick={login} className="mt-4 w-100" variant="gradient" gradient={{ from: 'grape', to: 'pink', deg: 35 }} radius="lg" size="md">
                                Continue
                            </Button>                          
                        </div>
                        : 
                        <div>
                            <div className="bookNowWith">
                                <h5>Book now with</h5>
                                <div>
                                    <FaApplePay className="payIcons" size={40} />
                                    <FaGooglePay className="payIcons" size={40} />
                                    <FaPaypal className="payIcons" size={20} />
                                    <RiMastercardFill className="payIcons" size={30} />
                                    <RiVisaLine className="payIcons" size={40} />
                                </div>
                            </div>
                            <StripePayment />
                        </div>
                    }
            </div>
        </div>
    )
}

export default BookingPage

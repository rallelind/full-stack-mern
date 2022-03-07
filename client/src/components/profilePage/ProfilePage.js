import Axios from "axios"
import { useEffect, useState } from "react"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import { Link } from "react-router-dom"
import ImageSlider from "../dashboard/ImageSlider"
import "../../profile-page.css"
import { Button } from '@mantine/core';
import { useNavigate } from "react-router";
import { BsCalendarCheck } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";
import { BiEdit } from "react-icons/bi"
import { Modal } from "react-bootstrap"


const ProfilePage = () => {

    const [userProduct, setUserProduct] = useState([])
    const [modalShow, setModalShow] = useState(false);


    let navigate = useNavigate();

    const routeChange = () => {
        let path = "/product/upload";
        navigate(path)
    } 

    useEffect(() => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:4000/profile/product",
        })
        .then((res) => {
            setUserProduct(res.data.userProduct)
            console.log(res.data.userProduct)
        })
    }, [])

    const deleteProduct = (props) => {
        Axios({
            method: "DELETE",
            withCredentials: true,
            url: `http://localhost:4000/api/product/deleteproduct/${props}`,
        }).then((res) => {
            console.log("removed product")
        }).catch((error) => {
            console.log(error)
        }).finally(() => {
            window.location.reload()
        })
    }



    return (
        <div>
            <Header bg="light"/>
            <div className="introProfile">
                <Button className="rentBtn" color="dark" radius="xl" size="lg" onClick={routeChange}>
                    Start Today
                </Button>          
                <div className="profilepageFont">
                    <h2>Rent Out Your Van</h2>
                    <h3>You can start renting out your van today, just click the button</h3>
                </div>
            </div>
            <div className="reservations">
                <div className="centerContainer">
                    <h4>You Haven't Got Any Reservations Yet...</h4>
                    <div className="reserveIcon">
                        <BsCalendarCheck size={50} />
                    </div>
                </div>
            </div>
            <div id="postedProducts">
            <h3 className="h3">Your Posted Vans</h3>
            {userProduct.length < 1 ? <div><p>You Haven't Posted Any Vans Yet</p></div> :
            userProduct.map((product, i) => (
                    <div className="containerD" key={i}>
                        <div key={i} className="cardD">
                            <TiDelete onClick={() => setModalShow(true)} style={{cursor: "pointer"}} className="deleteIcon" size={40} color="red" />
                            <Modal
                                size="sm"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                                show={modalShow}
                            >
                                <Modal.Body>
                                    <p>
                                        Are you sure you want to delete this beauty?
                                    </p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={() => deleteProduct(product._id)} color="red" radius="lg" size="md">
                                        Delete
                                    </Button>
                                    <Button onClick={() => setModalShow(false)} radius="lg" size="md">
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>

                            <Link to={`/productpage/${product._id}`}>
                            <ImageSlider className="IMGD" images={product.images} />
                            <h6>{product.price} DKK / nat</h6>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default ProfilePage

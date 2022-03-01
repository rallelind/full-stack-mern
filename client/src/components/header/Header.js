import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Login from '../loginPage/Login';
import Register from '../registerPage/Register';
import { useState, useEffect } from 'react';
import Axios from "axios";
import DropdownProfile from './DropdownProfile';

const Header = () => {

    const [data, setData] = useState(null)

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

    return (
        <>
            
            <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand href="/dashboard">Vanli</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/features">Features</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                </Nav>
                </Container>
                {data ? <DropdownProfile /> : <Login />}
                {data ? <div className="username">{data.username}</div> : <Register />}
            </Navbar>
        </>
    )
}

export default Header



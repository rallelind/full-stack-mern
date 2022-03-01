import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const HeaderBook = () => {
    return (
        <>
            <Navbar variant="gradient" gradient={{ from: 'grape', to: 'pink', deg: 35 }}>
                <Container>
                        <Navbar.Brand href="/dashboard">Vanli</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default HeaderBook

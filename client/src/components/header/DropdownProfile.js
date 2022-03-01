import React from 'react'
import UserInfoIcon from '@rsuite/icons/UserInfo';
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from 'react-bootstrap/Dropdown';
import Axios from 'axios';



const DropdownProfile = () => {

    const handleLogout = () => {
        Axios({
            method: "POST",
            withCredentials: true,
            url: "http://localhost:4000/logout",
        })
        .then((res) => {
            console.log(res)
        })
    }

    return (
        <DropdownButton id="dropdown-basic-button" drop="start" title={ <UserInfoIcon /> }>
            <Dropdown.Item href="/profilepage">View Profile</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item onClick={handleLogout} href="/">Log Out</Dropdown.Item>
        </DropdownButton>
    )
}

export default DropdownProfile

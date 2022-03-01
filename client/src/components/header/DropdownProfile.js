import React from 'react'
import UserInfoIcon from '@rsuite/icons/UserInfo';
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from 'react-bootstrap/Dropdown';



const DropdownProfile = () => {
    return (
        <DropdownButton id="dropdown-basic-button" drop="start" title={ <UserInfoIcon /> }>
            <Dropdown.Item href="/profilepage">View Profile</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
    )
}

export default DropdownProfile

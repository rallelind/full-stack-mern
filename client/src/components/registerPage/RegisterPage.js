import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import "../../login.css"
import Isvan from "../../imgs/isvan.jpeg"
import Isvan2 from "../../imgs/isvan2.jpeg"

const RegisterPage = () => {

    const [registerUsername, setRegisterUsername] = useState()
    const [registerPassword, setRegisterPassword] = useState()
    let navigate = useNavigate();

    const register = () => {
        Axios({
            method: "POST",
            data: {
                username: registerUsername,
                password: registerPassword,
            },
            withCredentials: true,
            url: "http://localhost:4000/register",
        }).then((res) => { 
            console.log(res)
            if (res.data === "User Already Exists") {
                navigate("/register");
            } else {
                navigate("/login");
            }
        })
    }

    return (
        <div id="login">
            <img src={Isvan} alt="isvan" className="isvan" />
            <img src={Isvan2} alt="isvan" className="isvan2" />
            <div id="firstText2">
                <h1>Register</h1>
                <div className="form-group">
                    <label>Email address</label><br/>
                    <input className="form-control" placeholder="username" onChange={e => setRegisterUsername(e.target.value)} /><br/>
                </div>
                <div className="form-group">
                    <label>Password</label><br/>
                    <input className="form-control" placeholder="password" onChange={e => setRegisterPassword(e.target.value)} /><br/>
                </div>
                <button onClick={register} className="btn btn-primary">Register</button>
            </div>
        </div>
    )
}

export default RegisterPage

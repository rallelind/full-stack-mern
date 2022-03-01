import { useState } from "react";
import Axios from "axios";
import Isvan from "../../imgs/isvan.jpeg";
import Isvan2 from "../../imgs/isvan2.jpeg";
import { useNavigate } from "react-router-dom";
import "../../login.css";

const LoginPage = () => {

    const [loginUsername, setLoginUsername] = useState();
    const [loginPassword, setLoginPassword] = useState();
    let navigate = useNavigate();

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
            console.log(res)
            if (res.data === "No user exists") {
                navigate("/login");
            } else {
                navigate("/dashboard");
            }
        })

    }

    
    return (
        <div>
            <img src={Isvan} alt="isvan" className="isvan" />
            <img src={Isvan2} alt="isvan" className="isvan2" />
            <div id="firstText2">
                <h1>Login</h1>
                <div className="form-group">
                    <label>Email address</label><br/>
                    <input className="form-control" placeholder="username" onChange={e => setLoginUsername(e.target.value)}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div><br/>
                <div className="form-group">
                    <label>Password</label><br/>
                    <input className="form-control" placeholder="password" onChange={e => setLoginPassword(e.target.value)}/><br/>
                </div>
                <button 
                    className="btn btn-primary"
                    onClick={login}
                >
                    Login
                </button>
            </div>
        </div>
    )
}

export default LoginPage

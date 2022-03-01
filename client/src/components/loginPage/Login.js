import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
    
    let navigate = useNavigate();
    const routeChange = () => {
        let path = "/login";
        navigate(path)
    }

    return (
        <Button 
            onClick={routeChange}
            variant="primary"
        >
            Login
        </Button>
    )
}

export default Login

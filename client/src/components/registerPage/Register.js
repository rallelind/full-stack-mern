import Button from "react-bootstrap/Button"
import { useNavigate } from "react-router-dom";

const Register = () => {
    let navigate = useNavigate()
    const routeChange = () => {
        let path = "/register";
        navigate(path)
    }

    return (
        <Button 
            variant="primary"
            onClick={routeChange}
        >
            Register
        </Button>
    )
}

export default Register


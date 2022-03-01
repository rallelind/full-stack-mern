import PropTypes from "prop-types"
import Buttons from "react-bootstrap/Button"



const Button = ({ color, onClick, text }) => {
    return (
        <Buttons
            style={{ backgroundColor: color }}
            className="btn"
            onClick={onClick}
        >
            {text}
        </Buttons>
    )
}

Buttons.defaulprops = {
    color: "steelBlue"
}

Buttons.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button

import { useState } from "react"
import { PropTypes } from "prop-types"
// const newMessage = "Hola Mundo!";
// const getResult = (a, b) => {
//     return a + b; 
// };

export const FirstApp = ({ title, value }) => {
    const [count, setCount] = useState(value);

    const handleClick = () => {
        // setCount(count + 1);
        setCount( (c) => count + 1);
    }
    return( 
    <>
        <h1>{count }</h1>
        <button onClick={ handleClick}>+1</button>
        <button>+1</button>
        <button>Reset</button>
    </>
    )
}

FirstApp.propTypes = {
    value: PropTypes.number.isRequired
}

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
    const handleSubstract = () => setCount( (c) => count - 1);
    const handleReset = () => setCount(value);
    return( 
    <>
        <h1>Counter App</h1>
        <h2>{count }</h2>
        <button onClick={ handleClick}>+1</button>
        <button onClick={ handleSubstract}>-1</button>
        <button onClick={ handleReset}>Reset</button>
    </>
    )
}

FirstApp.propTypes = {
    value: PropTypes.number.isRequired
}

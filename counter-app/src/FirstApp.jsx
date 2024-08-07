import { PropTypes } from "prop-types"
// const newMessage = "Hola Mundo!";
// const getResult = (a, b) => {
//     return a + b; 
// };

export const FirstApp = ({ title, value }) => {

    return( 
    <>
        <h1>{value }</h1>
        <div>Mensaje numero uno</div>
        <div>Mensaje Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, aspernatur.</div>
        <div>{ 1 + 1 }</div>
    </>
    )
}

FirstApp.propTypes = {
    value: PropTypes.number.isRequired
}

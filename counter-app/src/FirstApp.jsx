
const newMessage = "Hola Mundo!";
const getResult = (a, b) => {
    return a + b; 
};

export const FirstApp = () => {

    return( 
    <>
        <h1>{getResult(2, 5)   }</h1>
        <div>Mensaje numero uno</div>
        <div>Mensaje Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, aspernatur.</div>
        <div>{ 1 + 1 }</div>
    </>
    )
}

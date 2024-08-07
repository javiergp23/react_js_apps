import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { HelloWordApp } from "./HelloWordApp";
function App(){
    return(<HelloWordApp />);
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <StrictMode>
        <HelloWordApp />
    </StrictMode>
);
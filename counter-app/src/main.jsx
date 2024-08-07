import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { HelloWordApp } from "./HelloWordApp";
import { FirstApp } from "./FirstApp";

function App(){
    return(<HelloWordApp />);
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <StrictMode>
        <FirstApp value={123} />
    </StrictMode>
);
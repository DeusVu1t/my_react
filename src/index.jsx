import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./Header"

window.addEventListener('load', (event) => {
    ReactDOM.render(<Header  />, document.getElementById( 'react_root'));
});

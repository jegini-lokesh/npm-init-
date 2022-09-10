import React from "react";
import ReactDom from "react-dom";
import Amma from "./murali.js"

function Loki() {
    return <h1> i create my own src folder by delete old one</h1>
}

//ReactDom.render(<Loki/>,document.getElementById('root'));
const root=ReactDom.createRoot(document.getElementById('root'));
root.render(
//  <Loki/>, //how to render multible components
<Amma/>
);

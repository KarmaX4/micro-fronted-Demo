import React from "react";
import ReactDOM from "react-dom";
 import Toogle from "remote2/Toogle"
 import {ColorProvider,useColor} from "store/store"
import "./index.css";

const App = () => {
  const {color} = useColor()
  
  return (
  <>
  <div className="container" >
    <div>Container Page</div>
   color: <span style={{color:`${color}`,fontSize:"38px",borderRadius:"2px"}}>{color.toUpperCase()}</span>
    <Toogle /> 
    </div>
  </>
);
}
ReactDOM.render(<ColorProvider >
<App /></ColorProvider>, document.getElementById("app"));

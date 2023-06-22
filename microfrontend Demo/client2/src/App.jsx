import React from "react";
import ReactDOM from "react-dom";
import Toogle from "./Toogle";
 import {ColorProvider} from "store/store"
// import "./index.css";

const App = () => (
<ColorProvider>
  <div className="container">
    <div>Name: client2</div>
    <Toogle/>
  </div>
  </ColorProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));

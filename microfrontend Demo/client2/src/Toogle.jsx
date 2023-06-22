import React from "react";
 import {useColor } from "store/store";
const Toogle = () => {
  const {red,blue} = useColor()

  const style = {
    marginLeft:"120px"
  };
  return (
    <>
      <div style={style}>
        <button
        style={{padding:"10px 25px 10px 24px",backgroundColor:"red",opacity:"0.9",borderRadius:"10px"}}
          onClick={red}
        >
          Red
        </button>
        <button
         style={{padding:"10px 25px 10px 24px",backgroundColor:"blue",opacity:"0.9",borderRadius:"10px"}}
          onClick={blue}
        >
          Blue
        </button>
      </div>
    </>
  );
};

export default Toogle;

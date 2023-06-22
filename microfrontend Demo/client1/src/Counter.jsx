import React from "react";

export const Counter = () => {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <>
    <div style={{border:"2px solid black"}}>
        <p>Client 1</p>
     <p> Counter: {count}</p>
     <div>
      <button onClick={increment}>+1 increment</button>
      <button onClick={decrement}>-1 decrement</button>
      </div>
      </div>
    </>
  );
};

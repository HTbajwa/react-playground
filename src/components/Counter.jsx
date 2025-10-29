import React, { useEffect, useMemo, useReducer, useRef, useState } from "react";
const reducer = (state, action) => {
  if (action.type == "increment") {
    return state + 1;
  }
};
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  const [count, setcount] = useState(0);
  const [inputValue, setinputValue] = useState("");
  const [unitprice, setunitprice] = useState(15);
  const total = 1.1 * unitprice;
  const [calc, setcalc] = useState(2);
  //for better performance
  const calculation = useMemo(() => calc * 100, [calc]);

  console.log(total);
  //useReference
  const focusinput = useRef("");
  //useEffect
  useEffect(() => {
    console.log("count called");
    focusinput.current.focus();
  }, []);
const arr=Array.from({length:100},(_,i)=>i+1)
console.log(arr)
  return (
    <div>
      {/* <h1>{count}</h1> */}
      <h2>Calculation:{calc}</h2>
      <h3>{calculation}</h3>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => setcount(count - 1)}>Decrement</button>
      <button onClick={() => setcount(0)}>Reset</button>

      <h1>Text Input and display user typing</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setinputValue(e.target.value)}
        ref={focusinput}
      />
      <h1>{inputValue}</h1>
      <h1>total price = quantity * unitPrice</h1>
      <h2>Here is total:{total}</h2>
    </div>
  );
};

export default Counter;

import React, { useState, useCallback } from "react";
import ChildComponent from "./ChildComponent";
import Childs from "./Childs";

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");

  // Try with and without useCallback:
  // ❌ Without useCallback:
  // const handleClick = () => console.log("Clicked!");

  // ✅ With useCallback:
  const handleClick = useCallback(() => console.log("Clicked!"), []);

  console.log("🔵 Parent rendered");

  return (
    <div>
      <h1 style={{ color }}>Parent Count: {count}</h1>
      <button onClick={() => setCount(c => c + 1)}>Increment Count</button>
      <button onClick={() => setColor(color === "red" ? "blue" : "red")}>
        Toggle Color
      </button>

      <Childs onClick={handleClick} />
    </div>
  );
};

export default ParentComponent;

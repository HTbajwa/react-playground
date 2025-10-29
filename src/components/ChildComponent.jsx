import React, { useState } from "react";

const ChildComponent = ({ color,handleClick }) => {
    console.log("child rendered")
  const task = {
    tasks: "this is my task",
  };
  const [newtask, setnewtask] = useState("");

  const eventhandler = () => {
    const thenew = "hi it is new task";
    const taskss = { ...task, tasks: thenew };
    setnewtask(taskss);
  };
  return (
    <div>
      <h1 className={color}> Hadia</h1>
      {/* A to-do app, add new tasks using useState() — make sure to use immutable updates. */}

      <h1>{task.tasks}</h1>
      <button onClick={eventhandler}>Add task</button>

      <h1>{newtask.tasks}</h1>
      <button onClick={handleClick}>HandleClick</button>
    </div>
  );
};

export default React.memo(ChildComponent);

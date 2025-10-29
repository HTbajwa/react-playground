import React from "react";
import { useToogle } from "../customHooks/useToogle";

const UserCard = ({user}) => {
    //props used
    const {name,email}=user
    const [toggle,handleToggle]=useToogle(false)
  return (
    <div>
      <button onClick={handleToggle}>Toggle Button</button>
      {
        toggle ? <h1>hi toggle button</h1> : <h1>bye toggle button</h1>
      }
      <h1>Hi I am {name} and my gmail is {email}</h1>
    </div>
  );
};

export default UserCard;

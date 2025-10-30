import React from "react";
import { useToogle } from "../customHooks/useToogle";
import { useGetUsersQuery } from "../store/api/UserApi";

const UserCard = ({user}) => {
    //props used
    const {name,email}=user
    const [toggle,handleToggle]=useToogle(false)
   const{data,error,isLoading}= useGetUsersQuery(1)
   console.log("fetch-data",data)
  return (
    <div>
      <button onClick={handleToggle}>Toggle Button</button>
      {
        toggle ? <h1>hi toggle button</h1> : <h1>bye toggle button</h1>
      }
      <h1>Hi I am {name} and my gmail is {email}</h1>

      <h1>Users</h1>
     {/* <ul>
        {data?.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> – {user.email}
          </li>
        ))}
      </ul> */}
      {data?.name}

    </div>
  );
};

export default UserCard;

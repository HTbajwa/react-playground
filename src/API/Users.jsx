import React, { useEffect } from "react";

const Users = () => {
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => {
        const d=data.results
        // data.results[0].name.first
        d.forEach(element => {
         
            console.log(element.name.first)
          
        });
       
      });
  }, []);

  return (
    <div>
      {/* Create a component that:
Fetches 10 random users from https://randomuser.me/api/?results=10
Displays their name, email, and picture
Shows “Loading…” before data appears
If the API fails, shows an error message */}
    </div>
  );
};

export default Users;

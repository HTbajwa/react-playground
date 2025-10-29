import React, { useState } from "react";

const MultipleInputForm = () => {
  const [dynamic, setdynamic] = useState({
    name: "",
    age: "",
    country: "",
  });
  // const [name, setname] = useState("")
  // const [age, setage] = useState("")
  // const [country, setcountry] = useState("")
  const eventhandle = (e) =>
    setdynamic({
      ...dynamic,
      [e.target.name]: e.target.value,
    });
  const handleChange = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    // setname("")
    // setage("")
    // setcountry("")
    setdynamic({
      name: "",
      age: "",
      country: "",
    });
    console.log(dynamic);
  };

  return (
    <div>
      <h1>form</h1>
      <form onSubmit={handleChange}>
        <label htmlFor="">Username</label>
        <input
          onChange={eventhandle}
          value={dynamic.name}
          name="name"
          type="text"
        />
        <label htmlFor="">Age</label>
        <input
          onChange={eventhandle}
          value={dynamic.age}
          name="age"
          type="text"
        />
        <label htmlFor="">Country</label>
        <input
          onChange={eventhandle}
          value={dynamic.country}
          name="country"
          type="text"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MultipleInputForm;

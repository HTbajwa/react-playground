import React from "react";
import UserCard from "./components/UserCard";
import Counter from "./components/Counter";
import ParentComponent from "./components/ParentComponent";
import Theme from "./context/Theme";
import MultipleInputForm from "./components/MultipleInputForm";
import RHF from "./components/RHF";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/pages/Home";
import Contact from "./Routes/pages/Contact";
import About from "./Routes/pages/About";
import Navbar from "./Routes/components/Navbar";
import UserProfile from "./Routes/pages/UserProfile";
import UserDetails from "./Routes/pages/UserDetails";
import Users from "./API/Users";
import Pagination from "./components/Pagination";
import ReduxMiniVersion from "./components/ReduxMiniVersion";

const App = () => {
  const user = {
    name: "hadia",
    email: "tariqhadia12@gmail.com",
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          {/* <Route path="/contact" element={
  <ProtectedRoute>
    <Contact />
  </ProtectedRoute>
} ></Route> */}
          <Route path="userProfile" element={<UserProfile />}></Route>
          <Route path="/user/:id" element={<UserDetails />}></Route>
          <Route path="*" element={<h2>Page not found</h2>}></Route>
        </Routes>
        <UserCard user={user} />
        <Navbar />
        <h1>Counter Increment,Decrement and Reset</h1>
        <Counter />
        <ParentComponent />
        <Theme />
        <MultipleInputForm />
        <h1>React Hook Forms and Validation with Yup</h1>
        <RHF />
        <UserProfile />
        <Users />
        <Pagination />
        <ReduxMiniVersion />
      </BrowserRouter>
    </div>
  );
};

export default App;

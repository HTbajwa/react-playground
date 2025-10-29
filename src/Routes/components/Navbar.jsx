import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <nav>
            {/* //isActive is given by the react router dom */}
            <NavLink to="/" style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}>
       Home
      </NavLink>
            <br />
             <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}>
        About
      </NavLink>
      <br />
                    <NavLink to="/contact" style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}>
      Contact
      </NavLink>
        </nav>
    </header>
  )
}

export default Navbar

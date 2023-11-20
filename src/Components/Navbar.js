import React from 'react'
import './CSS/Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <header>
        <div className='Nav'>
         <NavLink to={"/"}  className="navitem">Home </NavLink>
        <NavLink to={"./advertise"} className="navitem">Promote</NavLink>

        </div>
        </header>
      
    </div>
  )
}

export default Navbar

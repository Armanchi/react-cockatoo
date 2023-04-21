import React from 'react'
import { Link } from "react-router-dom";
import '../styles/Navbar.css'



const Navbar = () => {

  
  return (
    <div className='navContainer'>
    <nav className='Navbar'>
      <ul className='navbarList'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/todolist'>Todo List</Link>
        </li>
        <li>
            <Link to='/notes'>Notes</Link>
        </li>
        <li>
            <Link to='/new'>New List</Link>
        </li>
      </ul>
    </nav>



      {/* <select> 
        <option value="" selected="selected">Select</option> 
        <option value="/">Home</option> 
        <option value="/todolist">Todo List</option> 
        <option value="/notes">Notes</option> 
        <option value="/new">New List</option> 
      </select> */}
    
    </div>
  );
};


export default Navbar;

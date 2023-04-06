import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='Navbar'>
      <ul>
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
            <Link to='new'>New List</Link>
        </li>
      </ul>
    </nav>
  );
};


export default Navbar;

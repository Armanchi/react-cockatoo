import React from 'react'
import Navbar from './Navbar'
import '../styles/Home.css'
import { Link } from "react-router-dom";
import '../shared/globalStyles.css'
import {FaReact } from "react-icons/fa";


const Home = () => {
  return (
    <>
    <Navbar />
    <div className='intro'>
        <div className='titleContainer'>
        <h1 className='Title'>About</h1>
        </div>
    </div>

    <div className='IntroContainer'>
            <p>
             A Todo List application built with React {<FaReact />} in order to keep
             track of daily tasks.
            </p> 
            <div className='ButtonContainer'>
            <button> <Link to='/todolist'>Get Started</Link> </button>
            </div>
    </div>
    
   {/* <div className='imgContainer'> 
      <img src={'/assets/.jpg'} style={{width: 500, height: 400}} alt='todolist' className='HomeImg'/>
     </div>  */}
    </>
  )
}


export default Home;
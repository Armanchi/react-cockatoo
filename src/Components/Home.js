import React from 'react'
import Navbar from './Navbar'
import '../styles/Home.css'
import { Link } from "react-router-dom";
import '../shared/globalStyles.css'
import Footer from './Footer';

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
             A Todo List application built with React in order to keep
             track of daily tasks.
            </p> 

            <button> <Link to='/todolist'>Get Started</Link> </button>
    </div>
    <Footer />
    </>
    
  )
}


export default Home;
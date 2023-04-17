import React from 'react'
import Navbar from './Navbar'
import '../styles/Home.css'

const Home = () => {
  return (
    <>
    <Navbar />
    <div className='intro'>
        <div>
        <h1 className='Title'>Welcome!</h1>
        </div>
    </div>

        <div className='IntroContainer'>
            <p>
             A Todo List application built with React in order to keep
             track of daily tasks.
            </p>
            
        
        
    </div>
    </>
  )
}


export default Home;
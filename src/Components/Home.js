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
    </>
  )
}


export default Home;
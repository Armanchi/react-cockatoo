import React from 'react'
import Navbar from './Navbar'
import '../styles/Home.css'
import { Link } from "react-router-dom";
import '../shared/globalStyles.css'
import Footer from './Footer';
import { BsFolder, BsCardList } from "react-icons/bs";
import { FaReact } from "react-icons/fa";

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
             A Todo list app built with {<FaReact />} React. <br />
             View, create, and organize your every day tasks in the Todo List.
             Notes can also be created and saved in the Notes section.
             <br />
            </p> 
            <div className='buttonContainer'>
            <button> <Link to='/todolist'>{<BsCardList />}</Link> </button>
           
            <button><a href='https://github.com/Armanchi/react-cockatoo'>{<BsFolder />}</a></button>
            </div>
    </div>
    <Footer />
    </>
    
  )
}


export default Home;
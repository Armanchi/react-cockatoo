import React from 'react'
import '../styles/Home.css'
import { Link } from "react-router-dom";
import '../shared/globalStyles.css'
import { BsFolder, BsCardList } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import Footer from './Footer';

const Home = () => {
  return (
    <>
    <div className='intro'>
        <div className='titleContainer'>
        <h1 className='Title'>About</h1>
        </div>
    </div>

    <div className='IntroContainer'>
            <p>
             A Todo list app built with {<FaReact />} React. <br />
             View, create, and organize your every day tasks in the Todo List.
             Create and save thoughts or ideas in the Notes section.
             <br />
            </p> 
            <div className='buttonContainer'>
            <button> <Link to='/todolist'>{<BsCardList size={'20px'} />}</Link> </button>
           
            <button><a href='https://github.com/Armanchi/react-cockatoo'>{<BsFolder size={'20px'} />}</a></button>
            </div>
    </div>
    <Footer />
    </>
    
  )
}


export default Home;
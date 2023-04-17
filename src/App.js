import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './shared/globalStyles.css'
import Navbar from './Components/Navbar';
import Notes from './Components/Notes/Notes';
import Home from './Components/Home';
import TodoContainer from './Components/TodoContainer';
import NewTodoList from './Components/NewTodoList';

const App = () => {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/'element={ 
          <>
            <Home />
          </>
          }></Route>

      <Route exact path='/todolist' 
      element={
          <>
          <TodoContainer />
          </>
      }></Route>

         <Route path='/notes'element={ 
          <>
            <Notes />
          </>
          }></Route>

          <Route path='/new'element={ 
            <>
            <Navbar />
            <NewTodoList />
            </>
          }></Route>


          </Routes>
        
    </BrowserRouter>
  );
}




export default App;

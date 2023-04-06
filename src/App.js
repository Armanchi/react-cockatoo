import React, {useState, useEffect} from 'react';
import TodoList from './Components/TodoList';
import AddTodoForm from './Components/AddTodoForm'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './shared/globalStyles.css'
import './styles/TodoList.css'
import Navbar from './Components/Navbar';


const App = () => {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem('savedTodoList') || '[]')
  );
  
  useEffect(() => {
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    }) 
      .then((response) => response.json())
      .then(result => {
        setTodoList(result.records);
        setIsLoading(false)
      })
    }, []);

    const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    if(!isLoading) {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  const addTodo = newTodo => {
    setTodoList([todoList, newTodo])
  }
  const removeTodo = (id) => {
    const newTodoList = todoList.filter((todo) =>
      id !== todo.id);
    setTodoList(newTodoList)
  }; 

  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' 
      element={
          <>
          <Navbar />
          <div className='TodoList'>
            <h1 className= "Title">Todo List</h1>
            <AddTodoForm onAddTodo={addTodo}/>
            {isLoading ? (
            <p>Loading...</p>
              ) : (
            <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
        </div>
          </>
      }></Route>

          <Route path='/new'element={ 
            <h1>New Todo List</h1>
          }></Route>

          </Routes>
    </BrowserRouter>
  );
}



export default App;

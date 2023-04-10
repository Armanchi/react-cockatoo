import React, {useState, useEffect} from "react";
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'
import Navbar from "./Navbar";
import '../styles/TodoList.css'


const TodoContainer = () => {
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
  
    const addTodo = (newTodo) => {
      setTodoList([...todoList, newTodo])
    }
    const removeTodo = (id) => {
      const newTodoList = todoList.filter((todo) =>
        id !== todo.id);
      setTodoList(newTodoList)
    };

    return(
        <>
        <Navbar />
        <div className='TodoListTitleContainer'>
        <h1 className= "Title">Todo List</h1>
        </div>
        <div className='TodoListContainer'>
        <AddTodoForm onAddTodo={addTodo}/>
        {isLoading ? (
        <p>Loading...</p>
          ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
  )}
  </div>
      </>
    )
}

export default TodoContainer;
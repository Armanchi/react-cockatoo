import React, {useState, useEffect} from "react";
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'
import Navbar from "./Navbar";
import '../styles/TodoList.css'


const TodoContainer = () => {
    const [todoList, setTodoList] = useState(
      JSON.parse(localStorage.getItem('savedTodoList') || '[]')
    );
    const [isLoading, setIsLoading] = React.useState(true);

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
  
   
  
    useEffect(() => {
      if(!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
      }
    }, [todoList, isLoading]);
  
    // const addTodo = (newTodo) => {
    //   setTodoList([...todoList, newTodo])
    // }
    
    const addTodo = async (newTodo) => {
      const title = newTodo[0].title;
      const postBody = {
        fields: {
          Title: title,
        },
        typecast: true,
      };
      const options = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postBody),
      };
      let todo = {};
      await fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`, options)
        .then((response) => response.json())
        .then((data) => {
          todo.id = data.id;
          todo.title = data.fields.Title;
        });
      setTodoList([...todoList, newTodo]);
    };

    // const removeTodo = (id) => {
    //   const newTodoList = todoList.filter((todo) =>
    //     id !== todo.id);
    //   setTodoList(newTodoList)
    // };
      const removeTodo = async (id) => {
    //DELETE 
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    };
    await fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/${id}`,
      options
    );
    setTodoList(todoList.filter((todoList) => todoList.id !== id));
  };

    return(
        <>
        <Navbar />
        <div className='TodoListTitleContainer'>
        <h1 className= "IntroTitle">Todo List</h1>
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
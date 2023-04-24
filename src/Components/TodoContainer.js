import React, {useState, useEffect} from "react";
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'
import Navbar from "./Navbar";
import '../styles/TodoList.css'
import { BsArrowDownUp } from "react-icons/bs";
import { BsCalendar2Week } from "react-icons/bs";
import { BsBriefcase } from "react-icons/bs";
import { CgSmile } from "react-icons/cg";


const TodoContainer = () => {
    const [todoList, setTodoList] = useState(
      JSON.parse(localStorage.getItem('savedTodoList') || '[]')
    );
    const [isLoading, setIsLoading] = useState(true);
    // const [ascending, setAscending] = useState(false);

    useEffect(() => {
      fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default?view=Grid%20view`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }) 
        .then((response) => response.json())
        .then(response => {
          setTodoList(response.records);
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
    
    const addTodo = (newTodo) => {
      //POST
      const body = {
        fields: {
          Title: newTodo.title,
        },
      };
      const options = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      };
      const todo = {};
      fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/`, options)
        .then((response) => response.json())
        .then((data) => {
          todo.id = data.id;
          todo.title = data.fields.Title;
          setTodoList([...todoList, todo]);
        }); 
    };

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
          <div className='keyContainer'>
            <div className='keyTitle'>
                <h2 className='keyTitle'>Key:</h2>
            </div>
              <button className='sortButton'>
                {<BsArrowDownUp />}
              </button>
              <button className='sortButton'>
                {<BsCalendar2Week />}
              </button>
              <button className='sortButton'>
                {<BsBriefcase />}
              </button>
              <button>
                {<CgSmile />}
              </button>
          </div>
      </>
    )
}

export default TodoContainer;
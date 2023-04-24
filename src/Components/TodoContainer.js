import React, {useState, useEffect} from "react";
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'
import Navbar from "./Navbar";
import '../styles/TodoList.css'
import { CgSmile } from "react-icons/cg";
import { BsArrowDownSquare } from "react-icons/bs";
import { BsArrowUpSquare } from "react-icons/bs";
import { BsCalendarWeek } from "react-icons/bs";
import { BsBriefcase } from "react-icons/bs";


const TodoContainer = () => {
    const [todoList, setTodoList] = useState(
      JSON.parse(localStorage.getItem('savedTodoList') || '[]')
    );
    const [isLoading, setIsLoading] = useState(true);
    const [isAscending, setIsAscending] = useState(true);
	

    useEffect(() => {
      fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default?view=Grid%20view&sort[0][field]=Title&sort[0][direction]=asc`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }) 
        .then((response) => response.json())
        .then(result => {
          const Sorted = isAscending ? 1 : -1;
          result.records.sort((objectA, objectB) => {
            if (objectA.fields.Title < objectB.fields.Title) {
              return -Sorted;
            }
            if (objectA.fields.Title > objectB.fields.Title) {
              return Sorted;
            }
            return 0;
            })
          setTodoList(result.records);
          setIsLoading(false)
        })
      }, [isAscending]);

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
      fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/?view=Grid%20view&sort[0][field]=Title&sort[0][direction]=asc`, options)
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
  //sort
  const Sorted = () => {
    setIsAscending(!isAscending);
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
        <div>
          <h2>Key:</h2>
        </div>
        <div>
          <button onClick={Sorted}>
              {isAscending ? <BsArrowUpSquare /> : <BsArrowDownSquare />}
          </button>
        </div>
        <div>
          <button>
              {<BsCalendarWeek />}
          </button>
        </div>
        <div>
          <button>
              {<BsBriefcase />}
          </button>
        </div>
        <div>
          <button>
              {<CgSmile />}
          </button>
        </div>
      </>
    )
}


export default TodoContainer;
import React, {useState, useEffect} from "react";
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'
import Navbar from "./Navbar";
import '../styles/TodoList.css'
// import { CgSmile } from "react-icons/cg";
import { BsArrowUpShort,  BsArrowDownShort} from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";


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
            const todos = result.records.map((todo) => {
              return {id:todo.id, title:todo.fields.Title}
            })
          console.log(todos)
          setTodoList(todos);
          setIsLoading(false)
        })
      }, [isAscending]);

    useEffect(() => {
      if(!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
      }
    }, [todoList, isLoading]);

    const addTodo = (title) => {
      //POST
      fetch(
        `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
            "Content-type": "application/json"
          },
          body: JSON.stringify({"fields":{"Title":title.title}})
  
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setTodoList([...todoList, {id:data.id, title:data.fields.Title}]);
          console.log(data)
        })
    };

    const removeTodo = async (id) => {
    //DELETE 
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
    };
    await fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/${id}`,
      options
    );
    setTodoList(todoList.filter((todoList) => todoList.id !== id));
  };
//TODO: Create PUT req. and sort by date toggle btn

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
        <div className='allContainer'>
        <div className='TodoListContainer'>
          <AddTodoForm onAddTodo={addTodo}/>
            {isLoading ? (
              <p>Loading...</p>
              ) : (
          <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
   )}
        <div className="keyContainer">
          {/* <h2>Key:</h2> */}
        
        <div className="buttonContainer">
          <button onClick={Sorted}>
              {isAscending ? < BsArrowUpShort size={'15px'} /> : <BsArrowDownShort size={'15px'}/>}
              {isAscending ? 'A - Z' : 'Z - A'}
          </button>
          <button>
              {<BiCalendar size={'15px'} />}
              Date
          </button>
        </div>
        </div>
        </div>
        </div>

      </>
    )
}


export default TodoContainer;

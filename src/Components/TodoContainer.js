import React, {useState, useEffect} from "react";
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'
import '../styles/TodoList.css'
import { BsArrowUpShort,  BsArrowDownShort, BsFillJournalBookmarkFill} from "react-icons/bs";
import { Link } from "react-router-dom";

const TodoContainer = () => {
  const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`;
    const [todoList, setTodoList] = useState(
      JSON.parse(localStorage.getItem('savedTodoList') || '[]')
    );
    const [isLoading, setIsLoading] = useState(true);
    const [isAscending, setIsAscending] = useState(true);
    // const [createdDate, setCreatedDate] = useState(true);
	
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
              return {id:todo.id, title:todo.fields.Title, date:todo.fields.date}
            })
          console.log(todos);
          setTodoList(todos);
          setIsLoading(false);
        })
      }, [isAscending]);

    useEffect(() => {
      if(!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
      }
    }, [todoList, isLoading]);

    // useEffect(() => {
    //   const Sorted = createdDate ? 1 : -1;
    //   const data = [todoList];
    //   data.sort((a, b) => {
    //     if (a.fields.date < b.fields.date) {
    //       return -Sorted;
    //     }
    //     if (a.fields.date > b.fields.date) {
    //       return Sorted;
    //     }
    //     return 0;
    //     })
    //     const todos = data.records.map((todo) => {
    //       return {id:todo.id, date:todo.fields.date}
    //     })
    //   console.log(todos)
    //   setCreatedDate(todos);
    //   setIsLoading(false)
    // }, [createdDate])

    const addTodo = (title) => {
      //POST
      fetch(
        url,
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
          setTodoList([...todoList, {id:data.id, title:data.fields.Title, date:data.fields.date}]);
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
      `${url}/${id}`,
      options
    );
    
    setTodoList(todoList.filter((todoList) => todoList.id !== id));
  };



//  const onSort = () => {
//   const sorted = [createdDate].sort((a, b) => (a.fields.date > b.fields.date ? 1 : b.fields.date > a.fields.date ? -1 : 0))
//   setCreatedDate(sorted);
//  }

  //sort by asc
  const Sorted = () => {
    setIsAscending(!isAscending);
  };
//sort by createTime
// const handleSort = () => {
//   setCreatedDate(!createdDate);
// };

return(
      <>
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
        <div className="buttonContainer">
          <button onClick={Sorted}>
              {isAscending ? < BsArrowUpShort size={'15px'} /> : <BsArrowDownShort size={'15px'}/>}
              {isAscending ? 'A - Z' : 'Z - A'}
          </button>
          <button> 
            <Link to='/notes'>{<BsFillJournalBookmarkFill size={'15px'} />}Note</Link> 
          </button> 
        </div>
        </div>
        </div>
        </div>

      </>
    )
}


export default TodoContainer;

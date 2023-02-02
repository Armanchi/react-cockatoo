import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


const App = () => {
  const [todoList, setTodoList] = useState([]);
  const addTodo = (newTodo) => {
  setTodoList([...todoList, newTodo])
} 
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo}/>
      <TodoList todoList={todoList} />
    </div>
  );
}



export default App;

import React from 'react';
import TodoListItem from './TodoListItem';
import '../styles/TodoListUL.css'

const TodoList = ({ todoList, onRemoveTodo }) => {
  console.log(todoList);
  return (
    <>
      <ul className='fullTodo'>
        {todoList.map((todo) => (
      <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
        ))}
      </ul>
    </>
  );
};


export default TodoList;
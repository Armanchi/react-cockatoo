import React from 'react';
import TodoListItem from './TodoListItem';
import '../styles/TodoListUL.css'
import PropTypes from "prop-types";



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

TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func,
};

export default TodoList;
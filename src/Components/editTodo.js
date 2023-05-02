import React, { useState, useEffect } from 'react';
import { useRef } from 'react';

const EditTodo = ({ todo, onUpdateTodo, Close }) => {
  const [todoTitle, updateTitle] = useState(todo.title);

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleUpdateTodo = (e) => {
    e.preventDefault();
    const updatedTodo = {
      id: todo.id,
      title: todoTitle,
    };
    onUpdateTodo(updatedTodo, Close);
  };

  const handleCancel = () => {
    Close();
  };

  return (
    <form onSubmit={(e) => handleUpdateTodo(e)}>
      <label htmlFor="item">Editing: </label>
      <input
        ref={inputRef}
        type="text"
        value={todoTitle}
        onChange={(e) => updateTitle(e.target.value)}
      />
      <input type="submit" value="Update" />
      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
}

export default EditTodo;
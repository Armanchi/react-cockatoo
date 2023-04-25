import React from "react";
import { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import '../styles/TodoForm.css'
import { BsPin } from "react-icons/bs";
import PropTypes from "prop-types";

const AddTodoForm = ({onAddTodo}) => {
    const [todoTitle, setTodoTitle] = useState('');

    const handleTitleChange = (e) => {
        const newTodoTitle = e.target.value
        setTodoTitle(newTodoTitle)
    }
    const handleAddTodo = (e) => {
        e.preventDefault();
        onAddTodo({title: todoTitle, id: Date.now()});
        setTodoTitle('');   
    }
    return(
        <div className="FormControl">
        <form onSubmit={handleAddTodo} className="TodoForm" >
            <InputWithLabel
             label="Title"
             id="todoTitle"
             type="text"
             name="title"
             placeholder="Add new todo"
            todoTitle={todoTitle}
            handleTitleChange={handleTitleChange}
            >
            <strong>Title: </strong>
                
            </InputWithLabel> 
            <div className="ButtonContainer">
            <button type="submit" className="pinButton" disabled={todoTitle.length === 0}> {<BsPin />} </button>
            </div>
            
        </form>
        </div>
        
    )
}

AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func,
  };


export default AddTodoForm;
import React from "react";
import { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import '../styles/TodoForm.css'
import { BsPinAngle } from "react-icons/bs";

const AddTodoForm = ({onAddTodo}) => {
    const [todoTitle, setTodoTitle] = useState('');

    const handleTitleChange = (e) => {
        const newTodoTitle = e.target.value
        setTodoTitle(newTodoTitle)
    }
    const handleAddTodo = (e) => {
        e.preventDefault();
        console.log(todoTitle);
        onAddTodo({title: todoTitle, id: Date.now()});
        setTodoTitle("");   
    }
    return(
        <div className="FormControl">
        <form onSubmit={handleAddTodo} className="TodoForm" >
            <InputWithLabel
            todoTitle={todoTitle}
            handleTitleChange={handleTitleChange}
            >
                <strong>Title: </strong>
                
            </InputWithLabel> 
            <div className="ButtonContainer">
            <button type="submit" className="pinButton"> {<BsPinAngle />} </button>
            </div>
        </form>
        </div>
    )
}



export default AddTodoForm;
import React from "react";
import styles from '../styles/TodoListItem.module.css';
import { BsTrash3 } from "react-icons/bs";

const TodoListItem = ({ id, todo, onRemoveTodo, })=>{
    return (
        <>
            <li key={id} className = {styles.ListItem}>
                {todo.fields.Title}
                <button type="button" onClick={() => onRemoveTodo(todo.id)} className= {styles.RemoveButton}>
                { <BsTrash3 /> }
                </button>
            </li> 
        </>
    );
}

export default TodoListItem;
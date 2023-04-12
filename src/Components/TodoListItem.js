import React from "react";
import styles from '../styles/TodoListItem.module.css';
import { BsTrash3 } from "react-icons/bs";

const TodoListItem = ({  todo, onRemoveTodo })=>{
    return (
        <>
        <div className='liContainer'>
            <li className = {styles.ListItem}>
                    {todo.fields.Title}  
                <button type="button" onClick={() => onRemoveTodo(todo.id)} className= {styles.RemoveButton}>
                { <BsTrash3 /> }
                </button>
            </li> 
        </div>
        </>
    );
}

export default TodoListItem;
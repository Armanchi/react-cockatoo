import React from "react";
import styles from '../styles/TodoListItem.module.css';
import { BsTrash3 } from "react-icons/bs";
import PropTypes from 'prop-types';

const TodoListItem = ({  todo, onRemoveTodo })=>{
    return (
        <>
        <div className='liContainer'>
            <li className={styles.ListItem}>
                {/* <button type="checkbox">
                    
                    </button> */}

                    {todo.title}
                <div className={styles.buttonContainer}>
                    <button type="button" onClick={() => onRemoveTodo(todo.id)} className= {styles.RemoveButton}>
                        { <BsTrash3 size={'13px'} /> }
                    </button>
                </div>  
            </li> 
        </div>
        </>
    );
}

TodoListItem.propTypes = {
    todo: PropTypes.object,
    onRemoveTodo: PropTypes.func,
    onUpdateTodo: PropTypes.func,
  };

export default TodoListItem;
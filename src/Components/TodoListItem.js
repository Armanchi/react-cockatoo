import React from "react";
import styles from '../styles/TodoListItem.module.css';
import { BsTrash3 } from "react-icons/bs";
import PropTypes from 'prop-types';

const TodoListItem = ({  todo, onRemoveTodo })=>{
    // const [updateTitle, setUpdatedTitle] = useState(todo.title);

    // const inputRef = useRef();

    // useEffect(() => {
    //   inputRef.current.focus();
    // });

    // const handleUpdateTodo = (e) => {
    //     e.preventDefault();
    //     const updatedTodo = {
    //       id: todo.id,
    //       title: updateTitle,
    //     };
    //     onUpdateTodo(updatedTodo);
    //   };

    return (
        <>
        <div className='liContainer'>
            <li className={styles.ListItem} >
                {/* <input 
                ref={inputRef}
                type="checkbox"
                value={updateTitle}
                onChange={(e) =>  setUpdatedTitle(e.target.value)}/> */}

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
import React from 'react';
import PropTypes from "prop-types";

const InputWithLabel = ({todoTitle, handleTitleChange, children}) => {
  const inputRef = React.useRef();
  React.useEffect(() => {
      inputRef.current.focus(); 
  }, [])
  return (
    <>
    <label htmlFor="todoTitle">{children}</label>
    <input 
      id="todoTitle"
      type="text" 
      name="title" 
      value={todoTitle}
      onChange={handleTitleChange}
      ref={inputRef}
    />
    </>
  )
}

InputWithLabel.propTypes = {
  todoTitle: PropTypes.string,
  children: PropTypes.object,
  handleTitleChange: PropTypes.func,
};


export default InputWithLabel;
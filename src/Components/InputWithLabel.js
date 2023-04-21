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
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};


export default InputWithLabel;
import React from 'react';


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
      placeholder='Add new todo'
      value={todoTitle}
      onChange={handleTitleChange}
      ref={inputRef}
    />
    </>
  )
}


export default InputWithLabel;
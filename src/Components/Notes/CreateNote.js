import { BsSave2 } from "react-icons/bs";



const CreateNote = ({ textHandler, saveHandler, inputText }) => {
  //character limit
  const charLimit = 100;
  const charLeft = charLimit - inputText.length;
  return (
    <div className="note" >
      <textarea
        cols="10"
        rows="5"
        value={inputText}
        placeholder="Type...."
        onChange={textHandler}
        maxLength="100"
      ></textarea>

      <div className="note__footer">
        <span className="label">{charLeft} left</span>
        <button className="note__save" onClick={saveHandler}>
          {<BsSave2 />}
        </button>
      </div>
    </div>
  );
}

export default CreateNote;
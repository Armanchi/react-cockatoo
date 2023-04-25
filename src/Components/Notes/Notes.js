import { useState, useEffect } from "react";
import '../../styles/Note.css'
import CreateNote from "./CreateNote";
import Note from "./Note";
import { v4 as uuid } from "uuid";
import Navbar from "../Navbar";

const Notes = () => {

  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");

 
  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  const saveHandler = () => {
    setNotes((prevState) => [
      ...prevState,
      {
        id: uuid(),
        text: inputText
      }
    ]);
    
    setInputText("");
  };

  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"));
    if (data) {
      setNotes(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('Notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <div className='notes'>
        <Navbar />
        <div className="NoteIntro">

        <h1 className="NoteTitle">Notes</h1>

        </div>
        <div className="CreateContainer">
        <CreateNote
        textHandler={textHandler}
        saveHandler={saveHandler}
        inputText={inputText}
      />
        </div>
    <div className="NoteContainer">
      <div>
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          deleteNote={deleteNote}
        />
        
      ))}
      </div>
    </div>

  
    </div>
  );
}

export default Notes;

import React from "react";
import { BsTrash3 } from "react-icons/bs";

const Note = ({ id, text, deleteNote }) => {
  return (
    <>
    <div className="NoteContainer">
    <div className="note">
      <div className="note__body">{text}</div>
      <div className="note__footer" style={{ justifyContent: "flex-end" }}>
        <button
          className="note__delete"
          onClick={() => deleteNote(id)}
          aria-hidden="true"
        >{<BsTrash3 size={'15px'} />}</button>
      </div>
    </div>
    </div>
    </>
  );
}

export default Note;
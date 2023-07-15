import React from "react";
import Note from "./Note";

function CreateArea() {
  const [t, setc] = React.useState({
    title: "",
    content: ""
  });
  const [notes, setnotes] = React.useState([]);

  function change(event) {
    const { value, name } = event.target;
    setc((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  function handle(event) {
    setnotes((prev) => {
      return [...prev, t];
    });
    setc({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
function del(id)
{
  
}
  return (
    <div>
      <form onSubmit={handle}>
        <input
          name="title"
          placeholder="Title"
          onChange={change}
          value={t.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={change}
          value={t.content}
        />
        <button type="submit">Add</button>
      </form>
      {notes.map((note, index) => (
        <Note 
        key={index}
        id={index}
         title={note.title} content={note.content}
        del={del} />
      ))}
    </div>
  );
}

export default CreateArea;

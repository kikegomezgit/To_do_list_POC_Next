"use client";
import { useState } from "react";
// import styles from './page.module.css'
import Content from "../components/Content";
import CreateNote from "../components/CreateNote";
import Note from "../components/Note";
import styles from '../styles.module.css'

export default function Page() {
  const [notes, setNotes] = useState([]);

  const addNote =(newNote) =>{
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  const deleteNote = (id) =>{
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  // const {
  //   token: { colorBgContainer, borderRadiusLG },
  // } = theme.useToken();

  const content = (
    <div>
      <div className={styles.createAreaContainer}>
        <CreateNote onAdd={addNote} />
      </div>
      <div className={styles.notesContainer}>
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
    </div>
  );

  return <Content content={content} />;
}


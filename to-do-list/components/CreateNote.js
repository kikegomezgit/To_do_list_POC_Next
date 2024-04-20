"use client";
import { useState } from "react";
import { PlusCircleFilled,PlusCircleTwoTone } from "@ant-design/icons";
import { Input } from "antd";
import styles from '../styles.module.css'
const { TextArea } = Input;

const CreateNote = (props) => {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function expand() {
    console.log(isExpanded)
    setExpanded(true);
  }
  return (
    <div className={styles.containerCreateArea}>
      <form className="create-note">
        {isExpanded && (
          <Input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
            bordered={false}
          />
        )}

        <TextArea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          bordered={false}
          style={{
            // height: 120,
            resize: 'none',
          }}
        />
        {/* allowClear */}
        {/* <Input placeholder="Borderless" bordered={false} /> */}
        <div in={isExpanded}>
          <div onClick={submitNote} className={styles.buttonCreateArea}>
            <PlusCircleFilled twoToneColor='#f5cb42' style={{ fontSize: '35px', color: '#f5cb42',backgroundColor:'white', borderRadius:'100%'}}/>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateNote;

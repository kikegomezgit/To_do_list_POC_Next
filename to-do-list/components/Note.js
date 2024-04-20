import { DeleteOutlined } from "@ant-design/icons";
import styles from "../styles.module.css";

const Note = (props) => {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className={styles.containerNote}>
      <p>{props.title}</p>
      <p>{props.content}</p>
      <div className={styles.buttonNote} onClick={handleClick}>
          <DeleteOutlined twoToneColor='#f5cb42' style={{ fontSize: '20px', color: '#f5cb42',backgroundColor:'white', borderRadius:'100%'}}/>
      </div>
    </div>
  );
};

export default Note;

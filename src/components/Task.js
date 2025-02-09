import React, { useState } from "react";
import styles from "./Task.module.css";

export default function Task({ task }) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [priority, setPriority] = useState(task.priority);

  return (
    <div className={styles.task}>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={(e) => {
          console.log(e);
          setIsCompleted(e.target.checked);
        }}
      />
      <span className={styles.checkmark}></span>
      <p>{task?.title}</p>
      <div className={styles.buttonsDiv}>
        <p>{task.dueDate.split("T")[0]}</p>
        <label htmlFor="priority">
          <select
            name=""
            id="priority"
            value={priority}
            onChange={(e) => setPriority((x) => e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <button type="button">
          <img src="img/note.png" alt="edit task" />
        </button>

        <button type="button">
          <img src="img/trash_black.png" alt="delete task" />
        </button>
      </div>
    </div>
  );
}

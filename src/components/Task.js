import React, { useState } from "react";
import styles from "./Task.module.css";
import { Link } from "react-router-dom";
import { useTasksContext } from "../TasksContext";
import axios from "axios";

export default function Task({ task }) {
  const [isCompleted, setIsCompleted] = useState(false);

  const { tasks, handleTasksData } = useTasksContext();

  const deleteTask = async () => {
    console.log(`http://127.0.0.1:2000/api/v1/users/tasks/${task._id}`);
    try {
      const res = await axios.delete(
        `http://127.0.0.1:2000/api/v1/users/tasks/${task._id}`,
        { withCredentials: true }
      );

      if (res.data.status === "error") throw new Error(res.data.message);

      const newData = tasks.filter((item) => item._id !== task._id);

      handleTasksData((x) => newData);
    } catch (error) {
      console.error(
        "Delete Task Error:",
        error.response?.data || error.message
      );
      alert(error.response?.data?.message || "Something went wrong!");
    }
  };

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
        <p>{task?.dueDate}</p>
        <p>{task?.priority}</p>
        <Link to={`/app/${task._id}`}>
          <img src="img/note.png" alt="edit task" />
        </Link>

        <button type="button" onClick={deleteTask}>
          <img src="img/trash_black.png" alt="delete task" />
        </button>
      </div>
    </div>
  );
}

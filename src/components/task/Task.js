import React, { useState } from "react";
import styles from "./Task.module.css";
import { Link } from "react-router-dom";
import { useTasksContext } from "../../context/TasksContext";
import axios from "axios";

export default function Task({ task }) {
  const [isCompleted, setIsCompleted] = useState(function () {
    if (task.status === "completed") return true;
    return false;
  });

  const { tasks, handleTasksData } = useTasksContext();

  const updateTask = async () => {
    try {
      const response = await axios.patch(
        `http://127.0.0.1:2000/api/v1/users/tasks/${task._id}`,
        {
          status: `${isCompleted ? "in-progress" : "completed"}`,
        },
        { withCredentials: true }
      );

      handleTasksData((x) => {
        const newTasks = x.map((item) => {
          if (item._id === task._id) {
            return response.data.data.task;
          }
          return item;
        });
        return newTasks;
      });

      setIsCompleted(!isCompleted);
    } catch (error) {
      console.error(
        "Delete Task Error:",
        error.response?.data || error.message
      );
      alert(error.response?.data?.message || "Something went wrong!");
    }
  };

  const deleteTask = async () => {
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
          setIsCompleted(e.target.checked);
        }}
        onClick={updateTask}
      />
      <span className={styles.checkmark}></span>
      <p>{task?.title}</p>
      <div className={styles.buttonsDiv}>
        <p>{task?.dueDate.split("T")[0]}</p>
        <p>{task?.priority.toUpperCase()}</p>
        <Link to={`/app/${task._id}`} className={styles.btn}>
          <img src="img/note.png" alt="edit task" />
        </Link>

        <button type="button" onClick={deleteTask} className={styles.btn}>
          <img src="img/trash_black.png" alt="delete task" />
        </button>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import "../index.css";
import Task from "./Task";
import styles from "./Tasks.module.css";
import { useTasksContext } from "../TasksContext";
import axios from "axios";

function Tasks() {
  const [sortby, setSortby] = useState("time");
  const { handleTasksData, tasks } = useTasksContext();

  useEffect(
    function () {
      async function fetchTasks() {
        try {
          // get req to fetch tasks
          const response = await axios.get(
            "http://127.0.0.1:2000/api/v1/users/tasks",
            {
              withCredentials: true,
            }
          );

          handleTasksData((x) => [...response.data.data.tasks]);
        } catch (error) {
          alert(error.response.data.message);
        }
      }
      fetchTasks();
    },
    [handleTasksData]
  );

  return (
    <div className={styles.tasks}>
      <header>
        <ul>
          <li>Tasks</li>
          <li className={styles.sortby}>
            <label htmlFor="sortby">Sort By</label>
            <select
              id="sortby"
              name="sortby"
              value={sortby}
              onChange={(e) => setSortby((x) => e.target.value)}
            >
              <option value="Time">Time</option>
              <option value="status">Status</option>
              <option value="priority">Priority</option>
            </select>
          </li>
        </ul>
      </header>

      <footer className={`${tasks?.length ? "" : styles.footer_empty}`}>
        {tasks?.map((task) => {
          return <Task task={task} key={task.title} />;
        })}
      </footer>
    </div>
  );
}

export default Tasks;

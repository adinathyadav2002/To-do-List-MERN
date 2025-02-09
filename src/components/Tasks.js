import { useState } from "react";
import "../index.css";
import Task from "./Task";
import styles from "./Tasks.module.css";

function Tasks({ tasksList }) {
  const [sortby, setSortby] = useState("time");

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
      {/* footer-empty class for empty list */}
      <footer>
        {tasksList?.map((task) => {
          return <Task task={task} key={task.title} />;
        })}
      </footer>
    </div>
  );
}

export default Tasks;

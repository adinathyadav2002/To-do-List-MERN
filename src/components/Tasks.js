import { useState } from "react";
import "../index.css";
import Task from "./Task";

function Tasks({ tasksList }) {
  const [sortby, setSortby] = useState("time");

  return (
    <div className="tasks">
      <header className="tasks__header">
        <ul>
          <li>Tasks</li>
          <li className="sortby">
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
      {/* tasks__footer-empty class for empty list */}
      <footer className="tasks__footer">
        {tasksList?.map((task) => {
          return <Task task={task} key={task.title} />;
        })}
      </footer>
    </div>
  );
}

export default Tasks;

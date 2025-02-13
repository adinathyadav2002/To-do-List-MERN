import React from "react";
import styles from "../../styles/Stats.module.css";
import { useTasksContext } from "../../context/TasksContext";

export default function Stats() {
  const { tasks } = useTasksContext();
  let completed = 0,
    remaining = 0,
    inProgress = 0;

  tasks.forEach((task) => {
    if (task.status === "completed") completed++;
    else if (task.status === "pending") remaining++;
    else inProgress++;
  });

  return (
    <div className={styles.stats}>
      <ul>
        <li>
          {" "}
          <span>✅</span> {`${completed} Completed`}
        </li>
        <li>
          <span>❌</span> {`${remaining} Remaining`}
        </li>
        <li>
          {" "}
          <span>⌛</span> {`${inProgress} In Progress`}
        </li>
      </ul>
    </div>
  );
}

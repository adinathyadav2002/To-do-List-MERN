import React from "react";
import styles from "./Stats.module.css";

export default function Stats() {
  return (
    <div className={styles.stats}>
      <ul>
        <li>
          {" "}
          <span>✅</span> 9 Completed
        </li>
        <li>
          <span>❌</span> 4 Remaining
        </li>
      </ul>
    </div>
  );
}

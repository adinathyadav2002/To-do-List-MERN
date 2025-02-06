import React from "react";

export default function Stats() {
  return (
    <div className="stats">
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

import React, { useState } from "react";

export default function Task({ task }) {
  const [isCompleted, setIsCompleted] = useState("");

  return (
    <div className="task">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={(e) => setIsCompleted(e.target.checked)}
      />
      <span className="checkmark"></span>
      <p>{task?.title}</p>
      <div className="task__buttons">
        <p>{new Date().toISOString().split("T")[0]}</p>
        <label htmlFor="priority">
          <select name="" id="priority">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <button type="button">
          <img src="img/note.png" className="icon" alt="edit task" />
        </button>

        <button type="button">
          <img src="img/trash_black.png" className="icon" alt="delete task" />
        </button>
      </div>
    </div>
  );
}

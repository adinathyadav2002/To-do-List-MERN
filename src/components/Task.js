import React from "react";

export default function Task() {
  return (
    <div className="task">
      <input type="checkbox" />
      <span className="checkmark"></span>
      <p>My First Task!</p>
      <div>
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

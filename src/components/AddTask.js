import React from "react";

export default function AddTask() {
  return (
    <div className="addTask">
      <form className="addTask__form">
        <h1>
          <label htmlFor="task">Add Task </label>
        </h1>
        <textarea id="task" name="task" required></textarea>
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

import React from "react";

export default function AddTask() {
  return (
    <div className="addTask">
      <form className="addTask__form">
        <h1>
          <label htmlFor="task">Add Task </label>
        </h1>

        <label htmlFor="title">Title</label>
        <textarea id="title" name="title" required></textarea>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows={3}></textarea>

        <label htmlFor="priority">
          {" "}
          Priority{" "}
          <select name="" id="priority">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>

        <input
          type="date"
          name="dueDate"
          id="dueDate"
          value={new Date().toISOString().split("T")[0]}
        />

        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

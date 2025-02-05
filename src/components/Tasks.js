import "../index.css";
import Task from "./Task";

function Tasks({ tasksList }) {
  return (
    <div className="tasks">
      <header className="tasks__header">
        <ul>
          <li>Tasks</li>
          <li>Sort</li>
        </ul>
      </header>
      {/* tasks__footer-empty class for empty list */}
      <footer className="tasks__footer">
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </footer>
    </div>
  );
}

export default Tasks;

import React, { useContext, useState } from "react";
import { createContext } from "react";

const TasksContext = createContext();

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        handleTasksData: setTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export function useTasksContext() {
  const context = useContext(TasksContext);
  if (!context)
    return new Error("Task context used outside the TasksContextProvider");

  return context;
}

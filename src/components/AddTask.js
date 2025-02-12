import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./AddTask.module.css";
import { useTasksContext } from "../TasksContext";
import { useUserContext } from "../UserContext";
import { useParams } from "react-router-dom";

export default function AddTask() {
  const { tasks, handleTasksData } = useTasksContext();
  const { userdata } = useUserContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPiority] = useState("low");
  const [btnState, setBtnState] = useState("Add");
  const [dueDate, setDueDate] = useState(
    `${new Date().toISOString().split("T")[0]}`
  );
  const params = useParams();

  useEffect(
    function () {
      if (params.id) {
        // get data from tasks
        let currentTask;
        tasks.forEach((task) => {
          if (task._id === params.id) currentTask = task;
        });

        if (!currentTask) return;
        console.log(currentTask);

        setTitle(currentTask?.title);
        setDescription(currentTask?.description);
        setDueDate((x) => "2025-12-09");
        setPiority(currentTask?.priority);
        setBtnState("Edit");
      }
    },
    [title, description, dueDate, priority, params.id, btnState, tasks]
  );

  const handleAddTask = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:2000/api/v1/users/tasks",
        {
          title,
          description,
          priority,
          dueDate,
          user: userdata._id,
        },
        {
          withCredentials: true,
        }
      );

      handleTasksData((x) => [...x, response.data.data.task]);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className={styles.addTask}>
      <form>
        <h1>
          <label htmlFor="task">{params.id ? "Edit Task" : "Add task"}</label>
        </h1>

        <label htmlFor="title">Title</label>
        <textarea
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle((x) => e.target.value)}
          required
        ></textarea>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={description}
          rows={3}
          onChange={(e) => setDescription((x) => e.target.value)}
        ></textarea>

        <label htmlFor="priority">
          {" "}
          Priority{" "}
          <select
            name=""
            id="priority"
            value={priority}
            onChange={(e) => setPiority((x) => e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <label htmlFor="dueDate">
          Due Date{" "}
          <input
            type="date"
            name="dueDate"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate((x) => e.target.value)}
          />
        </label>

        <input
          type="submit"
          value={btnState}
          onClick={(e) => {
            e.preventDefault();
            handleAddTask();
          }}
        />
      </form>
    </div>
  );
}

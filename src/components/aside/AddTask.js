import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../styles/AddTask.module.css";
import { useTasksContext } from "../../context/TasksContext";
import { useUserContext } from "../../context/UserContext";
import { useNavigate, useParams } from "react-router-dom";

export default function AddTask() {
  const params = useParams();
  const navigate = useNavigate();

  const { tasks, handleTasksData } = useTasksContext();
  const { userdata } = useUserContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPiority] = useState("low");
  const [btnState, setBtnState] = useState(function () {
    if (params.id) return "Edit";
    return "Add";
  });
  const [dueDate, setDueDate] = useState(
    `${new Date().toISOString().split("T")[0]}`
  );

  const resetFormStates = () => {
    setTitle("");
    setDescription("");
    setDueDate((x) => new Date(Date.now()).toISOString().split("T")[0]);
    setPiority(() => "low");
    setBtnState(function () {
      if (params.id) return "Edit";
      return "Add";
    });
  };

  useEffect(
    function () {
      if (params.id) {
        // get data from tasks
        let currentTask;
        tasks.forEach((task) => {
          if (task._id === params.id) currentTask = task;
        });

        if (!currentTask) return;

        setTitle(currentTask?.title);
        setDescription(currentTask?.description);
        setDueDate((x) => currentTask.dueDate.split("T")[0]);
        setPiority(currentTask?.priority);
        setBtnState((x) => "Edit");
      }
    },
    [params.id, tasks]
  );

  const handleEditTask = async () => {
    try {
      const response = await axios.patch(
        `http://127.0.0.1:2000/api/v1/users/tasks/${params.id}`,
        {
          title,
          description,
          priority,
          dueDate,
        },
        { withCredentials: true }
      );

      handleTasksData((x) => {
        const newTasks = x.map((task) => {
          if (task._id === params.id) {
            return response.data.data.task;
          }
          return task;
        });
        return newTasks;
      });
      resetFormStates();
      navigate("/app");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

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
      resetFormStates();
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const closeEditForm = () => {
    navigate("/app");
  };

  return (
    <div className={styles.addTask}>
      <form>
        <h1>
          {btnState === "Edit" ? (
            <button
              type="button"
              className={styles.closeBtn}
              onClick={closeEditForm}
            >
              {" "}
              ✖️
            </button>
          ) : (
            ""
          )}
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
          type="button"
          value={btnState}
          onClick={(e) => {
            e.preventDefault();
            if (btnState === "Add") handleAddTask();
            else handleEditTask();
          }}
          onChange={(e) => setBtnState(e.target.value)}
        />
      </form>
    </div>
  );
}

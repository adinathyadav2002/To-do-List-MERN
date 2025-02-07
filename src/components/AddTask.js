import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddTask({ handleUserdata }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPiority] = useState("low");
  const [dueDate, setDueDate] = useState(
    `${new Date().toISOString().split("T")[0]}`
  );
  const navigate = useNavigate();

  const handleAddTask = async () => {
    try {
      console.log("😍😍😍😍");
      const response = await axios.post(
        "http://127.0.0.1:2000/api/v1/users",
        {
          title,
          description,
          priority,
          dueDate,
        },
        // for cors allowing cookies
        {
          withCredentials: true,
        }
      );

      handleUserdata((x) => response.data.data.user);
      navigate("/");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className="addTask">
      <form className="addTask__form">
        <h1>
          <label htmlFor="task">Add Task </label>
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
          value="Add"
          onClick={(e) => {
            e.preventDefault();
            handleAddTask();
          }}
        />
      </form>
    </div>
  );
}

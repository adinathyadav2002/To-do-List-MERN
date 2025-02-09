import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

export default function Login({ userdata, handleUserdata }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail((x) => e.target.value);
  };

  const handlePassword = (e) => {
    setPassword((x) => e.target.value);
  };

  const handleUserLogin = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:2000/api/v1/users/login",
        {
          email,
          password,
        },
        // for cors allowing cookies
        {
          withCredentials: true,
        }
      );

      handleUserdata((x) => response.data.data.user);
      console.log(response.data.data.user);
      navigate("/");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className={styles.login}>
      <form>
        <div className={styles.imgContainer}>
          <img src="img/user.svg" alt="user" />
        </div>

        <div className={styles.container}>
          <label htmlFor="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            value={email}
            onChange={handleEmail}
            required
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            value={password}
            onChange={handlePassword}
            required
          />

          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              handleUserLogin();
            }}
          >
            Login
          </button>
        </div>

        <div className={styles.container}>
          <span>
            Forgot <a href="/">password?</a>
          </span>
        </div>
      </form>
    </div>
  );
}

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup({ handleUserdata }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:2000/api/v1/users/signup",
        {
          name,
          email,
          password,
          passwordConfirm,
        },
        { withCredentials: true }
      );

      handleUserdata((x) => response.data.data.user);
      console.log(response.data.data.user);
      navigate("/");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <div className="modal">
        <form className="modal-content" onSubmit={handleSubmit}>
          <div className="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />

            <label htmlFor="name">
              <b>Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              value={name}
              onChange={(e) => setName((x) => e.target.value)}
              required
            />

            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              value={email}
              onChange={(e) => setEmail((x) => e.target.value)}
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
              onChange={(e) => setPassword((x) => e.target.value)}
              required
            />

            <label htmlFor="psw-repeat">
              <b>Repeat Password</b>
            </label>
            <input
              type="password"
              placeholder="Repeat Password"
              name="psw-repeat"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm((x) => e.target.value)}
              required
            />

            <div className="clearfix">
              <button type="button" className="loginbtn">
                Login
              </button>
              <button type="submit" className="signup">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

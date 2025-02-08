import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Logout({ handleUserdata }) {
  const navigate = useNavigate();
  useEffect(
    function () {
      async function logOutUser() {
        await axios.get("http://127.0.0.1:2000/api/v1/users/logout", {
          withCredentials: true,
        });
      }
      handleUserdata((x) => {});
      logOutUser();
      navigate("/login");
    },
    [navigate, handleUserdata]
  );
  return <div></div>;
}

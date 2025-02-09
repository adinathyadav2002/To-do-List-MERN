import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../UserContext";

export default function Logout() {
  const { handleUserData } = useUserContext();
  const navigate = useNavigate();
  useEffect(
    function () {
      async function logOutUser() {
        await axios.get("http://127.0.0.1:2000/api/v1/users/logout", {
          withCredentials: true,
        });
      }
      handleUserData((x) => {});
      logOutUser();
      navigate("/login");
    },
    [navigate, handleUserData]
  );
  return <div></div>;
}

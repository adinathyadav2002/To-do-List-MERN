import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import LoginPage from "./LoginPage";

export default function App() {
  const [userdata, setUserdata] = useState({});

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage userdata={userdata} handleUserdata={setUserdata} />
          }
        />
        <Route
          path="/login"
          element={
            <LoginPage userdata={userdata} handleUserdata={setUserdata} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

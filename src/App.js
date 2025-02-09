import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import LoginPage from "./LoginPage";
import Logout from "./components/Logout";
import SignupPage from "./SignupPage";
import ForgotPasword from "./components/ForgotPasword";
import AccountPage from "./AccountPage";

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
        <Route
          path="/logout"
          element={<Logout handleUserdata={setUserdata} />}
        />
        <Route
          path="/signup"
          element={
            <SignupPage handleUserdata={setUserdata} userdata={userdata} />
          }
        />
        <Route
          path="/forgotPassword"
          element={
            <ForgotPasword handleUserdata={setUserdata} userdata={userdata} />
          }
        />
        <Route
          path="/account"
          element={
            <AccountPage handleUserdata={setUserdata} userdata={userdata} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

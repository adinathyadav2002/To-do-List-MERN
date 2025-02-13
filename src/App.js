import { UserContextProvider } from "./context/UserContext";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

import OverviewPage from "./Pages/OverviewPage";
import MainPage from "./Pages/MainPage";
import LoginPage from "./Pages/LoginPage";
import Logout from "./components/auth/Logout";
import SignupPage from "./Pages/SignupPage";
import ForgotPasword from "./components/auth/ForgotPasword";
import AccountPage from "./Pages/AccountPage";
import { TasksProvider } from "./context/TasksContext";
import Aside from "./components/aside/Aside";

export default function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <TasksProvider>
          <Routes>
            <Route path="/" element={<OverviewPage />} />
            <Route path="/app" element={<MainPage />}>
              <Route path="/app" element={<Aside key={"aside1"} />} />
              <Route path="/app/:id" element={<Aside key={"aside2"} />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgotPassword" element={<ForgotPasword />} />
            <Route path="/account" element={<AccountPage />} />
          </Routes>
        </TasksProvider>
      </UserContextProvider>
    </BrowserRouter>
  );
}

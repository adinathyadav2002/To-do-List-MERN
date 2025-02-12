import { UserContextProvider } from "./UserContext";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import OverviewPage from "./OverviewPage";
import MainPage from "./MainPage";
import LoginPage from "./LoginPage";
import Logout from "./components/Logout";
import SignupPage from "./SignupPage";
import ForgotPasword from "./components/ForgotPasword";
import AccountPage from "./AccountPage";
import { TasksProvider } from "./TasksContext";
import Aside from "./components/Aside";

export default function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <TasksProvider>
          <Routes>
            <Route path="/" element={<OverviewPage />} />
            <Route path="/app" element={<MainPage />}>
              <Route path="" element={<Aside />} />
              <Route path="/app/:id" element={<Aside />} />
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

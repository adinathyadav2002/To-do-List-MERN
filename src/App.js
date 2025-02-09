import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import LoginPage from "./LoginPage";
import Logout from "./components/Logout";
import SignupPage from "./SignupPage";
import ForgotPasword from "./components/ForgotPasword";
import AccountPage from "./AccountPage";
import { UserContextProvider } from "./UserContext";

export default function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgotPassword" element={<ForgotPasword />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}

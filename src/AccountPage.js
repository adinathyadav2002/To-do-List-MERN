import React from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Account from "./components/Account";

export default function AccountPage({ userdata, handleUserdata }) {
  return (
    <>
      <Header userdata={userdata} />
      <main className="main">
        <Account />
      </main>
    </>
  );
}

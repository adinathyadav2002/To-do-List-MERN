import React from "react";
import Header from "../components/layout/Header";
import Account from "../components/Account";

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

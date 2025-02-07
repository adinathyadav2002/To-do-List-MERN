import Header from "./components/Header";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Login from "./components/Login";

function LoginPage({ userdata, handleUserdata }) {
  return (
    <>
      <Header userdata={userdata} />
      <main className="main">
        <Login handleUserdata={handleUserdata} userdata={userdata} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default LoginPage;

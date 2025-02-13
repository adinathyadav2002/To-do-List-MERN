import Header from "../components/layout/Header";
import Login from "../components/auth/Login";

function LoginPage() {
  return (
    <>
      <Header />
      <main className="main">
        <Login />
      </main>
    </>
  );
}

export default LoginPage;

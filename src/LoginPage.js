import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";

function LoginPage() {
  return (
    <>
      <Header />
      <main className="main">
        <Login />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default LoginPage;

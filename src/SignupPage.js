import Header from "./components/Header";
import Footer from "./components/Footer";
import Signup from "./components/Signup";

function SignupPage({ handleUserdata, userdata }) {
  return (
    <>
      <Header userdata={userdata} />
      <main className="main">
        <Signup handleUserdata={handleUserdata} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default SignupPage;

import Header from "../components/layout/Header";
// import Footer from "../components/layout/Footer";
import Signup from "../components/auth/Signup";

function SignupPage({ handleUserdata, userdata }) {
  return (
    <>
      <Header userdata={userdata} />
      <main className="main">
        <Signup handleUserdata={handleUserdata} />
      </main>
    </>
  );
}

export default SignupPage;

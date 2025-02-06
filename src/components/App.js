import Header from "./Header";
import { useEffect, useState } from "react";
import Tasks from "./Tasks";
import Aside from "./Aside";
import Footer from "./Footer";

function App() {
  const [logged, setLogged] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(function () {
    async function fetchData() {
      const res = await fetch(
        "http://127.0.0.1:2000/api/v1/users/67a357f696ce0d7ac5f538e6"
      );

      const data = await res.json();
      console.log(data.data.user[0].tasks);
      setUserData(data.data.user[0]);
    }
    fetchData();
  }, []);

  return (
    <>
      <Header logged={logged} userData={userData} />
      <main className="main">
        {/* div to manage responsiveness of Tasks Component  */}
        <div className="main__div"></div>
        <Aside />
        <Tasks tasksList={userData.tasks} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

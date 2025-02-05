import Header from "./Header";
import { useEffect, useState } from "react";
import Tasks from "./Tasks";
import Aside from "./Aside";

function App() {
  const [logged, setLogged] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(function () {
    async function fetchData() {
      const res = await fetch(
        "http://127.0.0.1:2000/api/v1/users/678a278db6083008e8c66dd5"
      );

      const data = await res.json();
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
        <Tasks />
      </main>
      <footer></footer>
    </>
  );
}

export default App;

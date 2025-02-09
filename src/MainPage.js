import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import styles from "./MainPage.module.css";

function MainPage({ userdata, handleUserdata }) {
  return (
    <>
      <Header userdata={userdata} />
      <main className={styles.main}>
        {/* div to manage responsiveness of Tasks Component  */}
        <div className={styles.mainDiv}></div>
        <Aside handleUserdata={handleUserdata} />
        <Tasks tasksList={userdata.tasks} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default MainPage;

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";
import styles from "./MainPage.module.css";
import { Outlet } from "react-router-dom";

function MainPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* div to manage responsiveness of Tasks Component  */}
        <div className={styles.mainDiv}></div>
        <Outlet />
        <Tasks />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default MainPage;

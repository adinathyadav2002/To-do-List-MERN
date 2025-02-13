import Header from "../components/layout/Header";
import Tasks from "../components/task/Tasks";
import Footer from "../components/layout/Footer";
import styles from "../styles/MainPage.module.css";
import { Outlet } from "react-router-dom";

function MainPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
        <Tasks />
      </main>
      <Footer />
    </>
  );
}

export default MainPage;

import AddTask from "./AddTask";
import Stats from "./Stats";
import styles from "../../styles/Aside.module.css";

function Aside() {
  return (
    <div className={styles.aside}>
      <AddTask />
      <Stats />
    </div>
  );
}

export default Aside;

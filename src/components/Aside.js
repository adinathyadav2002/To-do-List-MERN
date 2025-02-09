import AddTask from "./AddTask";
import Stats from "./Stats";
import styles from "./Aside.module.css";

function Aside() {
  return (
    <div className={styles.aside}>
      <AddTask />
      <Stats />
    </div>
  );
}

export default Aside;

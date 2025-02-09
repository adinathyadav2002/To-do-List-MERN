import AddTask from "./AddTask";
import Stats from "./Stats";
import styles from "./Aside.module.css";

function Aside({ handleUserdata }) {
  return (
    <div className={styles.aside}>
      <AddTask handleUserdata={handleUserdata} />
      <Stats />
    </div>
  );
}

export default Aside;

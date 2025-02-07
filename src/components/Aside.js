import AddTask from "./AddTask";
import Stats from "./Stats";

function Aside({ handleUserdata }) {
  return (
    <div className="aside">
      <AddTask handleUserdata={handleUserdata} />
      <Stats />
    </div>
  );
}

export default Aside;

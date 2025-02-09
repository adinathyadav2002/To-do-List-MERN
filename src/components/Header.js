import { Link } from "react-router-dom";
import "../index.css";
import HeaderButtons from "./HeaderButtons";
import styles from "./Header.module.css";
import { useUserContext } from "../UserContext";

function Header() {
  const { userdata } = useUserContext();
  function isEmpty(obj) {
    for (const prop in obj) {
      if (Object.hasOwn(obj, prop)) {
        return false;
      }
    }

    return true;
  }

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link to={isEmpty(userdata) ? "/signup" : "/"} id="todolist">
              {" "}
              <img src="/img/note.svg" alt="To-do List" />
              <span>To-do List</span>
            </Link>
          </li>
          <li>
            <a href="https://github.com/adinathyadav2002/todolist">
              <img src="/img/github.svg" alt="github" />
              <span>Github</span>
            </a>
          </li>
          <li>
            {!isEmpty(userdata) ? (
              <HeaderButtons
                firstText="LogOut"
                secondText={`${userdata.name?.split(" ")[0]}`}
              />
            ) : (
              <HeaderButtons firstText="LogIn" secondText="SignUp" />
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

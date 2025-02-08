import { Link } from "react-router-dom";
import "../index.css";
import HeaderButtons from "./HeaderButtons";

function Header({ userdata }) {
  function isEmpty(obj) {
    for (const prop in obj) {
      if (Object.hasOwn(obj, prop)) {
        return false;
      }
    }

    return true;
  }

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav__list">
          <li>
            <Link to={isEmpty(userdata) ? "/signup" : "/"} id="todolist">
              {" "}
              <img
                src="/img/note.svg"
                alt="To-do List"
                className="header__icon"
              />
              <span>To-do List</span>
            </Link>
          </li>
          <li>
            <a href="https://github.com/adinathyadav2002/todolist">
              <img
                src="/img/github.svg"
                alt="github"
                className="header__icon"
              />
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

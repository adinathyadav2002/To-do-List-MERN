import "../index.css";
import HeaderButtons from "./HeaderButtons";

function Header({ logged, userData }) {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav__list">
          <li>
            <a href="/" id="todolist">
              {" "}
              <img
                src="/img/note.svg"
                alt="To-do List"
                className="header__icon"
              />
              <span>To-do List</span>
            </a>
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
            {logged ? (
              <HeaderButtons
                firstText="LogOut"
                secondText={`${userData.name.split(" ")[0]}`}
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

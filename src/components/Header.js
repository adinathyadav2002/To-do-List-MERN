import "../index.css";

function Header() {
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
            <a href="/" className="btn">
              Log In
            </a>
            <a href="/" className="btn">
              Sign In{" "}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

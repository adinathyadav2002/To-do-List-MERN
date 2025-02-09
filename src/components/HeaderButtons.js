import { Link } from "react-router-dom";
// import styles from "./HeaderButtons.module.css";

function HeaderButtons({ firstText, secondText }) {
  const firstButtonRoute = firstText.toLowerCase();
  let secondButtonRoute = secondText.toLowerCase();
  secondButtonRoute = secondButtonRoute !== "signup" ? "account" : "signup";
  return (
    <>
      <Link to={`/${firstButtonRoute}`} className="btn">
        {firstText}
      </Link>
      <Link to={`/${secondButtonRoute}`} className="btn">
        {secondText}
      </Link>
    </>
  );
}

export default HeaderButtons;

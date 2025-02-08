import { Link } from "react-router-dom";

function HeaderButtons({ firstText, secondText }) {
  return (
    <>
      <Link to={`/${firstText.toLowerCase()}`} className="btn">
        {firstText}
      </Link>
      <Link to={`/${secondText.toLowerCase()}`} className="btn">
        {secondText}
      </Link>
    </>
  );
}

export default HeaderButtons;

import { Link } from "react-router-dom";

function HeaderButtons({ firstText, secondText }) {
  return (
    <>
      <Link to={`/${firstText}`} className="btn">
        {firstText}
      </Link>
      <Link to={`/${secondText}`} className="btn">
        {secondText}
      </Link>
    </>
  );
}

export default HeaderButtons;

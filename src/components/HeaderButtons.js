function HeaderButtons({ firstText, secondText }) {
  return (
    <>
      <a href="/" className="btn">
        {firstText}
      </a>
      <a href="/" className="btn">
        {secondText}
      </a>
    </>
  );
}

export default HeaderButtons;

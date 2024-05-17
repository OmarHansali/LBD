import { useTalimContext } from "../../context/TalimContext";

const ThemeBtnSection = () => {
  const { isDarkTheme, toggleTheme } = useTalimContext();

  return (
    <div
      className={`tl-dark-light-view-box ${isDarkTheme ? "" : "has-clicked"}`}
      onClick={toggleTheme}
    >
      <div
        className={`tl-dark-light-view-toogle-dot ${
          isDarkTheme ? "pos-bottom" : ""
        }`}
      ></div>
    </div>
  );
};

export default ThemeBtnSection;

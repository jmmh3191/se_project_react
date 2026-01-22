import "./Header.css";
import logo from "../../images/wtwrlogo.svg";
import avatar from "../../images/avatarplacehldr.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.jsx";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="WTWR logo" />
      <p className="header__date-location">
        {currentDate}, {weatherData.city}
      </p>
      <div className="header__user-controls">
        <ToggleSwitch />
        <button
          onClick={handleAddClick}
          type="button"
          className="header__add-clothes-btn"
        >
          + Add clothes
        </button>
      </div>
      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;

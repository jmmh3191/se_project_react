import "./Header.css";
import logo from "../../images/wtwrlogo.svg";
import avatar from "../../images/avatarplacehldr.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <p className="header__date-location">DATE, LOCATION</p>
      <button className="header__add-clothes-btn">+ Add clothes</button>
      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img
          src={avatar}
          alt="Terrence Tegegne"
          className="header__avatar"
        ></img>
      </div>
    </header>
  );
}

export default Header;

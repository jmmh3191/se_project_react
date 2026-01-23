import "./SideBar.css";
import avatar from "../../../images/avatarplacehldr.svg";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__user-info">
        <img src={avatar} alt="avatar" className="sidebar__avatar" />
        <p className="sidebar__username">Terrence Tegegne</p>
      </div>
    </div>
  );
};

export default SideBar;

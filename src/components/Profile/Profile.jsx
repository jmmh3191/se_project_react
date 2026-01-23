import SideBar from "./SideBar/SideBar.jsx";
import ClothesSection from "./ClothesSection/ClothesSection.jsx";
import "./Profile.css";

const Profile = ({ clothingItems, handleAddClick, handleCardClick }) => {
  return (
    <div className="profile">
      <SideBar />
      <section className="profile__content">
        <ClothesSection
          clothingItems={clothingItems}
          handleAddClick={handleAddClick}
          handleCardClick={handleCardClick}
        />
      </section>
    </div>
  );
};

export default Profile;

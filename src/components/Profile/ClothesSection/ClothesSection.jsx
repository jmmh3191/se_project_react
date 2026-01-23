import "./ClothesSection.css";
import ItemCard from "../../ItemCard/ItemCard";

const ClothesSection = ({ clothingItems, handleCardClick, handleAddClick }) => {
  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <p className="clothes-section__title">Your items</p>
        <button className="clothes-section__add-btn" onClick={handleAddClick}>
          + Add New
        </button>
      </div>
      <div className="clothes-section__container">
        <ul className="clothes-section__items">
          {clothingItems.map((item) => (
            <ItemCard
              key={item._id || item.id}
              item={item}
              onCardClick={handleCardClick}
              className="clothes-section__card"
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClothesSection;

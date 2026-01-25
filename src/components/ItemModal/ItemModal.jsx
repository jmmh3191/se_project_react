import "./ItemModal.css";
import { useOutsideClick } from "../../hooks/useOutsideClick.js";

function ItemModal({ activeModal, onClose, item, onDeleteItem }) {
  const isModalOpen = activeModal === "preview";
  const handleOverlayClick = useOutsideClick(onClose, isModalOpen);

  return (
    <div
      className={`modal ${activeModal === "preview" ? "modal_opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close-btn"
        ></button>
        <img src={item.imageUrl} alt={item.name} className="modal__image" />
        <div className="modal__footer">
          <div className="modal__footer-text">
            <h2 className="modal__caption">{item.name}</h2>
            <p className="modal__weather">Weather: {item.weather}</p>
          </div>
          <button
            type="button"
            className="modal__delete-btn"
            onClick={() => onDeleteItem(item)}
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;

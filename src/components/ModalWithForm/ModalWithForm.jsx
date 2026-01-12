import "./ModalWithForm.css";
import closeIcon from "../../images/close-icon.svg";
import { useOutsideClick } from "../../hooks/useOutsideClick";

function ModalWithForm({ children, buttonText, title, isOpen, name, onClose }) {
  const handleOverlayClick = useOutsideClick(onClose);

  return (
    <div
      className={`modal modal__type ${name} ${isOpen ? "modal_opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          className="modal__close-btn"
          style={{ backgroundImage: `url(${closeIcon})` }}
          onClick={onClose}
          type="button"
        />
        <form className="modal__form" name={name}>
          {children}
          <button type="submit" className="modal__garment-submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;

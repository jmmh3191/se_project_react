import "./ModalWithForm.css";
import closeIcon from "../../images/close-icon.svg";
import { useOutsideClick } from "../../hooks/useOutsideClick.js";

function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  name,
  onClose,
  onSubmit,
  isFormValid,
}) {
  const handleOverlayClick = useOutsideClick(onClose, isOpen);

  return (
    <div
      className={`modal modal__type${name} ${isOpen ? "modal_opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className={`modal__content modal__content_type_${name}`}>
        <h2 className="modal__title">{title}</h2>
        <button
          className="modal__close-btn"
          style={{ backgroundImage: `url(${closeIcon})` }}
          onClick={onClose}
          type="button"
        />
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <button
            type="submit"
            className={`modal__garment-submit ${isFormValid ? "modal__garment-submit_active" : ""}`}
            disabled={!isFormValid}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;

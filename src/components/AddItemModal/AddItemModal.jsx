import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import { useForm } from "../../hooks/useForm.js";

const AddItemModal = ({ isOpen, onAddItem, onCloseModal }) => {
  const { values, handleChange, setValues } = useForm({
    name: "",
    link: "",
    weather: "",
  });

  const handleReset = () => {
    setValues({ name: "", link: "", weather: "" });
  };

  function handleSubmit(e) {
    e.preventDefault();
    onAddItem(values, handleReset);
  }

  React.useEffect(() => {
    if (!isOpen) {
      handleReset();
    }
  }, [isOpen]);

  const isFormValid = values.name && values.imageUrl && values.weather;

  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      name="add-garment"
      isOpen={isOpen}
      onClose={onCloseModal}
      onSubmit={handleSubmit}
      isFormValid={isFormValid}
    >
      <label className="modal__label">
        Name
        <input
          type="text"
          name="name"
          minLength="1"
          maxLength="30"
          placeholder="Name"
          className="modal__input"
          value={values.name}
          onChange={handleChange}
          required
        />
      </label>
      <label className="modal__label">
        Image
        <input
          type="url"
          name="imageUrl"
          placeholder="Image URL"
          className="modal__input"
          value={values.link}
          onChange={handleChange}
          required
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label className="modal__label_type_radio">
          <input
            name="weather"
            className="modal__radio-input"
            type="radio"
            checked={values.weather === "hot"}
            value="hot"
            onChange={handleChange}
          />{" "}
          <span className="modal__radio-text">Hot</span>
        </label>
        <label className="modal__label_type_radio">
          <input
            name="weather"
            className="modal__radio-input"
            type="radio"
            checked={values.weather === "warm"}
            value="warm"
            onChange={handleChange}
          />{" "}
          <span className="modal__radio-text">Warm</span>
        </label>
        <label className="modal__label_type_radio">
          <input
            name="weather"
            className="modal__radio-input"
            type="radio"
            checked={values.weather === "cold"}
            value="cold"
            onChange={handleChange}
          />{" "}
          <span className="modal__radio-text">Cold</span>
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;

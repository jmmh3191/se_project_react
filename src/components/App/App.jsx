import { useEffect, useState } from "react";
import { getItems, addItem, deleteItem } from "../../utils/api";
import "./App.css";
import { coordinates, apiKey } from "../../utils/constants.js";
import { Routes, Route } from "react-router-dom";
import Profile from "../Profile/Profile";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/footer.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: null, C: null },
    city: "",
  });

  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleAddItemSubmit = (values, resetForm) => {
    addItem(values)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        resetForm();
        closeActiveModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleCardClick = (item) => {
    setActiveModal("preview");
    setSelectedCard(item);
  };

  const handleDeleteItem = (card) => {
    const id = card._id || card.id;

    deleteItem(id).then(() => {
      const updatedItems = clothingItems.filter((item) => {
        return (item._id || item.id) !== id;
      });
      setClothingItems(updatedItems);
      closeActiveModal();
    });
  };

  useEffect(() => {
    getWeather(coordinates, apiKey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems().then((data) => {
      const itemsWithImageUrl = data.map((item) => {
        return {
          ...item,
          imageUrl: item.link,
        };
      });
      setClothingItems(itemsWithImageUrl);
    });
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="app">
        <div className="app__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  clothingItems={clothingItems}
                  handleCardClick={handleCardClick}
                  handleAddClick={handleAddClick}
                />
              }
            />
          </Routes>
          <Footer />
        </div>
        <ItemModal
          activeModal={activeModal}
          item={selectedCard}
          onClose={closeActiveModal}
          onDeleteItem={handleDeleteItem}
        />
        <AddItemModal
          isOpen={activeModal === "add-garment"}
          onAddItem={handleAddItemSubmit}
          onCloseModal={closeActiveModal}
        />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;

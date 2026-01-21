import "./WeatherCard.css";
import sunny from "../../images/sunny.png";
import { useContext } from "react";
import { getEffectiveTemp } from "../../utils/weatherApi";
import currentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(currentTemperatureUnitContext);
  return (
    <section className="weather-card">
      <img src={sunny} alt="sunny" className="weather-card__image" />
      <p className="weather-card__temp">
        {getEffectiveTemp(weatherData, currentTemperatureUnit)} &deg;
        {currentTemperatureUnit}
      </p>
    </section>
  );
}

export default WeatherCard;

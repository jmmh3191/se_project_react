import "./WeatherCard.css";
import sunny from "../../images/sunny.png";
import { useContext } from "react";
import { getEffectiveTemp } from "../../utils/weatherApi";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.jsx";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  return (
    <section className="weather-card">
      <img src={sunny} alt="sunny" className="weather-card__image" />
      <p className="weather-card__temp">
        {getEffectiveTemp(weatherData, currentTemperatureUnit)}
        {weatherData.temp[currentTemperatureUnit] !== null && (
          <> &deg; {currentTemperatureUnit}</>
        )}
      </p>
    </section>
  );
}

export default WeatherCard;

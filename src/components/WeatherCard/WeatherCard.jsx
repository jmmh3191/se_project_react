import "./WeatherCard.css";
import sunny from "../../images/sunny.png";

function WeatherCard({ weatherData }) {
  return (
    <section className="weather-card">
      <img src={sunny} alt="sunny" className="weather-card__image" />
      <p className="weather-card__temp"> {weatherData.temp.F} &deg; F</p>
    </section>
  );
}

export default WeatherCard;

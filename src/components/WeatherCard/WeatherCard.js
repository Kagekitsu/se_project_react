import "./WeatherCard.css";
// import { weatherOptions } from "../../utils/constants.js";
import { weatherBackgrounds } from "../../utils/constants.js";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const weatherBackground = weatherBackgrounds.find((background) => {
    return background.day === day && background.type === type;
  });

  const weatherBackgroundUrl = weatherBackground
    ? weatherBackground.url || ""
    : "";
  const weatherBackgroundColor = weatherBackground
    ? weatherBackground.background_color || ""
    : "";

  return (
    <section id="weather" className="weather">
      <div
        className="weather__bar"
        style={{ backgroundColor: weatherBackgroundColor }}
      >
        <div className="weather__temp">
          {weatherTemp}° {currentTemperatureUnit}
        </div>
        <img
          src={weatherBackgroundUrl}
          alt="Weather"
          className="weather__icons"
        />
      </div>
    </section>
  );
};
export default WeatherCard;
export const getWeather = ({ latitude, longitude }, APIkey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`,
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  });
};

export const filterWeatherData = (data) => {
  const result = {};
  result.temp = {
    F: Math.round(data.main.temp),
    C: Math.round(((data.main.temp - 32) * 5) / 9),
  };
  result.city = data.name;
  result.type = getWeatherType(result.temp.F);

  return result;
};

const getWeatherType = (temperature) => {
  if (temperature >= 86) {
    return "hot";
  } else if (temperature >= 66) {
    return "warm";
  } else {
    return "cold";
  }
};

export const getEffectiveTemp = (weatherData, unit) => {
  const temp = weatherData?.temp?.[unit];
  if (temp === null) {
    return "temperature loading...";
  }
  return temp !== undefined ? Math.round(temp) : "--";
};

import { getWeatherByCity, getForecastByCity } from "./api.js";
import { renderCurrentWeather, renderForecast } from "./ui.js";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

async function loadCityWeather(city) {
  const weather = await getWeatherByCity(city);
  renderCurrentWeather(weather);

  const forecast = await getForecastByCity(city);
  renderForecast(forecast.list);
}

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) loadCityWeather(city);
});

loadCityWeather("São Paulo");

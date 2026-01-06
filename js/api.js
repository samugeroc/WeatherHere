const API_KEY = "dead0d0ea9f8fc9a78c046150f6d1a55";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export async function getWeatherByCity(city) {
  const response = await fetch(
    `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`
  );
  return response.json();
}

export async function getForecastByCity(city) {
  const response = await fetch(
    `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`
  );
  return response.json();
}

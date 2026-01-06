export function renderCurrentWeather(data) {
  document.getElementById("cityName").textContent = data.name;
  document.getElementById("temperature").textContent =
    Math.round(data.main.temp) + "°C";
  document.getElementById("description").textContent =
    data.weather[0].description;
  document.getElementById("minTemp").textContent =
    "Min: " + Math.round(data.main.temp_min) + "°C";
  document.getElementById("maxTemp").textContent =
    "Max: " + Math.round(data.main.temp_max) + "°C";
}

export function renderForecast(list) {
  const forecastDiv = document.getElementById("forecast");
  forecastDiv.innerHTML = "";

  const days = {};

  // Agrupa previsões por dia
  list.forEach(item => {
    const dateKey = new Date(item.dt * 1000).toLocaleDateString("pt-BR");

    if (!days[dateKey]) {
      days[dateKey] = {
        min: item.main.temp_min,
        max: item.main.temp_max,
        icon: item.weather[0].icon,
        dt: item.dt
      };
    } else {
      days[dateKey].min = Math.min(days[dateKey].min, item.main.temp_min);
      days[dateKey].max = Math.max(days[dateKey].max, item.main.temp_max);
    }
  });

  // Remove o dia atual e limita a 4 dias
  Object.values(days)
    .slice(1, 5)
    .forEach(day => {
      const dayName = new Date(day.dt * 1000).toLocaleDateString("pt-BR", {
        weekday: "short"
      });

      forecastDiv.innerHTML += `
        <div class="forecast-card">
          <p class="day">${dayName}</p>
          <img 
            src="https://openweathermap.org/img/wn/${day.icon}@2x.png"
            alt="Ícone do clima"
          />
          <p class="max">⬆️ ${Math.round(day.max)}°C</p>
          <p class="min">⬇️ ${Math.round(day.min)}°C</p>
        </div>
      `;
    });
}


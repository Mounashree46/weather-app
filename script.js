// Function to fetch weather data
function getWeather() {
  let city = document.getElementById("cityInput").value;

  if (city === "") {
    alert("Please enter a city name.");
    return;
  }

  // API Key from OpenWeatherMap (Replace this with your own API key)
  const apiKey = "343172b22a181e6d5d22155b97f845dd";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  // Fetch weather data
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === "404") {
        alert("City not found. Please check the name.");
      } else {
        let temperature = data.main.temp;
        let weatherDescription = data.weather[0].description;
        let icon = data.weather[0].icon;

        let result = `
            <h2>Weather in ${city}</h2>
            <p><img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather icon" /></p>
            <p>Temperature: ${temperature}°C</p>
            <p>Condition: ${weatherDescription}</p>
          `;

        document.getElementById("weatherResult").innerHTML = result;
      }
    })
    .catch((err) => alert("Error fetching weather data."));
}

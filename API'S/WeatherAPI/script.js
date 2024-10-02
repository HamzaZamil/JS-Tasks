"use strict";

// Function to render the weather data into the card
function renderWeather(weather) {
  document.getElementById("cityName").textContent = weather.name;
  document.getElementById("cityDescription").textContent =
    weather.weather[0].description;
  document.getElementById(
    "temperature"
  ).innerHTML = `${weather.main.temp}&#176;C`;

  document.getElementById(
    "humidity"
  ).textContent = `Humidity: ${weather.main.humidity}%`;
  document.getElementById(
    "wind"
  ).textContent = `Wind: ${weather.wind.speed} mph, ${weather.wind.deg}°`;

  // Update the weather icon
  let weatherIcon = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  document.getElementById("weatherIcon").src = weatherIcon;
}

// To fetch the weather data
async function fetchWeather(city) {
  let apiKey = "07e472e214c3ceead16450bc85f53add";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    let response = await fetch(url);
    if (!response.ok) throw new Error("City not found");
    let weatherData = await response.json();
    renderWeather(weatherData);
  } catch (error) {
    alert("Error fetching weather data: " + error.message);
  }
}

// To trigger fetching weather when the button is clicked
function getWeather() {
  let city = document.getElementById("cityInput").value;
  if (city) {
    fetchWeather(city);
  } else {
    alert("Please enter a city name.");
  }
}

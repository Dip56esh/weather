
// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 */
let weatherData
const weathericon=document.querySelector(".weather-icon");
const getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  const weatherPromise  = fetch(FULL_URL);
  return weatherPromise.then((response) => {
    return response.json();
  })
}

/**
 * Retrieve city input and get the weather data
 */
const searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city)
  .then((res)=>{
    showWeatherData(res);
  }).catch((error)=>{
    console.log(error);
    console.log("Something happend");
  })
}

/**
 * Show the weather data in HTML
 */
showWeatherData = (weatherData) => {
  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("weather-type").innerText = weatherData.weather[0].main;
  document.getElementById("temp").innerText = weatherData.main.temp;
  document.getElementById("min-temp").innerText = weatherData.main.temp_min;
  document.getElementById("max-temp").innerText = weatherData.main.temp_max;
}

// const weatherData=getWeatherData;

if(weatherData.weather[0].main==clouds){
  weathericon.src="images/clouds.png";

}

else if(weatherData.weather[0].main==clear){
  weathericon.src="images/clear.png";

}
else if(weatherData.weather[0].main==rain){
  weathericon.src="images/rain.png";

}
else if(weatherData.weather[0].main==haze){
  weathericon.src="images/drizzle.png";

}
else if(weatherData.weather[0].main==snow){
  weathericon.src="images/snow.png";

}



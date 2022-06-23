const APP_ID = "";
const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?q=";

let searchBtn = document.getElementById("searchBtn");
let cityInput = document.getElementById("cityInput");
let stateInput = document.getElementById("stateInput");

let resultName = document.getElementById("resultName");
let resultTemp = document.getElementById("resultTemp");
let resultFeelsLike = document.getElementById("resultFeelsLike");
let resultTempMax = document.getElementById("resultTempMax");
let resultTempMin = document.getElementById("resultTempMin");
let resultWeather = document.getElementById("resultWeather");

searchBtn.addEventListener("click", (event) => {
    event.preventDefault();
    
    let city = cityInput.value;
    let state = stateInput.value;
    let tempUnit = "imperial";
    
    fetch(`${WEATHER_URL}${city},us-${state}&units=${tempUnit}&appid=${APP_ID}`)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            console.log(result);
            resultName.textContent = result.name;
            resultTemp.textContent = result.main.temp.toFixed(0);
            resultFeelsLike.textContent = result.main.feels_like.toFixed(0);
            resultTempMax.textContent = result.main.temp_max.toFixed(0)
            resultTempMin.textContent = result.main.temp_min.toFixed(0)
            resultWeather.textContent = result.weather[0].main;
        })
        .catch((error) => {
            console.error(error);
            resultName.textContent = "an error occurred, please try again";
        });

    cityInput.value = "";
    stateInput.value = "";
});
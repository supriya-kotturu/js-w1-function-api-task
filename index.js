let lat = 0,
  lon = 0;

const OPEN_WEATHER_API_KEY = "f538ad92538ec8859d8b41f7d6c55881";
const COUNTRIES_URL = "https://restcountries.eu/rest/v2/all";
const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}`;

// TOPIC : XHR - XMLHttpRequest
// WHY : To get the data from a given endpoint(URL)

// 1. Create an instance of XHR
// 2. Create/open a new connection
// 3. Send the request
// 4. Load the response and display required data

// NOTE : the response from the sent request is returned in 'response' variable

const req = new XMLHttpRequest();

req.open("GET", COUNTRIES_URL, true);
req.send();
req.onload = function () {
  const countriesData = JSON.parse(this.response);
  getLatitudeAndLongitudeData(countriesData);
};

const getLatitudeAndLongitudeData = (countriesData) => {
  const countryAndWeather = [];
  countriesData.forEach((country) => {
    lat = country.latlng[0];
    lon = country.latlng[1];
    req.open("GET", WEATHER_URL, true);
    req.send();

    req.onload = function () {
      //   console.log(country.name, lat, lon);
      const weatherData = JSON.parse(this.response);
      console.log(
        "SYNCHRONOUSLY : " + country.name + " : " + weatherData.main.temp
      );
    };
  });
};

console.warn("TAKE NOTES !!");
console.warn(
  "Using synchronous function to do this task, would give the output of the last country after iteration. \n Because iteration through values is a synchronous task"
);
console.warn(
  "And the JS Engine completes all the synchronous task while waiting to fetch the data from the asychronous tasks"
);
console.warn(
  "Hence, we loop through all the countries while waiting to fetch the data from the weather API"
);
console.warn(
  "Since fetching the data would take lot of our execution time, we'll be at the end of the array till we get the data. So only Zimbabwe's temperature gets logged"
);

fetch(COUNTRIES_URL)
  .then((res) => res.json())
  .then((data) =>
    data.forEach((country) => {
      lat = country.latlng[0];
      lon = country.latlng[1];
      fetch(WEATHER_URL)
        .then((res) => res.json())
        .then((data) => console.log(country.name + ":" + data.main.temp));
    })
  );

// API key

var APIKey = "&appid=bf80762bf471616f18755a04e3a3cc0a";
var city = localStorage.getItem("previousSearch");


// Url link to the weather api for access to the datatbase current weather & 5 day forecast

var urlWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + city + APIKey;
var urlForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + APIKey;

// This gets the data requested

$.ajax({
    url: urlWeather,
    method: "GET"
})
// the returned data will be stored in the response function
.then(function(response) {
    console.log(querWeather);
    console.log(response);

});

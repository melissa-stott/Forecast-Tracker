var cityState = "portland&oregon";
var currentForecast = "https://api.openweathermap.org/data/2.5/weather?q=" + cityState +"&units=imperial&appid=063d3ebdbea1386f4567f346bec8d092";

console.log(currentForecast);
$.ajax({
    url: currentForecast,
    method: "GET"
}).then(function(response){
    console.log(response);
    console.log(response.main.temp);
    console.log(response.main.humidity);
    console.log(response.wind.speed);
});

var fiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=portland&oregon&units=imperial&appid=063d3ebdbea1386f4567f346bec8d092";
console.log(fiveDay);

$.ajax({
    url: fiveDay,
    method: "GET"
}).then(function(response){
    console.log(response);
    console.log(response.list);
});
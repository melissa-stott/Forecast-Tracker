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

var fiveDay = "https://api.openweathermap.org/data/2.5/onecall?lat=45.52&lon=-122.68&exclude=current,minutely,hourly,alerts&units=imperial&appid=063d3ebdbea1386f4567f346bec8d092";
console.log(fiveDay);
var dailyIcon = "http://openweathermap.org/img/wn/10d@2x.png"
console.log(dailyIcon);

$.ajax({
    url: fiveDay,
    method: "GET"
}).then(function(response){
    // console.log(response);
    console.log(response.daily[0]);
    var extendedDay = $('<p></p>')
    var minTemp = $('<p></p>')
    var maxTemp = $('<p></p>')
    var dayIcon = $('<img>')
    // extendedDay.attr('src',response.daily[0].dt);
    extendedDay.text(moment(Date(JSON.stringify(response.daily[0].dt))).format('MMMM Do'));
    minTemp.text('Low Temp: ' + parseInt(response.daily[0].temp.min));
    maxTemp.text('High Temp: ' + parseInt(response.daily[0].temp.max));
    dayIcon.attr('src', dailyIcon);
    // $('body').append(extendedDay);
    // var dayOne = $('<i>');
    // dayOne.attr('src',response.daily[0]);
    // console.log(response.daily[0].weather.icon);
    // $('body').append(dayOne);
    $('body').append('<div class="extended"></div>');
    $('.extended').append(extendedDay);
    $('.extended').append(dayIcon);
    $('.extended').append(maxTemp);
    $('.extended').append(minTemp);
    
});

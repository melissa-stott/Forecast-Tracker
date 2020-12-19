var cityState = "phoenix&arizona";
var currentForecast = "https://api.openweathermap.org/data/2.5/weather?q=" + cityState +"&units=imperial&appid=063d3ebdbea1386f4567f346bec8d092";

console.log(currentForecast);


$.ajax({
    url: currentForecast,
    method: "GET"
}).then(function(responseCurrent){
    console.log(responseCurrent);
    // console.log(responseCurrent.coord.lon);
    // console.log(responseCurrent.coord.lat);
    console.log(responseCurrent.main.temp);
    console.log(responseCurrent.main.humidity);
    console.log(responseCurrent.wind.speed);
    // console.log(response.daily[0].uvi);



var locationLon = (responseCurrent.coord.lon);
var locationLat = (responseCurrent.coord.lat);
console.log(locationLon);
console.log(locationLat);

var fiveDay = "https://api.openweathermap.org/data/2.5/onecall?lat=" + locationLat + "&lon=" + locationLon + "&exclude=minutely,hourly,alerts&units=imperial&appid=063d3ebdbea1386f4567f346bec8d092";
console.log(fiveDay);
var dailyIcon = "http://openweathermap.org/img/wn/10d@2x.png"


$.ajax({
    url: fiveDay,
    method: "GET"
}).then(function(response){
    const unixTimeOne = response.daily[0].dt;
 
    console.log("this is the first day icon" + (JSON.stringify(response.daily[0].icon)));
    // console.log('date of the second day is: ', jsDate.toLocaleDateString("en-US"));
    // console.log('done with moment: ', moment.unix(unixTimeOne).format('MMMM Do'))
    // console.log(response.daily[1]);
    var extendedDay1 = $('<p></p>')
    var minTemp1 = $('<p></p>')
    var maxTemp1 = $('<p></p>')
    var dayIcon1 = $('<img>')
 
    extendedDay1.text(moment.unix(unixTimeOne).format('MMMM Do'));
    // console.log(moment().format('MMMM Do'));
    minTemp1.text('Low Temp: ' + parseInt(response.daily[0].temp.min));
    maxTemp1.text('High Temp: ' + parseInt(response.daily[0].temp.max));
    dayIcon1.attr('src', dailyIcon);
    
    $('body').append('<div class="extended"></div>');
    $('.extended').append(extendedDay1);
    $('.extended').append(dayIcon1);
    $('.extended').append(maxTemp1);
    $('.extended').append(minTemp1);

    const unixTimeTwo = response.daily[1].dt;
    var extendedDay2 = $('<p></p>')
    var minTemp2 = $('<p></p>')
    var maxTemp2 = $('<p></p>')
    var dayIcon2 = $('<img>')
 
    extendedDay2.text(moment.unix(unixTimeTwo).format('MMMM Do'));
    minTemp2.text('Low Temp: ' + parseInt(response.daily[1].temp.min));
    maxTemp2.text('High Temp: ' + parseInt(response.daily[1].temp.max));
    dayIcon2.attr('src', dailyIcon);
    
    $('.extended').append(extendedDay2);
    $('.extended').append(dayIcon2);
    $('.extended').append(maxTemp2);
    $('.extended').append(minTemp2);

    const unixTime3 = response.daily[2].dt;
    var extendedDay3 = $('<p></p>')
    var minTemp3 = $('<p></p>')
    var maxTemp3 = $('<p></p>')
    var dayIcon3 = $('<img>')
 
    extendedDay3.text(moment.unix(unixTime3).format('MMMM Do'));
    minTemp3.text('Low Temp: ' + parseInt(response.daily[2].temp.min));
    maxTemp3.text('High Temp: ' + parseInt(response.daily[2].temp.max));
    dayIcon3.attr('src', dailyIcon);
    
    $('.extended').append(extendedDay3);
    $('.extended').append(dayIcon3);
    $('.extended').append(maxTemp3);
    $('.extended').append(minTemp3);

    const unixTime4 = response.daily[3].dt;
    var extendedDay4 = $('<p></p>')
    var minTemp4 = $('<p></p>')
    var maxTemp4 = $('<p></p>')
    var dayIcon4 = $('<img>')
 
    extendedDay4.text(moment.unix(unixTime4).format('MMMM Do'));
    minTemp4.text('Low Temp: ' + parseInt(response.daily[3].temp.min));
    maxTemp4.text('High Temp: ' + parseInt(response.daily[3].temp.max));
    dayIcon4.attr('src', dailyIcon);
    
    $('.extended').append(extendedDay4);
    $('.extended').append(dayIcon4);
    $('.extended').append(maxTemp4);
    $('.extended').append(minTemp4);

    const unixTime5 = response.daily[4].dt;
    var extendedDay5 = $('<p></p>')
    var minTemp5 = $('<p></p>')
    var maxTemp5 = $('<p></p>')
    var dayIcon5 = $('<img>')
 
    extendedDay5.text(moment.unix(unixTime5).format('MMMM Do'));
    minTemp5.text('Low Temp: ' + parseInt(response.daily[4].temp.min));
    maxTemp5.text('High Temp: ' + parseInt(response.daily[4].temp.max));
    dayIcon5.attr('src', dailyIcon);
    
    $('.extended').append(extendedDay5);
    $('.extended').append(dayIcon5);
    $('.extended').append(maxTemp5);
    $('.extended').append(minTemp5);
});
});    
    

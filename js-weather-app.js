var weatherApi = "https://api.openweathermap.org/data/2.5/weather?APPID=2d42be2b30487debfb3941dd728142db&q=";

$(document).ready(function () {
    $("#search-button").click(function () {
        var city = $("#search-input").val();
        getWeather(city);

        $("#result").addClass("result-style");
        $("#result").show();
    });
});

function getWeather(city) {
    $.get(weatherApi + city, function (data) {

        var title = data.name + ", " + data.sys.country;
        $("#city").text(title);
        $("#temp").text(Math.ceil(data.main.temp - 273.15));
        $("#humid").text(data.main.humidity + "%");
    });
};


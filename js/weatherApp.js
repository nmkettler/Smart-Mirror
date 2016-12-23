// v3.1.0
//Docs at http://simpleweatherjs.com

$(document).ready(function() {
  $.simpleWeather({
    location: 'Seattle, WA',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      weatherTemp = '<h2><i class="weatherPic icon-'+weather.code+' wi "></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>'
      currentWeather = '<p>The weather is '+weather.currently+'</p>';
      wind = '<p>Wind is blowing at '+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</p>';
      sun = '<p><i class="wi wi-sunrise"></i> Sunrise: '+ weather.sunrise+'<br>'+ '<i class="wi wi-sunset"></i> Sunset: '+ weather.sunset + '</p>';
      lowHigh = '<p>The high today is '+weather.high+'&deg;'+'<br>The low today is '+weather.low+'&deg;'+'</p>';

      $("#weatherTemp").html(weatherTemp);
      $("#currentWeather").html(currentWeather);
      $("#wind").html(wind);
      $("#sun").html(sun);
      $("#lowHigh").html(lowHigh);

      switch(parseInt(weather.code)){
        case 3: 
        case 4: 
        case 37: 
        case 38: 
        case 39: 
        case 45: 
        case 47: 
            $('.weatherPic').addClass("wi-day-lightning");
            break;
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
          case 10:
          case 11:
          case 12:
          case 40:
            $('.weatherPic').addClass("wi-rain");
            break;
          case 13:
          case 14:
          case 15:
          case 16:
          case 41:
          case 42:
          case 43:
          case 46:
            $('.weatherPic').addClass("wi-snow");
            break;
          case 20:
          case 21:
          case 22:
          case 23:
          case 24:
            $('.weatherPic').addClass("wi-windy");
            break;
        case 26:
        case 27:
        case 28:
        case 29:
        case 30:
          $('.weatherPic').addClass("wi-cloudy");
          break;
        case 31:
        case 33:
          $('.weatherPic').addClass("wi-night-clear");
          break;
        case 32:
        case 32:
        case 36:
          $('.weatherPic').addClass("wi-day-sunny");
          break;
        case 44:
          $('.weatherPic').addClass("wi-day-cloudy-high");
          break;
        default: 
          $('.weatherPic').addClass("wi-alien");
      }

      var currentIndex = 0,
        items = $('.weatherSection div'),
        itemAmt = items.length;

        function cycleItems() {
          var item = $('.weatherSection div').eq(currentIndex);
          items.hide();
          item.show();
        }

        var autoSlide = setInterval(function() {
          currentIndex += 1;
          if(currentIndex > itemAmt -1) {
            currentIndex = 0;
          }
          cycleItems();
        }, 5000);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });





});

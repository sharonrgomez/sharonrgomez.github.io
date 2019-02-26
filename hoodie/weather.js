var myUrl = "https://api.aerisapi.com/observations/10470?client_id=bztqTzogbfkse9jYTOTi7&client_secret=25AvdRwi0aGuFcasRG1wNXIXCZCsiXuut9PqKge9";
var myZip = document.getElementById('zip');

function getWeather(myZip){
  var newUrl = myUrl.replace("10470", myZip);
  jQuery(document).ready(function($) {
    $.ajax({
      url: newUrl,
      dataType: "jsonp",
      success: function(json) {
        if (json.success == true) {
          var ob = json.response.ob;
          var myTemp = ob.tempF;
          var myWeather = ob.weather;
          var getCity = json.response.place;
          var myCity = getCity.name;
          $('#weather').html(myWeather + ", " + myTemp + "&#8457 <br>" + myCity);

          if(myTemp < 40) {
            $('#hoodie').html("It's too cold for a hoodie, maybe you should wear a coat...");
          } else if(myTemp > 68){
            $('#hoodie').html("It's too hot to wear a hoodie today :-(");
          }
          else {
            $('#hoodie').html("It's the perfect day to wear a hoodie! :-)");
          }
        }
        else {
          alert('An error occurred: ' + json.error.description);
        }
      }
    });
  });
}

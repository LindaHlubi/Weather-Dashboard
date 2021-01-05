$(document).ready(function(){
    $("#search-cityBtn").click(function() {
       var city = $("#city").val();
       if(city !=""){
        
        
        $.ajax({
          url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric' + "&appid=bf80762bf471616f18755a04e3a3cc0a",
          method:'GET',
          dataType: "jsonp",
          success: function(data){
              var widget = show(data);
              

              $("#show").html(widget);
              $("#city").val("");

          }
});

       } else{
           $("#error").html("Field cannot be empty");

       }
    });
});
function show(data){
    return "<h3>The Current Weather in " + data.name + "," + data.sys.country + "</h3>" +
           "<h6><strong>Temperature</strong>:" + data.main.temp + "</h6>" +
           "<h6><strong>Humidity</strong>:" + data.main.humidity + "</h6>" + 
           "<h6><strong>Wind Speed</strong>:" + data.wind.speed + "</h6>" ;
           
           
}

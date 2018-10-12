$( document ).ready(function() {
  console.log($('#location'));
  $('form ').submit(function(e){
      e.preventDefault();
      var location = $('input[name="location"]').val();
      $.ajax({
        url:'http://api.openweathermap.org/data/2.5/weather?q='+location+ '&appid=7d3d18bc8e48d16a02c0123350e54c82&units=imperial',
        success: function(data){
          console.log(data);
          var temp= parseFloat(data.main.temp)
          // var rain= $("data.weather.0.main:contains('Rain')")
          // var hurricane= $("data.weather:contains('hurricane')")
          // var tornado= $("data.weather:contains('tornado')")
          if (temp<=0){
            $('#results').append("<h2>"+data.name+"</h2><p>Perfect drinking weather, but bring the devils asshole to warm you up; it's freezing! <br><br> Temp:"+data.main.temp+"</p>").slideDown(1300);
          }
          else if (temp>0 && temp<50) {
            $('#results').append("<h2>"+data.name+"</h2><p>Always, bring a Jacket or two cuz it be chilly! <br><br> Temp:"+data.main.temp+"</p>").slideDown(1300);
          }
          else if (temp>50 && temp <75) {
            $('#results').append("<h2>"+data.name+"</h2><p>Yaaaaaaas, bring a sweater to pour drinks on! <br><br> Temp:"+data.main.temp+"</p>").slideDown(1300);
          }
          else if (temp>75 && temp <100) {
            $('#results').append("<h2>"+data.name+"</h2><p>Of course, Go naked cuz it hot! <br><br> Temp:"+data.main.temp+"</p>").slideDown(1300);
          }
          else if (temp>100) {
            $('#results').append("<h2>"+data.name+"</h2><p>Drink some cold ass beer cuz it gonna be hotter than Earths cores asshole! <br> Temp:"+data.main.temp+"</p>").slideDown(1300);
          }
          // if (rain){
          //   $('form').append("<p>Bring an umbrella cuz it raining! </p>")
          // }
          // if (hurricane){
          //   $('form').append("<p>Wear weighted shoes for there is a hurricane abound. </p>")
          // }
          // if (tornado){
          //   $('form').append("<p>There's a litterally a tornado out there! Remember to lie face down if you see a tornado  </p>")
          // }

          // $('form').append("<button id='drink'>Inspired? Click me!</button>")
        }
      })
    })
});

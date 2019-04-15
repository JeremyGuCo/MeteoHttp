document.getElementById('submit').addEventListener('click', function () {
   let city = document.getElementById('citySearch').value;
   let api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1ee6993c8162e52ac6d12a36b88f9478`

   fetch(api)
      .then(response => response.json())
      .then(res => {
         tempValue = res.main.temp;
         document.getElementById ("tempValue").innerHTML = `La température est de ${tempValue}°C`; 
         
         windSpeed = res.wind.speed;
         document.getElementById ("windValue").innerHTML = `Le vent est estimé à ${tempValue} km/h`;      
      },
)});
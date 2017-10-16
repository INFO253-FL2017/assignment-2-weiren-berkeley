var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        resp=JSON.parse(this.responseText);
     document.getElementById("cityName").innerHTML = resp.name;
     document.getElementById("weatherMain").innerHTML = resp.weather[0].main;
     document.getElementById("weatherIco").src = "http://openweathermap.org/img/w/"+ resp.weather[0].icon+".png";
     document.getElementById("temp").innerHTML = (parseFloat(resp.main.temp)-273.15).toFixed(2)+"°C";
     document.getElementById("humidity").innerHTML = "Huminity: "+resp.main.humidity+"%";

    }
  };
  xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?zip=94720&appid=aa49a1f30d29d7861fbeb9a25d654d04", true);
  xhttp.send();
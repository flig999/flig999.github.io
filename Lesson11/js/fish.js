const currentURL = "https://api.openweathermap.org/data/2.5/weather?id=5585000&appid=fd74cb44a609831d55dcf1e741ec4e9b";
fetch(currentURL)
  .then((response) => response.json())
  
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('temp-value').textContent = Math.round((((jsObject.main.temp) - 273.15) * 9/5 + 32)*100)/100;
    document.getElementById('humidity-value').textContent = jsObject.main.humidity;
    document.getElementById('windspeed-value').textContent = jsObject.wind.speed;
});

const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5585000&appid=fd74cb44a609831d55dcf1e741ec4e9b";
fetch(apiURL)
  .then((response) => response.json())
  
  .then((jsObject) => {
    console.log(jsObject);
    let day = 1;
    for (let i = 0; i < jsObject.list.length; i++){
      const temp = jsObject.list[i].dt_txt;
    if ((temp).indexOf("18:00:00")> -1){
      document.getElementById("day"+day+"-data").textContent = Math.round((((jsObject.list[i].main.temp) - 273.15) * 9/5 + 32)*100)/100 + "°F";
      day++;
    }
    
    }
});

// The url for the json file
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

// requests (fetches) the json file
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing

        // store results in an array
        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Fish Haven"){
                for(let e=0; e<towns[i].events.length; e++){
                     let event=document.createElement('p');
                    event.textContent = towns[i].events[e];
                    console.log(event.textContent);
                    document.getElementById("events-data").appendChild(event);
                }
            }
        }
    });
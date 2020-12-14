const DallasWeather = "https://api.openweathermap.org/data/2.5/weather?id=4684888&appid=fd74cb44a609831d55dcf1e741ec4e9b";
const ColumbiaWeather = "https://api.openweathermap.org/data/2.5/weather?id=5790614&appid=fd74cb44a609831d55dcf1e741ec4e9b";
const FortWeather = "https://api.openweathermap.org/data/2.5/weather?id=4155966&appid=fd74cb44a609831d55dcf1e741ec4e9b";
const HartWeather = "https://api.openweathermap.org/data/2.5/weather?id=4835797&appid=fd74cb44a609831d55dcf1e741ec4e9b";

const templeURL = 'https://flig999.github.io/Lesson12/temples.json';

// requests (fetches) the json file
fetch(templeURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // store results in an array
        
        const temples = jsonObject["temples"];
        for (let i = 0; i < temples.length; i++) {
            let card = document.createElement('section');
            let text = document.createElement('div');
            let temple = document.createElement('h2');
            let address = document.createElement('p');
            let telephone = document.createElement('p');
            let email = document.createElement('p');
            let services = document.createElement('p');
            let history = document.createElement('p');
            let ordinance = document.createElement('p');
            let session = document.createElement('p');
            let closure = document.createElement('p');
            let weather = document.createElement('p');
            let temp = document.createElement('p');
            let wind = document.createElement('p');
            let humid = document.createElement('p');
            let image = document.createElement("img");
            temple.textContent = temples[i].name;
            address.textContent = "Address: " + temples[i].address;
            telephone.textContent = "Phone Number: " + temples[i].phone;
            email.textContent = "Email Address: " + temples[i].email;
            services.textContent = "Services: " + temples[i].services;
            history.textContent = "History: " + temples[i].history;
            ordinance.textContent = "Ordinance Schedule: " + temples[i].ordinance;
            session.textContent = "Session Schedule: " + temples[i].session;
            closure.textContent = "Closure Schedule: " + temples[i].closure;
            weather.textContent = "Current Temperature: "
            image.setAttribute('src', 'images/' + temples[i].image);
            image.setAttribute('class', 'templeimage');

            fetch(temple[i].weather)
            .then((response) => response.json())
  
            .then((jsObject) => {
                console.log(jsObject);
                temp.textContent = "Temperature: " + Math.round((((jsObject.main.temp) - 273.15) * 9/5 + 32)*100)/100;
                humid.textContent = "Humidity: " + jsObject.main.humidity;
                wind.textContent = "Windspeed: " + jsObject.wind.speed;
            });

            text.appendChild(temple);
            text.appendChild(address);
            text.appendChild(telephone);
            text.appendChild(email);
            text.appendChild(services);
            text.appendChild(history);
            text.appendChild(ordinance);
            text.appendChild(session);
            text.appendChild(closure);
            weather.appendChild(temp);
            weather.appendChild(humid);
            weather.appendChild(wind);
            text.appendChild(weather);
            card.appendChild(text);
            card.appendChild(image);
            document.getElementById('temples').appendChild(card);
        }
    });
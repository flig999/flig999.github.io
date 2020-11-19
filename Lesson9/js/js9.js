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

        // organizes the data into cards
        for (let i = 0; i < towns.length; i++) {
            if ( towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs"){
            let card = document.createElement('section');
            let text = document.createElement('div');
            let h2 = document.createElement('h2');
            let h6 = document.createElement('h6');
            let image = document.createElement('img');
            let founded = document.createElement('p');
            let population = document.createElement('p');
            let rain = document.createElement('p');
            h2.textContent = towns[i].name;
            h6.textContent = towns[i].motto;
            image.setAttribute('src', 'images/' + towns[i].photo);
            image.setAttribute('class', 'town');
            text.setAttribute('class', 'towntext');
            founded.textContent = 'Year Founded: ' + towns[i].yearFounded;
            population.textContent = 'Population: ' + towns[i].currentPopulation;
            rain.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
            card.appendChild(text);
            card.appendChild(image);
            text.appendChild(h2);
            text.appendChild(h6);
            text.appendChild(founded);
            text.appendChild(population);
            text.appendChild(rain);
            document.querySelector('div.indexTowns').appendChild(card);
        }
        
        }
    });


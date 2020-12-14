const templeURL = 'https://flig999.github.io/Lesson12/temples.json';

// requests (fetches) the json file
fetch(templeURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing

        // store results in an array
        const temples = jsonObject;

        for (let i = 0; i < temples.length; i++) {
            let card = document.createElement('section');
            let temple = document.createElement('h2');
            let address = document.createElement('p');
            let telephone = document.createElement('p');
            let email = document.createElement('p');
            let services = document.createElement('p');
            let history = document.createElement('p');
            let ordinance = document.createElement('p');
            let session = document.createElement('p');
            let closure = document.createElement('p');
            temple.textContent = temples[i].name;
            address.textContent = temples[i].address;
            telephone.textContent = temples[i].telephone;
            email.textContent = temples[i].email;
            services.textContent = temples[i].services;
            history.textContent = temples[i].history;
            ordinance.textContent = temples[i].ordinance;
            session.textContent = temples[i].session;
            closure.textContent = temples[i].closure;
            card.appendChild(temple);
            card.appendChild(address);
            card.appendChild(telephone);
            card.appendChild(email);
            card.appendChild(services);
            card.appendChild(history);
            card.appendChild(ordinance);
            card.appendChild(session);
            card.appendChild(closure);
            document.querySelector('div.temples').appendChild(card);
        }
    });


    // example from lesson9
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
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
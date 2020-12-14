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
            let temple = document.createElement('h2');
            let address = document.createElement('p');
            let telephone = document.createElement('p');
            let email = document.createElement('p');
            let services = document.createElement('p');
            let history = document.createElement('p');
            let ordinance = document.createElement('p');
            let session = document.createElement('p');
            let closure = document.createElement('p');
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
            image.setAttribute('src', 'images/' + temples[i].image);
            image.setAttribute('class', 'town');
            card.appendChild(temple);
            card.appendChild(address);
            card.appendChild(telephone);
            card.appendChild(email);
            card.appendChild(services);
            card.appendChild(history);
            card.appendChild(ordinance);
            card.appendChild(session);
            card.appendChild(closure);
            card.appendChild(image);
            document.getElementById('temples').appendChild(card);
        }
    });
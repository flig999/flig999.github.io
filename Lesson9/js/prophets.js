// The url for the json file
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

// requests (fetches) the json file
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing

        // store results in an array
        const prophets = jsonObject['prophets'];

        // organizes the data into cards
        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let image = document.createElement('img');
            let bday = document.createElement('p');
            let bplace = document.createElement('p');
            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            image.setAttribute('src', prophets[i].imageurl);
            bday.textContent = 'Date of Birth: ' + prophets[i].birthdate;
            bplace.textContent = 'Place of Birth: ' + prophets[i].birthplace;
            card.appendChild(h2);
            card.appendChild(bday);
            card.appendChild(bplace);
            card.appendChild(image);
            document.querySelector('div.cards').appendChild(card);
        }
    });


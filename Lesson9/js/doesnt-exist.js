// The url for the json file
const requestURL = 'https://www.ahfx.com/person.php';
let h = new Headers({
   
});

// requests (fetches) the json file
fetch(requestURL, {headers:h})
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing

        // store results in an array
        const person = jsonObject['person'];

        // organizes the data into cards
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let image = document.createElement('img');
            let password = document.createElement('p');
            let email = document.createElement('p');
            let eyes = document.createElement('p');
            let city = document.createElement('p');
            let children = document.createElement('p');
            let ip = document.createElement('p');
            h2.textContent = person.personal.name + ' ' + person.personal.last_name;
            image.setAttribute('src', 'https://thispersondoesnotexist.com/image');
            password.textContent = 'Password: ' + person.online_info.password;
            email.textContent = 'Email: ' + person.online_info.email;
            eyes.textContent = 'Eye Color: ' + person.personal.eye_color;
            city.textContent = 'City Country: ' + person.personal.city + ' ' + person.personal.country;
            children.textContent = 'Number of Children: ' + person.marriage.children;
            ip.textContent = 'IP Address: ' + person.online_info.ip_address;
            card.appendChild(h2);
            card.appendChild(password);
            card.appendChild(email);
            card.appendChild(eyes);
            card.appendChild(city);
            card.appendChild(children);
            card.appendChild(ip);
            card.appendChild(image);
            document.querySelector('div.cards').appendChild(card);
    });


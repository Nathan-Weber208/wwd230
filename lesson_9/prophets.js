const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

async function getProphets(requestURL) {
    const response = await fetch(requestURL);
    if (response.ok) {
        const data = await response.json();
        // console.log(data);
        const prophets = data['prophets'];
        prophets.forEach(prophet => {
            displayProphets(prophet);
            // displayTable(prophet);
        });
    }
}

getProphets(requestURL);

function displayProphets(prophet) {
    let card = document.createElement('section');
    
    // Prophet Name
    let h2 = document.createElement('h2');
    h2.textContent = prophet.name + ' ' + prophet.lastname;
    card.appendChild(h2);

    // Prophet Birthdate
    let birthdate = document.createElement('p');
    birthdate.textContent = 'Date of Birth: ' + prophet.birthdate;
    card.appendChild(birthdate);

    // Prophet Birthplace
    let birthplace = document.createElement('p');
    birthplace.textContent = 'Place of Birth: ' + prophet.birthplace;
    card.appendChild(birthplace);

    // Prophet Image
    let image = document.createElement('img');
    image.setAttribute('src', prophet.imageurl);
    image.setAttribute('alt', `${prophet.name} ${prophet.lastname} ${prophet.order}`);
    card.appendChild(image);

    // Append card to the DOM (the prophet list).
    document.querySelector('div.cards').appendChild(card);
}
